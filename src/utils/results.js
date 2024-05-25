export const saveResult = (character) => {
  const personName = document.getElementById('txtbox').value;

  if (personName) {
    const resultDate = new Date().toLocaleDateString();
    const lastResult = {
      name: personName,
      jojo: character,
      date: resultDate
    };
    const previousResults = localStorage.getItem('myJojos');

    let newResults;
    if (previousResults) {
      newResults = JSON.parse(previousResults);
      newResults.push(lastResult);
    } else {
      newResults = [lastResult];
    }

    localStorage.setItem('myJojos', JSON.stringify(newResults));
    console.log(newResults);
  }
};
