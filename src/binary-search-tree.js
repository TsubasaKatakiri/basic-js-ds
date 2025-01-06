const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    if(!this.rootNode) this.rootNode = newNode;
    else {
      let parentNode = this.rootNode;
      placeNode(parentNode, newNode);

      function placeNode(parentNode, newNode){
          if(newNode.data < parentNode.data){
              if(!parentNode.left) parentNode.left = newNode;
              else {
                  return placeNode(parentNode.left, newNode);
              } 
          }
          else {
              if(!parentNode.right) parentNode.right = newNode;
              else {
                  return placeNode(parentNode.right, newNode);
              } 
          }
      }
    }
  }

  has(data) {
    let parentNode = this.rootNode;
    return findNode(parentNode, data);

    function findNode(parent, data){
      if(!parent) return false;
      if(data < parent.data){
        parentNode = parent.left;
        return findNode(parentNode, data)
      } else if(data > parent.data) {
        parentNode = parent.right;
        return findNode(parentNode, data)
      } else {
        return true;
      }
    }
  }

  find(data) {
    let parentNode = this.rootNode;
    return findNode(parentNode, data);

    function findNode(parent, data){
      if(!parent) return null;
      if(data < parent.data){
        parentNode = parent.left;
        return findNode(parentNode, data)
      } else if(data > parent.data) {
        parentNode = parent.right;
        return findNode(parentNode, data)
      } else {
        return parent;
      }
    }
  }

  remove(data) {
    let parentNode = this.rootNode;
    return findNode(parentNode, data);

    function findNode(parent, data){
      if(!parent) return null;
      if(data < parent.data){
        parent.left = findNode(parent.left, data);
        return parent;
      } else if(data > parent.data) {
        parent.right = findNode(parent.right, data);
        return parent;
      } else {
        if(!parent.left && !parent.right) return null;
        if(!parent.left) return parent.right;
        if(!parent.right) return parent.left;
        let rightMin = parent.right;
        while(rightMin.left){
          rightMin = rightMin.left;
        }
        parent.data = rightMin.data;
        parent.right = findNode(parent.right, rightMin.data);
        return parent;
      }
    }
  }

  min() {
    if(!this.rootNode) return null;
    let minNode = this.rootNode;
    while(minNode.left){
      minNode = minNode.left;
    }
    return minNode.data;
  }

  max() {
    if(!this.rootNode) return null;
    let maxNode = this.rootNode;
    while(maxNode.right){
      maxNode = maxNode.right
    }
    return maxNode.data;
  }
}

module.exports = {
  BinarySearchTree
};