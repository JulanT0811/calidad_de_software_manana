describe("smoke", () => {
  test("jest está configurado", () => {
    expect(true).toBe(true);
  });

  test("jest está configurado", ()=> {
    const num1:number=5;
    const num2:number=3;
    const resultado:number=num1+num2;
    expect(resultado).toBe(8);

    const basemayor:number = 3;
    const basemenor:number = 6;
    const altura:number = 5;
    const resultado1:number=(basemayor + basemenor * altura)/2
    expect(resultado1).toBe(16.5);
  });
});