class DisjointSet {
  constructor(size) {
    this.parent = new Array(size);
    this.rank = new Array(size);

    // Initialize each element as a disjoint set with rank 0
    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
      this.rank[i] = 0;
    }
  }

  // Find operation with path compression
  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  // Union operation by rank
  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);

    if (rootX === rootY) return;

    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }
  }

  // Utility function to check if two elements belong to the same set
  isConnected(x, y) {
    return this.find(x) === this.find(y);
  }
}

// Example usage:
const ds = new DisjointSet(10);

// Initially all elements are disjoint sets
console.log(ds.isConnected(0, 1)); // false

// Merge sets containing elements 0 and 1
ds.union(0, 1);
console.log(ds.isConnected(0, 1)); // true

// Merge sets containing elements 1 and 2
ds.union(1, 2);
console.log(ds.isConnected(0, 2)); // true

// Merge sets containing elements 3 and 4
ds.union(3, 4);
ds.union(5, 8);
ds.union(2, 3);
// console.log(ds.isConnected(3, 4)); // true

// // Sets containing elements 0, 1, 2 are now connected
// console.log(ds.isConnected(0, 2)); // true
// console.log(ds.isConnected(1, 2)); // true

console.log("ds.parent", ds.parent);
console.log("ds.rank", ds.rank);
