const xlsx = require("xlsx");
const fs = require("fs");

class FileHandler {
  /**
   * Reads data from an Excel file and returns it as JSON.
   * @param {string} filePath - The path to the Excel file.
   * @returns {Array<Object>} - Parsed data from the Excel file.
   * @throws {Error} - Throws an error if the file cannot be read.
   */
  static readExcel(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        throw new Error(`File not found: ${filePath}`);
      }

      const workbook = xlsx.readFile(filePath);
      const sheet = workbook.Sheets[workbook.SheetNames[0]];

      if (!sheet) {
        throw new Error(`No sheets found in file: ${filePath}`);
      }

      return xlsx.utils.sheet_to_json(sheet);
    } catch (error) {
      throw new Error(`Error reading Excel file: ${error.message}`);
    }
  }

  /**
   * Writes data to an Excel file.
   * @param {Array<Object>} data - Data to write.
   * @param {string} outputFile - The output file path.
   * @throws {Error} - Throws an error if the file cannot be written.
   */
  static writeExcel(data, outputFile) {
    try {
      if (!Array.isArray(data) || data.length === 0) {
        throw new Error("Invalid data: Data must be a non-empty array.");
      }

      const worksheet = xlsx.utils.json_to_sheet(data);
      const workbook = xlsx.utils.book_new();
      xlsx.utils.book_append_sheet(
        workbook,
        worksheet,
        "Secret Santa Assignments"
      );

      xlsx.writeFile(workbook, outputFile);
    } catch (error) {
      throw new Error(`Error writing Excel file: ${error.message}`);
    }
  }
}

module.exports = FileHandler;
