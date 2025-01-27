function getAverageGrade(student) {
    // Calcular a média das notas
    const grades = student.grades;
    const total = grades.reduce((sum, grade) => sum + grade, 0); // Soma todas as notas
    const average = (total / grades.length).toFixed(2); // Realiza o calculo das medias
  
    // Fase de verificação e construção da mensagem
    const statusMessage = student.status === "ativo" ? "está ativo" : "está inativo";
    return `O estudante ${student.name} ${statusMessage} e tem uma média de ${average}.`;
  }
  
  // Testando o cod:
  const aluno = {
    name: "José da Silva",
    status: "ativo",
    grades: [8, 7.5, 9, 6.5],
  };
  
  console.log(getAverageGrade(aluno));