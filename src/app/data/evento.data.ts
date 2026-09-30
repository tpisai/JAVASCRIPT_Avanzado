import { Evento } from '../models/evento'; 
  
export const EVENTOS: Evento[] = [ 
  { id: 1, nombre: 'hackathon utp 2026', fecha: new Date(2026, 9, 17, 9, 0), 
    lugar: 'Auditorio A', precio: 0, cupos: 25 }, 
  { id: 2, nombre: 'taller de angular', fecha: new Date(2026, 9, 21, 18, 30), 
    lugar: 'Laboratorio 301', precio: 45, cupos: 4 }, 
  { id: 3, nombre: 'feria de ciberseguridad', fecha: new Date(2026, 10, 5, 10, 0), 
    lugar: 'Patio central', precio: 20, cupos: 0 } 
]; 
