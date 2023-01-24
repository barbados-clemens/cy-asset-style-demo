import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'from-lib',
  template: `
    <h1>Demo Lib</h1>
    <mat-icon svgIcon="logo"></mat-icon>
    <mat-card>
      <mat-card-title>Card Title</mat-card-title>
      <mat-card-content>
        <p>I should be blue</p>
      </mat-card-content>
    </mat-card>

    <img src="assets/logo.png" alt="you should not see this alt" />
  `,
  styles: [
    `
      :host {
        display: block;
        outline: 3px solid blue;
        margin: 1rem;
      }
      @import 'variables';
      p {
        color: $alt-color;
      }
    `,
  ],
})
export class LibComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'logo',
      sanitizer.bypassSecurityTrustResourceUrl('assets/logo.svg')
    );
  }
}
