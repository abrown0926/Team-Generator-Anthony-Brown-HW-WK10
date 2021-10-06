// using Intern constructor 
const Intern = require('../lib/Intern');

// creating intern object  
test('Should return an Intern object', () => {
    const intern = new Intern('Tony', 3, 'test@gmail.com', 'University of Texas');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// gets school from getSchool()
test('Should get intern school', () => {
    const intern = new Intern('Tony', 3, 'test@gmail.com', 'University of Texas');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()
test('Should get role of intern', () => {
    const intern = new Intern('Tony', 3, 'test@gmail.com', 'University of Texas');

    expect(intern.getRole()).toEqual("Intern");
}); 