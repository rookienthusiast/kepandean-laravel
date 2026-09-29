<?php

namespace App\Support;

use DOMDocument;
use DOMElement;
use DOMNode;

class HtmlSanitizer
{
    /**
     * @var array<int, string>
     */
    private const ALLOWED_TAGS = [
        'p', 'br', 'strong', 'b', 'em', 'i', 'u',
        'ul', 'ol', 'li', 'a', 'h2', 'h3', 'h4', 'blockquote',
    ];

    /**
     * @var array<int, string>
     */
    private const REMOVE_ENTIRELY = [
        'script', 'style', 'iframe', 'object', 'embed',
        'form', 'input', 'button', 'select', 'textarea',
        'link', 'meta', 'base', 'title', 'noscript',
    ];

    public static function clean(?string $html): string
    {
        if ($html === null || trim($html) === '') {
            return '';
        }

        $document = new DOMDocument('1.0', 'UTF-8');

        libxml_use_internal_errors(true);
        $document->loadHTML('<?xml encoding="utf-8"?><div>'.$html.'</div>', LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);
        libxml_clear_errors();

        $wrapper = $document->getElementsByTagName('div')->item(0);

        if ($wrapper === null) {
            return '';
        }

        self::sanitizeNode($document, $wrapper);

        $clean = '';

        foreach ($wrapper->childNodes as $child) {
            $clean .= $document->saveHTML($child);
        }

        return $clean;
    }

    private static function sanitizeNode(DOMDocument $document, DOMNode $node): void
    {
        $children = [];

        foreach ($node->childNodes as $child) {
            $children[] = $child;
        }

        foreach ($children as $child) {
            if (! $child instanceof DOMElement) {
                continue;
            }

            $tag = strtolower($child->tagName);

            if (in_array($tag, self::REMOVE_ENTIRELY, true)) {
                $node->removeChild($child);

                continue;
            }

            if (! in_array($tag, self::ALLOWED_TAGS, true)) {
                self::sanitizeNode($document, $child);
                self::unwrap($node, $child);

                continue;
            }

            self::sanitizeAttributes($child);
            self::sanitizeNode($document, $child);
        }
    }

    private static function unwrap(DOMNode $parent, DOMNode $node): void
    {
        while ($node->firstChild !== null) {
            $parent->insertBefore($node->firstChild, $node);
        }

        $parent->removeChild($node);
    }

    private static function sanitizeAttributes(DOMElement $node): void
    {
        $tag = strtolower($node->tagName);
        $toRemove = [];

        foreach ($node->attributes as $attribute) {
            $name = strtolower($attribute->nodeName);
            $value = trim($attribute->nodeValue ?? '');

            if (str_starts_with($name, 'on')) {
                $toRemove[] = $attribute->nodeName;

                continue;
            }

            if ($name === 'style') {
                $toRemove[] = $attribute->nodeName;

                continue;
            }

            if (in_array($name, ['href', 'src'], true)) {
                $allowed = $tag === 'a' && $name === 'href' && self::isSafeUrl($value);

                if (! $allowed) {
                    $toRemove[] = $attribute->nodeName;
                }

                continue;
            }

            if (! in_array($name, ['title'], true)) {
                $toRemove[] = $attribute->nodeName;
            }
        }

        foreach ($toRemove as $name) {
            $node->removeAttribute($name);
        }
    }

    private static function isSafeUrl(string $url): bool
    {
        if ($url === '' || str_starts_with($url, '#')) {
            return true;
        }

        if (preg_match('#^\s*(javascript|data|vbscript)\s*:#i', $url)) {
            return false;
        }

        return true;
    }
}
