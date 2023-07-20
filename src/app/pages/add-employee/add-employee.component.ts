import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { AddEmployeeCard } from "src/app/components/add-employee/add-employee.card";

@Component({
  standalone: true,
  imports: [
    CommonModule,
    AddEmployeeCard,
    MatToolbarModule
  ],
  template: `
  <mat-toolbar color="primary">Captura de movimientos por mes</mat-toolbar>
  <add-employee-card></add-employee-card>
  `
})
export class AddEmployeeComponent {

}
