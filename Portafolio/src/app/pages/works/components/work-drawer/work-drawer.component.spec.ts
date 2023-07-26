import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDrawerComponent } from './work-drawer.component';

describe('WorkDrawerComponent', () => {
  let component: WorkDrawerComponent;
  let fixture: ComponentFixture<WorkDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkDrawerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
