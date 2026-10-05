import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
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
const ProfilController = { sejarahVisiMisi }

export default ProfilController