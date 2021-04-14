function isPalindrome(input) {
  // eliminar espacios, quitar acentos y pasar a minúsculas
  cleanInput = input
    .replace(/\s/g, "")
    .replace(/á/gi, "a")
    .replace(/é/gi, "e")
    .replace(/í/gi, "i")
    .replace(/ó/gi, "o")
    .replace(/ú/gi, "u")
    .toLowerCase();

  let i = 0;
  let j = cleanInput.length - 1;

  while (i < j) {
    if (cleanInput[i].toLowerCase() !== cleanInput[j].toLowerCase()) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}

// test cases
console.log(true === isPalindrome("aaa"));
console.log(true === isPalindrome("aba"));
console.log(true === isPalindrome("Aaa"));
console.log(true === isPalindrome("AáÁ"));
console.log(true === isPalindrome("A A A"));
console.log(false === isPalindrome("A A C"));

console.log(true === isPalindrome("anita lava la tina"));
console.log(true === isPalindrome("La ruta nos aportó otro paso natural"));
console.log(false === isPalindrome("Claramente, esto no es un palíndromo"));
