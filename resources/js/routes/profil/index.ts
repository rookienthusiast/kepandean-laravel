import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ProfilController::sejarahVisiMisi
 * @see app/Http/Controllers/ProfilController.php:19
 * @route '/profil/sejarah-visi-misi'
 */
export const sejarahVisiMisi = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sejarahVisiMisi.url(options),
    method: 'get',
})

sejarahVisiMisi.definition = {
    methods: ["get","head"],
    url: '/profil/sejarah-visi-misi',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProfilController::sejarahVisiMisi
 * @see app/Http/Controllers/ProfilController.php:19
 * @route '/profil/sejarah-visi-misi'
 */
sejarahVisiMisi.url = (options?: RouteQueryOptions) => {
    return sejarahVisiMisi.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProfilController::sejarahVisiMisi
 * @see app/Http/Controllers/ProfilController.php:19
 * @route '/profil/sejarah-visi-misi'
 */
sejarahVisiMisi.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sejarahVisiMisi.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProfilController::sejarahVisiMisi
 * @see app/Http/Controllers/ProfilController.php:19
 * @route '/profil/sejarah-visi-misi'
 */
sejarahVisiMisi.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sejarahVisiMisi.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProfilController::sejarahVisiMisi
 * @see app/Http/Controllers/ProfilController.php:19
 * @route '/profil/sejarah-visi-misi'
 */
    const sejarahVisiMisiForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: sejarahVisiMisi.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProfilController::sejarahVisiMisi
 * @see app/Http/Controllers/ProfilController.php:19
 * @route '/profil/sejarah-visi-misi'
 */
        sejarahVisiMisiForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sejarahVisiMisi.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProfilController::sejarahVisiMisi
 * @see app/Http/Controllers/ProfilController.php:19
 * @route '/profil/sejarah-visi-misi'
 */
        sejarahVisiMisiForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sejarahVisiMisi.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    sejarahVisiMisi.form = sejarahVisiMisiForm
/**
* @see \App\Http\Controllers\PejabatController::struktur
 * @see app/Http/Controllers/PejabatController.php:14
 * @route '/profil/struktur-organisasi'
 */
export const struktur = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: struktur.url(options),
    method: 'get',
})

struktur.definition = {
    methods: ["get","head"],
    url: '/profil/struktur-organisasi',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PejabatController::struktur
 * @see app/Http/Controllers/PejabatController.php:14
 * @route '/profil/struktur-organisasi'
 */
struktur.url = (options?: RouteQueryOptions) => {
    return struktur.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PejabatController::struktur
 * @see app/Http/Controllers/PejabatController.php:14
 * @route '/profil/struktur-organisasi'
 */
struktur.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: struktur.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PejabatController::struktur
 * @see app/Http/Controllers/PejabatController.php:14
 * @route '/profil/struktur-organisasi'
 */
struktur.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: struktur.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PejabatController::struktur
 * @see app/Http/Controllers/PejabatController.php:14
 * @route '/profil/struktur-organisasi'
 */
    const strukturForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: struktur.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PejabatController::struktur
 * @see app/Http/Controllers/PejabatController.php:14
 * @route '/profil/struktur-organisasi'
 */
        strukturForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: struktur.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PejabatController::struktur
 * @see app/Http/Controllers/PejabatController.php:14
 * @route '/profil/struktur-organisasi'
 */
        strukturForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: struktur.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    struktur.form = strukturForm
/**
 * @see routes/web.php:96
 * @route '/profil/sejarah'
 */
export const sejarah = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sejarah.url(options),
    method: 'get',
})

sejarah.definition = {
    methods: ["get","head"],
    url: '/profil/sejarah',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:96
 * @route '/profil/sejarah'
 */
sejarah.url = (options?: RouteQueryOptions) => {
    return sejarah.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:96
 * @route '/profil/sejarah'
 */
sejarah.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sejarah.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:96
 * @route '/profil/sejarah'
 */
sejarah.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sejarah.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:96
 * @route '/profil/sejarah'
 */
    const sejarahForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: sejarah.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:96
 * @route '/profil/sejarah'
 */
        sejarahForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sejarah.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:96
 * @route '/profil/sejarah'
 */
        sejarahForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sejarah.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    sejarah.form = sejarahForm
/**
 * @see routes/web.php:97
 * @route '/profil/visi-misi'
 */
export const visiMisi = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: visiMisi.url(options),
    method: 'get',
})

visiMisi.definition = {
    methods: ["get","head"],
    url: '/profil/visi-misi',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:97
 * @route '/profil/visi-misi'
 */
visiMisi.url = (options?: RouteQueryOptions) => {
    return visiMisi.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:97
 * @route '/profil/visi-misi'
 */
visiMisi.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: visiMisi.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:97
 * @route '/profil/visi-misi'
 */
visiMisi.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: visiMisi.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:97
 * @route '/profil/visi-misi'
 */
    const visiMisiForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: visiMisi.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:97
 * @route '/profil/visi-misi'
 */
        visiMisiForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: visiMisi.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:97
 * @route '/profil/visi-misi'
 */
        visiMisiForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: visiMisi.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    visiMisi.form = visiMisiForm
const profil = {
    sejarahVisiMisi: Object.assign(sejarahVisiMisi, sejarahVisiMisi),
struktur: Object.assign(struktur, struktur),
sejarah: Object.assign(sejarah, sejarah),
visiMisi: Object.assign(visiMisi, visiMisi),
}

export default profil