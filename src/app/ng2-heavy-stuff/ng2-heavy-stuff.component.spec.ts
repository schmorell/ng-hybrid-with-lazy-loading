import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2HeavyStuffComponent } from './ng2-heavy-stuff.component';

describe('Ng2HeavyStuffComponent', () => {
  let component: Ng2HeavyStuffComponent;
  let fixture: ComponentFixture<Ng2HeavyStuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2HeavyStuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2HeavyStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
