import { Component } from '@angular/core';
import { Components } from './components/components';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';
import { Footer } from './components/footer/footer';
import { RouterOutlet, RouterLink } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';



@Component({
  selector: 'app-admin-layout',
  imports: [Components, Header, Sidebar, Footer, RouterOutlet, RouterLink, MatSidenavModule],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.scss',
})
export class AdminLayout {

}
