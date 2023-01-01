let form = document.getElementById('form');
let results = document.getElementById('results');
let btnReset = document.getElementById('reset');
let btnCheck = document.getElementById('answers');


function shuffle(arr) {
    let i = arr.length;
    let newI = undefined;
    while (i != 0) {
        newI = Math.floor(Math.random()*i);
        i--;
        [arr[i], arr[newI]] = [arr[newI], arr[i]];
    }
    return arr;
}
shuffle(questions);

btnReset.addEventListener('click', () => {
    location.reload();
});

let fiveQn = [];
for(let i=0; i<5; i++) {
    let qn = document.createElement('div');
    form.append(qn);
    let qnNo = document.createElement('p');
    qnNo.textContent = (`${i+1}. ${questions[i].qn}`);
    qn.append(qnNo);

    questions[i].ans.forEach((ans, j) => {
        let input = document.createElement('input');
        input.type = 'radio';
        input.value = j;
        input.name = `possibleAns${i}`;
        input.classList.add = 'input';
        let label = document.createElement('label');
        label.innerHTML = ans;
        qn.append(input, label);
    });
    fiveQn.push(questions[i]);
}

btnCheck.addEventListener('click', () => {
    fiveQn.forEach((e, i) => {
        let answer = document.querySelector(`input[name="possibleAns${i}"]:checked`).value;

        if(answer == e.correct_ans) {
            let ans = document.createElement('p');
            ans.textContent = `Correct answer number ${i+1}.`;
            ans.style.color = 'green';
            results.append(ans);
        }
        else {
            let ans = document.createElement('p');
            ans.textContent = `Wrong answer number ${i+1}.`;
            ans.style.color = 'red';
            results.append(ans);
        }
    });
    let disabled = document.querySelectorAll(`input[type="radio"]`);
    disabled.forEach((el) => {
        el.disabled = true;
    });
    btnCheck.disabled;
});