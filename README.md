# About:

A lightweight implementation for [linked list][wiki] data stucture in Javascript.

## Install

You can install it via npm:

```sh
npm install light-linkedlist --save
```

## Tests

You can run the tests using: 
```sh
npm test
```

## Example of Use:

```js
const L = require("light-linkedlist");
const LinkedList = L.LinkedList;
const Node = L.Node;
const n = new Node('There');
const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.insertLast('c');
list.getLast(); // returns node with data 'C'
```



## Available Classes and Methods: 

### Node Class API

#### constructor: 

Creates a class instance to represent a node. The node should have two properties, 'data' and 'next'. Accept both of these as arguments to the 'Node' constructor, then assign them to the instance as properties 'data' and 'next'. If 'next' is not provided to the constructor, then default its value to be 'null'.
Arguments : (Data, Node)
Returns: Node
Example:

```js
const n = new Node('There');
n.data // 'Hi'
n.next // null
const n2 = new Node('Hi', n);
n.next // returns n

```


### LinkedList Class API

#### constructor:

Create a class to represent a linked list. When created, a linked list should have *no* head node associated with it. The LinkedList instance will have one property, 'head', which is a reference to the first node of the linked list. By default 'head' should be 'null'.	
Arguments : -
Returns: `LinkedList`
Example:

```js
const list = new LinkedList();
list.head // null

```

#### insertFirst:
Creates a new Node from argument 'data' and assigns the resulting node to the 'head' property. Make sure to handle the case in which the linked list already has a node assigned to the 'head' property.	
Arguments : (Data)
Returns: null
Example:

```js
const list = new LinkedList();
list.insertFirst('Hi There'); // List has one node
```


#### size:
Returns the number of nodes in the linked list.	
Arguments : -
Returns: integer
Example:

```js
const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.insertFirst('c');
list.size(); // returns 3
```

#### getFirst:
Returns the first node of the linked list.	
Arguments : 
Returns: Node
Example:

```js
const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.getFirst(); // returns Node instance with data 'a'

```

#### getLast:
Returns the last node of the linked list.	
Arguments : 
Returns: Node
Example:

```js
const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.getLast(); // returns node with data 'a'
```

#### clear:
Empties the linked list of any nodes.	
Arguments : 
Returns: 
Example:

```js
const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.clear();
list.size(); // returns 0
```


#### removeFirst:
Removes only the first node of the linked list. The list's head should now be the second element.	
Arguments : 
Returns: 
Example:

```js
const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.removeFirst();
list.getFirst(); // returns node with data 'a'
```




#### removeLast:
Removes the last node of the chain	
Arguments : 
Returns: 
Example:

```js
const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.removeLast();
list.size(); // returns 1
list.getLast(); // returns node with data of 'b'
```

#### insertLast:
Removes the last node of the chain	
Arguments : Data
Returns: 
Example:

```js
const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.insertLast('c');
list.getLast(); // returns node with data 'C'
```


#### getAt:
Returns the node at the provided index	
Arguments : integer
Returns: Node
Example:

```js
const list = new List();
list.insertFirst('a');
list.insertFirst('b');
list.insertFirst('c');
list.getAt(1); // returns node with data 'b'
```

#### removeAt:
Removes node at the provided index	
Arguments : integer
Returns: 
Example:

```js
const list = new List();
list.insertFirst('a');
list.insertFirst('b');
list.insertFirst('c');
list.removeAt(1);
list.getAt(1); // returns node with data 'a'
```
	
  
#### insertAt:
Create an insert a new node at provided index. If index is out of bounds, add the node to the end of the list.	
Arguments : integer
Returns: 
Example:

```js
const list = new List();
list.insertFirst('a');
list.insertFirst('b');
list.insertFirst('c');
list.insertAt('Hi', 1)
list.getAt(1); // returns node with data 'Hi'
```
	
#### forEach:
Calls the provided function with every node of the chain	
Arguments : function
Returns: 
Example:

```js
const list = new List();

list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);

list.forEach(node => {
node.data += 10;
});
list.getAt(0); // Returns node with data '11'
```
	
#### for...of Loop:
Linked list should be compatible as the subject of a 'for...of' loop	
Arguments : 
Returns: 
Example:

```js
const list = new List();

list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);

for (let node of list) {
node.data += 10;
}

node.getAt(1); // returns node with data 11
```
  

## License

[MIT][license] © [Kamal Albatarni][author]

<!-- Definitions -->
[license]: LICENSE
[author]: https://kamal.guru
[wiki]: https://wikipedia.org/wiki/Linked_list
