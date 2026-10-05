import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\BeritaController::index
 * @see app/Http/Controllers/BeritaController.php:18
 * @route '/berita'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/berita',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BeritaController::index
 * @see app/Http/Controllers/BeritaController.php:18
 * @route '/berita'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BeritaController::index
 * @see app/Http/Controllers/BeritaController.php:18
 * @route '/berita'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BeritaController::index
 * @see app/Http/Controllers/BeritaController.php:18
 * @route '/berita'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\BeritaController::index
 * @see app/Http/Controllers/BeritaController.php:18
 * @route '/berita'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\BeritaController::index
 * @see app/Http/Controllers/BeritaController.php:18
 * @route '/berita'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\BeritaController::index
 * @see app/Http/Controllers/BeritaController.php:18
 * @route '/berita'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\BeritaController::show
 * @see app/Http/Controllers/BeritaController.php:75
 * @route '/berita/{tahun}/{bulan}/{tanggal}/{slug}'
 */
export const show = (args: { tahun: string | number, bulan: string | number, tanggal: string | number, slug: string | number } | [tahun: string | number, bulan: string | number, tanggal: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/berita/{tahun}/{bulan}/{tanggal}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BeritaController::show
 * @see app/Http/Controllers/BeritaController.php:75
 * @route '/berita/{tahun}/{bulan}/{tanggal}/{slug}'
 */
show.url = (args: { tahun: string | number, bulan: string | number, tanggal: string | number, slug: string | number } | [tahun: string | number, bulan: string | number, tanggal: string | number, slug: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    tahun: args[0],
                    bulan: args[1],
                    tanggal: args[2],
                    slug: args[3],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        tahun: args.tahun,
                                bulan: args.bulan,
                                tanggal: args.tanggal,
                                slug: args.slug,
                }

    return show.definition.url
            .replace('{tahun}', parsedArgs.tahun.toString())
            .replace('{bulan}', parsedArgs.bulan.toString())
            .replace('{tanggal}', parsedArgs.tanggal.toString())
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BeritaController::show
 * @see app/Http/Controllers/BeritaController.php:75
 * @route '/berita/{tahun}/{bulan}/{tanggal}/{slug}'
 */
show.get = (args: { tahun: string | number, bulan: string | number, tanggal: string | number, slug: string | number } | [tahun: string | number, bulan: string | number, tanggal: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BeritaController::show
 * @see app/Http/Controllers/BeritaController.php:75
 * @route '/berita/{tahun}/{bulan}/{tanggal}/{slug}'
 */
show.head = (args: { tahun: string | number, bulan: string | number, tanggal: string | number, slug: string | number } | [tahun: string | number, bulan: string | number, tanggal: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\BeritaController::show
 * @see app/Http/Controllers/BeritaController.php:75
 * @route '/berita/{tahun}/{bulan}/{tanggal}/{slug}'
 */
    const showForm = (args: { tahun: string | number, bulan: string | number, tanggal: string | number, slug: string | number } | [tahun: string | number, bulan: string | number, tanggal: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\BeritaController::show
 * @see app/Http/Controllers/BeritaController.php:75
 * @route '/berita/{tahun}/{bulan}/{tanggal}/{slug}'
 */
        showForm.get = (args: { tahun: string | number, bulan: string | number, tanggal: string | number, slug: string | number } | [tahun: string | number, bulan: string | number, tanggal: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\BeritaController::show
 * @see app/Http/Controllers/BeritaController.php:75
 * @route '/berita/{tahun}/{bulan}/{tanggal}/{slug}'
 */
        showForm.head = (args: { tahun: string | number, bulan: string | number, tanggal: string | number, slug: string | number } | [tahun: string | number, bulan: string | number, tanggal: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const BeritaController = { index, show }

export default BeritaController