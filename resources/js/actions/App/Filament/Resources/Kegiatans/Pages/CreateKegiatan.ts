import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Kegiatans\Pages\CreateKegiatan::__invoke
 * @see app/Filament/Resources/Kegiatans/Pages/CreateKegiatan.php:7
 * @route '/admin/kegiatans/create'
 */
const CreateKegiatan = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateKegiatan.url(options),
    method: 'get',
})

CreateKegiatan.definition = {
    methods: ["get","head"],
    url: '/admin/kegiatans/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Kegiatans\Pages\CreateKegiatan::__invoke
 * @see app/Filament/Resources/Kegiatans/Pages/CreateKegiatan.php:7
 * @route '/admin/kegiatans/create'
 */
CreateKegiatan.url = (options?: RouteQueryOptions) => {
    return CreateKegiatan.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Kegiatans\Pages\CreateKegiatan::__invoke
 * @see app/Filament/Resources/Kegiatans/Pages/CreateKegiatan.php:7
 * @route '/admin/kegiatans/create'
 */
CreateKegiatan.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateKegiatan.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Kegiatans\Pages\CreateKegiatan::__invoke
 * @see app/Filament/Resources/Kegiatans/Pages/CreateKegiatan.php:7
 * @route '/admin/kegiatans/create'
 */
CreateKegiatan.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateKegiatan.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Kegiatans\Pages\CreateKegiatan::__invoke
 * @see app/Filament/Resources/Kegiatans/Pages/CreateKegiatan.php:7
 * @route '/admin/kegiatans/create'
 */
    const CreateKegiatanForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateKegiatan.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Kegiatans\Pages\CreateKegiatan::__invoke
 * @see app/Filament/Resources/Kegiatans/Pages/CreateKegiatan.php:7
 * @route '/admin/kegiatans/create'
 */
        CreateKegiatanForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateKegiatan.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Kegiatans\Pages\CreateKegiatan::__invoke
 * @see app/Filament/Resources/Kegiatans/Pages/CreateKegiatan.php:7
 * @route '/admin/kegiatans/create'
 */
        CreateKegiatanForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateKegiatan.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateKegiatan.form = CreateKegiatanForm
export default CreateKegiatan