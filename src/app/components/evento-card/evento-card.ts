import { Component, input, output } from '@angular/core'; 
import { RouterLink } from '@angular/router'; 
import { Evento } from '../../models/evento'; 
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { CuposPipe } from '../../pipes/cupos-pipe';

@Component({ 
  selector: 'app-evento-card', 
  imports: [RouterLink, TitleCasePipe, DatePipe, CurrencyPipe, CuposPipe], 
  templateUrl: './evento-card.html', 
  styleUrl: './evento-card.css' 
}) 
export class EventoCard { 
  evento = input.required<Evento>();   // dato que llega del padre 
  favorito = output<string>();          // evento que sale hacia el padre 
  
  marcarFavorito() { 
    this.favorito.emit(this.evento().nombre); 
  } 
}