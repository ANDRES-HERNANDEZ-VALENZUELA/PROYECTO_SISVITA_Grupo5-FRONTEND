import { Routes } from '@angular/router';
import { PrincipalComponent } from './components/home/principal/principal.component';
import { LoginComponent } from './components/home/login/login.component';
import { TestComponent } from './components/estudiante/contenido_sidenavbar/realizar-test/test.component';
import { RegistrarEstudianteComponent } from './components/home/registrar-estudiante/registrar-estudiante.component';
import { PaginaInicioLoginComponent } from './components/estudiante/contenido_sidenavbar/perfil_estudiante/pagina-inicio-login.component';
import { ResultadosComponent } from './components/estudiante/contenido_sidenavbar/resultados/resultados.component';
import { DashboardComponent } from './components/estudiante/vista_estudiante/dashboard.component';
import { VistaEspecialistaComponent } from './components/especialista/vista-especialista/vista-especialista.component';
import { PerfilEspecialistaComponent } from './components/especialista/contenido_sidenavbar_e/perfil-especialista/perfil-especialista.component';
import { MapaDeCalorComponent } from './components/especialista/contenido_sidenavbar_e/mapa-de-calor/mapa-de-calor.component';
import { GenerarCitaComponent } from './components/especialista/contenido_sidenavbar_e/generar-cita/generar-cita.component';
import { VigilanciaComponent } from './components/especialista/contenido_sidenavbar_e/vigilancia/vigilancia.component';

export const routes: Routes = [


    {path: '', redirectTo: 'principal', pathMatch: 'full' },
    {path: 'principal', component: PrincipalComponent },
    {path: 'login', component: LoginComponent},
    {path: 'register', component:RegistrarEstudianteComponent},
    {
        path: 'vistaEstudiante',
        component: DashboardComponent,
        children: [
          {path: '', redirectTo: 'perfil', pathMatch: 'full'},
          {path: 'perfil', component: PaginaInicioLoginComponent },
          {path: 'test', component: TestComponent },
          {path: 'resultados', component: ResultadosComponent },
        ]
      },
      {
        path: 'vistaEspecialista',
        component: VistaEspecialistaComponent,
        children:[
          {path: '', redirectTo: 'perfilEspecialista', pathMatch: 'full'},
          {path: 'perfilEspecialista', component: PerfilEspecialistaComponent},
          {path: 'vigilancia', component: VigilanciaComponent},
          {path: 'generarCita', component: GenerarCitaComponent},
          {path: 'mapaDeCalor', component: MapaDeCalorComponent},
        ]
      },
    { path: '**', redirectTo: '' }
];
