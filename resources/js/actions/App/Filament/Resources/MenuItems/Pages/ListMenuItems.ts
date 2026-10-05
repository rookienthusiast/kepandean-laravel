import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\MenuItems\Pages\ListMenuItems::__invoke
 * @see app/Filament/Resources/MenuItems/Pages/ListMenuItems.php:7
 * @route '/admin/menu-items'
 */
const ListMenuItems = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListMenuItems.url(options),
    method: 'get',
})

ListMenuItems.definition = {
    methods: ["get","head"],
    url: '/admin/menu-items',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\MenuItems\Pages\ListMenuItems::__invoke
 * @see app/Filament/Resources/MenuItems/Pages/ListMenuItems.php:7
 * @route '/admin/menu-items'
 */
ListMenuItems.url = (options?: RouteQueryOptions) => {
    return ListMenuItems.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\MenuItems\Pages\ListMenuItems::__invoke
 * @see app/Filament/Resources/MenuItems/Pages/ListMenuItems.php:7
 * @route '/admin/menu-items'
 */
ListMenuItems.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListMenuItems.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\MenuItems\Pages\ListMenuItems::__invoke
 * @see app/Filament/Resources/MenuItems/Pages/ListMenuItems.php:7
 * @route '/admin/menu-items'
 */
ListMenuItems.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListMenuItems.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\MenuItems\Pages\ListMenuItems::__invoke
 * @see app/Filament/Resources/MenuItems/Pages/ListMenuItems.php:7
 * @route '/admin/menu-items'
 */
    const ListMenuItemsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListMenuItems.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\MenuItems\Pages\ListMenuItems::__invoke
 * @see app/Filament/Resources/MenuItems/Pages/ListMenuItems.php:7
 * @route '/admin/menu-items'
 */
        ListMenuItemsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListMenuItems.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\MenuItems\Pages\ListMenuItems::__invoke
 * @see app/Filament/Resources/MenuItems/Pages/ListMenuItems.php:7
 * @route '/admin/menu-items'
 */
        ListMenuItemsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListMenuItems.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListMenuItems.form = ListMenuItemsForm
export default ListMenuItems