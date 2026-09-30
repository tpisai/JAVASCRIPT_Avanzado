import { Component, signal } from '@angular/core'; 
import { EventoCard } from '../../components/evento-card/evento-card'; 
import { EVENTOS } from '../../data/evento.data'; 
  
@Component({ 
  selector: 'app-lista-eventos', 
  imports: [EventoCard], 
  templateUrl: './lista-eventos.html', 
  styleUrl: './lista-eventos.css' 
}) 
export class ListaEventos { 
  eventos = EVENTOS; 
  favoritos = signal<string[]>([]); 
  
  agregarFavorito(nombre: string) { 
    this.favoritos.update(lista => 
      lista.includes(nombre) ? lista : [...lista, nombre]); 
  } 
}