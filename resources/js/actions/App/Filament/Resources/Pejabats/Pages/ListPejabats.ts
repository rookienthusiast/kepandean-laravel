import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Pejabats\Pages\ListPejabats::__invoke
 * @see app/Filament/Resources/Pejabats/Pages/ListPejabats.php:7
 * @route '/admin/pejabats'
 */
const ListPejabats = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListPejabats.url(options),
    method: 'get',
})

ListPejabats.definition = {
    methods: ["get","head"],
    url: '/admin/pejabats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Pejabats\Pages\ListPejabats::__invoke
 * @see app/Filament/Resources/Pejabats/Pages/ListPejabats.php:7
 * @route '/admin/pejabats'
 */
ListPejabats.url = (options?: RouteQueryOptions) => {
    return ListPejabats.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Pejabats\Pages\ListPejabats::__invoke
 * @see app/Filament/Resources/Pejabats/Pages/ListPejabats.php:7
 * @route '/admin/pejabats'
 */
ListPejabats.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListPejabats.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Pejabats\Pages\ListPejabats::__invoke
 * @see app/Filament/Resources/Pejabats/Pages/ListPejabats.php:7
 * @route '/admin/pejabats'
 */
ListPejabats.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListPejabats.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Pejabats\Pages\ListPejabats::__invoke
 * @see app/Filament/Resources/Pejabats/Pages/ListPejabats.php:7
 * @route '/admin/pejabats'
 */
    const ListPejabatsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListPejabats.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Pejabats\Pages\ListPejabats::__invoke
 * @see app/Filament/Resources/Pejabats/Pages/ListPejabats.php:7
 * @route '/admin/pejabats'
 */
        ListPejabatsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListPejabats.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Pejabats\Pages\ListPejabats::__invoke
 * @see app/Filament/Resources/Pejabats/Pages/ListPejabats.php:7
 * @route '/admin/pejabats'
 */
        ListPejabatsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListPejabats.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListPejabats.form = ListPejabatsForm
export default ListPejabats