import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoComponent } from './aluno/aluno.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlunoDetailComponent } from './aluno-detail/aluno-detail.component';

const routes: Routes = [
  { path: 'alunos', component: AlunoComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: AlunoDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
