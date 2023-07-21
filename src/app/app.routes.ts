import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';

export const routes: Routes = [
  { path: '', redirectTo: '/agregar', pathMatch: 'full' },
  { path: 'agregar', component: AddEmployeeComponent }
];
