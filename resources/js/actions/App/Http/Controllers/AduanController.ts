import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AduanController::store
 * @see app/Http/Controllers/AduanController.php:24
 * @route '/aduan'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/aduan',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AduanController::store
 * @see app/Http/Controllers/AduanController.php:24
 * @route '/aduan'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AduanController::store
 * @see app/Http/Controllers/AduanController.php:24
 * @route '/aduan'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AduanController::store
 * @see app/Http/Controllers/AduanController.php:24
 * @route '/aduan'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AduanController::store
 * @see app/Http/Controllers/AduanController.php:24
 * @route '/aduan'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const AduanController = { store }

export default AduanController