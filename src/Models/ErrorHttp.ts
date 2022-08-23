import { HttpErrorResponse } from "@angular/common/http";

export function ErrorHttp(error:HttpErrorResponse):string{
    console.log(error)
    if(error.status === 404){
        return "API de dados não encontrada";
    }
    else if(error.status === 0){
        return "Sem conexão com a rede";
    }
    else{
        return "Erro na conexão com o banco de dados";
    }
}