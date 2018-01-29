import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeroService } from './hero.service';

import { AppComponent } from './app.component';
import { HeroesModuleModule } from './heroes-module/heroes-module.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModuleModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }

