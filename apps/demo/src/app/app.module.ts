import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DemoLibModule } from '@cy-asset-bug-repro/demo-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    DemoLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
