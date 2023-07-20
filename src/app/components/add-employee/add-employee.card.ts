import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { AddEmployeeForm } from "../add-employee-form/add-employee.form";

@Component({
  standalone: true,
  imports: [
    MatCardModule,
    AddEmployeeForm
  ],
  selector: 'add-employee-card',
  templateUrl: './add-employee.card.html',
  styleUrls: ['./add-employee.card.sass']
})
export class AddEmployeeCard {

}
