import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlessonsComponent } from './addlessons.component';

describe('AddlessonsComponent', () => {
  let component: AddlessonsComponent;
  let fixture: ComponentFixture<AddlessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlessonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddlessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
