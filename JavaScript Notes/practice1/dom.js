console.dir(document);
const myImage = document.createElement('img');
myImage.src =
  'https://images.pexels.com/photos/12070097/pexels-photo-12070097.jpeg?cs=srgb&dl=pexels-tausif-hossain-12070097.jpg&fm=jpg';
document.body.appendChild(myImage);
console.dir(myImage.style);

myImage.style.width = '10em';
myImage.style.height = '10em';

const staticImage = document.querySelector('img');
console.dir(staticImage);
staticImage.classList.add('myimage');

const myP = document.createElement('p');
myP.innerText = 'Hana luia is luia hana';
document.body.appendChild(myP);

const myH1 = document.querySelectorAll('h1')[0];
myH1.style.color = 'green';
myH1.style.fontFamily = 'sans';

const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute(
  'href',
  'https://images.pexels.com/photos/6506873/pexels-photo-6506873.jpeg?cs=srgb&dl=pexels-charl-durand-6506873.jpg&fm=jpg'
);
myP.append(' and luia hana is hana luia');

staticImage.classList.remove('myimage');
staticImage.classList.add('myimage');

const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');
li1.innerText = 'Akram';
li2.innerText = 'Khan';
li3.innerText = 'Md';
li4.innerText = 'Salman';
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
document.body.appendChild(ul);

console.log(ul.parentElement);
console.log(ul.childElementCount);
console.log(ul.children);
console.log(li1.parentElement.parentElement);
ul.removeChild(li4);
console.log(ul.children);
li3.remove();
console.log(ul.children);

// const myFunc = () => {
//   setTimeout(() => {
//     ul.removeChild(li4);
//     ul.removeChild(li3);
//     ul.removeChild(li2);
//     ul.removeChild(li1);
//   }, 2000);
// };

// myFunc();
