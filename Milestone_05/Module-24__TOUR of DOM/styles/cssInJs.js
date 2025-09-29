// const sections = document.getElementsByTagName('section')
// console.log(sections);
// HTMLCollection(4) [section, section, section, section]


const sections = document.querySelectorAll('section')
// console.log(sections);
// // NodeList(4) [section, section, section, section]
// for(const section of sections) {
//     console.log(section);
//     section.style.backgroundColor = 'lightblue';
//     section.style.border = '3px solid green';
//     section.style.marginBottom = '10px';
//     section.style.borderRadius = '15px';
// }

for(const section of sections) {
    section.classList.add('section-card')
}
