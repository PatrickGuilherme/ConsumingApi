import { Component } from '@angular/core';
import { User } from 'src/Models/User';
import { UserService } from 'src/Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public list_db:User[];
  public globalError:string;

  constructor(private userService:UserService) {
    this.list_db = [];
    this.InitializeData();
  }

  //Inicializa as consultas ao DB
  private async InitializeData():Promise<void> {
    await this.GetUserDB();
    this.teste();
  }

  //Consultar todos os usuários
  private async GetUserDB():Promise<void> {
    let result = await this.userService.GetAllUser();
    console.log("primeiro?")

    //Verifica o tipo de retorno
    if(typeof(result) === "object"){
      this.list_db = result;//Retornou a lista
    }else{
      this.globalError = result;//Retornou o erro
    }
  }
  
  // 
  public teste(){
    console.log("passou direto")
  }
}
