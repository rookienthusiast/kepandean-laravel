import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Kategoris\Pages\ListKategoris::__invoke
 * @see app/Filament/Resources/Kategoris/Pages/ListKategoris.php:7
 * @route '/admin/kategoris'
 */
const ListKategoris = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListKategoris.url(options),
    method: 'get',
})

ListKategoris.definition = {
    methods: ["get","head"],
    url: '/admin/kategoris',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Kategoris\Pages\ListKategoris::__invoke
 * @see app/Filament/Resources/Kategoris/Pages/ListKategoris.php:7
 * @route '/admin/kategoris'
 */
ListKategoris.url = (options?: RouteQueryOptions) => {
    return ListKategoris.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Kategoris\Pages\ListKategoris::__invoke
 * @see app/Filament/Resources/Kategoris/Pages/ListKategoris.php:7
 * @route '/admin/kategoris'
 */
ListKategoris.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListKategoris.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Kategoris\Pages\ListKategoris::__invoke
 * @see app/Filament/Resources/Kategoris/Pages/ListKategoris.php:7
 * @route '/admin/kategoris'
 */
ListKategoris.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListKategoris.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Kategoris\Pages\ListKategoris::__invoke
 * @see app/Filament/Resources/Kategoris/Pages/ListKategoris.php:7
 * @route '/admin/kategoris'
 */
    const ListKategorisForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListKategoris.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Kategoris\Pages\ListKategoris::__invoke
 * @see app/Filament/Resources/Kategoris/Pages/ListKategoris.php:7
 * @route '/admin/kategoris'
 */
        ListKategorisForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListKategoris.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Kategoris\Pages\ListKategoris::__invoke
 * @see app/Filament/Resources/Kategoris/Pages/ListKategoris.php:7
 * @route '/admin/kategoris'
 */
        ListKategorisForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListKategoris.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListKategoris.form = ListKategorisForm
export default ListKategoris