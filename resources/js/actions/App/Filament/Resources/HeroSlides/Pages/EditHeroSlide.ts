import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\HeroSlides\Pages\EditHeroSlide::__invoke
 * @see app/Filament/Resources/HeroSlides/Pages/EditHeroSlide.php:7
 * @route '/admin/hero-slides/{record}/edit'
 */
const EditHeroSlide = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditHeroSlide.url(args, options),
    method: 'get',
})

EditHeroSlide.definition = {
    methods: ["get","head"],
    url: '/admin/hero-slides/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\HeroSlides\Pages\EditHeroSlide::__invoke
 * @see app/Filament/Resources/HeroSlides/Pages/EditHeroSlide.php:7
 * @route '/admin/hero-slides/{record}/edit'
 */
EditHeroSlide.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    record: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        record: args.record,
                }

    return EditHeroSlide.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\HeroSlides\Pages\EditHeroSlide::__invoke
 * @see app/Filament/Resources/HeroSlides/Pages/EditHeroSlide.php:7
 * @route '/admin/hero-slides/{record}/edit'
 */
EditHeroSlide.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditHeroSlide.url(args, options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\HeroSlides\Pages\EditHeroSlide::__invoke
 * @see app/Filament/Resources/HeroSlides/Pages/EditHeroSlide.php:7
 * @route '/admin/hero-slides/{record}/edit'
 */
EditHeroSlide.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditHeroSlide.url(args, options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\HeroSlides\Pages\EditHeroSlide::__invoke
 * @see app/Filament/Resources/HeroSlides/Pages/EditHeroSlide.php:7
 * @route '/admin/hero-slides/{record}/edit'
 */
    const EditHeroSlideForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: EditHeroSlide.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\HeroSlides\Pages\EditHeroSlide::__invoke
 * @see app/Filament/Resources/HeroSlides/Pages/EditHeroSlide.php:7
 * @route '/admin/hero-slides/{record}/edit'
 */
        EditHeroSlideForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditHeroSlide.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\HeroSlides\Pages\EditHeroSlide::__invoke
 * @see app/Filament/Resources/HeroSlides/Pages/EditHeroSlide.php:7
 * @route '/admin/hero-slides/{record}/edit'
 */
        EditHeroSlideForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditHeroSlide.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    EditHeroSlide.form = EditHeroSlideForm
export default EditHeroSlide