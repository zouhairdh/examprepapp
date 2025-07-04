const flashcards = [
  {
    de: {
      question: 'Was bewirkt der Befehl „echo "" > Datei”, falls Datei schon Inhalt enthält?',
      answer: 'Der Inhalt der Datei wird gelöscht und enthält danach nur "" (nichts).'
    },
    en: {
      question: 'What does the command "echo \"\" > file" do if the file already has content?',
      answer: 'The file content is erased and replaced by an empty string.'
    }
  },
  {
    de: {
      question: 'Warum bleiben Zombie-Prozesse in der Prozesstabelle bestehen?',
      answer: 'Weil deren Rückgabewerte möglicherweise noch vom Elternprozess abgefragt werden.'
    },
    en: {
      question: 'Why do zombie processes remain in the process table?',
      answer: 'Because their return values might still be needed by the parent process.'
    }
  },
  {
    de: {
      question: 'Nenne zwei Bedingungen für eine Verklemmung (Deadlock).',
      answer: 'Exklusive Belegung, Nachforderung, Kein Entzug.'
    },
    en: {
      question: 'Name two conditions required for a deadlock.',
      answer: 'Mutual exclusion, hold and wait, no preemption.'
    }
  }
];

const quizzes = [
  {
    de: {
      question: 'UNIX-Prozesse ...',
      options: [
        '... können leicht und schnell weitere Prozesse erzeugen.',
        '... interagieren mittels grafischer Benutzeroberfläche mit dem Nutzer.',
        '... sind primäres Strukturierungskonzept für Aktivitäten.',
        '... sind stets in mehrere Fäden (Threads) aufgeteilt.',
        '... besitzen eine eindeutige Prozess-ID (PID).'
      ],
      correct: [0, 2, 4]
    },
    en: {
      question: 'UNIX processes ...',
      options: [
        '... can easily and quickly create additional processes.',
        '... interact with users via graphical user interfaces.',
        '... are the primary structuring concept for activities.',
        '... are always split into multiple threads.',
        '... have a unique process ID (PID).'
      ],
      correct: [0, 2, 4]
    }
  },
  {
    de: {
      question: 'Welcher Befehl gibt alle .c-Dateien eines Verzeichnisses absteigend alphabetisch sortiert in der Konsole aus?',
      options: [
        'ls -r *.c',
        'ls *.c | sort -r',
        'sort -r | ls *.c',
        'find . -name "*.c" | sort -r',
        'ls *.c | grep -r'
      ],
      correct: [0, 1, 3]
    },
    en: {
      question: 'Which command outputs all .c files in a directory sorted in descending alphabetical order in the console?',
      options: [
        'ls -r *.c',
        'ls *.c | sort -r',
        'sort -r | ls *.c',
        'find . -name "*.c" | sort -r',
        'ls *.c | grep -r'
      ],
      correct: [0, 1, 3]
    }
  },
  {
    de: {
      question: 'Douglas McIlroy, der Erfinder der UNIX-Pipes, fasste die Philosophie hinter UNIX einmal wie folgt zusammen:',
      options: [
        'Schreibe Programme, die Closed Source und proprietär sind.',
        'Schreibe Programme, die mit Textströmen umgehen, da dies eine universelle Schnittstelle ist.',
        'Entwickle monolithische Anwendungen, die alle Funktionen in einem Paket bieten.',
        'Schreibe Programme, die Binärdaten verarbeiten, da dies effizienter ist.',
        'Bevorzuge Benutzeroberflächen gegenüber Kommandozeilen-Tools.',
        'Schreibe Programme, die zusammenarbeiten.',
        'Erstelle funktionsreiche Programme, die alle Anwendungsfälle abdecken.',
        'Schreibe Programme, die nur eine Sache tun und diese gut.'
      ],
      correct: [1, 5, 7]
    },
    en: {
      question: 'Douglas McIlroy, the inventor of UNIX pipes, once summarized the philosophy behind UNIX as follows:',
      options: [
        'Write programs that are closed source and proprietary.',
        'Write programs to handle text streams, because that is a universal interface.',
        'Develop monolithic applications that provide all features in one package.',
        'Write programs that handle binary data, because it is more efficient.',
        'Prioritize user interfaces over command-line tools.',
        'Write programs to work together.',
        'Create feature-rich programs to cover all use cases.',
        'Write programs that do one thing and do it well.'
      ],
      correct: [1, 5, 7]
    }
  },
  {
    de: {
      question: 'Welche Aussagen stimmen für die bekannte Methode fork()?',
      options: [
        'fork() gibt im Elternprozess den Wert -1 zurück, wenn der Kindprozess erfolgreich erstellt wurde.',
        'fork() erzeugt einen neuen Prozess, der ein Duplikat des aufrufenden Prozesses ist.',
        'fork() gibt im Kindprozess den Wert 0 zurück.',
        'fork() führt den Kindprozess auf einem anderen Prozessor aus.'
      ],
      correct: [1, 2]
    },
    en: {
      question: 'Which statements are true for the well-known fork() method?',
      options: [
        'fork() returns -1 in the parent process if the child process was created successfully.',
        'fork() creates a new process that is a duplicate of the calling process.',
        'fork() returns 0 in the child process.',
        'fork() runs the child process on another processor.'
      ],
      correct: [1, 2]
    }
  },
  {
    de: {
      question: 'Welche Aussagen stimmen für die bekannte Methode wait()?',
      options: [
        'Der korrekte Einsatz von wait() kann eine Anhäufung von untoten Kindprozessen (Zombies) verhindern.',
        'wait() gibt immer die PID des Kindprozesses zurück, das beendet wurde.',
        'wait() verhindert das Entstehen von verwaisten Prozessen (Orphan).',
        'wait() wartet auf den Kindprozess und beendet den Elternprozess, sobald ein Kindprozess endet.',
        'wait() blockiert den aufrufenden Prozess, bis ein Kindprozess beendet wird.'
      ],
      correct: [0, 2, 4]
    },
    en: {
      question: 'Which statements are true for the well-known wait() method?',
      options: [
        'The correct use of wait() can prevent accumulation of zombie child processes.',
        'wait() always returns the PID of the child process that terminated.',
        'wait() prevents the creation of orphaned processes.',
        'wait() waits for the child process and terminates the parent process as soon as a child ends.',
        'wait() blocks the calling process until a child process ends.'
      ],
      correct: [0, 2, 4]
    }
  },
  {
    de: {
      question: 'Welche Speichersegmente teilen sich Fäden (Threads) mit dem schwergewichtigen Prozess?',
      options: [
        'Data',
        'Stack',
        'Heap',
        'Text',
        'BSS'
      ],
      correct: [0, 2, 3, 4]
    },
    en: {
      question: 'Which memory segments are shared by threads with the heavyweight process?',
      options: [
        'Data',
        'Stack',
        'Heap',
        'Text',
        'BSS'
      ],
      correct: [0, 2, 3, 4]
    }
  }
];

