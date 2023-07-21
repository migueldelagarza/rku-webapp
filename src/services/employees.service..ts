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

  /**
   * Agrega entregas mensuales por empleado
   * @param employee datos del empleado
   * @param month mes a registrar 'YYYY-MM'
   * @param deliveries cantidad de entregas
   * @returns {Observable}
   */
  addDeliveries(employee: Employee, month: string, deliveries: number): Observable<any> {
    return this.http.post(this.employeesURL + 'deliveries', {employee, month, deliveries}, {responseType: 'text'})
  }

  getDeliveries(account: string, month: string) {
    return this.http.get(this.employeesURL + `delivery/${account}/${month}`)
  }
}
