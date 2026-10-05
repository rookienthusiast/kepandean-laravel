import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Filament\Pages\KelolaProfil::__invoke
 * @see app/Filament/Pages/KelolaProfil.php:7
 * @route '/admin/profil'
 */
const KelolaProfil = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: KelolaProfil.url(options),
    method: 'get',
})

KelolaProfil.definition = {
    methods: ["get","head"],
    url: '/admin/profil',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\KelolaProfil::__invoke
 * @see app/Filament/Pages/KelolaProfil.php:7
 * @route '/admin/profil'
 */
KelolaProfil.url = (options?: RouteQueryOptions) => {
    return KelolaProfil.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\KelolaProfil::__invoke
 * @see app/Filament/Pages/KelolaProfil.php:7
 * @route '/admin/profil'
 */
KelolaProfil.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: KelolaProfil.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Pages\KelolaProfil::__invoke
 * @see app/Filament/Pages/KelolaProfil.php:7
 * @route '/admin/profil'
 */
KelolaProfil.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: KelolaProfil.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Pages\KelolaProfil::__invoke
 * @see app/Filament/Pages/KelolaProfil.php:7
 * @route '/admin/profil'
 */
    const KelolaProfilForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: KelolaProfil.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Pages\KelolaProfil::__invoke
 * @see app/Filament/Pages/KelolaProfil.php:7
 * @route '/admin/profil'
 */
        KelolaProfilForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: KelolaProfil.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Pages\KelolaProfil::__invoke
 * @see app/Filament/Pages/KelolaProfil.php:7
 * @route '/admin/profil'
 */
        KelolaProfilForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: KelolaProfil.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    KelolaProfil.form = KelolaProfilForm
export default KelolaProfil