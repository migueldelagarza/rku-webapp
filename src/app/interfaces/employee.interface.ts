/**
 * Interface para manejo de empleados
 */
export interface Employee {
  name: string;
  account: string; // sólo números
  role: string // Nombre del puesto, limitado a tabla de roles
}
