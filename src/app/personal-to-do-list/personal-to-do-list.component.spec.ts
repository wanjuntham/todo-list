import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalToDoListComponent } from './personal-to-do-list.component';

describe('PersonalToDoListComponent', () => {
  let component: PersonalToDoListComponent;
  let fixture: ComponentFixture<PersonalToDoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalToDoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
