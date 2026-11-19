import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Components } from './admin/admin-layout/components/components';
import { AdminLayout } from './admin/admin-layout/admin-layout';
import { Admin } from './admin/admin';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Components, AdminLayout, Admin],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('VantaClient');
}
