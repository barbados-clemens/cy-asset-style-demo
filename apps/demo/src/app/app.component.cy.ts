import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DemoLibModule } from '@cy-asset-bug-repro/demo-lib';

describe(AppComponent.name, () => {
  it('renders', () => {
    cy.mount(AppComponent, {
      imports: [HttpClientModule, MatIconModule, MatCardModule, DemoLibModule],
    });
    cy.get('mat-icon svg').should('be.visible');
    cy.get('img').each(($img) => {
      const img = $img[0] as HTMLImageElement;
      expect(img.naturalWidth).to.be.greaterThan(0);
    });
  });
});
