const container = document.querySelector('#container');

const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'This is the glorious text-content!';

const redPara = document.createElement('p');
    redPara.classList.add('redPara');
    redPara.textContent = "Hey I'm red!"; 
    redPara.style.color = 'red'

const  blueh3 = document.createElement('h3');
    blueh3.classList.add('blueh3');
    blueh3.textContent = "Hey I'm blue h3!"; 
    blueh3.style.color = 'blue'

const boxCont = document.createElement('div');
    boxCont.classList.add('boxCont');
    boxCont.setAttribute('style', 'background-color: pink; border:1px solid black;');
    
const boxH1 = document.createElement('h1');
    boxH1.textContent = "I’m in a div";
const boxP = document.createElement('p');
    boxP.textContent = "ME TOO!";

container.appendChild(content);
container.appendChild(redPara);
container.appendChild(blueh3);
container.appendChild(boxCont);
boxCont.appendChild(boxH1);
boxCont.appendChild(boxP);