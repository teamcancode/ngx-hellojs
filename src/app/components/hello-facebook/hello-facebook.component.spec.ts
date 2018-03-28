import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloFacebookComponent } from './hello-facebook.component';

describe('HelloFacebookComponent', () => {
  let component: HelloFacebookComponent;
  let fixture: ComponentFixture<HelloFacebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
             declarations: [HelloFacebookComponent]
           })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
