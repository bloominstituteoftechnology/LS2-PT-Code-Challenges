/*
 * Write a function that accepts a tree data structure and a value to search for.
 * Search for the value using a breadth-first search algorithm.
 * Example:
 * const tree = {
 *	x: 1,
 *	y: 1,
 *	z: {
 *		x: 1,
 *		y: 1,
 *		z: 1,
 *		},
 *	a: 2,
 * };
 * breadthFirstSearch(tree, 2);// will return true before it recursively searches `z`
 */

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

let Queue = function() {
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

const breathFirstSearch = ((treeObj, search) => {
      
         var bfsInfo = [];

    for (var i = 0; i < treeObj.length; i++) {
	    treeObj[i] = {
	        distance: null,
	        predecessor: null };
    }

    bfsInfo[source].distance = 0;

    var queue = new Queue();
    queue.enqueue(source);

      return bfsInfo;

});


//const bfsInfo = breathFirstSearch(adjList, 3);
const bsfResult = breathFirstSearch(tree, 2);

for (var i = 0; i < tree.length; i++) {
    println("vertex " + i + ": distance = " + bfsInfo[i].distance + ", predecessor = " + bfsInfo[i].predecessor);
}







