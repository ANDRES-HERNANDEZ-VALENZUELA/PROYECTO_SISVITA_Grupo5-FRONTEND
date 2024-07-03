import { Component, OnInit } from '@angular/core';
import { ResultadoService } from '../../../../service/resultado/resultado.service';
import { Resultado } from '../../../../model/resultado';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { Chart } from 'chart.js/auto';


@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.css'
})
export class ResultadosComponent implements OnInit{
  resultados: Resultado[] = []; //va a almacenar todos las veces que un usuario a relizado los tests
  order: string = 'none'; //variable para ordenar los resultados de acuerdo a la fecha de realizado
  codigoEntidad: string; //variable que se usa para obtener los resultados asociados a ese codigo de alumno

  public chart: Chart;

  constructor(private resultadoService: ResultadoService) {
    // Asigna aquí el código entidad desde donde sea necesario
    this.codigoEntidad = localStorage.getItem('codigo_entidad')+''; 
  }

  //función inicial para obtener todos los resultados de un usuario
  ngOnInit(): void {
    console.log("codigo del local: ", this.codigoEntidad)
    this.resultadoService.getResultadosByCodigoEntidad(this.codigoEntidad).subscribe(
      (data: Resultado[]) => {
        this.resultados = data;
        console.log('Resultados obtenidos:', this.resultados);

        //prueba
        // Obtener solo los años de las fechas para mostrar en el eje x
        const fechas = this.resultados.map(resultado => {
          const fecha = new Date(resultado.fecha);
          return fecha.getFullYear(); // Obtener el año de la fecha
        });
        const puntajes = this.resultados.map(resultado => resultado.puntaje);

        const info ={
          labels: fechas.map(fecha => fecha.toString()),
          datasets:[{
            label:'Puntajes Obtenidos',
            data: puntajes,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          }]
        };

        if(this.chart){
          this.chart.data=info;
          this.chart.update();
        }else{
          this.chart = new Chart('chart',{
            type: 'line',
            data: info,
            options:{
              responsive: true,
              maintainAspectRatio: false
            }
          });
        }
      },
      (error) => {
        console.error('Error al obtener resultados:', error);
      }
    );

    /*const data ={
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
      datasets:[{
        label: 'My first Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      }]
    }

    this.chart = new Chart("chart", {
      type: 'line',
      data
    })*/
  }

  //función filtro para ordenar los resultados de acuerdo a su fecha
  sortResults(): void {
    if (this.order === 'recent') {
      this.resultados.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
    } else if (this.order === 'oldest') {
      this.resultados.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
    }
  }

}
