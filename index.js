function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  
  // Example usage:
  const myName = "Emmanuel";
  const greeting = introduction(myName);
  console.log(greeting); // 

  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name}, and I speak ${language}.`;
  }
  
  // Example usage:
  const myName = "Emmanuel";
  const myLanguage = "English";
  const greeting = introductionWithLanguage(myName, myLanguage);
  console.log(greeting);