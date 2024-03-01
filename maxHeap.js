class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // Helper function to get the parent index of a node
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // Helper function to swap two elements in the heap
  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  // Insertion method to insert a new element into the heap
  insert(value) {
    // Add the new element to the end of the heap
    this.heap.push(value);

    // Get the index of the newly inserted element
    let currentIndex = this.heap.length - 1;

    // Perform heapify-up to maintain the max heap property
    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex);
      if (this.heap[currentIndex] > this.heap[parentIndex]) {
        // Swap the current element with its parent if it violates the max heap property
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        // If the max heap property is not violated, break out of the loop
        break;
      }
    }
  }

  // Method to print the heap (for visualization purposes)
  print() {
    console.log(this.heap);
  }
}

// Example usage:
const maxHeap = new MaxHeap();
maxHeap.insert(5);
maxHeap.insert(10);
maxHeap.insert(3);
maxHeap.insert(8);
maxHeap.insert(1);

maxHeap.print(); // Output: [10, 8, 3, 5, 1] (max heap representation)
