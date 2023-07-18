import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "src/app/interfaces/employee.interface";

@Injectable({providedIn: 'root'})
export class EmployeesService {
  http = inject(HttpClient);
  employeesURL = '/employees/'

  /**
   * Obtiene todos los empleados
   * @returns {Observable<Employee[]>}
   */
  get employees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesURL);
  }

  /**
   * Obtiene un empleado por su número
   * @param accountNumber número del empleado
   * @returns {Observable<Employee>}
   */
  getEmployeeByAccountNumber(accountNumber: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.employeesURL}/${accountNumber}`);
  }

  /**
   * Agrega nuevo empleado
   * @param employee Empleado
   * @returns {Observable}
   */
  addEmployee(employee: Employee): Observable<any> {
    return this.http.post<Observable<any>>(this.employeesURL, employee);
  }
}
