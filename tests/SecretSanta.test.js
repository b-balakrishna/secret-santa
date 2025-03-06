const SecretSanta = require("../src/SecretSanta");

const employees = [
  { Employee_Name: "Alice", Employee_EmailID: "alice@example.com" },
  { Employee_Name: "Bob", Employee_EmailID: "bob@example.com" },
  { Employee_Name: "Charlie", Employee_EmailID: "charlie@example.com" },
];

const previousAssignments = [
  {
    Employee_EmailID: "alice@example.com",
    Secret_Child_EmailID: "bob@example.com",
  },
];

describe("SecretSanta", () => {
  test("should throw an error for invalid employee list", () => {
    expect(() => new SecretSanta([], [])).toThrow(
      "At least two employees are required for Secret Santa."
    );
  });

  test("should generate valid assignments", () => {
    const secretSanta = new SecretSanta(employees, previousAssignments);
    const assignments = secretSanta.assign();

    expect(assignments.length).toBe(employees.length);
    assignments.forEach(({ Employee_EmailID, Secret_Child_EmailID }) => {
      expect(Employee_EmailID).not.toBe(Secret_Child_EmailID); // No self-assignment
    });
  });

  test("should not assign previous year's Secret Child", () => {
    const secretSanta = new SecretSanta(employees, previousAssignments);
    const assignments = secretSanta.assign();

    assignments.forEach(({ Employee_EmailID, Secret_Child_EmailID }) => {
      expect(
        previousAssignments.some(
          (prev) =>
            prev.Employee_EmailID === Employee_EmailID &&
            prev.Secret_Child_EmailID === Secret_Child_EmailID
        )
      ).toBe(false);
    });
  });
});
