import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render three courses', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-curso-card').length).toBe(3);
    expect(compiled.textContent).toContain('Angular desde cero');
    expect(compiled.textContent).toContain('24 horas');
    expect(compiled.textContent).toContain('Bs 180');
  });

  it('should enroll a course only once and update the total', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const app = fixture.componentInstance;
    const enrollButton = compiled.querySelector('app-curso-card button') as HTMLButtonElement;
    enrollButton.click();
    fixture.detectChanges();

    expect(compiled.textContent).toContain('Inscritos: 1');
    expect(compiled.textContent).toContain('Total a pagar: Bs 180');
    expect(enrollButton.disabled).toBe(true);

    app.inscribir(app.cursos[0]);
    fixture.detectChanges();

    expect(compiled.textContent).toContain('Inscritos: 1');
    expect(compiled.textContent).toContain('Total a pagar: Bs 180');
  });
});
