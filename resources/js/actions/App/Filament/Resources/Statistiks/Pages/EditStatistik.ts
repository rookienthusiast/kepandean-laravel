import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Statistiks\Pages\EditStatistik::__invoke
 * @see app/Filament/Resources/Statistiks/Pages/EditStatistik.php:7
 * @route '/admin/statistiks/{record}/edit'
 */
const EditStatistik = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditStatistik.url(args, options),
    method: 'get',
})

EditStatistik.definition = {
    methods: ["get","head"],
    url: '/admin/statistiks/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Statistiks\Pages\EditStatistik::__invoke
 * @see app/Filament/Resources/Statistiks/Pages/EditStatistik.php:7
 * @route '/admin/statistiks/{record}/edit'
 */
EditStatistik.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditStatistik.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\Statistiks\Pages\EditStatistik::__invoke
 * @see app/Filament/Resources/Statistiks/Pages/EditStatistik.php:7
 * @route '/admin/statistiks/{record}/edit'
 */
EditStatistik.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditStatistik.url(args, options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Statistiks\Pages\EditStatistik::__invoke
 * @see app/Filament/Resources/Statistiks/Pages/EditStatistik.php:7
 * @route '/admin/statistiks/{record}/edit'
 */
EditStatistik.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditStatistik.url(args, options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Statistiks\Pages\EditStatistik::__invoke
 * @see app/Filament/Resources/Statistiks/Pages/EditStatistik.php:7
 * @route '/admin/statistiks/{record}/edit'
 */
    const EditStatistikForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: EditStatistik.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Statistiks\Pages\EditStatistik::__invoke
 * @see app/Filament/Resources/Statistiks/Pages/EditStatistik.php:7
 * @route '/admin/statistiks/{record}/edit'
 */
        EditStatistikForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditStatistik.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Statistiks\Pages\EditStatistik::__invoke
 * @see app/Filament/Resources/Statistiks/Pages/EditStatistik.php:7
 * @route '/admin/statistiks/{record}/edit'
 */
        EditStatistikForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditStatistik.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    EditStatistik.form = EditStatistikForm
export default EditStatistik