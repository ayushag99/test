import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { MainComponent } from './Component/main/main.component';
import { UserComponent } from './Component/user/user.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserFormComponent } from './Component/Form/user-form/user-form.component';
import { WorkItemFormComponent } from './Component/Form/work-item-form/work-item-form.component';
import { VehicleFormComponent } from './Component/Form/vehicle-form/vehicle-form.component';
import { TerminalFormComponent } from './Component/Form/terminal-form/terminal-form.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { EntryComponent } from './Component/entry/entry.component';
import { LoginFormComponent } from './Component/Form/login-form/login-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { CreateWorkItemComponent } from './Component/Template/create-work-item/create-work-item.component';
import { AllWorkitemsComponent } from './Component/Template/all-workitems/all-workitems.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { VehicleComponent } from './Component/Template/vehicle/vehicle.component';
import { TerminalComponent } from './Component/Template/terminal/terminal.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    UserComponent,
    UserFormComponent,
    WorkItemFormComponent,
    TerminalFormComponent,
    VehicleFormComponent,
    LoginFormComponent,
    DashboardComponent,
    EntryComponent,
    CreateWorkItemComponent,
    AllWorkitemsComponent,
    VehicleComponent,
    TerminalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
