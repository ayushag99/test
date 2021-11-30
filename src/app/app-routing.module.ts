import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { EntryComponent } from './Component/entry/entry.component';
import { LoginFormComponent } from './Component/Form/login-form/login-form.component';
import { UserFormComponent } from './Component/Form/user-form/user-form.component';
import { WorkItemFormComponent } from './Component/Form/work-item-form/work-item-form.component';
import { MainComponent } from './Component/main/main.component';
import { AllWorkitemsComponent } from './Component/Template/all-workitems/all-workitems.component';
import { CreateWorkItemComponent } from './Component/Template/create-work-item/create-work-item.component';
import { TerminalComponent } from './Component/Template/terminal/terminal.component';
import { VehicleComponent } from './Component/Template/vehicle/vehicle.component';
import { UserComponent } from './Component/user/user.component';
import { AdminGuardService } from './services/Guard/admin-guard.service';
import { AuthGuardService } from './services/Guard/auth-guard.service';

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: '',
    component: EntryComponent,
    children: [
      { path: 'register', component: UserFormComponent },
      { path: 'login', component: LoginFormComponent },
      { path: 'admin', component: LoginFormComponent },
    ],
  },
  {
    path: 'admin/dashboard',
    canActivate: [AdminGuardService],
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: AllWorkitemsComponent,
      },
      {
        path: 'vehicle',
        component: VehicleComponent,
      },
      {
        path: 'terminal',
        component: TerminalComponent,
      },
    ],
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuardService],
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: AllWorkitemsComponent,
      },
      {
        path: 'profile',
        component: UserComponent,
      },
      {
        path: 'workitem',
        component: CreateWorkItemComponent,
      },
      {
        path: 'workitem/:id',
        component: CreateWorkItemComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
