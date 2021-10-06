// using Engineer constructor 
const Engineer = require('../lib/Engineer');

// creating engineer object  
test('Should return an an Engineer object', () => {
    const engineer = new Engineer('Tony', 2, 'test@gmail.com', 'testUser');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// gets github from getGithub()
test('Should get engineer github value', () => {
    const engineer = new Engineer('Tony', 2, 'test@gmail.com', 'testUser');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole() 
test('Should get role of employee', () => {
    const engineer = new Engineer('Tony', 2, 'test@gmail.com', 'testUser');

    expect(engineer.getRole()).toEqual("Engineer");
});