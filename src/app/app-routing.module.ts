import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ParcComponent } from './components/parc/parc.component';
import { UpdateFormComponent } from './components/update-form/update-form.component';

const routes: Routes = [
  { path:"home", component : ParcComponent },
  { path:"form", component : FormComponent },
  { path:"update/:id", component : UpdateFormComponent},
  { path:"**", redirectTo : "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
