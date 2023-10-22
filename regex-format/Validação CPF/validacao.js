(function () {
    // Example CPF
    const cpf = '111.716.704-60';
  
    // Step 1: Remove non-digit characters using regex
    let cpfClean = cpf.replace(/\D+/g, '');
  
    // Step 2: Extract the first 9 digits of the CPF
    let cpfClean2 = cpfClean.slice(0, -2);
  
    // Step 3: Convert the cleaned CPF into an array of digits
    let cpfArray = Array.from(cpfClean2);
  
    // Initialize counters for calculating verification digits
    let contador10 = 10;
    let contador11 = 11;
  
    // Function to calculate verification digits
    function verifica(array) {
      return array.reduce((ac, digito) => {
        if (array.length === 9) {
          // For the first verification digit (d1)
          ac += Number(digito) * contador10;
          contador10--;
          return ac;
        }
        if (array.length === 10) {
          // For the second verification digit (d2)
          ac += Number(digito) * contador11;
          contador11--;
          return ac;
        }
      }, 0);
    }
  
    // Calculate the first verification digit (d1)
    let d1 = 11 - (verifica(cpfArray) % 11);
    if (d1 >= 10) d1 = '0';
    cpfArray.push(d1);
  
    // Calculate the second verification digit (d2)
    let d2 = 11 - (verifica(cpfArray) % 11);
    if (d2 >= 10) d2 = '0';
    cpfArray.push(d2);
  
    // Combine the validated digits into a string
    let cpfFinal = cpfArray.toString().replace(/,/g, '');
  
    // Step 4: Check if the cleaned CPF matches the validated CPF
    if (cpfClean === cpfFinal) {
      console.log('CPF is valid');
    } else {
      console.log('Invalid CPF');
    }
  })();
  