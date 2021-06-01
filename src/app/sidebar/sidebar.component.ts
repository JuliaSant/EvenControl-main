import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/profile',     title: 'Perfil',         icon:'nc-circle-10',       class: '' },
    { path: '/evento',     title: 'Eventos',         icon:'nc-diamond',       class: '' },
    { path: '/funcionario',     title: 'Funcionarios',         icon:'nc-badge',       class: '' },
    { path: '/convidados',     title: 'Convidados',         icon:'nc-globe',       class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
