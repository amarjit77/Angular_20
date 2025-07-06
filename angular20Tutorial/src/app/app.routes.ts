import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { Databinding } from './components/databinding/databinding';
import { SignalEx } from './components/signal-ex/signal-ex';
import { Controlflow } from './components/controlflow/controlflow';
import { User } from './components/user/user';

export const routes: Routes = [
    { path: 'Admin', component: Admin },
    { path: 'User', component: User },
    { path: 'ControlFlow', component: Controlflow },
    { path: 'Signal', component: SignalEx },
    { path: 'Databinding', component: Databinding },
];
