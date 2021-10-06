// using Manager constructor 
const Manager = require('../lib/Manager');

// creating manager object  
test('Should retnrun an Manager object', () => {
    const manager = new Manager('Tony', 90, 'test@gmail.com', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('Should get role of employee', () => {
    const manager = new Manager('Tony', 90, 'test@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 