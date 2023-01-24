import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { LibComponent } from './lib.component';

describe(LibComponent.name, () => {
  it('loads assets', () => {
    cy.mount(LibComponent, {
      imports: [CommonModule, MatIconModule, MatCardModule, HttpClientModule],
    });
    cy.get('mat-icon svg').should('be.visible');
    cy.get('img').each(($img) => {
      const img = $img[0] as HTMLImageElement;
      expect(img.naturalWidth).to.be.greaterThan(0);
    });
  });

  it('should have styles from preprocessor', () => {
    cy.mount(LibComponent, {
      imports: [CommonModule, MatIconModule, MatCardModule, HttpClientModule],
    });
    cy.get('p').should('have.css', 'color', 'rgb(0, 0, 255)');
  });
});
