import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Pejabats\Pages\EditPejabat::__invoke
 * @see app/Filament/Resources/Pejabats/Pages/EditPejabat.php:7
 * @route '/admin/pejabats/{record}/edit'
 */
const EditPejabat = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditPejabat.url(args, options),
    method: 'get',
})

EditPejabat.definition = {
    methods: ["get","head"],
    url: '/admin/pejabats/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Pejabats\Pages\EditPejabat::__invoke
 * @see app/Filament/Resources/Pejabats/Pages/EditPejabat.php:7
 * @route '/admin/pejabats/{record}/edit'
 */
EditPejabat.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditPejabat.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\Pejabats\Pages\EditPejabat::__invoke
 * @see app/Filament/Resources/Pejabats/Pages/EditPejabat.php:7
 * @route '/admin/pejabats/{record}/edit'
 */
EditPejabat.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditPejabat.url(args, options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Pejabats\Pages\EditPejabat::__invoke
 * @see app/Filament/Resources/Pejabats/Pages/EditPejabat.php:7
 * @route '/admin/pejabats/{record}/edit'
 */
EditPejabat.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditPejabat.url(args, options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Pejabats\Pages\EditPejabat::__invoke
 * @see app/Filament/Resources/Pejabats/Pages/EditPejabat.php:7
 * @route '/admin/pejabats/{record}/edit'
 */
    const EditPejabatForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: EditPejabat.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Pejabats\Pages\EditPejabat::__invoke
 * @see app/Filament/Resources/Pejabats/Pages/EditPejabat.php:7
 * @route '/admin/pejabats/{record}/edit'
 */
        EditPejabatForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditPejabat.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Pejabats\Pages\EditPejabat::__invoke
 * @see app/Filament/Resources/Pejabats/Pages/EditPejabat.php:7
 * @route '/admin/pejabats/{record}/edit'
 */
        EditPejabatForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditPejabat.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    EditPejabat.form = EditPejabatForm
export default EditPejabat