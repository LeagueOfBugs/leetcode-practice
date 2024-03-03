class QuickUnion {
  constructor(size) {
    this.parent = new Array(size);
    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
    }
  }

  // Find operation - find the root parent of the set containing element p
  find(p) {
    while (p !== this.parent[p]) {
      p = this.parent[p];
    }
    return p;
  }

  // Union operation - connect two elements by setting the root
  // parent of the set containing p as the parent of the set containing q
  union(p, q) {
    const rootP = this.find(p);
    const rootQ = this.find(q);
    this.parent[rootP] = rootQ;
    console.log("this.parent", this.parent);
  }

  // Utility method to check if two elements are connected
  connected(p, q) {
    return this.find(p) === this.find(q);
  }
}

const uf = new QuickUnion(10);
uf.union(1, 2);
uf.union(2, 5);
uf.union(5, 6);
uf.union(6, 7);
uf.union(3, 8);
uf.union(8, 9);

console.log(uf.connected(7, 2)); // true
