import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChallengesDatatableComponent } from './my-challenges-datatable.component';

describe('MyChallengesDatatableComponent', () => {
  let component: MyChallengesDatatableComponent;
  let fixture: ComponentFixture<MyChallengesDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyChallengesDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChallengesDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
