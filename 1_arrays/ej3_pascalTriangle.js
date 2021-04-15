function pascalTriangleLevel(N) {
  if (N === 0) return [1];
  if (N === 1) return [1, 1];

  // para N > 1
  const getCurrent = (prev) => {
    const curr = [1]; // 1 inicial
    for (i = 1; i < prev.length; i++) {
      const val = prev[i - 1] + prev[i];
      curr.push(val);
    }
    curr.push(1); // 1 final

    return curr;
  };

  let previous = [1, 1]; // level 1 of the triangle
  for (i = 2; i <= N; i++) {
    const currentLevel = getCurrent(previous);
    previous = currentLevel; // sustituir el previo
  }

  return previous;
}

//console.log(pascalTriangleLevel(0));
//console.log(pascalTriangleLevel(1));
//console.log(pascalTriangleLevel(2));
//console.log(pascalTriangleLevel(3));
//console.log(pascalTriangleLevel(4));
console.log(pascalTriangleLevel(5));
