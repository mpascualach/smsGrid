import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridComponent } from './grid/grid.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'grid', component: GridComponent },
  { path: 'signup', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
