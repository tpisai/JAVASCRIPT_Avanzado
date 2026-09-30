import { Routes } from '@angular/router'; 
import { Inicio } from './pages/inicio/inicio'; 
import { ListaEventos } from './pages/lista-eventos/lista-eventos'; 
import { DetalleEvento } from './pages/detalle-evento/detalle-evento'; 
import { NoEncontrado } from './pages/no-encontrado/no-encontrado'; 
import { Registro } from './pages/registro/registro';
import { Confirmacion } from './pages/confirmacion/confirmacion';
  
export const routes: Routes = [ 
  { path: '', component: Inicio, title: 'Inicio | EventosUTP' }, 
  { path: 'eventos', component: ListaEventos, title: 'Eventos | EventosUTP' }, 
  { path: 'eventos/:id', component: DetalleEvento, title: 'Detalle | EventosUTP' },
  { path: 'registro/:id', component: Registro, title: 'Inscripción | EventosUTP' },
  { path: 'confirmacion', component: Confirmacion, title: 'Confirmación | EventosUTP' },
  { path: '**', component: NoEncontrado, title: 'No encontrado' },
];