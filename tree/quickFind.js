class QuickFind {
  constructor(size) {
    this.id = new Array(size);
    for (let i = 0; i < size; i++) {
      this.id[i] = i; // Initialize each element as its own set with its index as the identifier
    }
    console.log("this.id", this.id);
  }

  // Find operation - checks if two elements are connected (belong to the same set)
  find(p) {
    return this.id[p];
  }

  // Union operation - connects two elements by setting all elements with the same id as p to the id of q
  union(p, q) {
    const pid = this.id[p];
    const qid = this.id[q];
    for (let i = 0; i < this.id.length; i++) {
      if (this.id[i] === pid) {
        this.id[i] = qid;
      }
    }
    console.log("this.id", this.id);
  }

  // Utility method to check if two elements are connected
  connected(p, q) {
    return this.find(p) === this.find(q);
  }
}

// Example usage:
const uf = new QuickFind(10);

uf.union(1, 2);
uf.union(2, 5);
uf.union(5, 6);
uf.union(6, 7);
uf.union(3, 8);
uf.union(8, 9);

// console.log(uf.connected(1, 5)); // true
// console.log(uf.connected(5, 7)); // true
// console.log(uf.connected(4, 9)); // false

// uf.union(9, 4);

// console.log(uf.connected(4, 9)); // true
