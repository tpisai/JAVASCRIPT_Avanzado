import { Component, computed, input } from '@angular/core'; 
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common'; 
import { RouterLink } from '@angular/router'; 
import { EVENTOS } from '../../data/evento.data'; 
import { CuposPipe } from '../../pipes/cupos-pipe'; 
  
@Component({ 
  selector: 'app-detalle-evento', 
  imports: [RouterLink, TitleCasePipe, DatePipe, CurrencyPipe, CuposPipe], 
  templateUrl: './detalle-evento.html', 
  styleUrl: './detalle-evento.css' 
}) 
export class DetalleEvento { 
  id = input.required<string>();   // llega desde /eventos/:id 
  
  evento = computed(() => 
    EVENTOS.find(e => e.id === Number(this.id()))); 
}