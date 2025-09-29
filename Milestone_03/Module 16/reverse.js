const sentence = 'I am learing Web Deb.'
// const result = '.veD beW gninrael ma I';

let reverse = '';
for (const letter of sentence) {
    // console.log(letter);
    reverse = letter + reverse;
}
// console.log(reverse);

// ignore this solution 
for (let i = 0; i < sentence.length; i++)