// let fiveQn = questions.slice(0, 5);
let form = document.getElementById('form');

// for(let  i=0; i<5; i++) {
//     fiveQn.push(questions[i]);
// }
// console.log(fiveQn);
function shuffle(arr) {
    let i = arr.length;
    let newI = undefined;
    while (i != 0) {
        newI = Math.floor(Math.random() * i);
        i--;
        [arr[i], arr[newI]] = [arr[newI], arr[i]];
    }
    return arr;
}
shuffle(questions);
btnReset.addEventListener('click', () => {
    // shuffle(questions);
    location.reload();
});
// console.log(questions);



for(let i=0; i<5; i++) {
    let qn = document.createElement('div');
    form.append(qn);
    let textQn = document.createTextNode(`${i+1}. ${questions[i].qn}`);
    qn.append(textQn);

    let ansOpt = document.createElement('div');
    form.append(ansOpt);

    questions[i].ans.forEach((ans, i) => {
        let input = document.createElement('input');
        input.type = 'radio';
        input.value = i;
        input.name = 'possibleAns';
        let label = document.createElement('label');
        label.innerHTML = ans;
        ansOpt.append(input, label);
    });
}



