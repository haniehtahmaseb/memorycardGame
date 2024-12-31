const memoryCard = document.getElementById('memoryCard')
const score = document.getElementById('score')
const time = document.getElementById('time')

let bg = ['url(./img/1.JPG)', 'url(./img/2.JPG)', 'url(./img/3.JPG)', 'url(./img/4.JPG)', 'url(./img/5.JPG)', 'url(./img/6.JPG)']
console.log(bg);
let obj = []
let result = []
setTimeout(sec , 2001)
// create cards/
function card() {
    for (i = 0; i < 12; i++) {
        const card = document.createElement('div')
        card.innerHTML = `
        <div></div>
        <div></div>
        `
        memoryCard.appendChild(card)
    }
}
card()
// create cards/


// create array of cards/
const cards = document.querySelectorAll('body>main>div>div')
for (i = 0; i < (cards.length); i++) {
    obj.push(cards[i])
}

// create array of cards/
console.log('obj :' + obj);

// create group two/
for (j = 0; j < (cards.length) / 2; j++) {
    let arr = []
    for (i = 0; i < 2; i++) {
        let randI = Math.floor(Math.random() * obj.length)
        arr.push(obj[randI])
        obj.splice(randI, 1)
    }
    console.log('arr:' + arr);

    result.push(arr)
}
// create group two/
console.log('result :' + result);

// background/
for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
        console.log(bg[i]);
        result[i][j].children[1].style.backgroundImage = bg[i];
    }
}
// background/

function enter(){
    cards.forEach((val)=>{
        val.style.transform = 'rotateY(180deg)';
        setTimeout(() => {
            val.style.transform = 'rotateY(0deg)';
        }, 2000);
    })
    
}
enter()


let flag = 0;
let selected = []
cards.forEach((val) => {
    val.addEventListener('click', () => {
        val.style.scale = '1.2';
        setTimeout(() => {
            val.style.scale = '1';
        }, 500);
        if (flag < 2) {
            val.style.transform = 'rotateY(180deg)';
            selected.push(val);
            console.log(selected.length);
            if (selected.length === 2) {
                const bg1 = window.getComputedStyle(selected[0].children[1]).backgroundImage;
                const bg2 = window.getComputedStyle(selected[1].children[1]).backgroundImage;
                console.log(bg1, bg2);
                if (bg1 === bg2) {
                    selected[0].style.opacity='0.5'
                    selected[1].style.opacity='0.5'
                    setTimeout(() => {
                        flag = 0
                        selected = []
                        sc()
                    }, 1000);
                } else {
                    setTimeout(() => {
                        selected[0].style.transform = 'rotateY(0deg)';
                        selected[1].style.transform = 'rotateY(0deg)';
                        flag = 0
                        selected = []
                    }, 1000);
                }

            }
        }
        flag++
    });
});

let per = 0
function sc() {
        per++
        score.innerText ='your score :'+''+ per
        if( per === result.length){
            score.innerText = ' you win'
        }
}
console.log(sc);

let s =0
function sec(){
    const inval =    setInterval(() => {
        s++
        time.innerText = 'time:'+ ''+s+'s'
        if( s === 60){
            clearInterval(inval)
            alert('your time is finished')
            window.location.reload()
        }
    }, 1000);

}






