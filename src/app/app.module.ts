import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunoDetailComponent } from './aluno-detail/aluno-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AlunoComponent,
    AlunoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
