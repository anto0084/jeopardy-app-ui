import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BuildEnvironment } from '../environmnet/build-environmnet';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient, private buildEnvironment: BuildEnvironment) { }


  public submitAnswers(answers: any[], questionId: string, gameId: string, team: any): Observable<any> {
    const params = {
      answers,
      team
    };

    console.log(team);
    return this.http
      .post(`${this.buildEnvironment.serviceHost}game/play/${gameId}/${questionId}`, params)
      .pipe(map(response => response['payload']))
      .pipe(catchError(err => {
        return throwError(err);
      }));
  }
}
