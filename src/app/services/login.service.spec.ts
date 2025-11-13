import { TestBed } from "@angular/core/testing";
import { LoginService } from "./login.service";
// Configurar el cliente Http
import { provideHttpClient } from "@angular/common/http";
// Herramienta para simular peticiones HTTP
import { provideHttpClientTesting, HttpTestingController } from "@angular/common/http/testing";

// Definir el grupo de pruebas
describe('pruebas del servicio de Login', () => {

  // definir nuestros mock - simulación relacionada con peticiones de una API
  // Configuración inicial del entorno de pruebas

  let httpMock: HttpTestingController;
  let service: LoginService;

  const credencialesMock = {
    email: 'evelin-becerra@hotmail.com',
    password: '123'
  };

  const tokenMock = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),        // ✅ Con paréntesis
        provideHttpClientTesting(), // ✅ Con paréntesis
        LoginService
      ]
    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(LoginService);
  });

  // 2. Definir los casos de prueba

  // Caso1: simular la petición POST para iniciar sesión
  it('caso1: simular la peticion POST para iniciar sesion', () => { // ✅ Sin punto y coma
    const apiUrl = "http://localhost:9000/iniciarSesion";
    const respuestaMock = { mensaje: 'Inicio de sesion exitoso' };

    service.login(credencialesMock.email, credencialesMock.password).subscribe(respuesta => {
      expect(respuesta).toEqual(respuestaMock);     
    });

    // Simular la petición a un backend
    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('POST');
    req.flush(respuestaMock);
  });


it ('caso2: Obtener el token', () => {
localStorage.setItem('token', tokenMock);
expect(service.getToken()).toBe(tokenMock); // me debe traer exactamente el mismo token que se guarda en el localStorage

});

it('caso3: verificar si esta logueado o no', () => {
    localStorage.setItem('token', tokenMock);
    expect(service.isLoggedIn()).toBeTrue();
  });
  
  it('caso4: verificar si cierra sesion', () => {
    localStorage.setItem('token', tokenMock);
    service.logout(); //primero cierro sesion
    expect(localStorage.getItem('token')).toBeNull(); // verificar si el cierre de sesion fue exitoso
  });



});