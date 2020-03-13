import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Principal',  icon: 'home', class: '' },
    { path: '/sales-records', title: 'Registro de Ventas',  icon: 'person', class: '' },
    { path: '/attendance', title: 'Asistencia',  icon: 'content_paste', class: '' },
    { path: '/incidents', title: 'Incidentes RH',  icon: 'library_books', class: '' },
    { path: '/pre-settlement', title: 'Pre-Liquidación',  icon: 'bubble_chart', class: '' },
    { path: '/validators', title: 'Validadores',  icon: 'location_on', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
   UserInfo: string = localStorage.getItem('FullName');
    ImageUrl: string = localStorage.getItem('Picture');
  menuItems: any[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  logout()
  {
    localStorage.setItem('Email','');
    localStorage.setItem('Picture','');
    localStorage.setItem('FullName','');  
    localStorage.setItem('Token','');
    this.router.navigate(['/login']);
  }
  isMobileMenu() {
      // if ($(window).width() > 991) {
      //     return false;
      // }
      return true;
  };
}
