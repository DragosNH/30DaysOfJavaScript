// --------- Level 2 ---------
console.log("------ Level 2 ------");

// Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

const tenMostFrequentWords = (text) => {

    const words = text.match(/\b\w+\b/g);

    const wordCount = {};

    words.forEach(word => {
        const lower = word.toLowerCase();
        wordCount[lower] = (wordCount[lower] || 0) + 1;
    });

    const sorted = Object.entries(wordCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);

    return sorted.map(([word, count]) => ({ word, count }));
};

let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
console.log(tenMostFrequentWords(paragraph))