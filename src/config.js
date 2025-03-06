const path = require("path");

module.exports = {
  EMPLOYEE_FILE: path.join(__dirname, "../data/Employee-List.xlsx"),
  PREVIOUS_FILE: path.join(
    __dirname,
    "../data/Secret-Santa-Game-Result-2023.xlsx"
  ),
  OUTPUT_FILE: path.join(
    __dirname,
    "../data/Secret-Santa-Assignments-2024.xlsx"
  ),
};
