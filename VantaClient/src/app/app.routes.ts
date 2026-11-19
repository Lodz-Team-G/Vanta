import { Routes } from '@angular/router';
import { Home } from './ui/components/home/home';
import { Cart } from './ui/components/cart/cart';
import { Products } from './ui/components/products/products';

export const routes: Routes = 
[
    {path: 'admin', 
        loadChildren: () =>
        import('./admin/admin.routes').then(m => m.ADMIN_ROUTES)
    },
    {path:'', component:Home},
    {path:'cart', component:Cart},
    {path:'products', component:Products},
    
    
];
