# Secret Santa Assignment Project

## 📌 Project Overview
The Secret Santa Assignment Project automates the process of assigning Secret Santa pairs while ensuring that no employee gets the same Secret Child as the previous year. The project supports both **CSV** and **Excel** file formats for input and output.

## 🚀 Features
- Reads employee data from a **CSV** or **Excel** file.
- Ensures no employee is assigned to themselves.
- Avoids assigning the same Secret Child from previous assignments.
- Generates a new **Secret Santa** assignment.
- Writes the output to a CSV or Excel file.
- Includes **error handling** and validations.
- **Unit tests** ensure reliability.

---

## 🛠️ Installation Guide

### **Prerequisites**
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)

### **Setup Instructions**
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/secret-santa.git
   cd secret-santa
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

---

## 📖 Usage Instructions

### **Running the Application**
1. Ensure you have an **employee list file** (CSV or Excel) in the project directory.
2. Modify `index.js` to specify the correct file path.
3. Run the application:
   ```sh
   node start
   ```

### **Expected Output**
A new file `Secret-Santa-Assignments-2024.csv` or `Secret-Santa-Assignments-2024.xlsx` will be generated with assigned pairs.

---

## ✅ Testing Guide
The project includes **unit tests** to validate functionality.

### **Run Tests**
To execute the test suite, run:
```sh
npm test
```

Tests ensure:
- Valid assignments are generated.
- No employee is assigned to themselves.
- No past Secret Child is reassigned.

---

## ⚠️ Error Handling
- **Missing Files**: If an input file is not found, an error is thrown.
- **Invalid Data**: If the employee list is empty or malformed, an error is reported.
- **Assignment Failures**: If no valid assignments can be made, the process retries up to a set limit.

---

## 🔥 Contribution Guide
1. **Fork** the repository.
2. Create a **feature branch**.
3. **Commit** your changes.
4. Open a **pull request** for review.

For any issues, submit a **bug report** on GitHub.

---

## 📝 License
This project is open-source and licensed under the **ISC License**.

---

### 💡 **Author**
Developed by **b-balakrishna** 🚀

