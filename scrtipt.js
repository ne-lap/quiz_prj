let quiz = document.getElementById('quiz');
let form = document.getElementById('form')
let btnReset = document.getElementById('reset');
let btnCheck = document.getElementById('answers');

function shuffle(arr) {
    let i = arr.length;
    let new_i = undefined;
    while (i != 0) {
        new_i = Math.floor(Math.random()*i);
        i--;
        [arr[i], arr[new_i]] = [arr[new_i], arr[i]];
    }
    return arr;
}
shuffle(questions);

btnReset.addEventListener('click', () => {
    location.reload();
});

let qns = [];
for(let i=0; i<5; i++) {
    qns.push(questions[i]);
}

qns.forEach((qns, i) => {
    let qn = document.createElement('div');
    let qnNo = document.createElement('p');
    qnNo.textContent = (`${i+1}. ${qns.qn}`);
    qn.classList.add('qn');
    
    form.append(qn);
    qn.append(qnNo);

    qns.ans.forEach((ans, j) => {
        let input = document.createElement('input');
        let label = document.createElement('label');
        label.innerHTML = ans;

        input.type = 'radio';
        input.value = j;
        input.name = `possibleAns${i}`;
    
        if(j == 0) {
            input.checked = true;
        }

        qn.append(input, label);
    });

});

btnCheck.addEventListener('click', () => {
    let rsl = document.createElement('div');
    rsl.id = 'results';
    quiz.append(rsl);

    qns.forEach((el, i) => {
        let answer = document.querySelector(`input[type="radio"]:checked`).value;
        
        if(answer == el.correct_ans) {
            let ans = document.createElement('p');
            ans.textContent = `Correct answer number ${i+1}.`;
            ans.classList.add('correct');
            rsl.append(ans);
        }
        else {
            let ans = document.createElement('p');
            ans.textContent = `Wrong answer number ${i+1}.`;
            ans.classList.add('error');
            rsl.append(ans);
        }
    });

    let disabled = document.querySelectorAll(`input[type="radio"]`);
    disabled.forEach((el) => {
        el.disabled = true;
    });

    btnCheck.disabled = true;
});