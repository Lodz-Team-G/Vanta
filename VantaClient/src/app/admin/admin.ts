import { Component } from '@angular/core';
import { AdminLayout } from './admin-layout/admin-layout';
import { Components } from './components/components';

@Component({
  selector: 'app-admin',
  imports: [AdminLayout, Components],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin {

}
