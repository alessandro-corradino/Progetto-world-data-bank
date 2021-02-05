import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelazioneComponent } from './relazione.component';

describe('RelazioneComponent', () => {
  let component: RelazioneComponent;
  let fixture: ComponentFixture<RelazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelazioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
