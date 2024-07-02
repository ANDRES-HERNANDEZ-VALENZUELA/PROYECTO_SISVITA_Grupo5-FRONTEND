import { Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { LoginComponent } from './components/login/login.component';
import { TestComponent } from './components/realizar-testv2/test/test.component';
import { RegistrarEstudianteComponent } from './components/registrar-estudiante/registrar-estudiante.component';
import { PaginaInicioLoginComponent } from './components/pagina-inicio-login/pagina-inicio-login.component';
import { ResultadosComponent } from './components/pagina-inicio-login/pagina-inicio-login/resultados/resultados.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { DashboardComponentt } from './components/NAVBAR/dashboard/dashboard.component';
import { BodyComponent } from './components/NAVBAR/body/body.component';
import { ProductsComponent } from './components/NAVBAR/products/products.component';
import { StatisticsComponent } from './components/NAVBAR/statistics/statistics.component';
import { CoupensComponent } from './components/NAVBAR/coupens/coupens.component';
import { PagesComponent } from './components/NAVBAR/pages/pages.component';
import { MediaComponent } from './components/NAVBAR/media/media.component';
import { SettingsComponent } from './components/NAVBAR/settings/settings.component';

export const routes: Routes = [
    //{ path: '', redirectTo: '/principal', pathMatch: 'full' }, //Indicamos que ni bien se ejecuta,se tenga la pagina1 de entrada
    //{ path: 'principal', component: PrincipalComponent },
    //{ path: 'login', component: LoginComponent },
    //{ path: 'test', component: TestComponent},
    //{ path: 'registrar', component: RegistrarEstudianteComponent },
    //{ path: 'vercontenido', component: PaginaInicioLoginComponent},
    //{ path: 'resultado', component: ResultadosComponent},
    

    //{path: '', component: PrincipalComponent},



    {path: '', redirectTo: 'principal', pathMatch: 'full' },
    {path: 'principal', component: PrincipalComponent },
    {path: 'login', component: LoginComponent},
    {path: 'register', component:RegistrarEstudianteComponent},
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          //{ path: 'perfil', component: PaginaInicioLoginComponent },
          //{ path: 'resultados', component: ResultadosComponent },
          //{ path: 'test', component: TestComponent },
          //{ path: '', redirectTo: 'perfil', pathMatch: 'full' }
          {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
          {path: 'perfil', component: PaginaInicioLoginComponent },
          {path: 'dashboard', component: DashboardComponentt},
          {path: 'test', component: TestComponent },
          {path: 'resultados', component: ResultadosComponent },
          {path: 'products', component: ProductsComponent},
          {path: 'statistics', component: StatisticsComponent},
          {path: 'coupens', component: CoupensComponent},
          {path: 'pages', component: PagesComponent},
          {path: 'media', component: MediaComponent},
          {path: 'settings', component: SettingsComponent},
        ]
      },
    { path: '**', redirectTo: '' }




    /*
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponentt},
    {path: 'products', component: ProductsComponent},
    {path: 'statistics', component: StatisticsComponent},
    {path: 'coupens', component: CoupensComponent},
    {path: 'pages', component: PagesComponent},
    {path: 'media', component: MediaComponent},
    {path: 'settings', component: SettingsComponent},
    */
];
