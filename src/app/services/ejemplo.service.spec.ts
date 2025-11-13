// Imortaciones necesarias para las pruebas unitarias

import { TestBed } from '@angular/core/testing';  //configurar el entorno de pruebas
import { EjemploService } from './ejemplo.service'; //importar el servicio o componente a probar

//Definición del bloque o grupo de pruebas unitarias
describe('EjemploService', () => {
  let service: EjemploService;


  // Configurar el entorno de pruebas e inyectar lo que se necesite 
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EjemploService]
    });
    service = TestBed.inject(EjemploService);
  });


  it('Debería sumar 2 números correctamente', ()=>{
    const resultado = service.suma(2,5);
    expect(resultado).toBe(7);
  })
});
