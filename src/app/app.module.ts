import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConvidadosComponent } from './pages/convidados/convidados.component';
import { EventoComponent } from './pages/evento/evento.component';
import { FuncionarioComponent } from './pages/funcionario/funcionario.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HttpClientModule } from  '@angular/common/http';
import { TokenService } from './services/token.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    CadastroComponent,
    ConvidadosComponent,
    EventoComponent,
    FuncionarioComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
  ],
  providers: [TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
