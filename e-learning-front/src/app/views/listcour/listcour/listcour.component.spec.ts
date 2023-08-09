import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcourComponent } from './listcour.component';

describe('ListcourComponent', () => {
  let component: ListcourComponent;
  let fixture: ComponentFixture<ListcourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
