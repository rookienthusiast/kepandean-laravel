import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Pengumumans\Pages\ListPengumumans::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/ListPengumumans.php:7
 * @route '/admin/pengumumans'
 */
const ListPengumumans = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListPengumumans.url(options),
    method: 'get',
})

ListPengumumans.definition = {
    methods: ["get","head"],
    url: '/admin/pengumumans',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Pengumumans\Pages\ListPengumumans::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/ListPengumumans.php:7
 * @route '/admin/pengumumans'
 */
ListPengumumans.url = (options?: RouteQueryOptions) => {
    return ListPengumumans.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Pengumumans\Pages\ListPengumumans::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/ListPengumumans.php:7
 * @route '/admin/pengumumans'
 */
ListPengumumans.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListPengumumans.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Pengumumans\Pages\ListPengumumans::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/ListPengumumans.php:7
 * @route '/admin/pengumumans'
 */
ListPengumumans.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListPengumumans.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Pengumumans\Pages\ListPengumumans::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/ListPengumumans.php:7
 * @route '/admin/pengumumans'
 */
    const ListPengumumansForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListPengumumans.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Pengumumans\Pages\ListPengumumans::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/ListPengumumans.php:7
 * @route '/admin/pengumumans'
 */
        ListPengumumansForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListPengumumans.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Pengumumans\Pages\ListPengumumans::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/ListPengumumans.php:7
 * @route '/admin/pengumumans'
 */
        ListPengumumansForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListPengumumans.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListPengumumans.form = ListPengumumansForm
export default ListPengumumans