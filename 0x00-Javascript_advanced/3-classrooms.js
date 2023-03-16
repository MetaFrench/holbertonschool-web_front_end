function createClassRoom(numberOfStudents) {
  function studentSeat(seat) {
    return function() {
      return seat;
    }
  }
  
  const students = [];
  
  for (let i = 0; i < numberOfStudents; i++) {
    students.push(studentSeat(i + 1));
  }
  
  return students;
}

const classRoom = createClassRoom(10);

// Example usage:
console.log(classRoom[0]()); // Displays 1
console.log(classRoom[3]()); // Displays 4
console.log(classRoom[9]()); // Displays 10
