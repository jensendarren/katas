
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    // Average: O(log(n)) time | O(log(n)) space
    // Worst: O(n) time | O(n) space
    insert(value) {
        if(value < this.value) {
            if(this.left === null) {
                this.left = new BST(value)
            } else {
                this.left.insert(value)
            }
        } else {
            if(this.right === null) {
                this.right = new BST(value)
            } else {
                this.right.insert(value);
            }
        }
        return this;
    }

    // Average: O(log(n)) time | O(log(n)) space
    // Worst: O(n) time | O(n) space
    contains(value) {
        if(value<this.value) {
            if(this.left === null) {
                return false;
            } else {
                return this.left.contains(value);
            }
        } else if (value > this.value) {
            if(this.right === null) {
                return false;
            } else {
                return this.right.contains(value);
            }
        } else {
            return true;
        }
    }

    // Average: O(log(n)) time | O(log(n)) space
    // Worst: O(n) time | O(n) space
    remove(value, parent = null) {
        // keep moving down the tree untill..
        if(value < this.value)  {
            if(this.left !== null) {
                this.left.remove(value, this);
            }
        } else if (value>this.value) {
            if(this.right !==null) {
                this.right.remove(value, this);
            }
        } else {
            // you find the node you want to remove
            if (this.left !== null && this.right !== null) {
                // get the min value from the right tree to
                // use as the replacement for the node being removed
                this.value = this.right.getMinValue();
                // remove that value from the tree
                this.right.remove(this.value, this)
            } else if(parent===null) {
                if(this.left !==null) {
                    this.value = this.left.value;
                    this.right = this.left.right;
                    this.left = this.left.left;
                } else if (this.right !=null) {
                    this.value = this.right.value;
                    this.left = this.right.left;
                    this.right = this.right.right;
                } else {
                    //this is a single node tree so nothing to do
                }
            } else if (parent.left === this) {
                parent.left = this.left !== null ? this.left : this.right;
            } else if (parent.right === this) {
                parent.right = this.left !== null ? this.left : this.right;
            }
        }
        return this;
    }

    getMinValue() {
        if(this.left === null) {
            return this.value;
        } else {
            return this.left.getMinValue();
        }
    }
}

module.exports = BST