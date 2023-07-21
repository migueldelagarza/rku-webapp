import { Component, OnInit, inject } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { AddEmployeeForm } from "../add-employee-form/add-employee.form";
import { EmployeesService} from '../../../services/employees.service.';
import { CommonModule } from "@angular/common";
import { Employee } from "src/app/interfaces/employee.interface";
import { MatButtonModule } from "@angular/material/button";

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    AddEmployeeForm,
    MatButtonModule
  ],
  selector: 'add-employee-card',
  templateUrl: './add-employee.card.html',
  styleUrls: ['./add-employee.card.sass']
})
export class AddEmployeeCard implements OnInit{
  _employees = inject(EmployeesService);
  employees?: Employee[];

  ngOnInit(): void {
    this._employees.employees.subscribe( result => {
      this.employees = result;
    })
  }

  getDeliveries(account: string) {
    this._employees.getDeliveries(account, '2023-07').subscribe( (result: any) => {
      if(!result.deliveries) alert('El empleado no cuenta con entregas registradas')
      alert(`El empleado cuenta con ${result.deliveries}`);
    })
  }
}
