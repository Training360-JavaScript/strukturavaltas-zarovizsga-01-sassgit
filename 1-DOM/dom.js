function manipulateDom() {
    const quote = Array.from(document.querySelectorAll('.quote'));
    quote.forEach(e => {
        e.style.borderColor = 'blue';
        e.style.background = 'lightblue';
        e.style.fontStyle = 'italic';
    });
};

export { manipulateDom };