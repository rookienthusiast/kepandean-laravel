import { Link } from '@inertiajs/react';
import type { ReactNode } from 'react';
import PublicLayout from '@/layouts/public-layout';
import type { SiteData } from '@/types/site';

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
    intro: string;
    crumb: string;
    desaName: string;
    site: SiteData;
    children: ReactNode;
}

export default function ProfilLayout({
    title,
    description,
    heading,
    intro,
    crumb,
    desaName,
    site,
    children,
}: ProfilLayoutProps) {
    return (
        <PublicLayout title={title} description={description} site={site}>
            <section className="w-full bg-gradient-to-r from-desa-900 via-desa-900 to-desa-800 px-4 py-14 text-white sm:px-6 sm:py-16">
                <div className="mx-auto w-full max-w-7xl">
                    <nav
                        aria-label="Breadcrumb profil"
                        className="text-xs text-white/70"
                    >
                        <ol className="flex items-center gap-2">
                            <li>
                                <Link
                                    href="/profil/sejarah-visi-misi"
                                    className="hover:underline"
                                >
                                    Profil
                                </Link>
                            </li>
                            <li aria-hidden="true">&gt;</li>
                            <li aria-current="page" className="text-white/90">
                                {crumb}
                            </li>
                        </ol>
                    </nav>
                    <p className="mt-6 flex items-center gap-3 text-sm font-medium text-white/85">
                        <span
                            aria-hidden="true"
                            className="inline-block h-0.5 w-10 bg-white"
                        />
                        Profil Desa — {desaName}
                    </p>
                    <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
                        {heading}
                    </h1>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75">
                        {intro}
                    </p>
                </div>
            </section>
            <div className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 sm:py-12">
                {children}
            </div>
        </PublicLayout>
    );
}
