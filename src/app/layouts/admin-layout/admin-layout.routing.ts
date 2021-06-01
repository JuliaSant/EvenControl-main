import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ProfileComponent } from '../../pages/profile/profile.component';
import { ConvidadosComponent } from '../../pages/convidados/convidados.component';
import { EventoComponent } from '../../pages/evento/evento.component';
import { FuncionarioComponent } from '../../pages/funcionario/funcionario.component';
import { LoginComponent } from '../../login/login.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'profile',      component: ProfileComponent },
    { path: 'convidados',      component: ConvidadosComponent },
    { path: 'evento',      component: EventoComponent },
    { path: 'funcionario',      component: FuncionarioComponent },
    { path: 'login',      component: LoginComponent },
];
