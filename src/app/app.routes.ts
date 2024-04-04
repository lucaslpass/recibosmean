import { Routes } from '@angular/router';
import { ListarRecibosComponent } from './components/listar-recibos/listar-recibos.component';
export const routes: Routes = [
    {path : '', component : ListarRecibosComponent},
    { path: '**', redirectTo: '', pathMatch: 'full'}
];
