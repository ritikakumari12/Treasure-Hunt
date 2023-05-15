import React, { useState } from 'react';

// Node component represents each node in the binary tree
const Node = ({ value, left, right }) => (
  <div>
    <span>{value}</span>
    <div>{left}</div>
    <div>{right}</div>
  </div>
);

// BinaryTree component represents the binary tree
const BinaryTree = () => {
  const [currentNode, setCurrentNode] = useState(1); // Track the current node value

  // Recursive function to generate the binary tree
  const generateBinaryTree = (value) => {
    if (value > 15) return null; // Adjust the condition based on your requirement

    return (
      <Node
        value={value}
        left={generateBinaryTree(value * 2)}
        right={generateBinaryTree(value * 2 + 1)}
      />
    );
  };

  const handleClick = () => {
    setCurrentNode((prevNode) => prevNode + 1); // Move to the next node
  };

  return (
    <div>
      <h2>Binary Tree</h2>
      {generateBinaryTree(1)}
      <button onClick={handleClick}>Next Node</button>
      <div>Current Node: {currentNode}</div>
    </div>
  );
};

export default BinaryTree;
