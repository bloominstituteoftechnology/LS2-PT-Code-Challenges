/*
 * Design and implement an LRU, or Least Recently Used, cache.
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
   constructor(props) {
     this.limit = props;
     this.cache = {};
     this.used = [];
   }
   set(k, v) {
     const cacheKeys = Object.keys(this.cache);
     if (cacheKeys.length === this.limit) {
       const used = Object.keys(this.used);
       let toDelete = null;
       for (let i = 0; i < cacheKeys.length; i++) {
         if (!this.used.includes(cacheKeys[i]) && !toDelete) toDelete = cacheKeys[i];
       }
       if (!toDelete) toDelete = cacheKeys[0];
       this.remove(toDelete);
     }
     this.cache[k] = v;
   }
   get(k) {
     if (this.cache[k]) {
       if (this.used.includes(k)) {
        const usedIndex = Array.prototype.indexOf.call(this.used, k);
        this.used.splice(usedIndex, 1); 
       }
       this.used.push(k);
       return this.cache[k];
     }
   }
   remove(k) {
     delete this.cache[k];
     const usedIndex = Array.prototype.indexOf.call(this.used, k);
     if (usedIndex > -1) this.used.splice(usedIndex, 1);
   }
 }
