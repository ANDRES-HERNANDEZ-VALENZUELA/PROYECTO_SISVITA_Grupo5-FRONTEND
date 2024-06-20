import { Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { LoginComponent } from './components/login/login.component';
import { TestComponent } from './components/test/test.component';

export const routes: Routes = [
    { path: '', redirectTo: '/principal', pathMatch: 'full' }, //Indicamos que ni bien se ejecuta,se tenga la pagina1 de entrada
    { path: 'principal', component: PrincipalComponent },
    { path: 'login', component: LoginComponent },
    { path: 'test', component: TestComponent}
];
