import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home.component';
import { LoginComponent } from './components/login-component/login.component';
import { ProfileComponent } from './components/profile-component/profile.component';
import { authGuard } from './guards/auth.guard'

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [authGuard]
    },
    {
        path: '**',
        redirectTo: 'login'
    },
];