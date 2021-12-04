import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Aluno } from './aluno';
import { ALUNOS } from './mock-aluno';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private messageService: MessageService) { }

  getAlunos(): Observable<Aluno[]> {
    const alunos = of(ALUNOS);
    this.messageService.add('AlunoService: fetched alunos')
    return alunos;
  }

  getAluno(id: number): Observable<Aluno> {
    const aluno = ALUNOS.find(a => a.id === id)!;
    this.messageService.add(`AlunoService: fetched aluno id=${id}`);
    return of(aluno);
  }
}
