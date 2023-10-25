import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ai-unit-test-generator';
  isLoading = false;
  error = '';
  componentCode = '';
  unitTestCode = '';

  generateUnitTests() {
    this.isLoading = true;
    // Perform some async operation here
    setTimeout(() => {
      this.unitTestCode = 'This is the generated unit test code';
      this.isLoading = false;
    }, 2000);
  }
}
