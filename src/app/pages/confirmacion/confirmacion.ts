import { Component } from '@angular/core'; 
import { RouterLink } from '@angular/router'; 
import { TitleCasePipe } from '@angular/common'; 
  
@Component({ 
  selector: 'app-confirmacion', 
  imports: [RouterLink, TitleCasePipe], 
  templateUrl: './confirmacion.html', 
  styleUrl: './confirmacion.css' 
}) 
export class Confirmacion { 
  datos = history.state as { nombre?: string; evento?: string }; 
} 