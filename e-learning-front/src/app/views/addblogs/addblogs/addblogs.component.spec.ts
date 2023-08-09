import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddblogsComponent } from './addblogs.component';

describe('AddblogsComponent', () => {
  let component: AddblogsComponent;
  let fixture: ComponentFixture<AddblogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddblogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
