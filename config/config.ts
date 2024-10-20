const PROJECT_CONFIG = {
    NAME: 'PlayAds',
    ROUTES: {
        BUSINESS: {
            MAIN: '/business',
            CREATE: '/business/create',
            DETAILS: '/business/details/'
        }
    },
    API_CONFIG: {
        baseURL: process.env.REACT_APP_API_CONFIG_BASE_URL,
        USERS: {
            CREATE: '/user',
            UPDATE: '/user/update/',
            ALL: '/users',
            LOGIN: '/login',
            LOGOUT: '/logout',
            REFRESH_TOKEN: '/refresh-token',
        },
        BUSINESS: {
            CREATE: '/business',
            GET: '/business/',
            RESUME: '/businesses/resume',
            UPDATE: '/business/update/',
            DELETE: '/businesses',
            ALL: '/businesses',
            GENERATE_JSON: '/business/generate_json/',
            ROUTE_JSON: '/business/jsonroute'
        },
        AREA: {
            CREATE: '/area',
            GET: '/area/',
            UPDATE: '/area/update/',
            DELETE: '/areas',
            ALL: '/areas',
        },
        SCREEN: {
            CREATE: '/screen',
            GET: '/screen/',
            UPDATE: '/screen/update/',
            DELETE: '/screens',
            ALL: '/screens',
        },
        MEDIA: {
            CREATE: '/media',
            GET: '/media/',
            UPDATE: '/media/update/',
            DELETE: '/medias',
            ALL: '/medias',
        },
        PRODUCT: {
            CREATE: '/product',
            GET: '/product/',
            UPDATE: '/product/update/',
            DELETE: '/products',
            ALL: '/products',
        },
        DEVICE: {
            CREATE: '/device',
            GET: '/device/',
            UPDATE: '/device/update/',
            DELETE: '/devices',
            ALL: '/devices',
        },
        MARQUEE: {
            CREATE: '/marquee',
            GET: '/marquee/',
            UPDATE: '/marquee/update/',
            DELETE: '/marquees',
            ALL: '/marquees',
        },
        MESSAGES: {
            CREATE: '/message',
            GET: '/message/',
            UPDATE: '/message/update/',
            DELETE: '/messages',
            ALL: '/messages',
        },
        GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
        ROLES: {
            ADMIN: 'admin'
        }
    },
    WS_CONFIG: {
        BASE_URL: process.env.REACT_APP_CENTRIFUGUE_BASE_URL,
        WS_SECRET: process.env.WS_SECRET,
    },
    TABLE_CONFIG: {
        ROW_PER_PAGE: 25,
        ROWS_PER_PAGE_OPTIONS: [25, 50, 100]
    }
}

export default PROJECT_CONFIG;