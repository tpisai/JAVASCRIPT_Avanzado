import { Component, computed, inject, input } from '@angular/core'; 
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'; 
import { Router, RouterLink } from '@angular/router'; 
import { TitleCasePipe } from '@angular/common'; 
import { EVENTOS } from '../../data/evento.data'; 
import { CuposPipe } from '../../pipes/cupos-pipe'; 
  
type Campo = 'nombre' | 'correo' | 'dni' | 'carrera'; 
  
@Component({ 
  selector: 'app-registro', 
  imports: [ReactiveFormsModule, RouterLink, TitleCasePipe, CuposPipe], 
  templateUrl: './registro.html', 
  styleUrl: './registro.css' 
}) 
export class Registro { 
  private fb = inject(FormBuilder); 
  private router = inject(Router); 
  
  id = input.required<string>(); 
  evento = computed(() => EVENTOS.find(e => e.id === Number(this.id()))); 
  
  form = this.fb.nonNullable.group({ 
    nombre:  ['', [Validators.required, Validators.minLength(3)]], 
    correo:  ['', [Validators.required, Validators.email]], 
    dni:     ['', [Validators.required, Validators.pattern(/^\d{8}$/)]], 
    carrera: ['', Validators.required] 
  }); 
  
  invalido(campo: Campo): boolean { 
    const control = this.form.controls[campo]; 
    return control.invalid && control.touched; 
  } 
  
  enviar() { 
    const evento = this.evento(); 
    if (this.form.invalid || !evento) { 
      this.form.markAllAsTouched();   // muestra todos los errores 
      return; 
    } 
    evento.cupos--; 
    this.router.navigate(['/confirmacion'], { 
      state: { nombre: this.form.getRawValue().nombre, evento: evento.nombre } 
    }); 
  } 
}