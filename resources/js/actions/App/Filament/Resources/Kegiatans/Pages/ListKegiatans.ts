import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Kegiatans\Pages\ListKegiatans::__invoke
 * @see app/Filament/Resources/Kegiatans/Pages/ListKegiatans.php:7
 * @route '/admin/kegiatans'
 */
const ListKegiatans = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListKegiatans.url(options),
    method: 'get',
})

ListKegiatans.definition = {
    methods: ["get","head"],
    url: '/admin/kegiatans',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Kegiatans\Pages\ListKegiatans::__invoke
 * @see app/Filament/Resources/Kegiatans/Pages/ListKegiatans.php:7
 * @route '/admin/kegiatans'
 */
ListKegiatans.url = (options?: RouteQueryOptions) => {
    return ListKegiatans.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Kegiatans\Pages\ListKegiatans::__invoke
 * @see app/Filament/Resources/Kegiatans/Pages/ListKegiatans.php:7
 * @route '/admin/kegiatans'
 */
ListKegiatans.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListKegiatans.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Kegiatans\Pages\ListKegiatans::__invoke
 * @see app/Filament/Resources/Kegiatans/Pages/ListKegiatans.php:7
 * @route '/admin/kegiatans'
 */
ListKegiatans.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListKegiatans.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Kegiatans\Pages\ListKegiatans::__invoke
 * @see app/Filament/Resources/Kegiatans/Pages/ListKegiatans.php:7
 * @route '/admin/kegiatans'
 */
    const ListKegiatansForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListKegiatans.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Kegiatans\Pages\ListKegiatans::__invoke
 * @see app/Filament/Resources/Kegiatans/Pages/ListKegiatans.php:7
 * @route '/admin/kegiatans'
 */
        ListKegiatansForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListKegiatans.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Kegiatans\Pages\ListKegiatans::__invoke
 * @see app/Filament/Resources/Kegiatans/Pages/ListKegiatans.php:7
 * @route '/admin/kegiatans'
 */
        ListKegiatansForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListKegiatans.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListKegiatans.form = ListKegiatansForm
export default ListKegiatans