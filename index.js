// Mode Switcher
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


// THREE SKILLS OF CHORDS
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
    answer: 'C, Eb, G'
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
    answer: 'F, Ab, C'
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
    answer: 'G, Bb, D'
    },
    {
    question: `<pre>Ab\nG#`,
    answer: `<pre>Ab, C, Eb`
    },
    {
    question: `<pre>Abm\nG#m`,
    answer: `<pre>Ab, B, Eb`
    }
];

let intermediate_chords = [
  {
  question: 'Amaj7',
  answer: 'A, C#, E, G#'
  },
  {
  question: 'Am7',
  answer: 'A, C, E, G'
  },
  {
  question: `Bbmaj7`,
  answer: `Bb, D, F, A`
  },
  {
  question: `Bbm7`,
  answer: `Bb, Db, F, Ab`
  },
  {
  question: 'Bmaj7',
  answer: 'B, D#, F#, A#'
  },
  {
  question: 'Bm7',
  answer: 'B, D, F#, A'
  },
  {
  question: 'Cmaj7',
  answer: 'C, E, G, B'
  },
  {
  question: 'Cm7',
  answer: 'C, Eb, G, Bb'
  },
  {
  question: `<pre>C#maj7\nDbmaj7`,
  answer: `<pre>C#, F, G#, C\nDb, F, Ab, C`
  },
  {
  question: `<pre>C#m7\nDbm7`,
  answer: `<pre>C#, E, G#, B\nDb, E, Ab, B`
  },
  {
  question: 'Dmaj7',
  answer: 'D, F#, A, C#'
  },
  {
  question: 'Dm7',
  answer: 'D, F, A, C'
  },
  {
  question: `<pre>D#maj7\nEbmaj7`,
  answer: `<pre>D#, G, A#, D\nEb, G, Bb, D`
  },
  {
  question: `<pre>D#m7\nEbm7`,
  answer: `<pre>D#, F#, A#, C#\nEb, Gb, Bb, Db`
  },
  {
  question: 'Emaj7',
  answer: 'E, G#, B, D#'
  },
  {
  question: 'Em7',
  answer: 'E, G, B, D'
  },
  {
  question: 'Fmaj7',
  answer: 'F, A, C, E'
  },
  {
  question: 'Fm7',
  answer: 'F, Ab, C, Eb'
  },
  {
  question: `<pre>F#maj7\nGbmaj7`,
  answer: `<pre>F#, A#, C#, F\nGb, Bb, Db, F`
  },
  {
  question: `<pre>F#m7\nGbm7`,
  answer: `<pre>F#, A, C#, E\nGb, A, Db, E`
  },
  {
  question: 'Gmaj7',
  answer: 'G, B, D, F#'
  },
  {
  question: 'Gm7',
  answer: 'G, Bb, D, F'
  },
  {
  question: `<pre>Abmaj7\nG#maj7`,
  answer: `<pre>Ab, C, Eb, G`
  },
  {
  question: `<pre>Abm7\nG#m7`,
  answer: `<pre>Ab, B, Eb, Gb`
  }
];


(function(){
  let randomIndex = basic_chords[Math.floor(Math.random()*basic_chords.length)];
  document.getElementById('questions').innerHTML = randomIndex.question;
  document.getElementById('answers').innerHTML = randomIndex.answer;
}())

let chord = () => {
    let randomIndex = basic_chords[Math.floor(Math.random()*basic_chords.length)];
    document.getElementById('questions').innerHTML = randomIndex.question;
    document.getElementById('answers').innerHTML = randomIndex.answer;
    document.getElementById('answers').style.display = 'none';
  }


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