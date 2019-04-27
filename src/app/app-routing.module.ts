import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompaniesComponent } from './companies/companies.component';
import { SearchComponent } from './search/search.component';
import { CompanyProfileComponent } from './companies/companyProfile/companyProfile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Companies', component: CompaniesComponent, children: [
    { path: '', component: SearchComponent },
    { path: ':name', component: CompanyProfileComponent },
  ] },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
