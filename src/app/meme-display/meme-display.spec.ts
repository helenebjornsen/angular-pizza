import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeDisplay } from './meme-display';

describe('MemeDisplay', () => {
  let component: MemeDisplay;
  let fixture: ComponentFixture<MemeDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemeDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemeDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
