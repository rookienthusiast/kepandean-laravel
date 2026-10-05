import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Beritas\Pages\ListBeritas::__invoke
 * @see app/Filament/Resources/Beritas/Pages/ListBeritas.php:7
 * @route '/admin/beritas'
 */
const ListBeritas = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBeritas.url(options),
    method: 'get',
})

ListBeritas.definition = {
    methods: ["get","head"],
    url: '/admin/beritas',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Beritas\Pages\ListBeritas::__invoke
 * @see app/Filament/Resources/Beritas/Pages/ListBeritas.php:7
 * @route '/admin/beritas'
 */
ListBeritas.url = (options?: RouteQueryOptions) => {
    return ListBeritas.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Beritas\Pages\ListBeritas::__invoke
 * @see app/Filament/Resources/Beritas/Pages/ListBeritas.php:7
 * @route '/admin/beritas'
 */
ListBeritas.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListBeritas.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Beritas\Pages\ListBeritas::__invoke
 * @see app/Filament/Resources/Beritas/Pages/ListBeritas.php:7
 * @route '/admin/beritas'
 */
ListBeritas.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListBeritas.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Beritas\Pages\ListBeritas::__invoke
 * @see app/Filament/Resources/Beritas/Pages/ListBeritas.php:7
 * @route '/admin/beritas'
 */
    const ListBeritasForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListBeritas.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Beritas\Pages\ListBeritas::__invoke
 * @see app/Filament/Resources/Beritas/Pages/ListBeritas.php:7
 * @route '/admin/beritas'
 */
        ListBeritasForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListBeritas.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Beritas\Pages\ListBeritas::__invoke
 * @see app/Filament/Resources/Beritas/Pages/ListBeritas.php:7
 * @route '/admin/beritas'
 */
        ListBeritasForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListBeritas.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListBeritas.form = ListBeritasForm
export default ListBeritas