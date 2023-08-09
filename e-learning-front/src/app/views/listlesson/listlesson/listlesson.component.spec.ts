import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlessonComponent } from './listlesson.component';

describe('ListlessonComponent', () => {
  let component: ListlessonComponent;
  let fixture: ComponentFixture<ListlessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListlessonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListlessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
