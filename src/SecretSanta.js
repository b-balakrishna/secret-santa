class SecretSanta {
    constructor(employees, previousAssignments) {
      if (!Array.isArray(employees) || employees.length < 2) {
        throw new Error("At least two employees are required for Secret Santa.");
      }
  
      this.employees = employees;
      this.previousPairs = new Set(
        previousAssignments.map(
          (entry) => `${entry.Employee_EmailID}-${entry.Secret_Child_EmailID}`
        )
      );
    }
  
    /**
     * Fisher-Yates Shuffle Algorithm to shuffle an array
     * @param {Array} array - The array to shuffle
     * @returns {Array} - The shuffled array
     */
    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
  
    /**
     * Generates valid Secret Santa assignments
     * @returns {Array} - The list of Secret Santa assignments
     * @throws {Error} - If assignment is impossible
     */
    assign() {
      let employees = [...this.employees];
      let shuffled = this.shuffle([...employees]);
  
      for (let attempt = 0; attempt < 10; attempt++) {
        let assignments = [];
        let assigned = new Set();
  
        for (let giver of employees) {
          let possibleChildren = shuffled.filter(
            (child) =>
              child.Employee_EmailID !== giver.Employee_EmailID && // No self-assignment
              !this.previousPairs.has(
                `${giver.Employee_EmailID}-${child.Employee_EmailID}`
              ) &&
              !assigned.has(child.Employee_EmailID) // Not already assigned
          );
  
          if (possibleChildren.length === 0) {
            shuffled = this.shuffle([...employees]); // Reshuffle and retry
            assigned.clear();
            break;
          }
  
          let selectedChild = possibleChildren[0];
          assigned.add(selectedChild.Employee_EmailID);
  
          assignments.push({
            Employee_Name: giver.Employee_Name,
            Employee_EmailID: giver.Employee_EmailID,
            Secret_Child_Name: selectedChild.Employee_Name,
            Secret_Child_EmailID: selectedChild.Employee_EmailID,
          });
        }
  
        if (assignments.length === employees.length) {
          return assignments; // Success
        }
      }
  
      throw new Error(
        "Failed to generate a valid Secret Santa assignment after multiple attempts."
      );
    }
  }
  
  module.exports = SecretSanta;
  