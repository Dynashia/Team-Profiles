const Manager = require('../test/Manager');

describe('Manager', () => {
        it("should create a manager object with 'name', 'id', 'email', 'officeNum'", () => {
        
        const manager = new Manager('Apple', '2424', 'apple@company.com', 'QQ10');

        expect(manager.name).toEqual('Apple'); 
        expect(manager.id).toEqual('2424'); 
        expect(manager.email).toEqual('apple@company.com');        
        expect(manager.officeNum).toEqual('QQ10');
    });
 
    describe('getRole', () => {
        it('return employee Role', () => {
        
        const manager = new Manager('Apple', '2424', 'apple@company.com', 'QQ10');
        let value = manager.getRole();

        expect(value).toEqual('Manager');
        });
    });
 
    describe('getOfficeNum', () => {
        it('return manager office number', () => {

        const manager = new Manager('Apple', '2424', 'apple@company.com', 'QQ10');
        let value = manager.getOfficeNum();

        expect(value).toEqual('QQ10');
        });
    });
  
  
});