import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Beritas\Pages\CreateBerita::__invoke
 * @see app/Filament/Resources/Beritas/Pages/CreateBerita.php:7
 * @route '/admin/beritas/create'
 */
const CreateBerita = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBerita.url(options),
    method: 'get',
})

CreateBerita.definition = {
    methods: ["get","head"],
    url: '/admin/beritas/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Beritas\Pages\CreateBerita::__invoke
 * @see app/Filament/Resources/Beritas/Pages/CreateBerita.php:7
 * @route '/admin/beritas/create'
 */
CreateBerita.url = (options?: RouteQueryOptions) => {
    return CreateBerita.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Beritas\Pages\CreateBerita::__invoke
 * @see app/Filament/Resources/Beritas/Pages/CreateBerita.php:7
 * @route '/admin/beritas/create'
 */
CreateBerita.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBerita.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Beritas\Pages\CreateBerita::__invoke
 * @see app/Filament/Resources/Beritas/Pages/CreateBerita.php:7
 * @route '/admin/beritas/create'
 */
CreateBerita.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBerita.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Beritas\Pages\CreateBerita::__invoke
 * @see app/Filament/Resources/Beritas/Pages/CreateBerita.php:7
 * @route '/admin/beritas/create'
 */
    const CreateBeritaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateBerita.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Beritas\Pages\CreateBerita::__invoke
 * @see app/Filament/Resources/Beritas/Pages/CreateBerita.php:7
 * @route '/admin/beritas/create'
 */
        CreateBeritaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateBerita.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Beritas\Pages\CreateBerita::__invoke
 * @see app/Filament/Resources/Beritas/Pages/CreateBerita.php:7
 * @route '/admin/beritas/create'
 */
        CreateBeritaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateBerita.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateBerita.form = CreateBeritaForm
export default CreateBerita