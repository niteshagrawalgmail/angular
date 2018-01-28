import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from '../heroes/heroes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
  HeroesComponent
],
  declarations: [HeroesComponent]
})
export class HeroesModuleModule { }
