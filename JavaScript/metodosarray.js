function capitalizeWords(input) {
    return input
      .split(" ") // Divide a string em um array de palavras
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitaliza a primeira letra e coloca o resto em minúsculo
      .join(" "); // Junta as palavras de volta em uma string
  }
  
  // Exemplo de uso:
  const phrase = "esta é uma string de exemplo";
  console.log(capitalizeWords(phrase)); // "Esta É Uma String De Exemplo"