function createClassRoom(numberOfStudents) 
	{
function studentSeat(seat) 
	{
        return () => seat;
    	}
	let students = [];
	for (let i = 0; i < numberOfStudents; i++) 
	{
        students.push(studentSeat(i + 1));
    	}

    return students;
	}

	let classRoom = createClassRoom(10);

console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());

