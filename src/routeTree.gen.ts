/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DashboardLayoutImport } from './routes/_dashboardLayout'
import { Route as IndexImport } from './routes/index'
import { Route as DashboardLayoutUsersIndexImport } from './routes/_dashboardLayout/users/index'
import { Route as DashboardLayoutDashboardIndexImport } from './routes/_dashboardLayout/dashboard/index'
import { Route as DashboardLayoutUserDetailsUserIdIndexImport } from './routes/_dashboardLayout/user-details/$userId/index'

// Create/Update Routes

const DashboardLayoutRoute = DashboardLayoutImport.update({
  id: '/_dashboardLayout',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardLayoutUsersIndexRoute = DashboardLayoutUsersIndexImport.update({
  path: '/users/',
  getParentRoute: () => DashboardLayoutRoute,
} as any)

const DashboardLayoutDashboardIndexRoute =
  DashboardLayoutDashboardIndexImport.update({
    path: '/dashboard/',
    getParentRoute: () => DashboardLayoutRoute,
  } as any)

const DashboardLayoutUserDetailsUserIdIndexRoute =
  DashboardLayoutUserDetailsUserIdIndexImport.update({
    path: '/user-details/$userId/',
    getParentRoute: () => DashboardLayoutRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_dashboardLayout': {
      id: '/_dashboardLayout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof DashboardLayoutImport
      parentRoute: typeof rootRoute
    }
    '/_dashboardLayout/dashboard/': {
      id: '/_dashboardLayout/dashboard/'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardLayoutDashboardIndexImport
      parentRoute: typeof DashboardLayoutImport
    }
    '/_dashboardLayout/users/': {
      id: '/_dashboardLayout/users/'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof DashboardLayoutUsersIndexImport
      parentRoute: typeof DashboardLayoutImport
    }
    '/_dashboardLayout/user-details/$userId/': {
      id: '/_dashboardLayout/user-details/$userId/'
      path: '/user-details/$userId'
      fullPath: '/user-details/$userId'
      preLoaderRoute: typeof DashboardLayoutUserDetailsUserIdIndexImport
      parentRoute: typeof DashboardLayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  DashboardLayoutRoute: DashboardLayoutRoute.addChildren({
    DashboardLayoutDashboardIndexRoute,
    DashboardLayoutUsersIndexRoute,
    DashboardLayoutUserDetailsUserIdIndexRoute,
  }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_dashboardLayout"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_dashboardLayout": {
      "filePath": "_dashboardLayout.tsx",
      "children": [
        "/_dashboardLayout/dashboard/",
        "/_dashboardLayout/users/",
        "/_dashboardLayout/user-details/$userId/"
      ]
    },
    "/_dashboardLayout/dashboard/": {
      "filePath": "_dashboardLayout/dashboard/index.tsx",
      "parent": "/_dashboardLayout"
    },
    "/_dashboardLayout/users/": {
      "filePath": "_dashboardLayout/users/index.tsx",
      "parent": "/_dashboardLayout"
    },
    "/_dashboardLayout/user-details/$userId/": {
      "filePath": "_dashboardLayout/user-details/$userId/index.tsx",
      "parent": "/_dashboardLayout"
    }
  }
}
ROUTE_MANIFEST_END */
