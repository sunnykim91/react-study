function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const tree1 = new TreeNode(10);
const tree11 = new TreeNode(5);
const tree12 = new TreeNode(15);
const tree111 = new TreeNode(3);
const tree112 = new TreeNode(7);
const tree122 = new TreeNode(18);
tree1.left = tree11;
tree1.right = tree12;
tree11.left = tree111;
tree11.right = tree112;
tree12.left = null;
tree12.right = tree122;

const tree2 = new TreeNode(10);
const tree21 = new TreeNode(5);
const tree22 = new TreeNode(15);
const tree211 = new TreeNode(3);
const tree212 = new TreeNode(7);
const tree221 = new TreeNode(13);
const tree222 = new TreeNode(18);
const tree2111 = new TreeNode(1);
const tree2121 = new TreeNode(6);
tree2.left = tree21;
tree2.right = tree22;
tree21.left = tree211;
tree21.right = tree212;
tree22.left = tree221;
tree22.right = tree222;
tree211.left = tree2111;
tree211.right = null;
tree212.left = tree2121;
tree212.right = null;

var rangeSumBST = function (root, L, R) {
  var sum = 0;

  if (root === null) {
    return sum;
  }

  if (root.val > L) {
    sum += rangeSumBST(root.left, L, R);
  }
  if (root.val <= R && root.val >= L) {
    sum += root.val;
  }
  if (root.val < R) {
    sum += rangeSumBST(root.right, L, R);
  }
  
  return sum;
}

console.log(rangeSumBST(tree1, 7, 15));
