import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Pengumumans\Pages\ListPengumumans::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/ListPengumumans.php:7
 * @route '/admin/pengumumans'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/pengumumans',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Pengumumans\Pages\ListPengumumans::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/ListPengumumans.php:7
 * @route '/admin/pengumumans'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Pengumumans\Pages\ListPengumumans::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/ListPengumumans.php:7
 * @route '/admin/pengumumans'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Pengumumans\Pages\ListPengumumans::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/ListPengumumans.php:7
 * @route '/admin/pengumumans'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Pengumumans\Pages\ListPengumumans::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/ListPengumumans.php:7
 * @route '/admin/pengumumans'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Pengumumans\Pages\ListPengumumans::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/ListPengumumans.php:7
 * @route '/admin/pengumumans'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Pengumumans\Pages\ListPengumumans::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/ListPengumumans.php:7
 * @route '/admin/pengumumans'
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
* @see \App\Filament\Resources\Pengumumans\Pages\CreatePengumuman::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/CreatePengumuman.php:7
 * @route '/admin/pengumumans/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/pengumumans/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Pengumumans\Pages\CreatePengumuman::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/CreatePengumuman.php:7
 * @route '/admin/pengumumans/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Pengumumans\Pages\CreatePengumuman::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/CreatePengumuman.php:7
 * @route '/admin/pengumumans/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Pengumumans\Pages\CreatePengumuman::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/CreatePengumuman.php:7
 * @route '/admin/pengumumans/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Pengumumans\Pages\CreatePengumuman::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/CreatePengumuman.php:7
 * @route '/admin/pengumumans/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Pengumumans\Pages\CreatePengumuman::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/CreatePengumuman.php:7
 * @route '/admin/pengumumans/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Pengumumans\Pages\CreatePengumuman::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/CreatePengumuman.php:7
 * @route '/admin/pengumumans/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Filament\Resources\Pengumumans\Pages\EditPengumuman::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/EditPengumuman.php:7
 * @route '/admin/pengumumans/{record}/edit'
 */
export const edit = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/pengumumans/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Pengumumans\Pages\EditPengumuman::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/EditPengumuman.php:7
 * @route '/admin/pengumumans/{record}/edit'
 */
edit.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\Pengumumans\Pages\EditPengumuman::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/EditPengumuman.php:7
 * @route '/admin/pengumumans/{record}/edit'
 */
edit.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Pengumumans\Pages\EditPengumuman::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/EditPengumuman.php:7
 * @route '/admin/pengumumans/{record}/edit'
 */
edit.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Pengumumans\Pages\EditPengumuman::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/EditPengumuman.php:7
 * @route '/admin/pengumumans/{record}/edit'
 */
    const editForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Pengumumans\Pages\EditPengumuman::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/EditPengumuman.php:7
 * @route '/admin/pengumumans/{record}/edit'
 */
        editForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Pengumumans\Pages\EditPengumuman::__invoke
 * @see app/Filament/Resources/Pengumumans/Pages/EditPengumuman.php:7
 * @route '/admin/pengumumans/{record}/edit'
 */
        editForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
const pengumumans = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
edit: Object.assign(edit, edit),
}

export default pengumumans