let currentLang = 'de';
let currentMode = 'flashcard';
let cardIndex = 0;
let answerChecked = false;

document.getElementById('languageToggle').addEventListener('change', (e) => {
  currentLang = e.target.checked ? 'en' : 'de';
  renderApp();
});

function setMode(mode) {
  currentMode = mode;
  cardIndex = 0;
  answerChecked = false;
  renderApp();
}

function renderApp() {
  const app = document.getElementById('app');
  app.innerHTML = '';

  // Add progress indicator
  const progress = document.createElement('div');
  progress.className = 'progress';
  if (currentMode === 'flashcard') {
    progress.textContent = `${cardIndex + 1} of ${flashcards.length}`;
  } else {
    progress.textContent = `${cardIndex + 1} of ${quizzes.length}`;
  }
  app.appendChild(progress);

  if (currentMode === 'flashcard') {
    const fc = flashcards[cardIndex][currentLang];
    const card = document.createElement('div');
    card.className = 'card flashcard';
    card.innerHTML = `<div class="question">${fc.question}</div><div class="answer" style="display:none;">${fc.answer}</div>`;
    card.addEventListener('click', () => {
      const ans = card.querySelector('.answer');
      ans.style.display = ans.style.display === 'none' ? 'block' : 'none';
    });
    app.appendChild(card);
  }

  if (currentMode === 'quiz') {
    const q = quizzes[cardIndex][currentLang];
    const quizDiv = document.createElement('div');
    quizDiv.className = 'card quiz';
    quizDiv.innerHTML = `<div class="question">${q.question}</div>`;

    const form = document.createElement('div');
    form.className = 'answers';
    q.options.forEach((opt, i) => {
      const label = document.createElement('label');
      label.innerHTML = `<input type="checkbox" name="q${i}" value="${i}" /> ${opt}`;
      form.appendChild(label);
    });

    const feedback = document.createElement('div');
    feedback.className = 'feedback';
    feedback.style.display = 'none';

    const checkBtn = document.createElement('button');
    checkBtn.textContent = currentLang === 'de' ? 'Überprüfen' : 'Check';
    checkBtn.type = 'button';

    const nav = document.createElement('div');
    nav.className = 'nav-buttons';

    const prevBtn = document.createElement('button');
    prevBtn.textContent = currentLang === 'de' ? 'Zurück' : 'Previous';
    prevBtn.disabled = cardIndex === 0;
    prevBtn.onclick = () => {
      cardIndex = Math.max(0, cardIndex - 1);
      answerChecked = false;
      renderApp();
    };

    const nextBtn = document.createElement('button');
    nextBtn.textContent = currentLang === 'de' ? 'Weiter' : 'Next';
    nextBtn.disabled = !(cardIndex < quizzes.length - 1 || answerChecked);

    nextBtn.onclick = () => {
      if (cardIndex < quizzes.length - 1) {
        cardIndex++;
        answerChecked = false;
        renderApp();
      }
    };

    checkBtn.onclick = () => {
      const checked = Array.from(form.querySelectorAll('input:checked')).map(i => +i.value);
      const correct = quizzes[cardIndex][currentLang].correct;
      const isCorrect = checked.length === correct.length &&
        JSON.stringify(checked.sort()) === JSON.stringify(correct.sort());
      feedback.textContent = isCorrect ?
        (currentLang === 'de' ? 'Richtig!' : 'Correct!') :
        (currentLang === 'de' ? 'Versuchen Sie es erneut.' : 'Try again.');
      feedback.className = 'feedback ' + (isCorrect ? 'correct' : 'incorrect');
      feedback.style.display = 'block';
      answerChecked = true;
      nextBtn.disabled = false;
    };

    quizDiv.appendChild(form);
    quizDiv.appendChild(checkBtn);
    quizDiv.appendChild(feedback);
    app.appendChild(quizDiv);
    nav.appendChild(prevBtn);
    nav.appendChild(nextBtn);
    app.appendChild(nav);
  }

  if (currentMode === 'flashcard') {
    const nav = document.createElement('div');
    nav.className = 'nav-buttons';

    const prevBtn = document.createElement('button');
    prevBtn.textContent = currentLang === 'de' ? 'Zurück' : 'Previous';
    prevBtn.disabled = cardIndex === 0;
    prevBtn.onclick = () => {
      cardIndex = Math.max(0, cardIndex - 1);
      renderApp();
    };

    const nextBtn = document.createElement('button');
    const maxIndex = flashcards.length - 1;
    nextBtn.textContent = currentLang === 'de' ? 'Weiter' : 'Next';
    nextBtn.disabled = cardIndex === maxIndex;
    nextBtn.onclick = () => {
      cardIndex = Math.min(maxIndex, cardIndex + 1);
      renderApp();
    };

    nav.appendChild(prevBtn);
    nav.appendChild(nextBtn);
    app.appendChild(nav);
  }
}

renderApp();