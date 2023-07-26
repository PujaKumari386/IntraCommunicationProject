import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgroupComponent } from './addgroup.component';

describe('AddgroupComponent', () => {
  let component: AddgroupComponent;
  let fixture: ComponentFixture<AddgroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddgroupComponent]
    });
    fixture = TestBed.createComponent(AddgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
