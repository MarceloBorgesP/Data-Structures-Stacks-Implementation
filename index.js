class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {

  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top ? this.top.value : undefined;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.length) {
      this.bottom = newNode;
      this.top = newNode;
    } else {
      const oldTopNode = this.top;
      this.top = newNode;
      this.top.next = oldTopNode;
    }

    this.length++;
  }

  pop() {
    if (!this.length) {
      return undefined;
    }

    let top;
    
    if (this.length === 1) {
      top = this.top;
      this.top = null;
      this.bottom = null;
      this.length--;

      return top;
    }

    top = this.top;
    this.top = this.top.next;

    this.length--;

    return top;
  }

  isEmpty() {
    return !this.length;
  }
}

const myStack = new Stack();
myStack.push("google");
console.log(myStack.peek());
myStack.push("Udemy");
console.log(myStack.peek());
myStack.push("Discord");
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
myStack.push("marcelo");
console.log(myStack.peek());



//Discord
//Udemy
//google
