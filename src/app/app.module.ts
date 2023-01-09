import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoPesquisaComponent } from './produtos/produto-pesquisa/produto-pesquisa.component';
import { ProdutoCadastroComponent } from './produtos/produto-cadastro/produto-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoPesquisaComponent,
    ProdutoCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
