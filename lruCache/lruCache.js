/*
 * Design and implement a LRU, or Least Recently Used, cache.
 *
 * An LRU cache gives O(1) get(key) and set(key, val) operations,
 * much like a hashtable, but once it reaches its limit for stored
 * number of items, removes the least recently used (i.e. the oldest
 * by get-date) item from the cache in O(1) time.
 *
 * For instance:
 *
 * const cache = new LRUCache(3); // limit of 3 items
 * cache.set("item1", 'a');
 * cache.set("item2", 'b');
 * cache.set("item3", 'c');
 * cache.set("item4", 'd');
 *
 * cache.get("item3") // 'c'
 * cache.get("item2") // 'b'
 * // item1 was removed because it was the oldest item by insertion/usage
 * cache.get("item1") //=> null
 *
 * // item4 is removed to make room, because it is the oldest by usage,
 * // which takes priority.
 * cache.set("item5", 'e');
 *
 * // item3 is also removed because it was retrieved before item2 was
 * // last retrieved.
 * cache.set("item6", 'f');
 *
 */
class LRUCache {
  constructor(cnumber) {
    this.limit = number;
    this.keys = [];
    this.storage = {};
  }

  set (key, value) {
    this.keys.push(key);
    this.storage[key] = value;
    if (this.keys.length >  this.limit) {
      const keyToRemove = this.keys.shift();
      delete this.storage[keyToRemove];
    }
  }

  get (key) {
    const indexOfKey = this.keys.indexOf(key);
    if (indexOfKey === -1) return null;
    this.keys.splice(indexOfKey, 1);
    this.keys.push(key);
    const value = this.storage[key];
    return value;
  }
};