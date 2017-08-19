/*
 * Design and implement an LRU, or Least Recently Used, cache.
 *
 * An LRU cache gives O(1) get(key) and set(key, val) operations,
 * much like a hashtable, but once it reaches its limit for stored
 * number of items, removes the least recently used (i.e. the oldest
 * by get-date) item from the cache in O(1) time.
 */


// This COULD be implemented as a queue (FIFO), but spec wants O(1) get/set so we'll have to keep as object.
class LRUCache {
  constructor(limit) {
    this.limit = limit;
    this.storage = {};
  }

  set(key, value) {
    if (Object.keys(this.storage).length < this.limit) { // If there is room in the queue, add it.
      this.storage[key] = {date: Date.now(), value};
      return;
    } // Else if there is no room in the queue, strip oldest item in favor of new one.

    const oldest = this.findOldest();
    // Now that we know the oldest item, delete it and add new one.
    delete this.storage[oldest.key];
    this.storage[key] = {date: Date.now(), value};
    console.log(this.storage);
  }

  get(key) {
    // Return/display the given key if it exists, update the date.
    if (!this.storage[key]) { // If our key isn't valid.
      console.log('Invalid key given.');
      return;
    }

    console.log(this.storage[key]);
    this.storage[key].date = Date.now();
  }

  findOldest() {
    let oldest = {};
    for (let key in this.storage) {
      if (Object.keys(oldest).length === 0) { // If first loop.
        // Set the oldest object to the current items properties.
        oldest.date = this.storage[key].date;
        oldest.key = key;
      } else {
        if (this.storage[key].date < oldest.date) { // If the current item is older than the current oldest.
          oldest.date = this.storage[key].date;
          oldest.key = key;
        }
      }
    }
    return oldest;
  }
}

const cache = new LRUCache(3);
cache.set("item1", 'a');
cache.set("item2", 'b');
cache.get("item1");
cache.set("item3", 'c');
cache.set("item4", 'd');
