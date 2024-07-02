import { Component, OnInit } from '@angular/core';
import { ResultadoService } from '../../../../service/resultado/resultado.service'; 
import { Resultado } from '../../../../model/resultado';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.css'
})
export class ResultadosComponent {
  resultados: Resultado[] = [];
  codigoEntidad: string;

  constructor(private resultadoService: ResultadoService) {
    // Asigna aquí el código entidad desde donde sea necesario
    this.codigoEntidad = localStorage.getItem('codigo_entidad')+''; // Reemplaza esto con el valor real
  }

  ngOnInit(): void {
    console.log("codigo del local: ", this.codigoEntidad)
    this.resultadoService.getResultadosByCodigoEntidad(this.codigoEntidad).subscribe(
      (data: Resultado[]) => {
        this.resultados = data;
        console.log('Resultados obtenidos:', this.resultados);
      },
      (error) => {
        console.error('Error al obtener resultados:', error);
      }
    );
  }
}
