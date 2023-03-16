function welcomeMessage(fullName) {
  return function() {
    alert(`Welcome ${fullName}`);
  }
}

let guillaume =  welcomeMessage("Guillaume");
let alex = welcomeMessage("Alex");
let fred = welcomeMessage("Fred");

// Example usage:
guillaume(); // Displays an alert with the message "Welcome Guillaume"
alex(); // Displays an alert with the message "Welcome Alex"
fred(); // Displays an alert with the message "Welcome Fred"
