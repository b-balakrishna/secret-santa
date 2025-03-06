const path = require("path");
const fs = require("fs");
const FileHandler = require("./FileHandler");
const SecretSanta = require("./SecretSanta");

const EMPLOYEE_FILE = path.join(__dirname, "../data/Employee-List.xlsx");
const PREVIOUS_FILE = path.join(
  __dirname,
  "../data/Secret-Santa-Game-Result-2023.xlsx"
);
const OUTPUT_FILE = path.join(
  __dirname,
  "../data/Secret-Santa-Assignments-2024.xlsx"
);

try {
  // Check if input files exist
  if (!fs.existsSync(EMPLOYEE_FILE)) {
    throw new Error(`Employee file not found: ${EMPLOYEE_FILE}`);
  }
  if (!fs.existsSync(PREVIOUS_FILE)) {
    throw new Error(`Previous assignments file not found: ${PREVIOUS_FILE}`);
  }

  console.log("📂 Loading employee data...");
  const employees = FileHandler.readExcel(EMPLOYEE_FILE);
  console.log(`✅ Loaded ${employees.length} employees.`);

  console.log("📂 Loading previous assignments...");
  const previousAssignments = FileHandler.readExcel(PREVIOUS_FILE);
  console.log(`✅ Loaded ${previousAssignments.length} previous assignments.`);

  console.log("🎁 Assigning Secret Santa...");
  const secretSanta = new SecretSanta(employees, previousAssignments);
  const newAssignments = secretSanta.assign();

  // Ensure output directory exists
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  FileHandler.writeExcel(newAssignments, OUTPUT_FILE);
  console.log(`✅ Secret Santa assignments saved: ${OUTPUT_FILE}`);
} catch (error) {
  console.error("❌ Error:", error.message);
  process.exit(1); // Exit with failure status
}
