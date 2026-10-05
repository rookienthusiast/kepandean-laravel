import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Pengumumans\Pages\EditPengumuman::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/EditPengumuman.php:7
 * @route '/admin/pengumumans/{record}/edit'
 */
const EditPengumuman = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditPengumuman.url(args, options),
    method: 'get',
})

EditPengumuman.definition = {
    methods: ["get","head"],
    url: '/admin/pengumumans/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Pengumumans\Pages\EditPengumuman::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/EditPengumuman.php:7
 * @route '/admin/pengumumans/{record}/edit'
 */
EditPengumuman.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditPengumuman.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\Pengumumans\Pages\EditPengumuman::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/EditPengumuman.php:7
 * @route '/admin/pengumumans/{record}/edit'
 */
EditPengumuman.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditPengumuman.url(args, options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Pengumumans\Pages\EditPengumuman::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/EditPengumuman.php:7
 * @route '/admin/pengumumans/{record}/edit'
 */
EditPengumuman.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditPengumuman.url(args, options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Pengumumans\Pages\EditPengumuman::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/EditPengumuman.php:7
 * @route '/admin/pengumumans/{record}/edit'
 */
    const EditPengumumanForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: EditPengumuman.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Pengumumans\Pages\EditPengumuman::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/EditPengumuman.php:7
 * @route '/admin/pengumumans/{record}/edit'
 */
        EditPengumumanForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditPengumuman.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Pengumumans\Pages\EditPengumuman::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/EditPengumuman.php:7
 * @route '/admin/pengumumans/{record}/edit'
 */
        EditPengumumanForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditPengumuman.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    EditPengumuman.form = EditPengumumanForm
export default EditPengumuman