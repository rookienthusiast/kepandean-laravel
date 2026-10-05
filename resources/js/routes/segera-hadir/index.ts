import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
 * @see routes/web.php:156
 * @route '/pemerintahan'
 */
export const pemerintahan = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pemerintahan.url(options),
    method: 'get',
})

pemerintahan.definition = {
    methods: ["get","head"],
    url: '/pemerintahan',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:156
 * @route '/pemerintahan'
 */
pemerintahan.url = (options?: RouteQueryOptions) => {
    return pemerintahan.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:156
 * @route '/pemerintahan'
 */
pemerintahan.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pemerintahan.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:156
 * @route '/pemerintahan'
 */
pemerintahan.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pemerintahan.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:156
 * @route '/pemerintahan'
 */
    const pemerintahanForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: pemerintahan.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:156
 * @route '/pemerintahan'
 */
        pemerintahanForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pemerintahan.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:156
 * @route '/pemerintahan'
 */
        pemerintahanForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pemerintahan.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    pemerintahan.form = pemerintahanForm
/**
 * @see routes/web.php:156
 * @route '/lembaga-desa'
 */
export const lembagaDesa = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lembagaDesa.url(options),
    method: 'get',
})

lembagaDesa.definition = {
    methods: ["get","head"],
    url: '/lembaga-desa',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:156
 * @route '/lembaga-desa'
 */
lembagaDesa.url = (options?: RouteQueryOptions) => {
    return lembagaDesa.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:156
 * @route '/lembaga-desa'
 */
lembagaDesa.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lembagaDesa.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:156
 * @route '/lembaga-desa'
 */
lembagaDesa.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: lembagaDesa.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:156
 * @route '/lembaga-desa'
 */
    const lembagaDesaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: lembagaDesa.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:156
 * @route '/lembaga-desa'
 */
        lembagaDesaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: lembagaDesa.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:156
 * @route '/lembaga-desa'
 */
        lembagaDesaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: lembagaDesa.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    lembagaDesa.form = lembagaDesaForm
/**
 * @see routes/web.php:156
 * @route '/produk-hukum'
 */
export const produkHukum = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: produkHukum.url(options),
    method: 'get',
})

produkHukum.definition = {
    methods: ["get","head"],
    url: '/produk-hukum',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:156
 * @route '/produk-hukum'
 */
produkHukum.url = (options?: RouteQueryOptions) => {
    return produkHukum.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:156
 * @route '/produk-hukum'
 */
produkHukum.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: produkHukum.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:156
 * @route '/produk-hukum'
 */
produkHukum.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: produkHukum.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:156
 * @route '/produk-hukum'
 */
    const produkHukumForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: produkHukum.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:156
 * @route '/produk-hukum'
 */
        produkHukumForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: produkHukum.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:156
 * @route '/produk-hukum'
 */
        produkHukumForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: produkHukum.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    produkHukum.form = produkHukumForm
/**
 * @see routes/web.php:156
 * @route '/laporan'
 */
export const laporan = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: laporan.url(options),
    method: 'get',
})

laporan.definition = {
    methods: ["get","head"],
    url: '/laporan',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:156
 * @route '/laporan'
 */
laporan.url = (options?: RouteQueryOptions) => {
    return laporan.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:156
 * @route '/laporan'
 */
laporan.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: laporan.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:156
 * @route '/laporan'
 */
laporan.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: laporan.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:156
 * @route '/laporan'
 */
    const laporanForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: laporan.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:156
 * @route '/laporan'
 */
        laporanForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: laporan.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:156
 * @route '/laporan'
 */
        laporanForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: laporan.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    laporan.form = laporanForm
/**
 * @see routes/web.php:156
 * @route '/layanan-warga'
 */
export const layananWarga = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: layananWarga.url(options),
    method: 'get',
})

layananWarga.definition = {
    methods: ["get","head"],
    url: '/layanan-warga',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:156
 * @route '/layanan-warga'
 */
layananWarga.url = (options?: RouteQueryOptions) => {
    return layananWarga.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:156
 * @route '/layanan-warga'
 */
layananWarga.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: layananWarga.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:156
 * @route '/layanan-warga'
 */
layananWarga.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: layananWarga.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:156
 * @route '/layanan-warga'
 */
    const layananWargaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: layananWarga.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:156
 * @route '/layanan-warga'
 */
        layananWargaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: layananWarga.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:156
 * @route '/layanan-warga'
 */
        layananWargaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: layananWarga.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    layananWarga.form = layananWargaForm
/**
 * @see routes/web.php:156
 * @route '/layanan'
 */
export const layanan = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: layanan.url(options),
    method: 'get',
})

layanan.definition = {
    methods: ["get","head"],
    url: '/layanan',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:156
 * @route '/layanan'
 */
layanan.url = (options?: RouteQueryOptions) => {
    return layanan.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:156
 * @route '/layanan'
 */
layanan.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: layanan.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:156
 * @route '/layanan'
 */
layanan.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: layanan.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:156
 * @route '/layanan'
 */
    const layananForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: layanan.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:156
 * @route '/layanan'
 */
        layananForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: layanan.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:156
 * @route '/layanan'
 */
        layananForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: layanan.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    layanan.form = layananForm
/**
 * @see routes/web.php:156
 * @route '/potensi-galeri'
 */
export const potensiGaleri = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: potensiGaleri.url(options),
    method: 'get',
})

potensiGaleri.definition = {
    methods: ["get","head"],
    url: '/potensi-galeri',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:156
 * @route '/potensi-galeri'
 */
potensiGaleri.url = (options?: RouteQueryOptions) => {
    return potensiGaleri.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:156
 * @route '/potensi-galeri'
 */
potensiGaleri.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: potensiGaleri.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:156
 * @route '/potensi-galeri'
 */
potensiGaleri.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: potensiGaleri.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:156
 * @route '/potensi-galeri'
 */
    const potensiGaleriForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: potensiGaleri.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:156
 * @route '/potensi-galeri'
 */
        potensiGaleriForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: potensiGaleri.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:156
 * @route '/potensi-galeri'
 */
        potensiGaleriForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: potensiGaleri.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    potensiGaleri.form = potensiGaleriForm
/**
 * @see routes/web.php:156
 * @route '/kontak-lokasi'
 */
export const kontakLokasi = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: kontakLokasi.url(options),
    method: 'get',
})

kontakLokasi.definition = {
    methods: ["get","head"],
    url: '/kontak-lokasi',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:156
 * @route '/kontak-lokasi'
 */
kontakLokasi.url = (options?: RouteQueryOptions) => {
    return kontakLokasi.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:156
 * @route '/kontak-lokasi'
 */
kontakLokasi.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: kontakLokasi.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:156
 * @route '/kontak-lokasi'
 */
kontakLokasi.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: kontakLokasi.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:156
 * @route '/kontak-lokasi'
 */
    const kontakLokasiForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: kontakLokasi.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:156
 * @route '/kontak-lokasi'
 */
        kontakLokasiForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: kontakLokasi.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:156
 * @route '/kontak-lokasi'
 */
        kontakLokasiForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: kontakLokasi.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    kontakLokasi.form = kontakLokasiForm