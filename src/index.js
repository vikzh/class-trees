/**
 * Class tree
 */
class Tree {
  /**
   * Constructor
   * @param key
   * @param meta
   * @param parent
   * @example
   * const tree = new Tree('html');
   */
  constructor(key, meta, parent) {
    this.key = key;
    this.meta = meta;
    this.parent = parent;
    this.children = new Map();
  }

  /**
   * add to Node's children map a child
   * @param key
   * @param meta
   * @returns {Tree}
   * @example
   * const tree = new Tree
   */
  addChild(key, meta) {
    const child = new Tree(key, meta, this);
    this.children.set(key, child);

    return child;
  }

  /**
   * get Node's key
   * @returns {*}
   * @example
   * const tree = new Tree('html');
   * tree.getKey(); // 'html'
   */
  getKey() {
    return this.key;
  }

  /**
   * get Node's meta
   * @returns {*}
   * @example
   * const tree = new Tree('html', { body: '' });
   * tree.getMeta(); // { body: '' }
   */
  getMeta() {
    return this.meta;
  }

  /**
   * get Node's parent
   * @returns {*}
   * @example
   * const tree = new Tree('html');
   * const node = tree.addChild('title');
   * node.getParent() === tree; // true
   */
  getParent() {
    return this.parent;
  }

  /**
   * get Node's children
   * @returns {Map<any, any>}
   * @example
   * const tree = new Tree('html');
   * const tree.addChild('head', 'head_meta');
   * tree.getChildren(); // [{ key: 'head', meta: 'head_meta' }]
   */
  getChildren() {
    return [...this.children.values()];
  }

  /**
   * remove Node's children
   * @param key
   * @returns {boolean}
   * @example
   * const tree = new Tree('html');
   * tree.addChild('head');
   * tree.removeChild('head'); // true
   * tree.removeChild('head'); // false
   */
  removeChild(key) {
    return this.children.delete(key);
  }

  /**
   * check if Node has children
   * @returns {boolean}
   * @example
   * const tree = new Tree('html');
   * tree.hasChildren(); // false
   * tree.addChild('head');
   * tree.hasChildren(); // true
   */
  hasChildren() {
    return this.children.size > 0;
  }

  /**
   * check if Node has child by Key
   * @param key
   * @returns {boolean}
   * @example
   * const tree = new Tree('html');
   * tree.hasChild('head'); // false
   * tree.addChild('head');
   * tree.hasChild('head'); // true
   */
  hasChild(key) {
    return this.children.has(key);
  }

  /**
   * get Node's child by Key
   * @param key
   * @returns {any}
   * @example
   * const tree = new Tree('html');
   * tree.getChild('head'); // undefined
   * tree.addChild('head');
   * tree.getChild('head').getKey(); // 'head'
   */
  getChild(key) {
    return this.children.get(key);
  }

  /**
   * Get tree's deep child
   * @param keys
   * @returns {any}
   * @example
   * const tree = new Tree('html');
   * const headNode = tree.addChild('head');
   * const metaNode = headNode.addChild('meta');
   * metaNode === tree.getDeepChild(['head', 'meta']);
   * headNode === tree.getDeepChild(['head']);
   * tree.getDeepChild(['head', 'wrongKey']); // undefined
   */
  getDeepChild(keys) {
    const [key, ...rest] = keys;
    const node = this.getChild(key);
    if (!node || rest.length === 0) {
      return node;
    }
    return node.getDeepChild(rest);
  }
}

export default Tree;
