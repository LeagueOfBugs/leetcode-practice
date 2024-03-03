class ConstantTimeSet {
  constructor() {
    // Initialize an array to simulate the set
    this.arr = [];
    // Initialize a map to store the indices of elements
    this.indexMap = new Map();
  }

  // Method to insert an element into the set
  insert(value) {
    if (!this.indexMap.has(value)) {
      // Insert value into the array
      this.arr.push(value);
      // Store the index of the inserted value in the map
      this.indexMap.set(value, this.arr.length - 1);
    }
  }

  // Method to delete an element from the set
  delete(value) {
    if (this.indexMap.has(value)) {
      const lastIndex = this.arr.length - 1;
      const index = this.indexMap.get(value);
      // Swap the element to be deleted with the last element in the array
      [this.arr[index], this.arr[lastIndex]] = [
        this.arr[lastIndex],
        this.arr[index],
      ];
      // Update the index of the last element in the map
      this.indexMap.set(this.arr[index], index);
      // Remove the value and its index from the map
      this.indexMap.delete(value);
      // Remove the last element from the array
      this.arr.pop();
    }
  }

  // Method to check if an element exists in the set
  has(value) {
    return this.indexMap.has(value);
  }

  // Method to get the size of the set
  size() {
    return this.arr.length;
  }
}

// Example usage:
const set = new ConstantTimeSet();
set.insert(1);
set.insert(2);
set.insert(3);
console.log(set.has(2)); // Output: true
set.delete(2);
console.log(set.has(2)); // Output: false
console.log(set.size()); // Output: 2
