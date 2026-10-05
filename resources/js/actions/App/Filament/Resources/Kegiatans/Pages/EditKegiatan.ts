import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Kegiatans\Pages\EditKegiatan::__invoke
 * @see app/Filament/Resources/Kegiatans/Pages/EditKegiatan.php:7
 * @route '/admin/kegiatans/{record}/edit'
 */
const EditKegiatan = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditKegiatan.url(args, options),
    method: 'get',
})

EditKegiatan.definition = {
    methods: ["get","head"],
    url: '/admin/kegiatans/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Kegiatans\Pages\EditKegiatan::__invoke
 * @see app/Filament/Resources/Kegiatans/Pages/EditKegiatan.php:7
 * @route '/admin/kegiatans/{record}/edit'
 */
EditKegiatan.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditKegiatan.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\Kegiatans\Pages\EditKegiatan::__invoke
 * @see app/Filament/Resources/Kegiatans/Pages/EditKegiatan.php:7
 * @route '/admin/kegiatans/{record}/edit'
 */
EditKegiatan.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditKegiatan.url(args, options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Kegiatans\Pages\EditKegiatan::__invoke
 * @see app/Filament/Resources/Kegiatans/Pages/EditKegiatan.php:7
 * @route '/admin/kegiatans/{record}/edit'
 */
EditKegiatan.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditKegiatan.url(args, options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Kegiatans\Pages\EditKegiatan::__invoke
 * @see app/Filament/Resources/Kegiatans/Pages/EditKegiatan.php:7
 * @route '/admin/kegiatans/{record}/edit'
 */
    const EditKegiatanForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: EditKegiatan.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Kegiatans\Pages\EditKegiatan::__invoke
 * @see app/Filament/Resources/Kegiatans/Pages/EditKegiatan.php:7
 * @route '/admin/kegiatans/{record}/edit'
 */
        EditKegiatanForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditKegiatan.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Kegiatans\Pages\EditKegiatan::__invoke
 * @see app/Filament/Resources/Kegiatans/Pages/EditKegiatan.php:7
 * @route '/admin/kegiatans/{record}/edit'
 */
        EditKegiatanForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditKegiatan.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    EditKegiatan.form = EditKegiatanForm
export default EditKegiatan