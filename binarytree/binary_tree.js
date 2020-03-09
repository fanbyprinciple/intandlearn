// visit a Node
//     visit left 
//     print left 
//     visit right

class Node {
    constructor(n){
        this.left = null
        this.right = null
        this.value = n
    }

    addToNode(n){
        if(n.value < this.value){
            if(this.left == null){
                this.left = n
                
            } else {
                this.left.addToNode(n)
            }
            
        } else if(n.value > this.value){
            if(this.right == null){
                this.right = n
            } else {
                this.right.addToNode(n)
            }
            
        }
    }

    visit(){
        if(this.left != null){
            this.left.visit()
        }
        console.log(this.value)
        if(this.right != null){
            this.right.visit()
        }
    }

    search(target){
        if(this.value == target){
            console.log("found.")
            return this
        } else if(this.value < target && this.right != null) {
            console.log("to the right of " + this.value )
            return this.right.search(target)
        } else if(this.value > target && this.left != null){
            console.log("to the left of ", this.value)
            return this.left.search(target)
        }

        console.log("not found")
        return null
    }
}

class Tree {
    constructor(){
        this.root = null
    }

    addToTree(n){

        let node = new Node(n)
        if(this.root == null){
            console.log("Root: ", node.value)
            this.root = node
        } else {
    
            this.root.addToNode(node)
        }

    }

    search(target){
        let found = this.root.search(target)
        return found
        
    }

    getRoot(){
        console.log(this.root)
        //return this.root
    }

    returnNodes(){
        this.root.visit()
    }

}

var tree
function setup(){
    noCanvas()
    tree = new Tree()

    for(var i=0; i < 5; i++){
        tree.addToTree(floor(random(0,1999)))
    }
    
    tree.returnNodes()
}

