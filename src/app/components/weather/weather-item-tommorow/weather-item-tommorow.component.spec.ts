import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherItemTommorowComponent } from './weather-item-tommorow.component';

describe('WeatherItemTommorowComponent', () => {
  let component: WeatherItemTommorowComponent;
  let fixture: ComponentFixture<WeatherItemTommorowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherItemTommorowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherItemTommorowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
