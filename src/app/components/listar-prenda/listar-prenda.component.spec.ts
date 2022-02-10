import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPrendaComponent } from './listar-prenda.component';

describe('ListarPrendaComponent', () => {
  let component: ListarPrendaComponent;
  let fixture: ComponentFixture<ListarPrendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPrendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPrendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
