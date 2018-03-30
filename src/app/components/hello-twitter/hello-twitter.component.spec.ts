import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloTwitterComponent } from './hello-twitter.component';

describe('HelloTwitterComponent', () => {
  let component: HelloTwitterComponent;
  let fixture: ComponentFixture<HelloTwitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloTwitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloTwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
