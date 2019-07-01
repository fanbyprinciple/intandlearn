function Node(val, x, y) {
    this.value = val
    this.left = null
    this.right = null
    this.x = 150
    this.y = 150
}

Node.prototype.addNode = function(n){
    if (n.value < this.value) {
        if (this.left == null){
            this.left = n
        } else {
        this.left.addNode(n)
        } 
    } else if (n.value > this.value) {
        if (this.right== null){
            this.right = n
        } else {
        this.right.addNode(n)
        }
    }
}

Node.prototype.visit = function(){
    if (this.left != null)
        this.left.visit()
    console.log("here",this.value)
    fill(255)
    noStroke()
    console.log(this.value,this.x,this.y)
    text(this.value, this.x, this.y)
    
    if(this.right != null)
        this.right.visit()    

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
