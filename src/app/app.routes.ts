import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { LandingPage } from './pages/landing-page/landing-page';
import { Register } from './pages/register/register';
import { Pnf } from './pages/pnf/pnf';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
    {
        path: 'landingpage', component:LandingPage
    },
    {
        path: 'login', component:Login
    },
    {
        path: 'register', component:Register
    },
    {
        path: 'dashboard', component:Dashboard
    },
    {
        path: '**', component:Pnf
    },
    
];
