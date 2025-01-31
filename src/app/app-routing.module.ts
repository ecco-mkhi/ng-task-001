import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';


const routes: Routes = [

	{
		path: 'list',
		component: GridComponent
	},
	{
		path: 'list/:id',
		component: GridComponent,
	},
	{
		path: '',
		redirectTo: 'list',
		pathMatch: 'full',
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
