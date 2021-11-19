import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  aluno: Aluno = {
    id: 1,
    nome: 'Roberval Silva'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
