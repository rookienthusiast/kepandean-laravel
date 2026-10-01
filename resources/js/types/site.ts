export interface NavChild {
    label: string;
    href: string;
}

export interface NavItem {
    label: string;
    href: string;
    children?: NavChild[];
}

export interface KontakJam {
    hari: string;
    jam: string;
}

export interface Sosmed {
    label: string;
    href: string;
}

export interface SiteKontak {
    telepon: string;
    telepon_status: string;
    surel: string;
    jam: KontakJam[];
    sosmed: Sosmed[];
}

export interface SiteData {
    nama: string;
    nav: NavItem[];
    kontak: SiteKontak;
}

export interface LokasiData {
    kode_pos: string;
    koordinat: string;
    alamat: string;
    peta_url: string;
    peta_embed: string;
    surel: string;
}

export interface StatistikMap {
    total_jiwa: string;
    laki_laki: string;
    perempuan: string;
    kepala_keluarga: string;
    [key: string]: string;
}

export interface MetaData {
    title: string;
    description: string;
}

export interface ProfilExcerpt {
    sejarah: string | null;
    urls: {
        sejarah: string;
        visiMisi: string;
    };
}
