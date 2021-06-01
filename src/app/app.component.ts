import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user';
import { NgForm } from '@angular/forms';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  user = {} as User;
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  saveUser(form: NgForm) {
    this.userService.saveUser(this.user).subscribe(() => {
      this.cleanForm(form);
    });
  }
  // Chama o serviço para obtém todos os carros
  getUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getUsers();
    form.resetForm();
    this.user = {} as User;
  }
}
