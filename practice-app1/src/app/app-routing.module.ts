import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerStartComponent } from './customer/customer-start/customer-start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { CustomerItemselectComponent } from './customer/customer-itemselect/customer-itemselect.component';

const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent },
  {
    path: 'customer', component: CustomerComponent, children: [
      { path: '', component: CustomerStartComponent },
      { path: ':id', component: CustomerItemselectComponent }]
  },
  { path: 'shopping-list', component: ShoppingListComponent },
]



@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
