import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../wayfinder'
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: login.url(options),
        method: 'get',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
        loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url(options),
            method: 'get',
        })
            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
        loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    login.form = loginForm
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
    const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: logout.url(options),
        method: 'post',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
        logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: logout.url(options),
            method: 'post',
        })
    
    logout.form = logoutForm
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
    const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: register.url(options),
        method: 'get',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
        registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url(options),
            method: 'get',
        })
            /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
        registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    register.form = registerForm
/**
 * @see routes/web.php:25
 * @route '/'
 */
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:25
 * @route '/'
 */
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:25
 * @route '/'
 */
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:25
 * @route '/'
 */
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:25
 * @route '/'
 */
    const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: home.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:25
 * @route '/'
 */
        homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:25
 * @route '/'
 */
        homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    home.form = homeForm
/**
 * @see routes/web.php:100
 * @route '/struktur-pemerintahan'
 */
export const struktur = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: struktur.url(options),
    method: 'get',
})

struktur.definition = {
    methods: ["get","head"],
    url: '/struktur-pemerintahan',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:100
 * @route '/struktur-pemerintahan'
 */
struktur.url = (options?: RouteQueryOptions) => {
    return struktur.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:100
 * @route '/struktur-pemerintahan'
 */
struktur.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: struktur.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:100
 * @route '/struktur-pemerintahan'
 */
struktur.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: struktur.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:100
 * @route '/struktur-pemerintahan'
 */
    const strukturForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: struktur.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:100
 * @route '/struktur-pemerintahan'
 */
        strukturForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: struktur.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:100
 * @route '/struktur-pemerintahan'
 */
        strukturForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: struktur.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    struktur.form = strukturForm
/**
* @see \App\Http\Controllers\SitemapController::sitemap
 * @see app/Http/Controllers/SitemapController.php:19
 * @route '/sitemap.xml'
 */
export const sitemap = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sitemap.url(options),
    method: 'get',
})

sitemap.definition = {
    methods: ["get","head"],
    url: '/sitemap.xml',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SitemapController::sitemap
 * @see app/Http/Controllers/SitemapController.php:19
 * @route '/sitemap.xml'
 */
sitemap.url = (options?: RouteQueryOptions) => {
    return sitemap.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SitemapController::sitemap
 * @see app/Http/Controllers/SitemapController.php:19
 * @route '/sitemap.xml'
 */
sitemap.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sitemap.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SitemapController::sitemap
 * @see app/Http/Controllers/SitemapController.php:19
 * @route '/sitemap.xml'
 */
sitemap.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sitemap.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SitemapController::sitemap
 * @see app/Http/Controllers/SitemapController.php:19
 * @route '/sitemap.xml'
 */
    const sitemapForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: sitemap.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SitemapController::sitemap
 * @see app/Http/Controllers/SitemapController.php:19
 * @route '/sitemap.xml'
 */
        sitemapForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sitemap.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SitemapController::sitemap
 * @see app/Http/Controllers/SitemapController.php:19
 * @route '/sitemap.xml'
 */
        sitemapForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sitemap.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    sitemap.form = sitemapForm
/**
* @see \App\Http\Controllers\SitemapController::robots
 * @see app/Http/Controllers/SitemapController.php:38
 * @route '/robots.txt'
 */
export const robots = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: robots.url(options),
    method: 'get',
})

robots.definition = {
    methods: ["get","head"],
    url: '/robots.txt',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SitemapController::robots
 * @see app/Http/Controllers/SitemapController.php:38
 * @route '/robots.txt'
 */
robots.url = (options?: RouteQueryOptions) => {
    return robots.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SitemapController::robots
 * @see app/Http/Controllers/SitemapController.php:38
 * @route '/robots.txt'
 */
robots.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: robots.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SitemapController::robots
 * @see app/Http/Controllers/SitemapController.php:38
 * @route '/robots.txt'
 */
robots.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: robots.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SitemapController::robots
 * @see app/Http/Controllers/SitemapController.php:38
 * @route '/robots.txt'
 */
    const robotsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: robots.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SitemapController::robots
 * @see app/Http/Controllers/SitemapController.php:38
 * @route '/robots.txt'
 */
        robotsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: robots.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SitemapController::robots
 * @see app/Http/Controllers/SitemapController.php:38
 * @route '/robots.txt'
 */
        robotsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: robots.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    robots.form = robotsForm
/**
* @see \App\Http\Controllers\InformasiController::informasi
 * @see app/Http/Controllers/InformasiController.php:19
 * @route '/informasi'
 */
export const informasi = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: informasi.url(options),
    method: 'get',
})

informasi.definition = {
    methods: ["get","head"],
    url: '/informasi',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\InformasiController::informasi
 * @see app/Http/Controllers/InformasiController.php:19
 * @route '/informasi'
 */
informasi.url = (options?: RouteQueryOptions) => {
    return informasi.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\InformasiController::informasi
 * @see app/Http/Controllers/InformasiController.php:19
 * @route '/informasi'
 */
informasi.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: informasi.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\InformasiController::informasi
 * @see app/Http/Controllers/InformasiController.php:19
 * @route '/informasi'
 */
informasi.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: informasi.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\InformasiController::informasi
 * @see app/Http/Controllers/InformasiController.php:19
 * @route '/informasi'
 */
    const informasiForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: informasi.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\InformasiController::informasi
 * @see app/Http/Controllers/InformasiController.php:19
 * @route '/informasi'
 */
        informasiForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: informasi.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\InformasiController::informasi
 * @see app/Http/Controllers/InformasiController.php:19
 * @route '/informasi'
 */
        informasiForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: informasi.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    informasi.form = informasiForm
/**
 * @see routes/web.php:176
 * @route '/segera-hadir/{modul}'
 */
export const segeraHadir = (args: { modul: string | number } | [modul: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: segeraHadir.url(args, options),
    method: 'get',
})

segeraHadir.definition = {
    methods: ["get","head"],
    url: '/segera-hadir/{modul}',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:176
 * @route '/segera-hadir/{modul}'
 */
segeraHadir.url = (args: { modul: string | number } | [modul: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { modul: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    modul: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        modul: args.modul,
                }

    return segeraHadir.definition.url
            .replace('{modul}', parsedArgs.modul.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see routes/web.php:176
 * @route '/segera-hadir/{modul}'
 */
segeraHadir.get = (args: { modul: string | number } | [modul: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: segeraHadir.url(args, options),
    method: 'get',
})
/**
 * @see routes/web.php:176
 * @route '/segera-hadir/{modul}'
 */
segeraHadir.head = (args: { modul: string | number } | [modul: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: segeraHadir.url(args, options),
    method: 'head',
})

    /**
 * @see routes/web.php:176
 * @route '/segera-hadir/{modul}'
 */
    const segeraHadirForm = (args: { modul: string | number } | [modul: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: segeraHadir.url(args, options),
        method: 'get',
    })

            /**
 * @see routes/web.php:176
 * @route '/segera-hadir/{modul}'
 */
        segeraHadirForm.get = (args: { modul: string | number } | [modul: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: segeraHadir.url(args, options),
            method: 'get',
        })
            /**
 * @see routes/web.php:176
 * @route '/segera-hadir/{modul}'
 */
        segeraHadirForm.head = (args: { modul: string | number } | [modul: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: segeraHadir.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    segeraHadir.form = segeraHadirForm
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/dashboard'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm