import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/Models/User';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';
import { ErrorHttp } from 'src/Models/ErrorHttp';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  //Capturar todos os usuários
  public GetAllUser():Promise<string | User[]>{
    return lastValueFrom(this.httpClient.get<User[]>(`${environment.urlApi}`))
      .then(
        (Response:User[]): User[]  => {
         return Response;
        }
      )
      .catch(
        (Error:HttpErrorResponse):string => {
          return ErrorHttp(Error);
        }
      );
  }

  public GetByIdUser(id:number){
    return lastValueFrom(this.httpClient.get<User>(`${environment.urlApi}`))
      .then(
        (Response:User): User => {
          return Response;
        }
       )
      .catch(
        (Error:HttpErrorResponse):string => {
          return ErrorHttp(Error);
        }
      );
  }
}
