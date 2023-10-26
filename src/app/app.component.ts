import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

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

  // this function calls the chatGPT API to generate a response
  // with the prompt of "Generate angular unit tests for the following component:"
  // followed by the component code
  // the response is then set to the unitTestCode variable
  generateUnitTests() {
    this.isLoading = true;
    this.error = '';
    this.unitTestCode = '';
    fetch('https://api.openai.com/v1/engines/gpt-3.5-turbo/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + environment.OPENAI_API_KEY
      },
      body: JSON.stringify({
        prompt: "Generate angular unit tests for the following component:\n" + this.componentCode,
        max_tokens: 64,
        temperature: 0.7,
        top_p: 1,
        n: 1,
        stream: false,
        logprobs: null,
        stop: "\n"
      })
    })
      .then(response => response.json())
      .then(data => {
        this.unitTestCode = data.choices[0].text;
        this.isLoading = false;
      })
      .catch((error) => {
        this.error = error;
        this.isLoading = false;
      });
  }
}
