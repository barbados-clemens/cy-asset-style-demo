import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

describe(AppComponent.name, () => {
  it('renders', () => {
    cy.mount(AppComponent, {
      imports: [HttpClientModule, MatIconModule, MatCardModule],
    });
  });
});
