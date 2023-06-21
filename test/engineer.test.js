const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
        it("should create a Engineer object with 'name', 'id', 'email', 'github'", () => {
        const engineer = new Engineer('Apple', '2424', 'apple@company.com', 'apple');

        expect(engineer.name).toEqual('Apple'); 
        expect(engineer.id).toEqual('2424'); 
        expect(engineer.email).toEqual('apple@company.com');        
        expect(engineer.github).toEqual('apple');
    });
 
    describe('getRole', () => {
        it('return employee Role', () => {
        const engineer = new Engineer('Apple', '2424', 'apple@company.com', 'apple');
        let value = engineer.getRole();

        expect(value).toEqual('Engineer');
        });
    });
 
    describe('getGithub', () => {
        it('return Engineer github user name', () => {
        const engineer = new Engineer('Apple', '2424', 'apple@company.com', 'apple');
        let value = engineer.getGithub();

        expect(value).toEqual('apple');
        });
    });
  
  
});