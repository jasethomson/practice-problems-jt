function LinkedList(){
  this.head = null;
}

LinkedList.prototype.isEmpty = function () {
  return this.head === null;
}

// [10] -> [20] -> [30] -> null


LinkedList.prototype.size = function(){
  var current = this.head;
  var count = 0;

  while (current !== null){
    count++;
    current = current.next;
  }

  return count;
}

// [10] -> [15] -> [20] -> null
// 1. create new node with val
// [5] -> [10] -> [15] -> [20] -> null
// 2. make new node point to the current head
// 3. update this.head to point to the new node

LinkedList.prototype.prepend = function(val){
  var newNode = {
    data: val,
    next: this.head
  }

  this.head = newNode;
}
// 1. create new node with val
// 2. traverse to the end of the list
// 3. make the last node's next value to point to the new node
LinkedList.prototype.append = function (val) {
  var newNode = {
    data: val,
    next: this.head
  }

  if(this.isEmpty()){
    this.head = newNode;
    return;
  }

  var current = this.head;

  while (current.next !== null){
    current = current.next;
  }


  current.next = newNode;

}

LinkedList.prototype.remove = function(val){

}


// var list = new LinkedList();
// list.prepend(10);
// // [10] -> null

// list.prepend(5);
// // [5] -> [10] null

// console.log(list);
// console.log(list.size());
