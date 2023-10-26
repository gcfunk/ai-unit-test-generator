import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // Import the FormsModule

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('ai-unit-test-generator app is running!');
  });

  describe('generateUnitTests', () => {
    it('should set isLoading to true', () => {
      component.generateUnitTests();
      expect(component.isLoading).toBeTrue();
    });

    it('should set isLoading to false after 2 seconds', async () => {
      component.generateUnitTests();
      await new Promise(resolve => setTimeout(resolve, 2000));
      expect(component.isLoading).toBeFalse();
    });

    it('should set unitTestCode to the generated unit test code after 2 seconds', async () => {
      component.generateUnitTests();
      await new Promise(resolve => setTimeout(resolve, 2000));
      expect(component.unitTestCode).toEqual('This is the generated unit test code');
    });
  });
});