import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';
import { ALUNOS } from '../mock-aluno';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})

export class AlunoComponent implements OnInit {

  alunos = ALUNOS;
  selectedAluno?: Aluno;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(aluno: Aluno): void {
    this.selectedAluno = aluno;
  }
}