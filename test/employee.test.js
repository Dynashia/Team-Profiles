const Employee = require('../lib/Employee');

describe('Employee', () => {
    it("should create an object with 'name', 'id', 'email'", () => {
      const employee = new Employee('Apple', '24241', 'apple@company.com');

      expect(employee.name).toEqual('Apple'); 
      expect(employee.id).toEqual('2424'); 
      expect(employee.email).toEqual('Apple@company.com');
  });

  describe('getName', () => {
    it('return employee name', () => {
      const employee = new Employee('Apple', '2424', 'apple@company.com');
      let name = employee.getName();

      expect(name).toEqual('Apple');
    });
  });
  
  describe('getId', () => {
    it('return employee ID number', () => {
      const employee = new Employee('Apple', '2424', 'apple@company.com');
      let id = employee.getId();

      expect(id).toEqual('2424');
    });
  });
  
  describe('getEmail', () => {
    it('return employee email address', () => {
      const employee = new Employee('Apple', '2424', 'apple@company.com');
      let email = employee.getEmail();

      expect(email).toEqual('apple@company.com');
    });
  });
  
  describe('getRole', () => {
    it('return employee Role', () => {
      const employee = new Employee('Apple', '2424', 'apple@company.com');
      let role = employee.getRole();

      expect(role).toEqual(expect.any(String));
    });
  });
  
});
