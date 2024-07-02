import { Component, OnInit } from '@angular/core';
import { TestService } from '../../../service/test/test.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  questions: any[] = [];
  answers: any[] = [];
  codigo_entidad: String | null='' ;  // Set this to the logged-in codigo_entidad's ID
  testId = 1;  // Assuming there is only one test, set the appropriate test ID

  constructor(
    private testService: TestService, 
    private router: Router
  ){
    this.codigo_entidad = localStorage.getItem('codigo_entidad');
  }

  ngOnInit(): void {
    this.testService.getQuestions().subscribe((data: any) => {
      this.questions = data.questions;
      console.log("preguntas del test recuperadas de la BD:", this.questions);
      console.log("codigo estudiante recuperado del localstorage: ", this.codigo_entidad);
    });
  }

  submitTest(): void {

    const testData = {
      codigo_entidad: this.codigo_entidad,
      test_id: this.testId,
      answers: this.answers
    };
    console.log(testData);

    this.testService.submitTest(testData).subscribe(response => {
      
      if (response.diagnosis) {
        Swal.fire({
          title: 'Diagnóstico',
          text: `Diagnóstico: ${response.diagnosis}`, 
          icon: 'success'
        }).then(() => {
          this.router.navigate(['/dashboard/perfil']);  // Redirect to main page
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'No se encontró un diagnóstico para la puntuación dada',
          icon: 'error'
        });
      }
    });
  }

  selectOption(questionId: number, optionId: number): void {
    const answerIndex = this.answers.findIndex(a => a.question_id === questionId);
    if (answerIndex !== -1) {
      this.answers[answerIndex].option_id = optionId;
    } else {
      this.answers.push({ question_id: questionId, option_id: optionId });
    }
  }
}
