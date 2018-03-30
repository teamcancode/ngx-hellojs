import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWindowsComponent } from './hello-windows.component';

describe('HelloWindowsComponent', () => {
  let component: HelloWindowsComponent;
  let fixture: ComponentFixture<HelloWindowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloWindowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
