import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';
import { AlunoService } from '../aluno.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})

export class AlunoComponent implements OnInit {

  alunos: Aluno[] = [];
  selectedAluno?: Aluno;

  constructor(private alunoService: AlunoService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getAlunos();
  }

  onSelect(aluno: Aluno): void {
    this.selectedAluno = aluno;
    this.messageService.add(`aLUNOSComponent: Selected ALUNO periodo=${aluno.periodo}`);
  }

  getAlunos(): void {
    this.alunoService.getAlunos()
      .subscribe(alunos => this.alunos = alunos);
  }

  add(nome: string): void {
    nome = nome.trim();
    if (!nome) { return; }
    this.alunoService.addAluno({ nome } as Aluno)
      .subscribe(aluno => {
        this.alunos.push(aluno);
      });
  }

  delete(aluno: Aluno): void {
    this.alunos = this.alunos.filter(a => a !== aluno);
    this.alunoService.deleteAluno(aluno.id).subscribe();
  }

}