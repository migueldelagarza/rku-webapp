import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { UntypedFormControl, ReactiveFormsModule, UntypedFormGroup, Validators } from "@angular/forms";
import { EmployeesService } from "src/services/employees.service.";

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-employee.form.html',
  styleUrls: ['./add-employee.form.sass'],
  selector: 'add-employee-form'
})
export class AddEmployeeForm {
  deliveryForm: UntypedFormGroup;
  _employees = inject(EmployeesService);

  constructor() {
    const { required } = Validators;
    this.deliveryForm = new UntypedFormGroup({
      name: new UntypedFormControl('', required),
      account: new UntypedFormControl('', required),
      role: new UntypedFormControl('', required),
      month: new UntypedFormControl('2023-07', required),
      deliveries: new UntypedFormControl(0, required)
    })
  }

  submitDelivery(): void {
    const { name, account, role, month, deliveries } = this.deliveryForm.value;
    const employee = { name, account, role };
    this._employees.addDeliveries(employee, month, deliveries).subscribe( result => {
      console.log(result)
      this.deliveryForm.reset();
      alert(result.message)
    })
  }
}
