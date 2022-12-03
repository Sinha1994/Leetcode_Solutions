//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function newNode(root, data)
{
    if(root === null)
        root = new Node(data);
    else if(data < root.data)
        root.left = newNode(root.left, data);
    else
        root.right = newNode(root.right, data);
    return root;
}

function buildTree(str){
   // Corner Case
   if(str.length === 0 || str[0] === "N")
       return null;

   // Create the root of the tree
   let root = new Node(parseInt(str[0]));

   // Push the root to the queue
   let queue = [];
   let start = 0;
   queue.push(root);

   // Starting from the second element
   let i = 1;
   while(queue.length !== start && i < str.length) {

       // Get and remove the front of the queue
       let currNode = queue[start];
       start++;

       // Get the current node's value from the string
       let currVal = str[i];

       // If the left child is not null
       if(currVal !== "N") {

           // Create the left child for the current node
           currNode.left = new Node(parseInt(currVal));

           // Push it to the queue
           queue.push(currNode.left);
       }

       // For the right child
       i++;
       if(i >= str.length)
           break;
       currVal = str[i];

       // If the right child is not null
       if(currVal !== "N") {

           // Create the right child for the current node
           currNode.right = new Node(parseInt(currVal));

           // Push it to the queue
           queue.push(currNode.right);
       }
       i++;
   }

   return root;
}

function inorderUtil(root, res){
    if (root === null)
        return;
    inorderUtil(root.left, res);
    res.push(root.data);
    inorderUtil(root.right, res);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar1 = readLine().split(' ');
        let root = buildTree(input_ar1);
        let obj = new Solution();
        let res = obj.bottomView(root); 
        let s = '';
        for(let i=0; i<res.length; i++){
            s += res[i] +" ";
        }
        console.log(s);
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Node} root
 * @returns {number[]}
*/
class Pair {
    constructor(node, hd) {
        this.node = node;
        this.hd = hd;
    }
}
class Solution
{
    //Function to return a list containing the bottom view of the given tree.
    buildMap(root, map, hd) {
       if(root == null) return;
       map[hd] = root.data;
       this.buildMap(root.left, map, hd-1);
       this.buildMap(root.right, map, hd+1); 
    }
    bottomView(root)
    {
        //your code here
       if(root == null) return [];
       let res = [];
       let map = {}; 
       let queue = [new Pair(root, 0)];
       //console.log(queue.shift().node.left);
      while(queue.length > 0) {
          let size = queue.length;
          for(let i=0;i<size;i++) {
             let item = queue.shift();  
             map[item.hd] = item.node.data;
             if(item.node.left)
             queue.push(new Pair(item.node.left, item.hd-1));
             if(item.node.right)
             queue.push(new Pair(item.node.right, item.hd+1));
          }
      }
      let keys = Object.keys(map).sort((a,b) => a-b);
      for(let key of keys) {
          res.push(map[key]);
      }
       return res;
    }
}