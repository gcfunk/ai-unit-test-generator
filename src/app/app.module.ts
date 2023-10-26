import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import the FormsModule

import { AppComponent } from './app.component';
import { TestMeComponent } from './test-me/test-me.component';

@NgModule({
  declarations: [AppComponent, TestMeComponent],
  imports: [BrowserModule, FormsModule], // Add the FormsModule to the imports array
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}