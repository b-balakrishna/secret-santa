const fs = require("fs");
const xlsx = require("xlsx");
const FileHandler = require("../src/FileHandler");

const testFile = "test.xlsx";
const sampleData = [
  { Employee_Name: "Alice", Employee_EmailID: "alice@example.com" },
  { Employee_Name: "Bob", Employee_EmailID: "bob@example.com" },
];

afterAll(() => {
  if (fs.existsSync(testFile)) {
    fs.unlinkSync(testFile); // Clean up test file
  }
});

describe("FileHandler", () => {
  test("should write data to an Excel file", () => {
    expect(() => FileHandler.writeExcel(sampleData, testFile)).not.toThrow();
    expect(fs.existsSync(testFile)).toBe(true);
  });

  test("should read data from an Excel file", () => {
    const data = FileHandler.readExcel(testFile);
    expect(data).toEqual(sampleData);
  });

  test("should throw an error when reading a non-existent file", () => {
    expect(() => FileHandler.readExcel("nonexistent.xlsx")).toThrow(
      "File not found"
    );
  });

  test("should throw an error when writing invalid data", () => {
    expect(() => FileHandler.writeExcel([], testFile)).toThrow(
      "Invalid data: Data must be a non-empty array."
    );
  });
});
