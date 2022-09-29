function ready(){

    // let divVar = document.body.children[1];
    // divVar.style.border = "thick solid black";
    
    // let pVar = document.body.querySelector('.text');
    // pVar.style.color = 'black';
    
    // //============================================//
    
    // let newParagraph = document.createElement('p');
    // newParagraph.textContent = 'I am a paragraph';
    
    // let parent = document.querySelector('#content');
    // parent.appendChild(newParagraph);

    let outputEl = document.body.querySelector("#output");

    let oneEl = document.createElement("button")
    oneEl.textContent = 'I am a button';
    oneEl.style.color = 'red'
    let twoEl = document.createElement("button")
    twoEl.textContent = 'I am a button';
    twoEl.style.backgroundColor = 'blue'
    twoEl.style.color = 'white'

    let parent = document.querySelector('#output');
    parent.appendChild(oneEl);

    document.querySelector('#output');
    parent.appendChild(twoEl);


}


