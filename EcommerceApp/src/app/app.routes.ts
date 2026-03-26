import { Routes } from '@angular/router';
import { RegisterComponent } from './Authentication/register/register.component';
import { LoginComponent } from './Authentication/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserlayoutComponent } from './components/userlayout/userlayout.component';

export const routes: Routes = [
     {
        path: '',
        redirectTo:'home',
        pathMatch:'full'
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
  path:'user',
  component:UserlayoutComponent
}
];
