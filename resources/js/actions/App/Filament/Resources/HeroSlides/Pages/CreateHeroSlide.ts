import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\HeroSlides\Pages\CreateHeroSlide::__invoke
 * @see app/Filament/Resources/HeroSlides/Pages/CreateHeroSlide.php:7
 * @route '/admin/hero-slides/create'
 */
const CreateHeroSlide = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateHeroSlide.url(options),
    method: 'get',
})

CreateHeroSlide.definition = {
    methods: ["get","head"],
    url: '/admin/hero-slides/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\HeroSlides\Pages\CreateHeroSlide::__invoke
 * @see app/Filament/Resources/HeroSlides/Pages/CreateHeroSlide.php:7
 * @route '/admin/hero-slides/create'
 */
CreateHeroSlide.url = (options?: RouteQueryOptions) => {
    return CreateHeroSlide.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\HeroSlides\Pages\CreateHeroSlide::__invoke
 * @see app/Filament/Resources/HeroSlides/Pages/CreateHeroSlide.php:7
 * @route '/admin/hero-slides/create'
 */
CreateHeroSlide.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateHeroSlide.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\HeroSlides\Pages\CreateHeroSlide::__invoke
 * @see app/Filament/Resources/HeroSlides/Pages/CreateHeroSlide.php:7
 * @route '/admin/hero-slides/create'
 */
CreateHeroSlide.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateHeroSlide.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\HeroSlides\Pages\CreateHeroSlide::__invoke
 * @see app/Filament/Resources/HeroSlides/Pages/CreateHeroSlide.php:7
 * @route '/admin/hero-slides/create'
 */
    const CreateHeroSlideForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateHeroSlide.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\HeroSlides\Pages\CreateHeroSlide::__invoke
 * @see app/Filament/Resources/HeroSlides/Pages/CreateHeroSlide.php:7
 * @route '/admin/hero-slides/create'
 */
        CreateHeroSlideForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateHeroSlide.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\HeroSlides\Pages\CreateHeroSlide::__invoke
 * @see app/Filament/Resources/HeroSlides/Pages/CreateHeroSlide.php:7
 * @route '/admin/hero-slides/create'
 */
        CreateHeroSlideForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateHeroSlide.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateHeroSlide.form = CreateHeroSlideForm
export default CreateHeroSlide