function Tree() {
    this.root = null;
    this.x = width/2
    this.y = 16
}

Tree.prototype.addValue = function(n) {
    var n = new Node(n)
    if (this.root == null){
        this.root = n
        this.root.x = width /2 
        this.root.y = 16 
    } else {
        this.root.addNode(n)
    } 
}

Tree.prototype.traverse = function() {

    this.root.visit(this.root)

}

Tree.prototype.search = function(val) {

    var found = this.root.search(val)
    return found
    
}