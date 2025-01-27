
function filterAndDouble(numbers) {
    return numbers
      .filter(number => number % 2 === 0) //  A função .filter() é usada para selecionar apenas os números pares do array. Um número é par se o resto da divisão dele por 2 (number % 2) for igual a 0.
      .map(number => number * 2);        // A função .map() é usada para dobrar o valor de cada número filtrado. Multiplicamos cada número por 2.
  }
  
  // Testando a função
    const input = [1, 2, 3, 4, 5, 6]; // Array de entrada
     const result = filterAndDouble(input); // Realiza o filtro dos números e os dobra.
        console.log(result); // O resultado é armazenado na variável result e impresso no console com console.log(result). Logicamente, calculando o dobro das valores, os mesmos, são: [4, 8, 12]