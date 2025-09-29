// // DECLIRE THE PARENTS
// const mainContainer = document.getElementById('main-container');

// // MAKING THE ELEMENT

// const placesSection = document.createElement('section');

// const h1 = document.createElement('h1')
// h1.innerText = 'Ajke class a ki ki porecho';
// placesSection.appendChild(h1);


// const ul = document.createElement('ul');
// placesSection.appendChild(ul);

// const li1 = document.createElement('li')
// li1.innerText = 'Structured Programming Language';
// ul.appendChild(li1);

// const li2 = document.createElement('li')
// li2.innerText = 'Introduction to Computer System';
// ul.appendChild(li2);

// const li3 = document.createElement('li')
// li3.innerText = 'Foundation English';
// ul.appendChild(li3);

// const li4 = document.createElement('li')
// li4.innerText = 'Mathematics';
// ul.appendChild(li4);


// // APPEND THE SECTION TO MAINCONTAINER
// mainContainer.appendChild(placesSection);

// easier to create HTML

const mainContainer = document.getElementById('main-container');

const booksSection = document.createElement('section');
booksSection.innerHTML = `
    <h1>Bolar moto kichui nar Tarporo Boli</h1>
    <ul>
        <li>Prothom kotha vallage na</li>
        <li>Ditio kothatao hocche valo lage na</li>
        <li>Sob theke joruri kotha hocche ager duita  kothai sothik</li>
    </ul>
`

mainContainer.appendChild(booksSection);