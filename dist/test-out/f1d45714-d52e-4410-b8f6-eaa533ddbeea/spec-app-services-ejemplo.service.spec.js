import {
  Injectable,
  TestBed,
  __decorate
} from "./chunk-UGTV6YMT.js";
import "./chunk-EVSPGG2W.js";

// src/app/services/ejemplo.service.ts
var EjemploService = class EjemploService2 {
  suma(a, b) {
    return a + b;
  }
};
EjemploService = __decorate([
  Injectable({
    providedIn: "root"
  })
], EjemploService);

// src/app/services/ejemplo.service.spec.ts
describe("EjemploService", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EjemploService]
    });
    service = TestBed.inject(EjemploService);
  });
  it("Deber\xEDa sumar 2 n\xFAmeros correctamente", () => {
    const resultado = service.suma(2, 5);
    expect(resultado).toBe(7);
  });
});
//# sourceMappingURL=spec-app-services-ejemplo.service.spec.js.map
