function calculateTimeDifference(time1, time2) {
    // Função auxiliar para converter o horário "HH:MM:SS" em segundos
    function timeToSeconds(time) {
      const [hours, minutes, seconds] = time.split(":").map(Number); // Divide e converte para números
      return hours * 3600 + minutes * 60 + seconds; // Converte para segundos
    }
  
    // Converte os horários para segundos
    const timeInSeconds1 = timeToSeconds(time1);
    const timeInSeconds2 = timeToSeconds(time2);
  
    // Calcula a diferença em segundos (utiliza Math.abs para garantir que o valor seja positivo)
    const differenceInSeconds = Math.abs(timeInSeconds1 - timeInSeconds2);
  
    // Retorna a mensagem com a diferença
    return `A diferença entre os horários é de ${differenceInSeconds} segundos.`;
  }
  
  // Exemplo de uso:
  console.log(calculateTimeDifference("12:30:45", "14:00:00")); // A diferença entre os horários é de 5340 segundos.
  console.log(calculateTimeDifference("14:00:00", "12:30:45")); // A diferença entre os horários é de 5340 segundos.