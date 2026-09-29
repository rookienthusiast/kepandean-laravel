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
    desaName: string;
    site: SiteData;
    children: ReactNode;
}

export default function ProfilLayout({
    title,
    description,
    heading,
    desaName,
    site,
    children,
}: ProfilLayoutProps) {
    return (
        <PublicLayout title={title} description={description} site={site}>
            <section className="bg-desa-900/95 px-4 py-10 text-white sm:px-6">
                <div className="mx-auto w-full max-w-3xl">
                    <p className="text-sm text-white/70">
                        Profil Desa — {desaName}
                    </p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight">
                        {heading}
                    </h1>
                </div>
            </section>
            <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6">
                {children}
            </div>
        </PublicLayout>
    );
}
