function sign(n){
    if(n>=0){
        return 1
    } else {
        return -1
    }
}

class Perceptron {
    constructor(){
        this.weights = []
        this.weightlength = 2
        this.lr = 0.1
        for(let i=0; i< this.weightlength; i++){
            this.weights[i] = random(-1,1)
        }
    }

    guess(inputs){
        let sum = 0
        for (let i =0; i <this.weightlength; i++){
            sum += inputs[i]* this.weights[i]
        }

        return sign(sum)

    }

    train(inputs, target){
        let guess = this.guess(inputs)
        let error = target - guess

        // Tune all the weights
        for(let i=0; i< this.weights.length; ++i){
            this.weights[i] += error * inputs[i] * this.lr
        }

    }

    
}