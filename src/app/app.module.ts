import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menuBar/menuBar.component';
import { SideMenuComponent } from './sideMenu/sideMenu.component';
import { HomeComponent } from './home/home.component';
import { SearchModule } from './search/search.module';
import { CompaniesModule } from './companies/companies.module';
import { SessionService } from 'src/common/services/session.service';

@NgModule({
   declarations: [
      AppComponent,
      MenuBarComponent,
      SideMenuComponent,
      HomeComponent,
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      MenuModule,
      MenubarModule,
      ToolbarModule,
      CompaniesModule,
      SearchModule,
   ],
   providers: [SessionService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
