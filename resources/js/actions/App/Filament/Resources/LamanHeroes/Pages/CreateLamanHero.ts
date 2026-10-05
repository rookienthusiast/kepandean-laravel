import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\LamanHeroes\Pages\CreateLamanHero::__invoke
 * @see app/Filament/Resources/LamanHeroes/Pages/CreateLamanHero.php:7
 * @route '/admin/laman-heroes/create'
 */
const CreateLamanHero = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateLamanHero.url(options),
    method: 'get',
})

CreateLamanHero.definition = {
    methods: ["get","head"],
    url: '/admin/laman-heroes/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\LamanHeroes\Pages\CreateLamanHero::__invoke
 * @see app/Filament/Resources/LamanHeroes/Pages/CreateLamanHero.php:7
 * @route '/admin/laman-heroes/create'
 */
CreateLamanHero.url = (options?: RouteQueryOptions) => {
    return CreateLamanHero.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\LamanHeroes\Pages\CreateLamanHero::__invoke
 * @see app/Filament/Resources/LamanHeroes/Pages/CreateLamanHero.php:7
 * @route '/admin/laman-heroes/create'
 */
CreateLamanHero.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateLamanHero.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\LamanHeroes\Pages\CreateLamanHero::__invoke
 * @see app/Filament/Resources/LamanHeroes/Pages/CreateLamanHero.php:7
 * @route '/admin/laman-heroes/create'
 */
CreateLamanHero.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateLamanHero.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\LamanHeroes\Pages\CreateLamanHero::__invoke
 * @see app/Filament/Resources/LamanHeroes/Pages/CreateLamanHero.php:7
 * @route '/admin/laman-heroes/create'
 */
    const CreateLamanHeroForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateLamanHero.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\LamanHeroes\Pages\CreateLamanHero::__invoke
 * @see app/Filament/Resources/LamanHeroes/Pages/CreateLamanHero.php:7
 * @route '/admin/laman-heroes/create'
 */
        CreateLamanHeroForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateLamanHero.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\LamanHeroes\Pages\CreateLamanHero::__invoke
 * @see app/Filament/Resources/LamanHeroes/Pages/CreateLamanHero.php:7
 * @route '/admin/laman-heroes/create'
 */
        CreateLamanHeroForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateLamanHero.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateLamanHero.form = CreateLamanHeroForm
export default CreateLamanHero