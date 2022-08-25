import { Component } from '@angular/core';
import { Address } from 'src/Models/Address';
import { Company } from 'src/Models/Company';
import { Geo } from 'src/Models/Geo';
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
    this.globalError = null;
    this.list_db = [];
  }


  public async ClickBtnGet(): Promise<void>{
    await this.GetUserDB();
  } 
  public async ClickBtnGetById(): Promise<void>{
    await this.GetByIdUser();
  } 
  public async ClickBtnPut(): Promise<void>{
    await this.PutUserDb();
  } 
  public async ClickBtnPost(): Promise<void>{
    await this.PostUserDb();
  } 
  public async ClickBtnDelete(): Promise<void>{
    await this.DeleteUserDb();
  }


  //Excluir usuário
  private async DeleteUserDb(): Promise<void>{
    let result = await this.userService.DeleteUser(1);

    //Verifica o tipo de retorno
    if(typeof(result) === "object"){
      console.log("DELETE executado");//Retornou a lista (object)
      console.log(result)
    }else{
      this.globalError = result;//Retornou o erro (string)
    }
  }
  //Consultar todos os usuários
  private async GetUserDB() : Promise<void> {
    let result = await this.userService.GetAllUser();

    //Verifica o tipo de retorno
    if(typeof(result) === "object"){
      this.list_db = result;//Retornou a lista (object)
      console.log("GET executado");//Retornou a lista (object)
      console.log(result)
    }else{
      this.globalError = result;//Retornou o erro (string)
    }
  }
  //Consultar usuário por id
  private async GetByIdUser() : Promise<void> {
    let result = await this.userService.GetByIdUser(1);

    //Verifica o tipo de retorno
    if(typeof(result) === "object"){
      console.log("GET BY executado");//Retornou a lista (object)
      console.log(result)
    }else{
      this.globalError = result;//Retornou o erro (string)
    }
  }
  //Criar usuário
  private async PostUserDb() : Promise<void> {
    const geo:Geo = new Geo("lat","lng");
    const address:Address = new Address("rua","suite","cidade","cep",geo);
    const company:Company = new Company("nome da companhia","catch Phrase","bs");
    const user:User = new User(1,"roberto","email@gmail.com","999875645","www.site.com",address,company);
    let result = await this.userService.PostUser(user);

    //Verifica o tipo de retorno
    if(typeof(result) === "object"){
      console.log("POST executado");//Retornou a lista (object)
      console.log(result)
    }else{
      this.globalError = result;//Retornou o erro (string)
    }
  }
  //Atualizar usuário
  private async PutUserDb() : Promise<void> {
    const geo:Geo = new Geo("lat, au au","lng");
    const address:Address = new Address("N SEI","suite","cidade","cep",geo);
    const company:Company = new Company("FIREHEARTH","catch Phrase","bs");
    const user:User = new User(1,"JOSEFI MEU FI","email@gmail.com","999875645","www.site.com",address,company);
    let result = await this.userService.PutUser(1,user);
    
    //Verifica o tipo de retorno
    if(typeof(result) === "object"){
      console.log("PUT executado");//Retornou a lista (object)
      console.log(result)
    }else{
      this.globalError = result;//Retornou o erro (string)
    }
  }
}