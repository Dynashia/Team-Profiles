const Intern = require('../lib/Intern');

describe('Intern', () => {
        it("should create a Intern object with 'name', 'id', 'email', 'github', 'school'", () => {
        const intern = new Intern('Apple', '2424', 'apple@company.com', 'apple', 'UCF', 'UCF');

        expect(intern.name).toEqual('Apple'); 
        expect(intern.id).toEqual('2424'); 
        expect(intern.email).toEqual('apple@company.com');        
        expect(intern.github).toEqual('apple');        
        expect(intern.school).toEqual('UCF');
    });
 
    describe('getRole', () => {
        it('return employee\'s Role', () => {
        const intern = new Intern('Apple', '2424', 'apple@company.com', 'apple', 'UCF');
        let value = intern.getRole();

        expect(value).toEqual('Intern');
        });
    });
 
    describe('getGithub', () => {
        it('return Intern\'s github user name', () => {
        const intern = new Intern('Apple', '2424', 'apple@company.com', 'apple', 'UCF');
        let value = intern.getGithub();

        expect(value).toEqual('Apple');
        });
    });
 
    describe('getSchool', () => {
        it('return Intern\'s school', () => {
        const intern = new Intern('Apple', '2424', 'apple@company.com', 'apple', 'UCF');
        let value = intern.getSchool();

        expect(value).toEqual('UCF');
        });
    });

  
});