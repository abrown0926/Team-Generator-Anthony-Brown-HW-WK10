// using Employee constructor 
const Employee = require('../lib/Employee');

// creates employee object 
test('Should return an employee object with name, id, and email', () => {
    const employee = new Employee('Tony', 1, 'Tony@test.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// gets id from getId() 
test('Should get employee name', () => {
    const employee = new Employee('Tony', 1, 'Tony@test.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// gets id from getId() 
test('Should get employee ID', () => {
    const employee = new Employee('Tony', 1, 'Tony@test.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets emails from getEmail()
test('Should get employee email', () => {
    const employee = new Employee('Tony', 1, 'Tony@test.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets role from getRole()
test('Should get role of employee', () => {
    const employee = new Employee('Tony', 1, 'Tony@test.com');

    expect(employee.getRole()).toEqual("Employee");
}); 