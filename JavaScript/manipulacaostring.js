function getAffordableProducts(products, maxPrice) {
    return products
      .filter((product) => product.price <= maxPrice) // Filtrar produtos pelo preço
      .sort((a, b) => a.price - b.price); // Ordenar produtos pelo preço em ordem crescente
  }
  
  // Exemplo de uso:
  const products = [
    { name: "Laptop", price: 3000 },
    { name: "Mouse", price: 50 },
    { name: "Keyboard", price: 100 },
    { name: "Monitor", price: 800 }
  ];
  
  const maxPrice = 800;
  console.log(getAffordableProducts(products, maxPrice));