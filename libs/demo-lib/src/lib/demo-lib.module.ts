import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { LibComponent } from './lib.component';

@NgModule({
  declarations: [LibComponent],
  imports: [CommonModule, MatIconModule, MatCardModule, HttpClientModule],
  exports: [LibComponent],
})
export class DemoLibModule {}
