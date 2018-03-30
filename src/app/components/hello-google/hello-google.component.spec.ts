import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloGoogleComponent } from './hello-google.component';

describe('HelloGoogleComponent', () => {
  let component: HelloGoogleComponent;
  let fixture: ComponentFixture<HelloGoogleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloGoogleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
