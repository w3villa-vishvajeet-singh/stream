function typeEffect(text, delay = 100) {
    let i = 0;
    const interval = setInterval(() => {
        process.stdout.write(text.charAt(i));
        i++;
        if (i >= text.length) {
            clearInterval(interval);
            process.stdout.write('\n');
        }
    }, delay);
}

// Change the message here
const message = "Hello, welcome to the world of Corporate!";
typeEffect(message);
