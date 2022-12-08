let userScore = document.getElementById('userScoreVal');
let compScore = document.getElementById('compScoreVal');
let userResult = document.getElementById('result-user-stat')
let compResult = document.getElementById('result-comp-stat')
let winner = document.getElementById('result-final-stat')

let rock = document.getElementById('r')
let paper = document.getElementById('p')
let sessor = document.getElementById('s')
let r = 'rock'
let p = 'paper'
let s = 'sessior'


let cr = false;
let cp = false;
let cs = false;

let ur = false;
let up = false;
let us = false;

let val = 0;
let count = 0;




const cpt = [rock, paper, sessor];

let computer = () => {
    let output = '';
    for (let i = 0; i <= cpt.length; i++) {
        output = cpt[Math.floor(Math.random() * cpt.length)]
    }
    let x = ''
    x = compResult.innerText
    if (output === rock) {
        compResult.innerText = x + " " + r + ","
        cr = true


    } else if (output === paper) {
        compResult.innerText = x + ' ' + p + ","
        cp = true

    } else if (output === sessor) {
        compResult.innerText = x + ' ' + s + ","
        cs = true

    }
}


let user = (checkValue) => {
    let x = ''
    x = userResult.innerText
    if (checkValue === rock) {
        userResult.innerText = x + " " + r + ","
        ur = true
    } else if (checkValue === paper) {
        userResult.innerText = x + ' ' + p + ","
        up = true

    } else if (checkValue === sessor) {
        userResult.innerText = x + ' ' + s + ","
        us = true
    }
}



function logic() {
    if (cr === true && ur === true) {
        let val = winner.innerHTML
        winner.innerHTML = val + " " + "," + "its a tie"
        cr = false
        ur = false

    }
    if (cp === true && up === true) {
        let val = winner.innerHTML
        winner.innerHTML = val + " " + "," + "its a tie"
        cp = false
        up = false

    }
    if (cs === true && us === true) {
        let val = winner.innerHTML
        winner.innerHTML = val + " " + "," + "its a tie"
        cs = false
        us = false

    }
    else if (cr == true && us == true) {
        ++val
        // count = count + val
        compScore.innerText = val
    } else if (cp == true && ur == true) {
        ++val
        // count = count + val
        compScore.innerText = val
    } else if (cs == true && up == true) {
        ++val
        // count = count + val
        compScore.innerText = val
    } else if (cr == true && up != true) {
        ++count
        up = true
        // count = count + val
        userScore.innerText = count
    } else if (cp == true && us == true) {
        ++count
        us != true
        // count = count + val
        userScore.innerText = count
    } else if (cs == true && ur == true) {
        ++count
        ur != true
        // count = count + val
        userScore.innerText = count
    }

}








function click(target) {
    target.addEventListener('click', () => {
        user(target)
        computer()
        logic()
    })
}



click(rock)
click(paper)
click(sessor)

