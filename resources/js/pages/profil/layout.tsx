import { Head, Link } from '@inertiajs/react';
import type { ReactNode } from 'react';

export interface ProfilData {
    sejarah: string | null;
    visi: string | null;
    misi: string | null;
    isEmpty: boolean;
}

interface ProfilLayoutProps {
    title: string;
    description: string;
    heading: string;
    desaName: string;
    children: ReactNode;
}

export default function ProfilLayout({
    title,
    description,
    heading,
    desaName,
    children,
}: ProfilLayoutProps) {
    return (
        <>
            <Head title={title}>
                <meta name="description" content={description} />
            </Head>
            <div className="flex min-h-screen flex-col bg-[#FDFDFC] text-[#1b1b18] dark:bg-[#0a0a0a] dark:text-[#EDEDEC]">
                <header className="w-full border-b border-[#e3e3e0] dark:border-[#3E3E3A]">
                    <nav className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4">
                        <Link
                            href="/"
                            className="text-sm font-medium underline underline-offset-4"
                        >
                            Beranda
                        </Link>
                        <span className="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                            {desaName}
                        </span>
                    </nav>
                </header>
                <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
                    <h1 className="mb-6 text-3xl font-semibold tracking-tight">
                        {heading}
                    </h1>
                    {children}
                </main>
            </div>
        </>
    );
}
