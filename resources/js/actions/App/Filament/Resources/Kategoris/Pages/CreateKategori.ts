import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Kategoris\Pages\CreateKategori::__invoke
 * @see app/Filament/Resources/Kategoris/Pages/CreateKategori.php:7
 * @route '/admin/kategoris/create'
 */
const CreateKategori = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateKategori.url(options),
    method: 'get',
})

CreateKategori.definition = {
    methods: ["get","head"],
    url: '/admin/kategoris/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Kategoris\Pages\CreateKategori::__invoke
 * @see app/Filament/Resources/Kategoris/Pages/CreateKategori.php:7
 * @route '/admin/kategoris/create'
 */
CreateKategori.url = (options?: RouteQueryOptions) => {
    return CreateKategori.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Kategoris\Pages\CreateKategori::__invoke
 * @see app/Filament/Resources/Kategoris/Pages/CreateKategori.php:7
 * @route '/admin/kategoris/create'
 */
CreateKategori.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateKategori.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Kategoris\Pages\CreateKategori::__invoke
 * @see app/Filament/Resources/Kategoris/Pages/CreateKategori.php:7
 * @route '/admin/kategoris/create'
 */
CreateKategori.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateKategori.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Kategoris\Pages\CreateKategori::__invoke
 * @see app/Filament/Resources/Kategoris/Pages/CreateKategori.php:7
 * @route '/admin/kategoris/create'
 */
    const CreateKategoriForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateKategori.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Kategoris\Pages\CreateKategori::__invoke
 * @see app/Filament/Resources/Kategoris/Pages/CreateKategori.php:7
 * @route '/admin/kategoris/create'
 */
        CreateKategoriForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateKategori.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Kategoris\Pages\CreateKategori::__invoke
 * @see app/Filament/Resources/Kategoris/Pages/CreateKategori.php:7
 * @route '/admin/kategoris/create'
 */
        CreateKategoriForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateKategori.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateKategori.form = CreateKategoriForm
export default CreateKategori