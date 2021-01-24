const container = document.querySelector('#container');

const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'This is the glorious text-content!';

const redPara = document.createElement('p');
    redPara.classList.add('redPara');
    redPara.textContent = "Hey I'm red!"; 
    redPara.style.color = 'red'

const  blueh3= document.createElement('h3');
    blueh3.classList.add('redPara');
    blueh3.textContent = "Hey I'm blue h3!"; 
    blueh3.style.color = 'blue'

container.appendChild(content);
container.appendChild(redPara);
container.appendChild(blueh3);