import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Statistiks\Pages\CreateStatistik::__invoke
 * @see app/Filament/Resources/Statistiks/Pages/CreateStatistik.php:7
 * @route '/admin/statistiks/create'
 */
const CreateStatistik = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateStatistik.url(options),
    method: 'get',
})

CreateStatistik.definition = {
    methods: ["get","head"],
    url: '/admin/statistiks/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Statistiks\Pages\CreateStatistik::__invoke
 * @see app/Filament/Resources/Statistiks/Pages/CreateStatistik.php:7
 * @route '/admin/statistiks/create'
 */
CreateStatistik.url = (options?: RouteQueryOptions) => {
    return CreateStatistik.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Statistiks\Pages\CreateStatistik::__invoke
 * @see app/Filament/Resources/Statistiks/Pages/CreateStatistik.php:7
 * @route '/admin/statistiks/create'
 */
CreateStatistik.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateStatistik.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Statistiks\Pages\CreateStatistik::__invoke
 * @see app/Filament/Resources/Statistiks/Pages/CreateStatistik.php:7
 * @route '/admin/statistiks/create'
 */
CreateStatistik.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateStatistik.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Statistiks\Pages\CreateStatistik::__invoke
 * @see app/Filament/Resources/Statistiks/Pages/CreateStatistik.php:7
 * @route '/admin/statistiks/create'
 */
    const CreateStatistikForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateStatistik.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Statistiks\Pages\CreateStatistik::__invoke
 * @see app/Filament/Resources/Statistiks/Pages/CreateStatistik.php:7
 * @route '/admin/statistiks/create'
 */
        CreateStatistikForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateStatistik.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Statistiks\Pages\CreateStatistik::__invoke
 * @see app/Filament/Resources/Statistiks/Pages/CreateStatistik.php:7
 * @route '/admin/statistiks/create'
 */
        CreateStatistikForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateStatistik.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateStatistik.form = CreateStatistikForm
export default CreateStatistik