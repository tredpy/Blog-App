import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {ProfilePage} from "pages/ProfilePage";

export enum AppRoutes {
    MAIN = 'main',
    PROFILE = 'profile'
}
export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.PROFILE]: '/profile'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />
    },
}