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
  },
  {
    de: {
      question: 'Geben Sie die Auswirkungen der beiden Befehle „ls > wc“ sowie „ls | wc“ an und erläutern Sie anhand dessen den Unterschied zwischen den Shell-Operatoren „>“ und „|“:',
      answer: '– ls > wc schreibt Ausgabe von ls -l in die Datei „wc“ (1P)\n– ls -l | wc leitet Ausgabe von ls an den Befehl „wc“ weiter (1P).\n– Unterschied: > leitet in eine Datei um, | leitet an einen Befehl weiter (1P)'
    },
    en: {
      question: 'What are the effects of the two commands "ls > wc" and "ls | wc"? Explain the difference between the shell operators ">" and "|":',
      answer: '– ls > wc writes the output of ls -l into the file "wc" (1P)\n– ls -l | wc pipes the output of ls to the "wc" command (1P).\n– Difference: > redirects output to a file, | pipes output to another command (1P)'
    }
  },
  {
  de: {
    question: "Nennen Sie die aus der Vorlesung bekannten Gerätekategorien von E/A-Geräten und erläutern Sie kurz den Unterschied zwischen denen.",
    answer: "Zeichenorientierte Geräte (0,5 Punkte): In der Regel sequentieller Zugriff, nicht wahlfrei. (1 Punkt)\nBlockorientierte Geräte (0,5 Punkte): Wahlfreier (random-access) Zugriff. (1 Punkt)"
  },
  en: {
    question: "Name the device classes of I/O devices mentioned in the lecture and briefly explain the difference between them.",
    answer: "Character-oriented devices (0.5 points): Typically sequential access, not random. (1 point)\nBlock-oriented devices (0.5 points): Random (direct) access is possible. (1 point)"
  }
},
  {
  de: {
    question: "Erläutern Sie den Unterschied zwischen der Platzierungsstrategie (placement policy) und der Ersetzungsstrategie (replacement policy)",
    answer: "Die Platzierungsstrategie bestimmt, woher benötigter Speicher genommen wird (z. B. zur Minimierung des Verschnitts).\n• First/Last Fit\n• Best Fit\n• Worst Fit\n• Buddy-Verfahren\n\nDie Ersetzungsstrategie bestimmt, welche Speicherinhalte verdrängt werden sollen, falls kein freier Speicher mehr zur Verfügung steht.\n• LRU – Least recently used\n• FIFO – First in First out\n• Second Chance"
  },
  en: {
    question: "Explain the difference between the placement strategy (placement policy) and the replacement strategy (replacement policy)",
    answer: "The placement strategy determines from where the required memory is taken (e.g., to minimize fragmentation).\n• First/Last Fit\n• Best Fit\n• Worst Fit\n• Buddy system\n\nThe replacement strategy determines which memory contents should be evicted if no free memory is available.\n• LRU – Least recently used\n• FIFO – First in First out\n• Second Chance"
  }
},
  {
  de: {
    question: "Nennen und erläutern Sie drei Ereignisse, die das Rückschreiben des Block-Buffer-Caches auslösen.",
    answer: "• Wenn kein freier Puffer mehr vorhanden ist\n• Bei Aufruf des Systemaufrufes sync()\n• Regelmäßig vom System\n• Nach jedem Schreibaufruf im Modus O_SYNC"
  },
  en: {
    question: "Name and explain three events that trigger the write-back of the block buffer cache.",
    answer: "• When no free buffer is available\n• When the system call sync() is invoked\n• Periodically by the system\n• After every write call in O_SYNC mode"
  }
},




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
  },
  {
    de: {
      question: 'Eine Wettlaufsituation (engl. Race condition, RC) ...',
      options: [
        '... kann durch geeignete Synchronisationsmechanismen wie Schlösser (Mutex) oder Semaphoren verhindert werden.',
        '... kann durch das Deaktivieren von Interrupts vollständig vermieden werden.',
        '... entsteht, wenn zwei oder mehr Prozesse oder Threads gleichzeitig auf gemeinsame Ressourcen zugreifen und ihre Ausführungsreihenfolge das Endergebnis beeinflusst.',
        '... führt immer zu einem Deadlock.',
      ],
      correct: [1, 3]
    },
    en: {
      question: 'A race condition (RC) ...',
      options: [
        '... can be prevented by appropriate synchronization mechanisms such as locks (mutex) or semaphores.',
        '... can be completely avoided by disabling interrupts.',
        '... occurs when two or more processes or threads access shared resources simultaneously and the execution order affects the final result.',
        '... always leads to a deadlock.',
      ],
      correct: [1, 3]
    }
  },
  {
    de: {
      question: 'Welche Aussagen zum Bäckerei-Algorithmus sind wahr?',
      options: [
        'Beim Bäckerei-Algorithmus erhält jeder Prozess eine Nummer.',
        'Der Bäckerei-Algorithmus verhindert, dass ein Prozess jemals länger als eine bestimmte Zeit auf den Zugang zum kritischen Abschnitt warten muss.',
        'Der Bäckerei-Algorithmus kann nur in Systemen mit einer einzigen CPU verwendet werden.',
        'Die Zulassung erfolgt in der Reihenfolge der Nummern, d.h. wenn der kritische Abschnitt frei ist, darf der Prozess mit der niedrigsten Nummer den kritischen Abschnitt betreten.',
        'Der Bäckerei-Algorithmus erfordert, dass die Prozesse synchronisiert auf die Nummernvergabe zugreifen.',
        'Der Algorithmus kann nicht garantieren, dass eine Wartenummer nur an einen Prozess vergeben wird.',
        'Die Acquire-Methode besitzt eine asymptotische Laufzeit von O(n)',
      ],
      correct: [1, 4, 6, 7]
    },
    en: {
      question: 'Which statements about the Bakery algorithm are true?',
      options: [
        'In the Bakery algorithm, each process receives a number.',
        'The Bakery algorithm ensures that no process ever has to wait longer than a certain amount of time to access the critical section.',
        'The Bakery algorithm can only be used in systems with a single CPU.',
        'Admission is in order of the numbers, i.e., when the critical section is free, the process with the lowest number may enter it.',
        'The Bakery algorithm requires processes to synchronously access the number assignment.',
        'The algorithm cannot guarantee that a waiting number is only assigned to one process.',
        'The acquire method has an asymptotic runtime of O(n).',
      ],
      correct: [1, 4, 6, 7]
    }
  },
  {
    de: {
      question: "Welche der folgenden Aussagen sind wahr?",
      options: [
        "Ein Semaphor kann sowohl für gegenseitigen Ausschluss als auch zur Synchronisation verwendet werden, während ein Schloss (Mutex) nur für gegenseitigen Ausschluss verwendet werden kann.",
        "Ein Schloss (Mutex) kann sowohl für gegenseitigen Ausschluss als auch zur Synchronisation verwendet werden, während ein Semaphor nur für gegenseitigen Ausschluss verwendet werden kann.",
        "Ein Mutex hat einen Zähler, der den aktuellen Status der Ressource angibt.",
        "Ein Mutex ist ein Sperrmechanismus, der sicherstellt, dass nur ein Thread gleichzeitig auf eine Ressource zugreifen kann."
      ],
      correct: [1, 4]
    },
    en: {
      question: "Which of the following statements are true?",
      options: [
        "A semaphore can be used for both mutual exclusion and synchronization, while a lock (mutex) can only be used for mutual exclusion.",
        "A lock (mutex) can be used for both mutual exclusion and synchronization, while a semaphore can only be used for mutual exclusion.",
        "A mutex has a counter that indicates the current status of the resource.",
        "A mutex is a locking mechanism that ensures only one thread can access a resource at a time."
      ],
      correct: [1, 4]
    }
  },
  {
    de: {
      question: "Bei der Verklemmungsvermeidung ...",
      options: [
        "... wird sichergestellt, dass keine zwei Prozesse dieselbe Ressource gleichzeitig anfordern können.",
        "... wird versucht, das System durch dynamische Analyse der Ressourcenzuweisung in einen sicheren Zustand zu halten.",
        "... prüft das System vor jeder Ressourcenzuweisung, ob die verbleibenden Ressourcen für die restlichen Prozesse ausreichen.",
        "... werden Ressourcen statisch zugewiesen, um sicherzustellen, dass keine Verklemmung auftritt.",
        "... wird jede Ressourcenzuweisung sofort zurückgenommen, wenn ein Prozess zu lange wartet."
      ],
      correct: [2, 3]
    },
    en: {
      question: "In deadlock avoidance ...",
      options: [
        "... it is ensured that no two processes can request the same resource at the same time.",
        "... the system tries to keep the resource allocation in a safe state using dynamic analysis.",
        "... the system checks before every allocation whether the remaining resources are sufficient for the other processes.",
        "... resources are statically assigned to ensure that no deadlock occurs.",
        "... every allocation is revoked immediately if a process waits too long."
      ],
      correct: [2, 3]
    }
  },
  {
    de: {
      question: "Ein Livelock ...",
      options: [
        "... ist eine spezielle Form des Deadlocks, bei dem die Ressourcen freigegeben werden, aber die Prozesse trotzdem blockiert bleiben.",
        "... kann bei wechselseitigem aktiven Warten (busy waiting oder „lazy“ busy waiting) entstehen.",
        "... tritt nur in verteilten Systemen auf.",
        "... ist gegenüber dem Deadlock das geringere Übel.",
        "... kann durch das einfache Hinzufügen von mehr Ressourcen gelöst werden."
      ],
      correct: [2]
    },
    en: {
      question: "A livelock ...",
      options: [
        "... is a special form of deadlock where resources are released but processes remain blocked.",
        "... can arise from mutual active waiting (busy waiting or lazy busy waiting).",
        "... only occurs in distributed systems.",
        "... is the lesser evil compared to deadlock.",
        "... can be solved by simply adding more resources."
      ],
      correct: [2]
    }
  },
  {
    de: {
      question: "Welche Aussagen über UNIX-Signale sind wahr?",
      options: [
        "Alle UNIX-Signale können von einem Prozess blockiert werden, um unerwünschte Unterbrechungen zu vermeiden.",
        "UNIX-Signale werden immer von der Benutzeroberfläche eines Betriebssystems gesendet.",
        "Der Befehl kill kann verwendet werden, um ein Signal an einen Prozess zu senden, um diesen Prozess zu beenden.",
        "UNIX-Signale sind Mechanismen, die verwendet werden, um einem Prozess oder einem Programm bestimmte Ereignisse oder Befehle zu signalisieren.",
        "Jeder Prozess in einem UNIX-System kann nur ein Signal empfangen und darauf reagieren.",
        "Ein Prozess kann Signale ignorieren oder einen benutzerdefinierten Signalhandler verwenden, um auf ein Signal zu reagieren."
      ],
      correct: [2, 3, 6]
    },
    en: {
      question: "Which statements about UNIX signals are true?",
      options: [
        "All UNIX signals can be blocked by a process to avoid unwanted interruptions.",
        "UNIX signals are always sent from the graphical user interface of an operating system.",
        "The kill command can be used to send a signal to a process to terminate it.",
        "UNIX signals are mechanisms used to signal specific events or commands to a process or program.",
        "Each process in a UNIX system can only receive and respond to one signal.",
        "A process can ignore signals or use a custom signal handler to respond to a signal."
      ],
      correct: [2, 3, 6]
    }
  }, {
    de: {
      question: "Was besagt das Hollywood-Prinzip?",
      options: [
        "Das Hollywood-Prinzip besagt, dass niedrigstufige Komponenten oder Module die Kontrolle darüber haben, wann und wie sie von höherstufigen Komponenten verwendet werden.",
        "Das Hollywood-Prinzip besagt, dass Entwickler aus Hollywood in der Softwareindustrie bevorzugt werden.",
        "Das Hollywood-Prinzip besagt, dass direkte Aufrufe vermieden werden sollen zugunsten einer umgekehrten Kontrollflussrichtung."
      ],
      correct: [1]
    },
    en: {
      question: "What does the Hollywood Principle state?",
      options: [
        "The Hollywood Principle states that low-level components or modules control when and how they are used by higher-level components.",
        "The Hollywood Principle states that developers from Hollywood are preferred in the software industry.",
        "The Hollywood Principle states that direct calls should be avoided in favor of inverted control flow."
      ],
      correct: [1]
    }
  },
  {
    de: {
      question: "Welche Aussagen zur Verwendung von Sockets in Netzwerkanwendungen sind korrekt?",
      options: [
        "Sockets sind für die Übertragung von Signalen zwischen Prozessen verantwortlich.",
        "Sockets garantieren immer eine zuverlässige und fehlerfreie Übertragung von Daten über das Netzwerk.",
        "Ein Socket kann direkt mit einer IP-Adresse kommunizieren, ohne dass ein Port erforderlich ist.",
        "Sockets ermöglichen die bidirektionale Kommunikation zwischen Prozessen über ein Netzwerk.",
        "Ein Socket kann sowohl für TCP als auch für UDP verwendet werden, je nach den Anforderungen der Anwendung."
      ],
      correct: [4, 5]
    },
    en: {
      question: "Which statements about the use of sockets in network applications are correct?",
      options: [
        "Sockets are responsible for transmitting signals between processes.",
        "Sockets always guarantee reliable and error-free data transmission over the network.",
        "A socket can communicate directly with an IP address without requiring a port.",
        "Sockets enable bidirectional communication between processes over a network.",
        "A socket can be used for both TCP and UDP depending on the application requirements."
      ],
      correct: [4, 5]
    }
  },
  {
    de: {
      question: "Beim Paging...",
      options: [
        "... wird eine sogenannte Seitentabelle verwendet, die Seiten (Virtueller Adressraum) auf Kacheln (Physikalischer Adressraum) abbildet.",
        "... wird der virtuelle Adressraum eines Prozesses in Seiten gleicher Größe unterteilt, die unabhängig voneinander im physischen Speicher platziert werden können.",
        "... wird der gesamte Prozessspeicher am Stück in den physischen Speicher geladen.",
        "... muss die Seitentabelle bijektiv sein.",
        "... gibt es keine Möglichkeit, Seiten zwischen Hauptspeicher und Sekundärspeicher auszutauschen."
      ],
      correct: [1, 2]
    },
    en: {
      question: "In paging...",
      options: [
        "... a page table is used to map pages (virtual address space) to frames (physical address space).",
        "... the virtual address space of a process is divided into pages of equal size that can be placed independently in physical memory.",
        "... the entire process memory is loaded into physical memory at once.",
        "... the page table must be bijective.",
        "... it is not possible to swap pages between main and secondary memory."
      ],
      correct: [1, 2]
    }
  },
  {
    de: {
      question: "Bei einem Kontextwechsel...",
      options: [
        "... werden die Hardware-Komponenten wie CPU und Speicher komplett neu initialisiert.",
        "... wird nur zwischen Benutzerprozessen durchgeführt, nicht zwischen Kernelprozessen.",
        "... wird der Zustand des aktuell laufenden Prozesses gespeichert und der Zustand des nächsten zu laufenden Prozesses geladen.",
        "... muss der aktuelle Prozess immer auf den Abschluss aller seiner Fäden warten, bevor er gespeichert wird.",
        "... kann die Effizienz des Systems beeinträchtigt werden, da der Wechsel zwischen Prozessen Zeit und Ressourcen kostet.",
        "... bleibt der TLB unverändert, da er keine spezifischen Prozessinformationen speichert.",
        "... muss der Inhalt der Translation Lookaside Buffer (TLB) invalidiert werden, da sich die virtuelle zu physikalische Adressübersetzung ändert.",
        "... werden alle Daten im Cache automatisch beibehalten, um die Leistung zu verbessern."
      ],
      correct: [3, 5, 7]
    },
    en: {
      question: "During a context switch...",
      options: [
        "... hardware components such as CPU and memory are completely reinitialized.",
        "... it is only performed between user processes, not kernel processes.",
        "... the state of the currently running process is saved and the state of the next process is loaded.",
        "... the current process must always wait for all of its threads to finish before being saved.",
        "... system efficiency may be reduced because switching between processes takes time and resources.",
        "... the TLB remains unchanged because it stores no specific process information.",
        "... the contents of the Translation Lookaside Buffer (TLB) must be invalidated because the virtual-to-physical address mapping changes.",
        "... all cache data is automatically preserved to improve performance."
      ],
      correct: [3, 5, 7]
    }
  },
  {
    de: {
      question: "Software kann die IRQ-Behandlung unter x86 Systemen mithilfe der Befehle sti und cli unterdrücken. Warum könnte dies problematisch sein?",
      options: [
        "Das Unterdrücken der IRQ-Behandlung verbessert immer die Leistung des Systems, da weniger Interrupts die CPU belasten.",
        "Das Unterdrücken der IRQ-Behandlung kann dazu führen, dass wichtige Hardware-Interrupts, wie z.B. Timer-Interrupts, nicht rechtzeitig verarbeitet werden, was die Systemstabilität beeinträchtigen kann.",
        "Die Verwendung von sti und cli hat keine Auswirkungen auf die Multithreading-Fähigkeiten des Systems, da Interrupts unabhängig von der CPU-Operation sind.",
        "Wenn IRQs zu lange unterdrückt werden, kann es zu einem Verlust von Daten kommen, insbesondere bei Geräten, die auf regelmäßige Interrupts angewiesen sind, wie z.B. Netzwerkkarten oder Festplatten."
      ],
      correct: [2, 4]
    },
    en: {
      question: "Software can suppress IRQ handling on x86 systems using the sti and cli instructions. Why could this be problematic?",
      options: [
        "Suppressing IRQ handling always improves system performance because fewer interrupts burden the CPU.",
        "Suppressing IRQ handling can cause important hardware interrupts, such as timer interrupts, to not be processed in time, which can affect system stability.",
        "Using sti and cli has no effect on the multithreading capabilities of the system since interrupts are independent of CPU operation.",
        "If IRQs are suppressed for too long, data loss may occur, especially with devices that rely on regular interrupts such as network cards or hard drives."
      ],
      correct: [2, 4]
    }
  }






];

let currentLang = 'de';
let currentMode = 'flashcard';
let cardIndex = 0;
let answerChecked = false;

// Helper function to shuffle array
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

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

    // Shuffle options and track correct answers
    const shuffledOptions = shuffleArray(q.options);
    const shuffledCorrect = q.correct.map(originalIndex =>
      shuffledOptions.indexOf(q.options[originalIndex])
    );

    const quizDiv = document.createElement('div');
    quizDiv.className = 'card quiz';
    quizDiv.innerHTML = `<div class="question">${q.question}</div>`;

    const form = document.createElement('div');
    form.className = 'answers';
    shuffledOptions.forEach((opt, i) => {
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
      const isCorrect = checked.length === shuffledCorrect.length &&
        JSON.stringify(checked.sort()) === JSON.stringify(shuffledCorrect.sort());
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
