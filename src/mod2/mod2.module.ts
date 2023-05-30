import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModComponent } from './mod/mod.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ModComponent],
  imports: [CommonModule, BrowserModule],
  bootstrap: [ModComponent],
})
export class Mod2Module {}
