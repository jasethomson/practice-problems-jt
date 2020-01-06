
function mergeTrees(t1, t2) {
  const rtrnTree = [];
  const treeLen = (t1.length>t2.length ? t1.length : t2.length);

  for(let index = 0; index < treeLen; index++){
    let v1 = t1[index];
    let v2 = t2[index];
    if (typeof v1 === "number" && typeof v2 === "number"){
      rtrnTree.push(v1+v2);
    } else if (typeof v1 !== "number" && typeof v2 === "number"){
      rtrnTree.push(v2);
    } else if (typeof v1 === "number" && typeof v2 !== "number"){
      rtrnTree.push(v1);
    } else {
      rtrnTree.push(null);
    };
  }
  return rtrnTree;
}

const tree1 = [1,3,2,5];
const tree2 = [2,1,3,null,4,null,7];

console.log(mergeTrees(tree1,tree2));
