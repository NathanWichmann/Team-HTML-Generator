const Employee = require('../library/Employee');
//this tests the employee class and its constructors, tests the employee, name, id and email 
describe('employee', () => {
  describe('Instantiate', () => {
    // Positive test
    it("should create an object with a 'text' property set to the 'text' argument provided when called with the 'new' keyword", () => {
      const e = new Employee();

      expect(typeof e).toBe('object');
    });

    // Exception test
    it("should create a name with the constructor", () => {
      // Arrange
      const name = "Nathan";
      const e = new Employee(name);

      // Assert
      expect(e.name).toBe(name);
    });
  });
  it("should create a email with the constructor", () => {
    // Arrange
    const test = "email@email.com";
    const e = new Employee('nathan', test, 4);

    // Assert
    expect(e.email).toBe(test);
  });
  it("should create an idwith the constructor", () => {
    // Arrange
    const test = "12345";
    const e = new Employee('nathan', 'email', '12345' );

    // Assert
    expect(e.id).toBe(test);
  });
});
