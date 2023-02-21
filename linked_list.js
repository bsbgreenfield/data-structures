class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    printAll(){
        let current = this.head
        while (current){
            console.log(current)
            current = current.next
        }
    }
    push(val) {
        const newNode = new Node(val)

      // if the tail value already exists
        if (this.tail){
            this.tail.next = newNode
            this.tail = newNode
        }
        // if there is no tail
        if (!this.tail) {
            // if there is no head (empty list)
            if (!this.head) {
                this.head = newNode
                this.tail = newNode
            }
            else {
                let current = this.head
                while (current.next) {
                    current = current.next
                }
                // current.next = null, end of list, add the new item 
                current.next = newNode
                this.tail = newNode
            }
        }
        return undefined
    }
    unshift(val) {
        const newNode = new Node(val)
        if (this.head) {
            newNode.next = this.head
        }
        this.head = newNode
        return undefined
    }

    pop() {
        if (!this.head) {
            throw new Error("List Empty")
        }
        else {
            let current = this.head
            while (current.next.next) {
                current = current.next
            }
            let answer = current.next
            current.next = null
            return answer
        }
    }

    shift() {
        if (!this.head){
            throw new Error("List empty")
        }
        else {
            let goner = this.head
            this.head = this.head.next
            goner.next = null
            return goner
        }
    }

    getAt(idx){
        let counter = 0
        let current = this.head
        while (counter < idx){
            if (current.next){
                current = current.next
            }
            else{
                return "ERROR"
            }
            counter ++;
        }
        return current
    }
    setAt (idx, val) {
        let counter = 0
        let current = this.head
        while (counter < idx){
            if (current.next){
                current = current.next
            }
            else{
                throw new Error('Invalid Index Position')
            }
            counter ++;
        }
        current.val = val
    }

    insertAt(idx, val){
        const newNode = new Node(val)
        let counter = 0
        let current = this.head
        while (counter < idx - 1){
            if (current.next){
                current = current.next
            }
            else{
                return "ERROR"
            }
            counter ++;
        }
        newNode.next = current.next
        current.next = newNode

    }
    average(){
        let current = this.head
        let counter = 0
        let sum = 0
        while (current.next){
            sum += current.val;
            counter ++;
            current = current.next;
        }
        return (sum/counter);
    }
}

