import { Routes } from '@angular/router';
import { AdminLayout } from './admin-layout/admin-layout';
import { Products } from './components/products/products';
import { Dashboard } from './components/dashboard/dashboard';

export const ADMIN_ROUTES: Routes = 
[
    {
        path: '',
        component: AdminLayout,
        children:
        [
            { path: '', component: Dashboard},
            { path: 'products', loadComponent: () => import('./components/products/products').then(m=> m.Products)},
            { path: 'order', loadComponent: () => import('./components/order/order').then(m=> m.Order)},
            { path: 'customers', loadComponent: () => import('./components/customer/customer').then(m=> m.Customer)},

        ]

    }

];