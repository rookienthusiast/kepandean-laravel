import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Beritas\Pages\EditBerita::__invoke
 * @see app/Filament/Resources/Beritas/Pages/EditBerita.php:7
 * @route '/admin/beritas/{record}/edit'
 */
const EditBerita = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBerita.url(args, options),
    method: 'get',
})

EditBerita.definition = {
    methods: ["get","head"],
    url: '/admin/beritas/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Beritas\Pages\EditBerita::__invoke
 * @see app/Filament/Resources/Beritas/Pages/EditBerita.php:7
 * @route '/admin/beritas/{record}/edit'
 */
EditBerita.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditBerita.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\Beritas\Pages\EditBerita::__invoke
 * @see app/Filament/Resources/Beritas/Pages/EditBerita.php:7
 * @route '/admin/beritas/{record}/edit'
 */
EditBerita.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditBerita.url(args, options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Beritas\Pages\EditBerita::__invoke
 * @see app/Filament/Resources/Beritas/Pages/EditBerita.php:7
 * @route '/admin/beritas/{record}/edit'
 */
EditBerita.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditBerita.url(args, options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Beritas\Pages\EditBerita::__invoke
 * @see app/Filament/Resources/Beritas/Pages/EditBerita.php:7
 * @route '/admin/beritas/{record}/edit'
 */
    const EditBeritaForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: EditBerita.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Beritas\Pages\EditBerita::__invoke
 * @see app/Filament/Resources/Beritas/Pages/EditBerita.php:7
 * @route '/admin/beritas/{record}/edit'
 */
        EditBeritaForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditBerita.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Beritas\Pages\EditBerita::__invoke
 * @see app/Filament/Resources/Beritas/Pages/EditBerita.php:7
 * @route '/admin/beritas/{record}/edit'
 */
        EditBeritaForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditBerita.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    EditBerita.form = EditBeritaForm
export default EditBerita