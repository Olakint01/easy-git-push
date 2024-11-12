//Class and Objects 
class Product {
  constructor(name, price, quantity) {
    this.name = name;      
    this.price = price;    
    this.quantity = quantity;  
  }

  updatePrice(newPrice) {
    this.price = newPrice;  
  }

  sellProduct(quantity) {
    if (quantity > this.quantity) {
      return `Not enough stock. Available quantity: ${this.quantity}`;  
    }
    this.quantity -= quantity;  
    return `Total sale amount: $${quantity * this.price}`;  
  }

  restockProduct(quantity) {
    this.quantity += quantity;  
  }
}
const product1 = new Product("iPhone", 1025, 25);
console.log(product1); 

product1.updatePrice(1092);
console.log(product1); 

const saleAmount = product1.sellProduct(5);
console.log(saleAmount);  

console.log(product1);

product1.restockProduct(10);
console.log(product1); 




//Write a function findUniqueWords
function findUniqueWords(words) {
  return [...new Set(words)];
}
const words = ["Mango", "banana", "apple", "orange", "banana"];
console.log(findUniqueWords(words));




//Write a function commonElements
function commonElements(array1, array2) {
  const set1 = new Set(array1);

  return array2.filter(item => set1.has(item));
}

const array1 = [1, 2, 3, 4, 5, 7, 10, 25];
const array2 = [3, 4, 5, 6, 25];

console.log(commonElements(array1, array2)); 





//Create a StudentGrades class
class StudentGrades {
  constructor() {
    this.grades = new Map();  
  }
  addGrade(studentName, grade) {
    this.grades.set(studentName, grade);  
  }
  getGrade(studentName) {
    if (this.grades.has(studentName)) {
      return this.grades.get(studentName);  
    } else {
      return `Student ${studentName} not found.`;  
    }
  }

  updateGrade(studentName, newGrade) {
    if (this.grades.has(studentName)) {
      this.grades.set(studentName, newGrade);  
      return `Grade updated for ${studentName}.`;  
    } else {
      return `Student ${studentName} not found.`;  
    }
  }
  removeStudent(studentName) {
    if (this.grades.has(studentName)) {
      this.grades.delete(studentName);  
      return `${studentName} has been removed.`;  
    } else {
      return `Student ${studentName} not found.`;  
    }
  }
}

// Example usage:
const studentGrades = new StudentGrades();

// Adding grades
studentGrades.addGrade("Ola", 95);
studentGrades.addGrade("David", 90);

// Updating Ola's grade
console.log(studentGrades.updateGrade("Ola", 97));  // "Grade updated for Ola."

// Getting grades
console.log(studentGrades.getGrade("Ola"));  // 97
console.log(studentGrades.getGrade("David"));  // 90

// Removing David
console.log(studentGrades.removeStudent("David"));  // "David has been removed."

// Trying to get David's grade after removal
console.log(studentGrades.getGrade("David"));  // "Student David not found."








//Create a simple password validation
function validatePassword(password) {
  if (password.length < 8) {
    return false;
  }
  
  const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
  if (!specialCharPattern.test(password)) {
    return false;
  }
  
  return true;  
}

console.log(validatePassword("password123"));  
console.log(validatePassword("P@ssw0rd!")); 






