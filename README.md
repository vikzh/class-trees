[![Maintainability](https://api.codeclimate.com/v1/badges/4614a71ccc5d827ca866/maintainability)](https://codeclimate.com/github/vikzh/class-trees/maintainability)[![Build Status](https://travis-ci.org/vikzh/class-trees.svg?branch=master)](https://travis-ci.org/vikzh/class-trees)[![codecov](https://codecov.io/gh/vikzh/class-trees/branch/master/graph/badge.svg)](https://codecov.io/gh/vikzh/class-trees)
# class Trees
## Install
````
npm install class-trees
````
## Using
````
import Tree from 'class-trees';
tree = new Tree('html', { body: 'htmlTagValue' });
tree.addChild('head', { body: '' });
tree.getKey(); // html
````
## Documentation
### Table of Contents

-   [Tree][1]
    -   [Parameters][2]
    -   [addChild][3]
        -   [Parameters][4]
        -   [Examples][5]
    -   [getKey][6]
        -   [Examples][7]
    -   [getMeta][8]
        -   [Examples][9]
    -   [getParent][10]
        -   [Examples][11]
    -   [getChildren][12]
        -   [Examples][13]
    -   [removeChild][14]
        -   [Parameters][15]
        -   [Examples][16]
    -   [hasChildren][17]
        -   [Examples][18]
    -   [hasChild][19]
        -   [Parameters][20]
        -   [Examples][21]
    -   [getChild][22]
        -   [Parameters][23]
        -   [Examples][24]
    -   [getDeepChild][25]
        -   [Parameters][26]
        -   [Examples][27]

## Tree

Class tree

### Parameters

-   `key`  
-   `meta`  
-   `parent`  

### addChild

add to Node's children map a child

#### Parameters

-   `key`  
-   `meta`  

#### Examples

```javascript
const tree = new Tree
```

Returns **[Tree][28]** 

### getKey

get Node's key

#### Examples

```javascript
const tree = new Tree('html');
tree.getKey(); // 'html'
```

Returns **any** 

### getMeta

get Node's meta

#### Examples

```javascript
const tree = new Tree('html', { body: '' });
tree.getMeta(); // { body: '' }
```

Returns **any** 

### getParent

get Node's parent

#### Examples

```javascript
const tree = new Tree('html');
const node = tree.addChild('title');
node.getParent() === tree; // true
```

Returns **any** 

### getChildren

get Node's children

#### Examples

```javascript
const tree = new Tree('html');
const tree.addChild('head', 'head_meta');
tree.getChildren(); // [{ key: 'head', meta: 'head_meta' }]
```

Returns **[Map][29]&lt;any, any>** 

### removeChild

remove Node's children

#### Parameters

-   `key`  

#### Examples

```javascript
const tree = new Tree('html');
tree.addChild('head');
tree.removeChild('head'); // true
tree.removeChild('head'); // false
```

Returns **[boolean][30]** 

### hasChildren

check if Node has children

#### Examples

```javascript
const tree = new Tree('html');
tree.hasChildren(); // false
tree.addChild('head');
tree.hasChildren(); // true
```

Returns **[boolean][30]** 

### hasChild

check if Node has child by Key

#### Parameters

-   `key`  

#### Examples

```javascript
const tree = new Tree('html');
tree.hasChild('head'); // false
tree.addChild('head');
tree.hasChild('head'); // true
```

Returns **[boolean][30]** 

### getChild

get Node's child by Key

#### Parameters

-   `key`  

#### Examples

```javascript
const tree = new Tree('html');
tree.getChild('head'); // undefined
tree.addChild('head');
tree.getChild('head').getKey(); // 'head'
```

Returns **any** 

### getDeepChild

Get tree's deep child

#### Parameters

-   `keys`  

#### Examples

```javascript
const tree = new Tree('html');
const headNode = tree.addChild('head');
const metaNode = headNode.addChild('meta');
metaNode === tree.getDeepChild(['head', 'meta']);
headNode === tree.getDeepChild(['head']);
tree.getDeepChild(['head', 'wrongKey']); // undefined
```

Returns **any** 

[1]: #tree

[2]: #parameters

[3]: #addchild

[4]: #parameters-1

[5]: #examples

[6]: #getkey

[7]: #examples-1

[8]: #getmeta

[9]: #examples-2

[10]: #getparent

[11]: #examples-3

[12]: #getchildren

[13]: #examples-4

[14]: #removechild

[15]: #parameters-2

[16]: #examples-5

[17]: #haschildren

[18]: #examples-6

[19]: #haschild

[20]: #parameters-3

[21]: #examples-7

[22]: #getchild

[23]: #parameters-4

[24]: #examples-8

[25]: #getdeepchild

[26]: #parameters-5

[27]: #examples-9

[28]: #tree

[29]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map

[30]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean
