import { Routes } from '@angular/router';
import { RegisterComponent } from './Authentication/register/register.component';
import { LoginComponent } from './Authentication/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { UserdashboardComponent } from './components/user/layout/userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './components/admin/admindashboard/admindashboard/admindashboard.component';
import { AddproductComponent } from './components/admin/addproducts/addproduct/addproduct.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'user/dashboard',
        component: UserdashboardComponent
    },
    {
        path: 'admin/dashboard',
        component: AdmindashboardComponent

    },
    {
        path: 'admin/addproducts',
        component: AddproductComponent

    },
];
