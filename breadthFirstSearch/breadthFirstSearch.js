
// Write a function that accepts a tree data structure and a value to search for.
// Search for the value using a breadth-first search algorithm.
// Example:

const tree = {
 	x: 1,
 	y: 1,
 	z: {
 	    x: 1,
 	    y: 1,
 	    z: 1,
 	},
    a: 2,
 };

var Queue = function() {
    this.items = [];
};
Queue.prototype.enqueue = function(obj) {
    this.items.push(obj);
};
Queue.prototype.dequeue = function() {
    return this.items.shift();
};
Queue.prototype.isEmpty = function() {
    return this.items.length === 0;
};

const breadthFirstSearch = (graph, source) => {
    var bfsInfo = [];

    for (var i = 0; i < graph.length; i++) {
	    bfsInfo[i] = {
	        distance: null,
	        predecessor: null };
    }

    bfsInfo[tree].distance = 0;

    var queue = new Queue();
    queue.enqueue(source);

};

breadthFirstSearch(tree, 2);// will return true before it recursively searches `z`