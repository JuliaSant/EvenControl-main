import { Component, OnInit } from '@angular/core';
import { servicesVersion } from 'typescript';
import { TokenService } from './../services/token.service';
import { Subscription } from 'rxjs';
import { ToastrComponentlessModule } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public users = null; // recebe todos os usuários, fazer loop nessa variavel pra renderizar eles
  public events = null; // recebe todos os eventos, fazer loop nessa variavel pra renderizar eles

  constructor(private service: TokenService) {

  }

  ngOnInit(): void {
    this.getToken()   //ir descomentando para testar cada funçao
    // this.readUsers()
    // this.readEvents()
    // this.readEventsID()
    // this.readEventsSub()
    // this.readEventsSubID
    // this.createUser()
    // this.createEvent()
    // this.createSubEvent()
  }
  cadastro(): void {
    const mock = {
      "email": "teste@teste.com",
      "full_name": "Fulano",
      "password": "teste",
    }
    this.service.cadastro(mock).subscribe(
      result => {
        if (result) {
          console.log("Sucesso")
          console.log(result);
        }
      },
      error => {
        if (error) {
          console.log("Error")
          console.log(error)
        }
      }
    )
  }

  getToken(): void {
    const mock = {
      "username": "adm@adm.com",
      "password": "123teste",
    }
    this.service.getToken(mock).subscribe(
      result => {
        if (result) {
          console.log("Token obtido")
          // let token = result.token_type + " " + result.access_token;
          let token = "Bearer " + result.access_token;
          localStorage.setItem("even_token", token);
          //redirecionar para a tela de dashboard
        }
      },
      error => {
        if (error) {
          console.log("Error")
          console.log(error)
          //mostrar mensagem de erro
        }
      }
    )
  }
  verifyToken() {
    if (localStorage.getItem('even_token') == null || localStorage.getItem('even_token') == "") {
      localStorage.clear()
      //redirecionar para o login
    }
  }

  readUsers(): void {  //GET
    this.service.readUsers().subscribe(
      result => {
        if (result) {
          console.log("Sucesso")
          this.users = result;
          console.log(this.users);
        }
      },
      error => {
        if (error) {
          console.log("Error")
          console.log(error)
          //mostrar mensagem de erro
        }
      }
    )
  }
  readEvents(): void {   //GET
    console.log("Read Events");
    this.service.readEvents().subscribe(
      result => {
        if (result) {
          console.log("Sucesso")
          console.log(result);
          this.events = result;

        }
      },
      error => {
        if (error) {
          console.log("Error")
          console.log(error)
          //mostrar mensagem de erro
        }
      }
    )
  }
  readEventsID(): void {  //GET
    console.log("Read Events ID");
    this.service.readEventsID().subscribe(
      result => {
        if (result) {
          console.log("Sucesso")
          console.log(result);
          this.events = result;

        }
      },
      error => {
        if (error) {
          console.log("Error")
          console.log(error)
          //mostrar mensagem de erro
        }
      }
    )
  }
  readEventsSub(): void { //GET
    console.log("Read Events Sub");
    this.service.readEventsID().subscribe(
      result => {
        if (result) {
          console.log("Sucesso")
          console.log(result);
          this.events = result;

        }
      },
      error => {
        if (error) {
          console.log("Error")
          console.log(error)
          //mostrar mensagem de erro
        }
      }
    )
  }
  readEventsSubID(): void { //GET
    console.log("Read Events Sub/ID");
    this.service.readEventsID().subscribe(
      result => {
        if (result) {
          console.log("Sucesso")
          console.log(result);
          this.events = result;

        }
      },
      error => {
        if (error) {
          console.log("Error")
          console.log(error)
          //mostrar mensagem de erro
        }
      }
    )
  }

  //POST

  createUser(): void {  //POST
    const mock = {
      "email": "luis@luis.com",
      "full_name": "Luis",
      "password": "password",
      "role": "password"
    }
    this.service.createUser(mock).subscribe(
      result => {
        if (result) {
          console.log("Usuario Criado")
          // let token = result.token_type + " " + result.access_token;
          let token = "Bearer " + result.access_token;
          localStorage.setItem("even_token", token);
          //redirecionar para a tela de dashboard
        }
      },
      error => {
        if (error) {
          console.log("Error")
          console.log(error)
          //mostrar mensagem de erro
        }
      }
    )
  }
  createEvent(): void {  //POST
    const mock = {
      "name": "EvenOne",
      "num_max_guest": 100,
      "dt_start": "2021-06-01T12:46:40.110Z",
      "dt_finish": "2021-06-01T12:46:40.110Z"
    }
    this.service.createEvent(mock).subscribe(
      result => {
        if (result) {
          console.log("Evento Criado")
          // let token = result.token_type + " " + result.access_token;
          let token = "Bearer " + result.access_token;
          localStorage.setItem("even_token", token);
          //redirecionar para a tela de dashboard
        }
      },
      error => {
        if (error) {
          console.log("Error")
          console.log(error)
          //mostrar mensagem de erro
        }
      }
    )
  }
  createSubEvent(): void {  //POST
    const mock = {
      "guest_id": 10,
      "event_id": 10
    }
    this.service.createSubEvent(mock).subscribe(
      result => {
        if (result) {
          console.log("EventoSub Criado")
          // let token = result.token_type + " " + result.access_token;
          let token = "Bearer " + result.access_token;
          localStorage.setItem("even_token", token);
          //redirecionar para a tela de dashboard
        }
      },
      error => {
        if (error) {
          console.log("Error")
          console.log(error)
          //mostrar mensagem de erro
        }
      }
    )
   }
  }