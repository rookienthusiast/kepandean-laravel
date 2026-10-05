import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Pengumumans\Pages\CreatePengumuman::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/CreatePengumuman.php:7
 * @route '/admin/pengumumans/create'
 */
const CreatePengumuman = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreatePengumuman.url(options),
    method: 'get',
})

CreatePengumuman.definition = {
    methods: ["get","head"],
    url: '/admin/pengumumans/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Pengumumans\Pages\CreatePengumuman::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/CreatePengumuman.php:7
 * @route '/admin/pengumumans/create'
 */
CreatePengumuman.url = (options?: RouteQueryOptions) => {
    return CreatePengumuman.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Pengumumans\Pages\CreatePengumuman::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/CreatePengumuman.php:7
 * @route '/admin/pengumumans/create'
 */
CreatePengumuman.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreatePengumuman.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Pengumumans\Pages\CreatePengumuman::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/CreatePengumuman.php:7
 * @route '/admin/pengumumans/create'
 */
CreatePengumuman.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreatePengumuman.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Pengumumans\Pages\CreatePengumuman::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/CreatePengumuman.php:7
 * @route '/admin/pengumumans/create'
 */
    const CreatePengumumanForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreatePengumuman.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Pengumumans\Pages\CreatePengumuman::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/CreatePengumuman.php:7
 * @route '/admin/pengumumans/create'
 */
        CreatePengumumanForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreatePengumuman.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Pengumumans\Pages\CreatePengumuman::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/CreatePengumuman.php:7
 * @route '/admin/pengumumans/create'
 */
        CreatePengumumanForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreatePengumuman.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreatePengumuman.form = CreatePengumumanForm
export default CreatePengumuman