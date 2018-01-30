import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeroService } from './hero.service';

import { AppComponent } from './app.component';
import { HeroesModuleModule } from './heroes-module/heroes-module.module';
import { CalculatorModule } from 'angularcalculatorlibrary';
import { CalculatorService } from 'angularcalculatorlibrary';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModuleModule
  ],
  providers: [HeroService, CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

