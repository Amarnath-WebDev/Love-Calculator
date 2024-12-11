function calculateLove() {
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim(); // Assuming there's an input with id 'name2'
    const result = document.getElementById('result');
    
    if (name1 === '' || name2 === '') {
        console.log('Please enter both names.');
        return;

        
    }

    // Simple love score calculation (for demonstration purposes)
    const combinedNames = name1 + name2;
    let loveScore = 0;

    for (let i = 0; i < combinedNames.length; i++) {
        loveScore += combinedNames.charCodeAt(i);
    }

    loveScore = loveScore % 101; // Normalize the score to be between 0 and 100

    console.log(`The love score between ${name1} and ${name2} is ${loveScore}%`);
    
    // Display the love score on the page 
    result.textContent = `The love score between ${name1} and ${name2} is ${loveScore}%`;
    
}