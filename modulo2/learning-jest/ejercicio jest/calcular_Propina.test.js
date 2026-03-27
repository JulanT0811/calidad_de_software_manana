nodeconst calcularPropina = require("./calcularPropina");
describe("Función calcularPropina", () => {
  test("Debe calcular correctamente la propina y el total", () => {
    const result = calcularPropina(100, 10);
    expect(result.cuenta).toBe(100);
    expect(result.propina).toBeCloseTo(10);
    expect(result.totalPagar).toBeCloseTo(110);
  });
  test("Debe funcionar con porcentajes decimales", () => {
    const result = calcularPropina(85.5, 12.5);
    expect(result.propina).toBeCloseTo(10.6875);
    expect(result.totalPagar).toBeCloseTo(96.1875);
  });
  test("Debe lanzar error si la cuenta es inválida", () => {
    expect(() => calcularPropina(-50, 10)).toThrow("cuenta inválida");
    expect(() => calcularPropina(0, 10)).toThrow("cuenta inválida");
    expect(() => calcularPropina("100", 10)).toThrow("cuenta inválida");
  });
  test("Debe lanzar error si el porcentaje es inválido", () => {
    expect(() => calcularPropina(100, -5)).toThrow("porcentaje inválido");
    expect(() => calcularPropina(100, 150)).toThrow("porcentaje inválido");
    expect(() => calcularPropina(100, "20")).toThrow("porcentaje inválido");
  });
});