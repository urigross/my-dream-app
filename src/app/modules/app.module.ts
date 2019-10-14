import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutComponent } from '../components/layout/layout.component';
import { HeaderComponent } from '../components/header/header.component';
import { LogoComponent } from '../components/logo/logo.component';
import { HeadingPrimaryComponent } from '../components/heading-primary/heading-primary.component';
import { ButtonComponent } from '../components/button/button.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    LogoComponent,
    HeadingPrimaryComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
