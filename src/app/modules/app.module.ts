import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutComponent } from '../components/layout/layout.component';
import { HeaderComponent } from '../components/header/header.component';
import { LogoComponent } from '../components/logo/logo.component';
import { HeadingPrimaryComponent } from '../components/heading-primary/heading-primary.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    LogoComponent,
    HeadingPrimaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
