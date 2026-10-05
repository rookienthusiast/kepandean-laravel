import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\LamanHeroes\Pages\ListLamanHeroes::__invoke
 * @see app/Filament/Resources/LamanHeroes/Pages/ListLamanHeroes.php:7
 * @route '/admin/laman-heroes'
 */
const ListLamanHeroes = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListLamanHeroes.url(options),
    method: 'get',
})

ListLamanHeroes.definition = {
    methods: ["get","head"],
    url: '/admin/laman-heroes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\LamanHeroes\Pages\ListLamanHeroes::__invoke
 * @see app/Filament/Resources/LamanHeroes/Pages/ListLamanHeroes.php:7
 * @route '/admin/laman-heroes'
 */
ListLamanHeroes.url = (options?: RouteQueryOptions) => {
    return ListLamanHeroes.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\LamanHeroes\Pages\ListLamanHeroes::__invoke
 * @see app/Filament/Resources/LamanHeroes/Pages/ListLamanHeroes.php:7
 * @route '/admin/laman-heroes'
 */
ListLamanHeroes.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListLamanHeroes.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\LamanHeroes\Pages\ListLamanHeroes::__invoke
 * @see app/Filament/Resources/LamanHeroes/Pages/ListLamanHeroes.php:7
 * @route '/admin/laman-heroes'
 */
ListLamanHeroes.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListLamanHeroes.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\LamanHeroes\Pages\ListLamanHeroes::__invoke
 * @see app/Filament/Resources/LamanHeroes/Pages/ListLamanHeroes.php:7
 * @route '/admin/laman-heroes'
 */
    const ListLamanHeroesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListLamanHeroes.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\LamanHeroes\Pages\ListLamanHeroes::__invoke
 * @see app/Filament/Resources/LamanHeroes/Pages/ListLamanHeroes.php:7
 * @route '/admin/laman-heroes'
 */
        ListLamanHeroesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListLamanHeroes.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\LamanHeroes\Pages\ListLamanHeroes::__invoke
 * @see app/Filament/Resources/LamanHeroes/Pages/ListLamanHeroes.php:7
 * @route '/admin/laman-heroes'
 */
        ListLamanHeroesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListLamanHeroes.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListLamanHeroes.form = ListLamanHeroesForm
export default ListLamanHeroes