import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeImagesComponent } from './welcome-images.component';

describe('WelcomeImagesComponent', () => {
  let component: WelcomeImagesComponent;
  let fixture: ComponentFixture<WelcomeImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
