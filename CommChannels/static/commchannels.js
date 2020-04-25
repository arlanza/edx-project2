// Set starting value of counter to 0
if (!localStorage.getItem('counterlai'))
    localStorage.setItem('counterlai', 0);

// Load current value of  counter
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#counter').innerHTML = localStorage.getItem('counter');

    // Count every time button is clicked
    document.querySelector('button').onclick = () => {
        // Increment current counter
        let counter = localStorage.getItem('counterlai');
        counter++;

        // Update counter
        document.querySelector('#counter').innerHTML = counter;
        localStorage.setItem('counterlai', counter);
    }
});
