import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\MenuItems\Pages\CreateMenuItem::__invoke
 * @see app/Filament/Resources/MenuItems/Pages/CreateMenuItem.php:7
 * @route '/admin/menu-items/create'
 */
const CreateMenuItem = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateMenuItem.url(options),
    method: 'get',
})

CreateMenuItem.definition = {
    methods: ["get","head"],
    url: '/admin/menu-items/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\MenuItems\Pages\CreateMenuItem::__invoke
 * @see app/Filament/Resources/MenuItems/Pages/CreateMenuItem.php:7
 * @route '/admin/menu-items/create'
 */
CreateMenuItem.url = (options?: RouteQueryOptions) => {
    return CreateMenuItem.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\MenuItems\Pages\CreateMenuItem::__invoke
 * @see app/Filament/Resources/MenuItems/Pages/CreateMenuItem.php:7
 * @route '/admin/menu-items/create'
 */
CreateMenuItem.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateMenuItem.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\MenuItems\Pages\CreateMenuItem::__invoke
 * @see app/Filament/Resources/MenuItems/Pages/CreateMenuItem.php:7
 * @route '/admin/menu-items/create'
 */
CreateMenuItem.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateMenuItem.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\MenuItems\Pages\CreateMenuItem::__invoke
 * @see app/Filament/Resources/MenuItems/Pages/CreateMenuItem.php:7
 * @route '/admin/menu-items/create'
 */
    const CreateMenuItemForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateMenuItem.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\MenuItems\Pages\CreateMenuItem::__invoke
 * @see app/Filament/Resources/MenuItems/Pages/CreateMenuItem.php:7
 * @route '/admin/menu-items/create'
 */
        CreateMenuItemForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateMenuItem.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\MenuItems\Pages\CreateMenuItem::__invoke
 * @see app/Filament/Resources/MenuItems/Pages/CreateMenuItem.php:7
 * @route '/admin/menu-items/create'
 */
        CreateMenuItemForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateMenuItem.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateMenuItem.form = CreateMenuItemForm
export default CreateMenuItem