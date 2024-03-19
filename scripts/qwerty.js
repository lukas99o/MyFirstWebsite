const expectedKeys = ['q', 'w', 'e', 'r', 't', 'y'];
let currentIndex = 0;

function handleKeyPress(event) {
    const keyPressed = event.key.toLowerCase();

    if (keyPressed === expectedKeys[currentIndex]) {
        currentIndex++;
        if (currentIndex === expectedKeys.length) {
            alert("MAGIC")
            currentIndex = 0; 
        }
    } else {
        currentIndex = 0; 
    }
}

document.addEventListener('keydown', handleKeyPress);
