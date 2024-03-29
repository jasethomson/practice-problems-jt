/*
- getPath: given a path string, return an array with the different parts of the path for
	- example: 'folder1/folder2/folder3'
	- returns ['folder1','folder2','folder3']
*/


//

function getPath(pathString) {
  return pathString.split("/");
}

// - getPathParts: Given a full URL string, break it up into parts in an object For
//   - example: 'http://localhost:8000/happy/go/lucky/file.html'//     - return { protocol: 'http', host: 'localhost', port: 8000, path: '/happy/go/lucky', file: 'file.html' }

function getPathParts(url) {
  const protocol = url.split(':')[0];
  const host = (url.split('/')[2]).split(":")[0];
  const port = parseInt((url.split(":")[2]).split('/')[0]);

  let pathWithFileSplitOnPeriod = ((url.split(":")[2]).replace(port, "")).split(".");
  let pathWithFileArr = pathWithFileSplitOnPeriod[0].split('/');
  pathWithFileArr.shift();
  const file = `${pathWithFileArr.pop()}.${pathWithFileSplitOnPeriod[1]}`;
  let path = "";
  pathWithFileArr.map(folder => path += `/${folder}`);
  path = path.slice(1);

  return {
    protocol,
    host,
    port,
    path,
    file
  }
}



//       - getCapitalCount: given an array of words, return a count of how many start with capital letters, For
//         - example: ['it', 'will', 'not', 'Be', 'long', 'Till', 'we', 'Are']
//           - returns: 3

function getCapitalCount(arr) {
  let capitalCount = 0;
  arr.map(word => {
    if (word[0].charCodeAt() < 97) capitalCount++;
  });
  return capitalCount;
}

//             - correctCalcChecker: Given an array of objects with math equations, return all objects that have correct equations for
// 	- example: [
//     { num1: 3, num2: 3, op: '/', result: 3 },
//     { num1: 12, num2: 4, op: '-', result: 8 },
//     { num1: 2, num2: 3, op: '+', result: 5 },
//     { num1: -5, num2: -2, op: '*', result: 10 }
//   ]
//     - returns[
//     { num1: 12, num2: 4, op: '-', result: 8 },
//     { num1: 2, num2: 3, op: '+', result: 5 }
//     ]

function correctCalcChecker(equations) {
  const correctEquations = [];
  equations.map(equation => {
    let result = null;
    switch (equation.op) {
      case '+':
        result = equation.num1 + equation.num2;
        break;
      case '-':
        result = equation.num1 - equation.num2;
        break;
      case '*':
        result = equation.num1 + equation.num2;
        break;
      case '/':
        result = equation.num1 + equation.num2;
        break;
      default:
        return alert("No operation given");
    }
    if (result === equation.result) correctEquations.push(equation);
  });
  return correctEquations;
}
