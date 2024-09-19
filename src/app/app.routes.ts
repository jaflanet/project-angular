import { Routes } from '@angular/router';
import { OutputTableComponent } from './output-table/output-table.component';
import { InputFormComponent } from './input-form/input-form.component';
import { UnknownPageComponent } from './unknown-page/unknown-page.component';

export const routes: Routes = [
  {
    path: '',
    component: OutputTableComponent,
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
