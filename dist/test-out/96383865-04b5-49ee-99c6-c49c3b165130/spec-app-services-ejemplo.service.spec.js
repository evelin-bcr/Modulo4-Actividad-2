import {
  Injectable,
  TestBed
} from "./chunk-HGQLXVXA.js";
import "./chunk-EVSPGG2W.js";

// node_modules/tslib/tslib.es6.mjs
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

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
