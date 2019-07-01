function Node(val,x,y) {
    this.value = val
    this.left = null
    this.right = null
    this.x = x
    this.y = y
}

Node.prototype.addNode = function(n){
    if (n.value < this.value) {
        if (this.left == null){
            this.left = n
            this.left.x = this.x - 50
            this.left.y = this.y + 30
        } else {
        this.left.addNode(n)
        } 
    } else if (n.value > this.value) {
        if (this.right== null){
            this.right = n
            this.right.x = this.x + 50
            this.right.y = this.y + 30
        } else {
        this.right.addNode(n)
        }
    }
}

Node.prototype.visit = function( parent){
    if (this.left != null)
        this.left.visit(this)
    console.log("here",this.value)
    fill(255)
    line(this.x,this.y,parent.x,parent.y)
    console.log(this.value,this.x,this.y)
    textAlign(CENTER)
    text(this.value, this.x, this.y)
    noFill()
    ellipse (this.x,this.y, 25, 25)
    if(this.right != null)
        this.right.visit(this)    

}

Node.prototype.search = function(val){
    if (this.value == val) {
        return this
    } else { 
        if (val < this.value && this.left != null){
            return this.left.search(val)

    } else { 
        if (val > this.value && this.right != null){
            return this.right.search(val)
        }

    }
    
    return null
     

}

}
