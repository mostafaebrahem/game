import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';

import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:"",redirectTo:"main",pathMatch:'full'},
  {path:"main",component:MainComponent},
  {path:"board",component:BoardComponent},
  {path:"**",component:MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
