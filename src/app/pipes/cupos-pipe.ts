import { Pipe, PipeTransform } from '@angular/core'; 
  
@Pipe({ 
  name: 'cupos' 
}) 
export class CuposPipe implements PipeTransform { 
  
  transform(cupos: number): string { 
    if (cupos === 0) return 'Agotado'; 
    if (cupos < 10) return `¡Últimos ${cupos} cupos!`; 
    return `${cupos} cupos disponibles`; 
  } 
  
} 