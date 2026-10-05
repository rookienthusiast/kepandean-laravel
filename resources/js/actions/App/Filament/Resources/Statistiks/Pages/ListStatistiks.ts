import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Statistiks\Pages\ListStatistiks::__invoke
 * @see app/Filament/Resources/Statistiks/Pages/ListStatistiks.php:7
 * @route '/admin/statistiks'
 */
const ListStatistiks = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListStatistiks.url(options),
    method: 'get',
})

ListStatistiks.definition = {
    methods: ["get","head"],
    url: '/admin/statistiks',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Statistiks\Pages\ListStatistiks::__invoke
 * @see app/Filament/Resources/Statistiks/Pages/ListStatistiks.php:7
 * @route '/admin/statistiks'
 */
ListStatistiks.url = (options?: RouteQueryOptions) => {
    return ListStatistiks.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Statistiks\Pages\ListStatistiks::__invoke
 * @see app/Filament/Resources/Statistiks/Pages/ListStatistiks.php:7
 * @route '/admin/statistiks'
 */
ListStatistiks.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListStatistiks.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Statistiks\Pages\ListStatistiks::__invoke
 * @see app/Filament/Resources/Statistiks/Pages/ListStatistiks.php:7
 * @route '/admin/statistiks'
 */
ListStatistiks.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListStatistiks.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Statistiks\Pages\ListStatistiks::__invoke
 * @see app/Filament/Resources/Statistiks/Pages/ListStatistiks.php:7
 * @route '/admin/statistiks'
 */
    const ListStatistiksForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListStatistiks.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Statistiks\Pages\ListStatistiks::__invoke
 * @see app/Filament/Resources/Statistiks/Pages/ListStatistiks.php:7
 * @route '/admin/statistiks'
 */
        ListStatistiksForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListStatistiks.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Statistiks\Pages\ListStatistiks::__invoke
 * @see app/Filament/Resources/Statistiks/Pages/ListStatistiks.php:7
 * @route '/admin/statistiks'
 */
        ListStatistiksForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListStatistiks.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListStatistiks.form = ListStatistiksForm
export default ListStatistiks