
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}


// basic chords
let basic_chords = [
    {
    question: 'A',
    answer: 'A, C#, E'
    },
    {
    question: 'Am',
    answer: 'A, C, E'
    },
    {
    question: `Bb`,
    answer: `Bb, D, F`
    },
    {
    question: `Bbm`,
    answer: `Bb, Db, F`
    },
    {
    question: 'B',
    answer: 'B, D#, F#'
    },
    {
    question: 'Bm',
    answer: 'B, D, F#'
    },
    {
    question: 'C',
    answer: 'C, E, G'
    },
    {
    question: 'Cm',
    answer: 'C, D#, G'
    },
    {
    question: `<pre>C#\nDb`,
    answer: `<pre>C#, F, G#\nDb, F, Ab`
    },
    {
    question: `<pre>C#m\nDbm`,
    answer: `<pre>C#, E, G#\nDb, E, Ab`
    },
    {
    question: 'D',
    answer: 'D, F#, A'
    },
    {
    question: 'Dm',
    answer: 'D, F, A'
    },
    {
    question: `<pre>D#\nEb`,
    answer: `<pre>D#, G, A#\nEb, G, Bb`
    },
    {
    question: `<pre>D#m\nEbm`,
    answer: `<pre>D#, F#, A#\nEb, Gb, Bb`
    },
    {
    question: 'E',
    answer: 'E, G#, B'
    },
    {
    question: 'Em',
    answer: 'E, G, B'
    },
    {
    question: 'F',
    answer: 'F, A, C'
    },
    {
    question: 'Fm',
    answer: 'F, G#, C'
    },
    {
    question: `<pre>F#\nGb`,
    answer: `<pre>F#, A#, C#\nGb, Bb, Db`
    },
    {
    question: `<pre>F#m\nGbm`,
    answer: `<pre>F#, A, C#\nGb, A, Db`
    },
    {
    question: 'G',
    answer: 'G, B, D'
    },
    {
    question: 'Gm',
    answer: 'G, A#, D'
    },
    {
    question: `<pre>G#\nAb`,
    answer: `<pre>G#, C, D#\nAb, C, Eb`
    },
    {
    question: `<pre>G#m\nAbm`,
    answer: `<pre>G#, B, D#\nAb, B, Eb`
    }
];

// let line_question = basic_chds.question.split("\n");
// let line_answer = basic_chords.answer.split("\n");

(function(){
  let randomIndex = basic_chords[Math.floor(Math.random()*basic_chords.length)];
  document.getElementById('questions').innerHTML = randomIndex.question;
  document.getElementById('answers').innerHTML = randomIndex.answer;
}())

let chord = () => {
    let randomIndex = basic_chords[Math.floor(Math.random()*basic_chords.length)];
    // document.getElementById('questions').innerHTML = randomIndex.question.split(" ").join("<br>");
    // document.getElementById('answers').innerHTML = randomIndex.answer.split("-").join("<br>");
    document.getElementById('questions').innerHTML = randomIndex.question;
    document.getElementById('answers').innerHTML = randomIndex.answer;
    document.getElementById('answers').style.display = 'none';
  }


// let chord = () => {
//     let randomIndex = basic_chords[Math.floor(Math.random()*basic_chords.length)];

//     let line_question = randomIndex.question.split("\n");
//     let line_answer = randomIndex.answer.split("\n");
    
//     line_question.forEach(line => {
//     const question_el = document.getElementById('questions');
//     const span = `<span>${line}</span><br/>`
//     question_el.innerHTML = question_el.innerHTML.concat(span);
//     const answer_el = document.getElementById('answers').innerHTML = randomIndex.answer;
// })
// }

let displayAnswer = () => {
document.getElementById('answers').style.display = 'block';
}

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress (e) {
  // if arrowLeft or arrowRight
  if (e.keyCode === 37 || e.keyCode === 39) {
    chord();
  }
  // if arrowDown 
  else if (e.keyCode === 40){
    displayAnswer();
  }
}