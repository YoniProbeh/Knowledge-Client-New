import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from './companies.component';
import { CompaniesRoutingModule } from './companies-routing.module';
import { CompanyProfileComponent } from './companyProfile/companyProfile.component';

@NgModule({
  imports: [
    CommonModule,
    CompaniesRoutingModule
  ],
  declarations: [
    CompaniesComponent, 
    CompanyProfileComponent
  ]
})
export class CompaniesModule { }
