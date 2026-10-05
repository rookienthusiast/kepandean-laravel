import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Pejabats\Pages\CreatePejabat::__invoke
 * @see app/Filament/Resources/Pejabats/Pages/CreatePejabat.php:7
 * @route '/admin/pejabats/create'
 */
const CreatePejabat = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreatePejabat.url(options),
    method: 'get',
})

CreatePejabat.definition = {
    methods: ["get","head"],
    url: '/admin/pejabats/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Pejabats\Pages\CreatePejabat::__invoke
 * @see app/Filament/Resources/Pejabats/Pages/CreatePejabat.php:7
 * @route '/admin/pejabats/create'
 */
CreatePejabat.url = (options?: RouteQueryOptions) => {
    return CreatePejabat.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Pejabats\Pages\CreatePejabat::__invoke
 * @see app/Filament/Resources/Pejabats/Pages/CreatePejabat.php:7
 * @route '/admin/pejabats/create'
 */
CreatePejabat.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreatePejabat.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Pejabats\Pages\CreatePejabat::__invoke
 * @see app/Filament/Resources/Pejabats/Pages/CreatePejabat.php:7
 * @route '/admin/pejabats/create'
 */
CreatePejabat.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreatePejabat.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Pejabats\Pages\CreatePejabat::__invoke
 * @see app/Filament/Resources/Pejabats/Pages/CreatePejabat.php:7
 * @route '/admin/pejabats/create'
 */
    const CreatePejabatForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreatePejabat.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Pejabats\Pages\CreatePejabat::__invoke
 * @see app/Filament/Resources/Pejabats/Pages/CreatePejabat.php:7
 * @route '/admin/pejabats/create'
 */
        CreatePejabatForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreatePejabat.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Pejabats\Pages\CreatePejabat::__invoke
 * @see app/Filament/Resources/Pejabats/Pages/CreatePejabat.php:7
 * @route '/admin/pejabats/create'
 */
        CreatePejabatForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreatePejabat.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreatePejabat.form = CreatePejabatForm
export default CreatePejabat