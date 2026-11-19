import { Component } from '@angular/core';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-components',
  imports: [Header, Sidebar, Footer],
  templateUrl: './components.html',
  styleUrl: './components.scss',
})
export class Components {

}
