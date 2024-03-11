function createHamburger(options) {
    // Default options for the hamburger
    const defaultOptions = {
        bun: 'sesame seed bun',
        garnish: ['lettuce', 'tomato'],
        cheese: 'cheddar',
        sauce: 'ketchup',
        patty: 'beef',
        pattyCount: 1,
        extras: []
    };

    // Merge default options with provided options
    const hamburgerOptions = { ...defaultOptions, ...options };

    // Function to format a list as a string
    const formatList = (list) => list.join(', ');

    // Function to describe the hamburger
    const describeHamburger = () => {
        const { bun, garnish, cheese, sauce, patty, pattyCount, extras } = hamburgerOptions;
        let description = `Your hamburger has a ${pattyCount > 1 ? pattyCount + '-patty' : 'single-patty'} ${patty} burger`;

        description += ` with ${cheese} cheese, topped with ${formatList(garnish)}`;

        if (extras.length > 0) {
            description += `, and also includes ${formatList(extras)}`;
        }

        description += `, all in a ${bun} bun with ${sauce} sauce.`;

        return description;
    };

    // Return the hamburger object
    return {
        describe: describeHamburger
    };
}

// Example usage:
const myHamburger = createHamburger({
    bun: 'whole wheat bun',
    garnish: ['lettuce', 'onion', 'pickles'],
    cheese: 'mozzarella',
    sauce: 'barbecue',
    patty: 'chicken',
    pattyCount: 2,
    extras: ['bacon', 'avocado']
});
var output = document.getElementById("output");
output.textContent = myHamburger.describe();
