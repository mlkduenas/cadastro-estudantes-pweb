import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Aluno } from './aluno';
import { ALUNOS } from './mock-aluno';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private alunosUrl = 'http://localhost:3000/alunos';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.alunosUrl)
    .pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Aluno[]>('getAlunos', []))
    );
    //const alunos = of(ALUNOS);
    //this.messageService.add('AlunoService: fetched alunos')
    //return alunos;
  }

  getAluno(id: number): Observable<Aluno> {
    const url = `${this.alunosUrl}/${id}`;
    return this.http.get<Aluno>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Aluno>(`getAluno id=${id}`))
    );
  }

  /** Log a AlunoService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`AlunoService: ${message}`);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

/** PUT: update the hero on the server */
updateAluno(aluno: Aluno): Observable<any> {
  return this.http.put(this.alunosUrl, aluno, this.httpOptions).pipe(
    tap(_ => this.log(`Aluno atualizado id=${aluno.id}`)),
    catchError(this.handleError<any>('updateAluno'))///commit new
  );
}

/** POST: add a new hero to the server */
addAluno(aluno: Aluno): Observable<Aluno> {
  return this.http.post<Aluno>(this.alunosUrl, aluno, this.httpOptions).pipe(
    tap((newAluno: Aluno) => this.log(`Aluno adicionado com o id=${newAluno.id}`)),
    catchError(this.handleError<Aluno>('addAluno'))
  );
}

deleteAluno(id: number): Observable<Aluno> {
  const url = `${this.alunosUrl}/${id}`;

  return this.http.delete<Aluno>(url, this.httpOptions).pipe(
    tap(_ => this.log(`Aluno deletado id=${id}`)),
    catchError(this.handleError<Aluno>('deleteAluno'))
  );
}

}
