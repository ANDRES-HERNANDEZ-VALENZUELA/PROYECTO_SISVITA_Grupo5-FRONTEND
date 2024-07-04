import { Routes } from '@angular/router';
import { PrincipalComponent } from './components/home/principal/principal.component';
import { LoginComponent } from './components/home/login/login.component';
import { TestComponent } from './components/estudiante/contenido_sidenavbar/realizar-test/test.component';
import { RegistrarEstudianteComponent } from './components/home/registrar-estudiante/registrar-estudiante.component';
import { PaginaInicioLoginComponent } from './components/estudiante/contenido_sidenavbar/perfil_estudiante/pagina-inicio-login.component';
import { ResultadosComponent } from './components/estudiante/contenido_sidenavbar/resultados/resultados.component';
import { DashboardComponent } from './components/estudiante/vista_estudiante/dashboard.component';
import { DashboardComponentt } from './components/estudiante/NAVBAR_ESTUDIANTE/dashboard/dashboard.component';
import { ProductsComponent } from './components/estudiante/NAVBAR_ESTUDIANTE/products/products.component';
import { StatisticsComponent } from './components/estudiante/NAVBAR_ESTUDIANTE/statistics/statistics.component';
import { CoupensComponent } from './components/estudiante/NAVBAR_ESTUDIANTE/coupens/coupens.component';
import { PagesComponent } from './components/estudiante/NAVBAR_ESTUDIANTE/pages/pages.component';
import { MediaComponent } from './components/estudiante/NAVBAR_ESTUDIANTE/media/media.component';
import { SettingsComponent } from './components/estudiante/NAVBAR_ESTUDIANTE/settings/settings.component';

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
        path: 'vistaEstudiante',
        component: DashboardComponent,
        children: [
          //{ path: 'perfil', component: PaginaInicioLoginComponent },
          //{ path: 'resultados', component: ResultadosComponent },
          //{ path: 'test', component: TestComponent },
          //{ path: '', redirectTo: 'perfil', pathMatch: 'full' }
          {path: '', redirectTo: 'perfil', pathMatch: 'full'},
          {path: 'perfil', component: PaginaInicioLoginComponent },
          {path: 'test', component: TestComponent },
          {path: 'resultados', component: ResultadosComponent },

          //estos de acá son para probar, pero se van a borrar luego
          {path: 'dashboard', component: DashboardComponentt},
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
