import { Routes } from '@angular/router';
import { OutputTableComponent } from './output-table/output-table.component';
import { InputFormComponent } from './input-form/input-form.component';
import { UnknownPageComponent } from './unknown-page/unknown-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard } from '../auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  {
    path: 'landing',
    component: OutputTableComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add',
    component: InputFormComponent,
  },
  {
    path: 'edit/:id',
    component: InputFormComponent,
  },
  {
    path: '**',
    component: UnknownPageComponent,
  },
];
