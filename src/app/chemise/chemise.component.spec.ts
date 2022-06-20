import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemiseComponent } from './chemise.component';

describe('ChemiseComponent', () => {
  let component: ChemiseComponent;
  let fixture: ComponentFixture<ChemiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChemiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
