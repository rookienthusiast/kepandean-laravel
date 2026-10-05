import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\InformasiController::index
 * @see app/Http/Controllers/InformasiController.php:19
 * @route '/informasi'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/informasi',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\InformasiController::index
 * @see app/Http/Controllers/InformasiController.php:19
 * @route '/informasi'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\InformasiController::index
 * @see app/Http/Controllers/InformasiController.php:19
 * @route '/informasi'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\InformasiController::index
 * @see app/Http/Controllers/InformasiController.php:19
 * @route '/informasi'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\InformasiController::index
 * @see app/Http/Controllers/InformasiController.php:19
 * @route '/informasi'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\InformasiController::index
 * @see app/Http/Controllers/InformasiController.php:19
 * @route '/informasi'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\InformasiController::index
 * @see app/Http/Controllers/InformasiController.php:19
 * @route '/informasi'
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
const InformasiController = { index }

export default InformasiController