import { Comparable } from "../../interfaces/Comparable";

export class AVLTree<T> {

    private root: AVLNode<T> | null;
    

    constructor() {
        this.root = null;
    }

    public search(callback: (node: T) => number): T | null {

    }

    public insert(callback: (node: T) => number): T | null {
        return this.traverse(this.root, callback);
    }

    public delete(callback: (node: T) => number): T | null {

    }

    private traverse(root: T | null, callback: (node: T) => number): T | null {
        if (root == null) {
            return null;
        }

        let compareValue = callback(root);

        if(compareValue == 0){
            return root;
        } else if (compareValue < 0) {
            return this.traverse(root.le);
        }
    }

}

class AVLNode<T> {

    public left: AVLNode<T> | null;
    public right: AVLNode<T> | null;
    
    constructor(private val: T){
        this.left = null;
        this.right = null;
    }

    public getVal(): T {
        return this.val;
    }

    public setVal(val: T): T {
        this.val = val;
        return this.val;
    }



}