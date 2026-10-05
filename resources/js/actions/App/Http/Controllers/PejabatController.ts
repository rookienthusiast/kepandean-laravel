import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PejabatController::index
 * @see app/Http/Controllers/PejabatController.php:14
 * @route '/profil/struktur-organisasi'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/profil/struktur-organisasi',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PejabatController::index
 * @see app/Http/Controllers/PejabatController.php:14
 * @route '/profil/struktur-organisasi'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PejabatController::index
 * @see app/Http/Controllers/PejabatController.php:14
 * @route '/profil/struktur-organisasi'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PejabatController::index
 * @see app/Http/Controllers/PejabatController.php:14
 * @route '/profil/struktur-organisasi'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PejabatController::index
 * @see app/Http/Controllers/PejabatController.php:14
 * @route '/profil/struktur-organisasi'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PejabatController::index
 * @see app/Http/Controllers/PejabatController.php:14
 * @route '/profil/struktur-organisasi'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PejabatController::index
 * @see app/Http/Controllers/PejabatController.php:14
 * @route '/profil/struktur-organisasi'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
const PejabatController = { index }

export default PejabatController