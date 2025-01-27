function findFirstDuplicate(array) {
    const seenNumbers = new Set(); // Conjunto para rastrear os números já vistos
  
    for (const num of array) {
      if (seenNumbers.has(num)) {
        return num; // Retorna o número duplicado encontrado
      }
      seenNumbers.add(num); // Adiciona o número ao conjunto
    }
  
    return null; // Retorna null se não encontrar duplicatas
  }
  
  // Exemplo de uso:
  const numbers = [1, 2, 3, 4, 5]; // Sem duplicatas
  console.log(findFirstDuplicate(numbers)); // null
  
  const numbersWithDuplicate = [1, 2, 3, 4, 2, 5]; // Contém duplicatas
  console.log(findFirstDuplicate(numbersWithDuplicate)); // 2