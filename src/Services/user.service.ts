import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/Models/User';
import { environment } from 'src/environments/environment';
import { last, lastValueFrom } from 'rxjs';
import { ErrorHttp } from 'src/Models/ErrorHttp';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  //[GET] Capturar todos os usuários
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

  //[GET] Capturar usuário por ID
  public GetByIdUser(id:number):Promise<string | User>{
    return lastValueFrom(this.httpClient.get<User>(`${environment.urlApi}/1`))
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

  //[POST] Criar usuário
  public PostUser(user:User):Promise<string | User>{
    return lastValueFrom(this.httpClient.post<User>(`${environment.urlApi}`,user))
      .then(
        (user:User):User => {
          return user;
        }
      )
      .catch(
        (Error:HttpErrorResponse):string => {
          return ErrorHttp(Error);
        }
      );
  }

  //[PUT] Atualizar usuário
  public PutUser(id:number, user:User): Promise<string | User>{
    return lastValueFrom(this.httpClient.put<User>(`${environment.urlApi}/${id}`,user))
      .then(
        (user:User):User => {
          return user;
        }
      )
      .catch(
        (Error:HttpErrorResponse):string => {
          return ErrorHttp(Error);
        }
      );
  }

  //[DELETE] Excluir usuário
  public DeleteUser(id:number): Promise<string | null>{
    return lastValueFrom(this.httpClient.delete<User>(`${environment.urlApi}/${id}`))
      .then(
        () => {
          return null;
        }
      )
      .catch(
        (Error:HttpErrorResponse):string => {
          return ErrorHttp(Error);
        }
      );
  }
}