import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\HeroSlides\Pages\ListHeroSlides::__invoke
 * @see app/Filament/Resources/HeroSlides/Pages/ListHeroSlides.php:7
 * @route '/admin/hero-slides'
 */
const ListHeroSlides = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListHeroSlides.url(options),
    method: 'get',
})

ListHeroSlides.definition = {
    methods: ["get","head"],
    url: '/admin/hero-slides',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\HeroSlides\Pages\ListHeroSlides::__invoke
 * @see app/Filament/Resources/HeroSlides/Pages/ListHeroSlides.php:7
 * @route '/admin/hero-slides'
 */
ListHeroSlides.url = (options?: RouteQueryOptions) => {
    return ListHeroSlides.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\HeroSlides\Pages\ListHeroSlides::__invoke
 * @see app/Filament/Resources/HeroSlides/Pages/ListHeroSlides.php:7
 * @route '/admin/hero-slides'
 */
ListHeroSlides.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListHeroSlides.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\HeroSlides\Pages\ListHeroSlides::__invoke
 * @see app/Filament/Resources/HeroSlides/Pages/ListHeroSlides.php:7
 * @route '/admin/hero-slides'
 */
ListHeroSlides.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListHeroSlides.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\HeroSlides\Pages\ListHeroSlides::__invoke
 * @see app/Filament/Resources/HeroSlides/Pages/ListHeroSlides.php:7
 * @route '/admin/hero-slides'
 */
    const ListHeroSlidesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListHeroSlides.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\HeroSlides\Pages\ListHeroSlides::__invoke
 * @see app/Filament/Resources/HeroSlides/Pages/ListHeroSlides.php:7
 * @route '/admin/hero-slides'
 */
        ListHeroSlidesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListHeroSlides.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\HeroSlides\Pages\ListHeroSlides::__invoke
 * @see app/Filament/Resources/HeroSlides/Pages/ListHeroSlides.php:7
 * @route '/admin/hero-slides'
 */
        ListHeroSlidesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListHeroSlides.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListHeroSlides.form = ListHeroSlidesForm
export default ListHeroSlides