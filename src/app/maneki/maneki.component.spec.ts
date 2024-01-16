import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManekiComponent } from './maneki.component';

describe('ManekiComponent', () => {
  let component: ManekiComponent;
  let fixture: ComponentFixture<ManekiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManekiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManekiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
