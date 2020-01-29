import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './views/contact/contact.component';
import { RestaurantComponent } from './views/restaurant/restaurant.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  {path: '', component: RestaurantComponent},
  {path: 'restaurant', component: RestaurantComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
