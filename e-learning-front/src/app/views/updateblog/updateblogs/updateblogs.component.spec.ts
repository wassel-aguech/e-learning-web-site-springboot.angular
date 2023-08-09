import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateblogsComponent } from './updateblogs.component';

describe('UpdateblogsComponent', () => {
  let component: UpdateblogsComponent;
  let fixture: ComponentFixture<UpdateblogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateblogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
