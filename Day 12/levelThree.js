// --------- Level 3 ---------
console.log("------ Level 3 ------");

// Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.

const cleanText = (text) => {
    return text.replace(/[^a-zA-Z0-9\s]/g, '');
};

const threeMostFrequentWords = (text) => {

    const words = text.toLowerCase().match(/\b\w+\b/g);

    const count = {};

    words.forEach(word => {
        count[word] = (count[word] || 0) + 1;
    });

    return Object.entries(count)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([word, count]) => ({ word, count }));
};

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

const cleaned = cleanText(sentence);
console.log(cleaned);

console.log(threeMostFrequentWords(cleaned));