// Initialize squares and time elements
const squares = {
    'small-square-one': document.getElementById('small-square-one'),
    'small-square-two': document.getElementById('small-square-two'),
    'medium-square': document.getElementById('medium-square'),
    'large-square': document.getElementById('large-square'),
    'largest-square': document.getElementById('largest-square')
};

function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Update squares based on current time
    setSquareColors(hours, 'red-square');
    setSquareColors(minutes, 'green-square');
    setSquareColors(seconds, 'blue-square');
}

function setSquareColors(time, colorClass) {
    Object.values(squares).forEach(square => square.className = 'square');
    if (time >= 8) {
        time -= 8;
        squares['largest-square'].classList.add(colorClass);
    }
    if (time >= 5) {
        time -= 5;
        squares['large-square'].classList.add(colorClass);
    }
    if (time >= 3) {
        time -= 3;
        squares['medium-square'].classList.add(colorClass);
    }
    if (time >= 2) {
        time -= 2;
        squares['small-square-two'].classList.add(colorClass);
    }
    if (time >= 1) {
        time -= 1;
        squares['small-square-one'].classList.add(colorClass);
    }
}

// Update clock every second
setInterval(updateClock, 1000);

// Toggle between light and dark modes
function toggleAppearance() {
    document.body.classList.toggle('appearance-light');
    Object.values(squares).forEach(square => square.classList.toggle('appearance-light'));
}
