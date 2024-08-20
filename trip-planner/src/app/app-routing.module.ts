import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripDetailsComponent } from './trip/trip-details/trip-details.component';
const routes: Routes = [
  { path: 'trip-details', component: TripDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
