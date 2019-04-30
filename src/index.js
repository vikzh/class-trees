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
}

export default Tree;
