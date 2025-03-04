class UltimateCollection{
    #size
    #capacity
    #listBucket

    constructor(capacity){
        this.#capacity = capacity;
        this.#listBucket = [];
    }

    get isEmpty(){
        return this.#size === 0;
    }

    get isFull(){
        return this.#size === this.#capacity;
    }

    get size(){
        return this.#size;
    }

    contains(element){
        for(let item of this.#listBucket){
            if(item === element){
                return true;
            }
        } return false;
    }

    clear(){
        this.#listBucket = Array(this.#capacity);;
        this.#size = 0;
    }

    #trimToSize(listBucket){
        let newList = Array(this.#size);

    }
}

module.exports = {UltimateCollection};