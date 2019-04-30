import Tree from '../src';

describe('Tree', () => {
  let tree;
  beforeEach(() => {
    tree = new Tree('html', { body: 'htmlTagValue' });
    tree.addChild('head', { body: '' });
  });

  it('#getKey', () => {
    expect(tree.getKey()).toBe('html');
  });

  it('#getMeta', () => {
    expect(tree.getMeta()).toEqual(tree.meta);
  });

  it('#getParent', () => {
    expect(tree.getParent()).toBe(undefined);
  });

  it('#getChildren', () => {
    const expected = [new Tree('head', { body: '' }, tree)];
    expect(tree.getChildren()).toEqual(expected);
  });

  it('#addChild', () => {
    const addedChild = tree.addChild('meta');
    expect(tree.getChildren()).toContain(addedChild);
  });
});
