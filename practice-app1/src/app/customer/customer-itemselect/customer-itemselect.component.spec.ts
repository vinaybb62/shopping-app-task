import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerItemselectComponent } from './customer-itemselect.component';

describe('CustomerItemselectComponent', () => {
  let component: CustomerItemselectComponent;
  let fixture: ComponentFixture<CustomerItemselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerItemselectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerItemselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
