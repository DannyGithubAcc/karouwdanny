import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainmenuComponent } from './header/mainmenu.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './ngmaterial_summary';


@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent,
    SidemenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
