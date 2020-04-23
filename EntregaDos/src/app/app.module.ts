import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './main-components/header/header.component';
import { MenuComponent } from './main-components/menu/menu.component';
import { AdminDashboardComponent } from './modules/admin/components/admin-dashboard/admin-dashboard.component';
import { TableStrikesComponent } from './modules/admin/components/table-strikes/table-strikes.component';
import { SidebarComponent } from './main-components/sidebar/sidebar.component';
import { ProfileComponent } from './main-components/profile/profile.component';

import { LandingpageModule } from './modules/landingpage/landingpage.module';
import { LoginComponent } from './main-components/login/login.component';
import { SiginComponent } from './main-components/sigin/sigin.component';
import { RibbonComponent } from './main-components/ribbon/ribbon.component';
import {UserModule} from './modules/user/user.module';


import {TabContentComponent} from './main-components/tab-content/tab-content.component';



















@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    SiginComponent,
    RibbonComponent,
    HeaderComponent,
    MenuComponent,
    AdminDashboardComponent,
    TableStrikesComponent,
    SidebarComponent,
    ProfileComponent,
    TabContentComponent
   
  ],
  imports: [BrowserModule, LandingpageModule, UserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
