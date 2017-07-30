import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamChallengesDatatableComponent } from './team-challenges-datatable.component';

describe('TeamChallengesDatatableComponent', () => {
  let component: TeamChallengesDatatableComponent;
  let fixture: ComponentFixture<TeamChallengesDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamChallengesDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamChallengesDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
