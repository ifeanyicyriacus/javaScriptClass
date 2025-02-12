const {getSecondEmployee} = require('./../src/exercise5')
const company = {
    name: "TechCorp",
    location: "San Francisco",
    employees: [
        {id: 1, name: "John Doe", department: "Engineering"},
        {id: 2, name: "Jane Doe", department: "HR"},
        {id: 3, name: "Harry Comb", department: "Marketing"},
        {id: 4, name: "Festus Knob", department: "Engineering"}],
}

test("test that find second employee returns correct value", () => {
    let actual = getSecondEmployee(company);
    let expected = company.employees[1];
    expect(actual).toBe(expected);
})