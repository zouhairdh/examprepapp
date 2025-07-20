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
  {
  de: {
    question: 'Mit Hilfe welcher Datenstruktur findet man in einem UNIX-Dateisystem die zu einer Datei gehörenden Datenblöcke?',
    answer: 'Die Datenblöcke einer Datei werden im UNIX-Dateisystem mithilfe der Datenstruktur „Inode“ gefunden.'
  },
  en: {
    question: 'With the help of which data structure are the data blocks belonging to a file found in a UNIX file system?',
    answer: 'In a UNIX file system, the data blocks of a file are located using a data structure called an "inode".'
  }
},
  {
  de: {
    question: 'Nennen Sie zwei Möglichkeiten, durch die das Schreiben von Inhalten des UNIX Block-BufferCaches auf die Festplatte ausgelöst wird?',
    answer: '1. Durch den Befehl „sync“, der alle gepufferten Daten auf die Festplatte schreibt.\n2. Automatisch durch das Betriebssystem in regelmäßigen Abständen (z. B. durch einen Hintergrundprozess wie „bdflush“ oder „flush“).'
  },
  en: {
    question: 'Name two ways in which writing the contents of the UNIX block buffer cache to the disk can be triggered.',
    answer: '1. By using the "sync" command, which forces all buffered data to be written to disk.\n2. Automatically by the operating system at regular intervals (e.g., through a background process like "bdflush" or "flush").'
  }
},
  {
  de: {
    question: 'Wie kann der Block-Buffer-Cache sequentielle Lesezugriffe auf Dateien beschleunigen (nennen Sie den Mechanismus/die Funktion)?',
    answer: 'Durch „Read-Ahead“ (vorausladendes Lesen), wobei der Cache beim Erkennen eines sequentiellen Zugriffs zusätzliche Blöcke im Voraus lädt.'
  },
  en: {
    question: 'How can the block buffer cache speed up sequential reads of files (name the mechanism/function)?',
    answer: 'Through "read-ahead", where the cache preloads additional blocks in advance when it detects sequential access.'
  }
},
  {
  de: {
    question: 'Beschreiben Sie knapp die Funktionsweise der programmierten E/A (Polling) und unterbrechungsgetriebenen E/A. Nennen Sie einen Vorteil unterbrechungsgetriebener E/A.',
    answer: 'Polling / Programmierte E/A: Die CPU fragt ständig den Gerätestatus ab, bis das Gerät bereit ist. Dabei wird viel CPU-Zeit verschwendet.\n\nUnterbrechungsgetriebene E/A: Das Gerät sendet ein Signal (Interrupt), wenn es bereit ist, sodass die CPU erst dann reagiert. Die CPU kann in der Zwischenzeit andere Aufgaben ausführen.\n\nEin Vorteil unterbrechungsgetriebener E/A: Effizientere Nutzung der CPU-Zeit, da sie nicht auf das Gerät warten muss.'
  },
  en: {
    question: 'Briefly describe how programmed I/O (polling) and interrupt-driven I/O work. Name one advantage of interrupt-driven I/O.',
    answer: 'Polling / Programmed I/O: The CPU continuously checks the device status in a loop until it is ready, wasting CPU time.\n\nInterrupt-driven I/O: The device sends an interrupt signal when it is ready, allowing the CPU to perform other tasks in the meantime.\n\nOne advantage of interrupt-driven I/O: More efficient CPU usage because it does not waste time waiting for the device.'
  }
},
  {
  de: {
    question: 'Was ist eine Race Condition (Wettlaufsituation) und wie kann sie vermieden werden?',
    answer: 'Eine Race Condition tritt auf, wenn mehrere Prozesse oder Threads gleichzeitig auf gemeinsame Ressourcen zugreifen und mindestens einer davon die Ressource verändert. Das Verhalten des Programms wird dadurch unvorhersehbar. Verhindert werden kann sie durch Synchronisation, z. B. mit Mutexen, Semaphoren oder atomaren Operationen.'
  },
  en: {
    question: 'What is a Race Condition and how can it be prevented?',
    answer: 'A Race Condition occurs when multiple threads or processes access shared data at the same time and at least one modifies it. This leads to unpredictable program behavior. Race Conditions can be prevented using synchronization techniques such as mutexes, semaphores, or atomic operations.'
  }
},
  {
  de: {
    question: 'Welche drei notwendigen und eine hinreichende Bedingungen müssen erfüllt sein, damit es zu einer Verklemmung kommt?',
    answer: 'Für eine Verklemmung (Deadlock) müssen vier Bedingungen gleichzeitig erfüllt sein: 1) Gegenseitiger Ausschluss (Mutual Exclusion), 2) Belegung und Wartebedingung (Hold and Wait), 3) Keine Unterbrechung (No Preemption), 4) Zirkuläres Warten (Circular Wait). Die ersten drei sind notwendige, die vierte ist die hinreichende Bedingung.'
  },
  en: {
    question: 'What are the three necessary and one sufficient conditions for a deadlock to occur?',
    answer: 'A deadlock occurs when four conditions are met at the same time: 1) Mutual Exclusion, 2) Hold and Wait, 3) No Preemption, and 4) Circular Wait. The first three are necessary conditions, and the fourth is the sufficient condition.'
  }
},
  {
  "de": {
    "question": "Erklären sie was kontinuierliche Speicherung und verkettete Speicherung im Bezug auf Dateien auf einer Festplatte bedeuten. Nennen sie für beide Verfahren je einen Vorteil gegenüber dem jeweils anderen Verfahren.",
    "answer": "Kontinuierliche Speicherung: Die Datei wird in aufeinanderfolgenden Speicherblöcken abgelegt. Alle Teile der Datei liegen nebeneinander auf der Festplatte.\n\nVerkettete Speicherung: Die Datei wird in einzelnen Blöcken gespeichert, die nicht nebeneinander liegen müssen. Jeder Block enthält einen Zeiger auf den nächsten.\n\nVorteil der kontinuierlichen Speicherung: Schnellerer Zugriff, da die Festplatte die Daten ohne viele Positionswechsel lesen kann.\n\nVorteil der verketteten Speicherung: Flexible Nutzung des Speicherplatzes, da keine zusammenhängenden freien Speicherblöcke nötig sind."
  },
  "en": {
    "question": "Explain what contiguous storage and linked storage mean with respect to files on a hard disk. Name one advantage of each method compared to the other.",
    "answer": "Contiguous storage: The file is stored in sequential memory blocks. All parts of the file are located next to each other on the disk.\n\nLinked storage: The file is stored in separate blocks that do not need to be next to each other. Each block contains a pointer to the next one.\n\nAdvantage of contiguous storage: Faster access, since the disk can read the file without frequent position changes.\n\nAdvantage of linked storage: More flexible use of disk space, since large continuous free areas are not required."
  }
},
  {
  "de": {
    "question": "Nennen Sie einen Vor- und einen Nachteil von Journaled File Systems.",
    "answer": "Vorteil: Höhere Zuverlässigkeit bei Systemabstürzen, da Änderungen zuerst protokolliert werden und so eine schnellere Wiederherstellung möglich ist.\n\nNachteil: Geringere Schreibgeschwindigkeit durch zusätzlichen Aufwand beim Protokollieren der Änderungen."
  },
  "en": {
    "question": "Name one advantage and one disadvantage of journaled file systems.",
    "answer": "Advantage: Higher reliability during system crashes, since changes are first logged and can be recovered quickly.\n\nDisadvantage: Slightly slower write performance due to the overhead of maintaining the journal."
  }
},{
  "de": {
    "question": "Wie wird eine Sprachunterstützung zum gegenseitigen Ausschluss genannt? Diese wird beispielsweise in der Programmiersprache Java eingesetzt, um gegenseitigen Ausschluss beim Zugriff auf Klassen sicherzustellen.",
    "answer": "Diese Sprachunterstützung wird als „Monitor“ bezeichnet."
  },
  "en": {
    "question": "What is the name of the language-level support for mutual exclusion that is used, for example, in the Java programming language to ensure mutual exclusion when accessing classes?",
    "answer": "This language-level support is called a \"monitor.\""
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
      correct: [0, 2]
    },
    en: {
      question: 'A race condition (RC) ...',
      options: [
        '... can be prevented by appropriate synchronization mechanisms such as locks (mutex) or semaphores.',
        '... can be completely avoided by disabling interrupts.',
        '... occurs when two or more processes or threads access shared resources simultaneously and the execution order affects the final result.',
        '... always leads to a deadlock.',
      ],
      correct: [0, 2]
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
      correct: [0, 3, 5, 6]
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
      correct: [0, 3, 5, 6]
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
      correct: [0, 3]
    },
    en: {
      question: "Which of the following statements are true?",
      options: [
        "A semaphore can be used for both mutual exclusion and synchronization, while a lock (mutex) can only be used for mutual exclusion.",
        "A lock (mutex) can be used for both mutual exclusion and synchronization, while a semaphore can only be used for mutual exclusion.",
        "A mutex has a counter that indicates the current status of the resource.",
        "A mutex is a locking mechanism that ensures only one thread can access a resource at a time."
      ],
      correct: [0, 3]
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
      correct: [1, 2]
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
      correct: [1, 2]
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
      correct: [1]
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
      correct: [1]
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
      correct: [1, 2, 5]
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
      correct: [1, 2, 5]
    }
  }, {
    de: {
      question: "Was besagt das Hollywood-Prinzip?",
      options: [
        "Das Hollywood-Prinzip besagt, dass niedrigstufige Komponenten oder Module die Kontrolle darüber haben, wann und wie sie von höherstufigen Komponenten verwendet werden.",
        "Das Hollywood-Prinzip besagt, dass Entwickler aus Hollywood in der Softwareindustrie bevorzugt werden.",
        "Das Hollywood-Prinzip besagt, dass direkte Aufrufe vermieden werden sollen zugunsten einer umgekehrten Kontrollflussrichtung."
      ],
      correct: [0]
    },
    en: {
      question: "What does the Hollywood Principle state?",
      options: [
        "The Hollywood Principle states that low-level components or modules control when and how they are used by higher-level components.",
        "The Hollywood Principle states that developers from Hollywood are preferred in the software industry.",
        "The Hollywood Principle states that direct calls should be avoided in favor of inverted control flow."
      ],
      correct: [0]
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
      correct: [3, 4]
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
      correct: [3, 4]
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
      correct: [0, 1]
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
      correct: [0, 1]
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
      correct: [2, 4, 6]
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
      correct: [2, 4, 6]
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
      correct: [1, 3]
    },
    en: {
      question: "Software can suppress IRQ handling on x86 systems using the sti and cli instructions. Why could this be problematic?",
      options: [
        "Suppressing IRQ handling always improves system performance because fewer interrupts burden the CPU.",
        "Suppressing IRQ handling can cause important hardware interrupts, such as timer interrupts, to not be processed in time, which can affect system stability.",
        "Using sti and cli has no effect on the multithreading capabilities of the system since interrupts are independent of CPU operation.",
        "If IRQs are suppressed for too long, data loss may occur, especially with devices that rely on regular interrupts such as network cards or hard drives."
      ],
      correct: [1, 3]
    }
  },
  {
  "de": {
    "question": "Was ist kein gültiger UNIX-Prozesszustand?",
    "options": [
      "Bereit (Ready)",
      "Laufend (Running)",
      "Gestoppt (Stopped)",
      "Zombie (Defunct)"
    ],
    "correct": [0]
  },
  "en": {
    "question": "Which one is not a valid UNIX process state?",
    "options": [
      "Ready",
      "Running",
      "Stopped",
      "Zombie"
    ],
    "correct": [0]
  }
},

  {
  "de": {
    "question": "Was passiert mit einem verwaisten Prozess in einem UNIX-basierten Betriebssystem?",
    "options": [
      "Er wird automatisch beendet.",
      "Er wird vom init-Prozess übernommen.",
      "Sein Elternprozess muss auf ihn warten.",
      "Er wird beim nächsten Aufruf von fork() wiederverwendet."
    ],
    "correct": [1]
  },
  "en": {
    "question": "What happens to an orphaned process in a UNIX-based operating system?",
    "options": [
      "It is automatically terminated.",
      "It is adopted by the init process.",
      "Its parent process must wait for it.",
      "It is reused on the next call to fork()."
    ],
    "correct": [1]
  }
},
{
  "de": {
    "question": "Was beschreibt der Begriff Swapping?",
    "options": [
      "Das Verschieben von Daten zwischen Haupt- und Hintergrundspeicher, um den verfügbaren Arbeitsspeicher zu erweitern.",
      "Die geschickte Aufteilung des Hauptspeichers zwischen verschiedenen Prozessen, um die Speichernutzung zu optimieren.",
      "Der Wechsel zwischen verschiedenen Prozessen, um die Systemleistung zu verbessern.",
      "Die Möglichkeit externe Hardwaregeräte (z.B. Maus) im Betrieb an- oder abzustecken."
    ],
    "correct": [0]
  },
  "en": {
    "question": "What does the term swapping describe?",
    "options": [
      "Moving data between main memory and secondary memory to expand the available RAM.",
      "The clever division of main memory among various processes to optimize memory usage.",
      "Switching between different processes to improve system performance.",
      "The ability to plug in or remove external hardware (e.g., a mouse) during operation."
    ],
    "correct": [0]
  }
},

  {
  "de": {
    "question": "Wozu dient der Index in einem indizierten Dateisystem?",
    "options": [
      "Der Index ermöglicht den Zugriff auf die Daten durch Nachschlagen der enthaltenen Verweise auf Speicherorte.",
      "Der Index speichert die Daten in sequentiell Form als indiziertes Array.",
      "Der Index verwendet eine hashbasierte Struktur, um den direkten Zugriff auf die Daten zu ermöglichen.",
      "Der Index verwaltet lediglich die Metainformationen (z.B. Dateinamen, Größe, Änderungsdatum)."
    ],
    "correct": [0]
  },
  "en": {
    "question": "What is the purpose of the index in an indexed file system?",
    "options": [
      "The index enables access to the data by looking up the stored references to storage locations.",
      "The index stores the data in sequential form as an indexed array.",
      "The index uses a hash-based structure to allow direct access to the data.",
      "The index only manages metadata (e.g., filenames, size, modification date)."
    ],
    "correct": [0]
  }
},
  {
  "de": {
    "question": "Welche der folgenden Aussagen beschreibt den Unterschied zwischen Seitenadressierung (Paging) und Segmentierung korrekt?",
    "options": [
      "Segmentierung unterteilt den Speicher entsprechend der logischen Bereiche eines Programms in Blöcke unterschiedlicher Größe, während Paging Blöcke fester Größe nutzt.",
      "Paging unterteilt den Speicher entsprechend den logischen Bereichen des Programms in Blöcke unterschiedlicher Größe, während Segmentierung Blöcke fester Größe nutzt.",
      "Beide, Paging und Segmentierung, unterteilen den Speicher entsprechend den logischen Bereichen des Programms in Blöcke unterschiedlicher Größe.",
      "Beim Paging ist oftmals eine Umlagerung der Speicherblöcke erforderlich, bei der Segmentierung ist dies nicht nötig."
    ],
    "correct": [0]
  },
  "en": {
    "question": "Which of the following statements correctly describes the difference between paging and segmentation?",
    "options": [
      "Segmentation divides memory according to the logical sections of a program into blocks of different sizes, while paging uses blocks of fixed size.",
      "Paging divides memory according to the logical sections of a program into blocks of different sizes, while segmentation uses blocks of fixed size.",
      "Both paging and segmentation divide memory according to the logical sections of a program into blocks of different sizes.",
      "Paging often requires relocation of memory blocks, whereas with segmentation this is not necessary."
    ],
    "correct": [0]
  }
},
  {
  "de": {
    "question": "Virtueller Speicher: Seitenflattern (Thrashing) tritt auf, wenn ...",
    "options": [
      "... in einer Schleife wiederkehrend die gleichen Daten gespeichert und gelöscht werden, ohne dadurch nützliche Arbeit zu leisten.",
      "... das Betriebssystem eine hohe Anzahl von Speicheranforderungen erzeugt.",
      "... zu viele Programme gleichzeitig im System laufen.",
      "... das System überwiegend damit beschäftigt ist, Seiten zwischen dem Haupt- und dem Hintergrundspeicher auszutauschen."
    ],
    "correct": [3]
  },
  "en": {
    "question": "Virtual Memory: Thrashing occurs when ...",
    "options": [
      "... the same data is repeatedly stored and deleted in a loop without doing useful work.",
      "... the operating system generates a high number of memory access requests.",
      "... too many programs are running simultaneously in the system.",
      "... the system is primarily busy swapping pages between main memory and secondary storage."
    ],
    "correct": [3]
  }
},
  {
  "de": {
    "question": "Systemaufrufe: Was ist der Zweck des Systemaufrufs exec()?",
    "options": [
      "Er beendet einen Prozess.",
      "Er startet ein Programm in einem neuen Prozess.",
      "Er ersetzt den aktuellen Prozess durch ein neues Programm.",
      "Er synchronisiert Prozesse."
    ],
    "correct": [2]
  },
  "en": {
    "question": "System Calls: What is the purpose of the exec() system call?",
    "options": [
      "It terminates a process.",
      "It starts a program in a new process.",
      "It replaces the current process with a new program.",
      "It synchronizes processes."
    ],
    "correct": [2]
  }
},
  {
  "de": {
    "question": "Prozesse und Fäden: Was ist der Unterschied zwischen einem Prozess und einem Faden (Thread)?",
    "options": [
      "Jeder Prozess besitzt seinen eigenen Stack (Stapelspeicher), während sich Fäden einen gemeinsamen Stack teilen.",
      "Ein Prozess hat einen eigenen Adressraum, während sich die Fäden eines Prozesses diesen teilen.",
      "Prozesse haben stets Zugriff auf den gesamten Arbeitsspeicher des Systems, Fäden hingegen nur auf einen Teil.",
      "Prozesse werden vom Betriebssystem verwaltet, Fäden hingegen von Benutzern."
    ],
    "correct": [1]
  },
  "en": {
    "question": "Processes and Threads: What is the difference between a process and a thread?",
    "options": [
      "Every process has its own stack, while threads share a common stack.",
      "A process has its own address space, while the threads of a process share this address space.",
      "Processes always have access to the entire system memory, while threads only have access to part of it.",
      "Processes are managed by the operating system, while threads are managed by users."
    ],
    "correct": [1]
  }
},
  {
  "de": {
    "question": "Welche Aussage zur Seitenumlagerung (demand paging) in virtuellen Adressräumen ist richtig?",
    "options": [
      "Unter Seitenflattern (thrashing) versteht man das wiederholte Ein- und Auslagern von Speicherseiten, wenn der physische Hauptspeicher nicht ausreicht.",
      "Bei der Least-Recently-Used-Strategie (LRU) wird die Seite ausgelagert, auf die in der Vergangenheit am seltensten zugegriffen wurde.",
      "Für einen schnelleren Zugriff können Speicherseiten im Seitendeskriptor mit einem Bezeichner versehen werden.",
      "Die Seitenersetzungsstrategie Second Chance (clock) ist nur in der Theorie interessant, weil ihre Implementierung in der Praxis viel zu aufwendig ist."
    ],
    "correct": [1]
  },
  "en": {
    "question": "Which statement about paging in virtual address spaces is correct?",
    "options": [
      "Thrashing refers to the repeated swapping in and out of memory pages when physical memory is insufficient.",
      "In the Least Recently Used (LRU) strategy, the page that was accessed least recently is swapped out.",
      "For faster access, memory pages can be labeled with an identifier in the page descriptor.",
      "The Second Chance (clock) replacement strategy is only interesting in theory, because its implementation is too complex in practice."
    ],
    "correct": [1]
  }
},
  {
  "de": {
    "question": "Welche Aussage zu Prozesszuständen ist auf einem Monoprozessorsystem richtig?",
    "options": [
      "Bei Eintreffen eines Interrupts wird der aktuell laufende Prozess für die Dauer der Interrupt-Abarbeitung in den Zustand blockiert (blocked) überführt.",
      "Im Rahmen der mittelfristigen Einplanung kann ein Prozess von Zustand laufend (running) in den Zustand schwebend laufend (suspended running) wechseln.",
      "Ein Seitenfehler (page fault) kann dazu führen, dass der aktuell laufende Prozess in den Zustand beendet (exit) überführt wird.",
      "Bei kooperativem Scheduling ist ein direkter Übergang vom Zustand laufend (running) in den Zustand bereit (ready) unmöglich."
    ],
    "correct": [1]
  },
  "en": {
    "question": "Which statement about process states in a single-processor system is correct?",
    "options": [
      "When an interrupt occurs, the currently running process is moved to the blocked state for the duration of interrupt handling.",
      "As part of medium-term scheduling, a process can change from the running state to the suspended running state.",
      "A page fault may cause the currently running process to transition to the exit state.",
      "With cooperative scheduling, a direct transition from running to ready is impossible."
    ],
    "correct": [1]
  }
},
  {
  "de": {
    "question": "Was ist ein Stack-Frame?",
    "options": [
      "Der Speicherbereich, in dem der Programmcode einer Funktion abgelegt ist.",
      "Ein Bereich des Speichers, in dem u. a. lokale (automatic) Variablen einer Funktion abgelegt sind.",
      "Der Seitenrahmen (page frame) im Hauptspeicher der den Stack-Speicher enthält.",
      "Ein spezieller Registersatz des Prozessors zur Bearbeitung von Funktionen."
    ],
    "correct": [1]
  },
  "en": {
    "question": "What is a stack frame?",
    "options": [
      "The memory area where a function's program code is stored.",
      "A memory area where, among other things, local (automatic) variables of a function are stored.",
      "The page frame in main memory that holds the stack memory.",
      "A special set of processor registers used to handle functions."
    ],
    "correct": [1]
  }
},
  {
  "de": {
    "question": "Welche Aussage zum Thema Synchronisation ist richtig?",
    "options": [
      "Die V-Operation (signal) kann auf einem Semaphor nur von dem Prozess aufgerufen werden, der zuvor auch die P-Operation (wait) aufgerufen hat.",
      "Durch den Einsatz von Semaphoren kann ein gegenseitiger Ausschluss (mutual exclusion) erzielt werden.",
      "Ein Semaphor kann ausschließlich für mehrseitige Synchronisation (z. B. Leser/Schreiber-Problem) verwendet werden.",
      "Einseitige Synchronisation (z. B. Produzent/Konsument) erfordert immer Betriebssystem-Unterstützung."
    ],
    "correct": [1]
  },
  "en": {
    "question": "Which statement about synchronization is correct?",
    "options": [
      "The V operation (signal) on a semaphore can only be called by the process that previously called the P operation (wait).",
      "Semaphores can be used to achieve mutual exclusion.",
      "A semaphore can only be used for multi-party synchronization (e.g., reader/writer problem).",
      "One-sided synchronization (e.g., producer/consumer) always requires OS support."
    ],
    "correct": [1]
  }
},
  {
    "de": {
      "question": "Was passiert auf einem x86-Linux-System, wenn ein C-Programm über einen ungültigen Zeiger versucht auf Speicher zuzugreifen?",
      "options": [
        "Beim Laden des Programms wird die ungültige Adresse erkannt und der Speicherzugriff durch einen Sprung auf eine Abbruchfunktion ersetzt. Diese Funktion beendet das Programm mit der Meldung „Segmentation fault“.",
        "Das Betriebssystem erkennt die ungültige Adresse und leitet eine Ausnahmebehandlung ein.",
        "Der Übersetzer erkennt die problematische Code-Stelle und generiert Code, der zur Laufzeit bei dem Zugriff einen entsprechenden Fehler auslöst.",
        "Die MMU erkennt die ungültige Adresse bei der Adressumsetzung und löst einen Trap aus."
      ],
      "correct": [1]
    },
    "en": {
      "question": "What happens on an x86 Linux system when a C program tries to access memory via an invalid pointer?",
      "options": [
        "The invalid address is detected during program loading and the memory access is replaced by a jump to an abort function, which terminates the program with a 'Segmentation fault' message.",
        "The operating system detects the invalid address and initiates exception handling.",
        "The compiler detects the problematic code and generates code that triggers an appropriate error at runtime.",
        "The MMU detects the invalid address during address translation and triggers a trap."
      ],
      "correct": [1]
    }
  },{
    "de": {
      "question": "Welche Aussage zu Prozesszuständen ist auf einem Monoprozessorsystem richtig?",
      "options": [
        "Ist zu einem Zeitpunkt kein Prozess im Zustand bereit, so ist auch kein Prozess im Zustand laufend.",
        "Ein Prozess im Zustand blockiert muss warten, bis der laufende Prozess den Prozessor abgibt und kann dann in den Zustand laufend überführt werden.",
        "Es befindet sich zu jedem Zeitpunkt maximal ein Prozess im Zustand laufend.",
        "In den Zustand blockiert gelangen Prozesse nur aus dem Zustand bereit."
      ],
      "correct": [2]
    },
    "en": {
      "question": "Which statement about process states is correct on a uniprocessor system?",
      "options": [
        "If no process is in the ready state at a certain time, then no process is in the running state either.",
        "A process in the blocked state must wait until the running process releases the CPU and can then be moved to the running state.",
        "At any given time, at most one process is in the running state.",
        "Processes enter the blocked state only from the ready state."
      ],
      "correct": [2]
    }
  },{
    "de": {
      "question": "Welche Aussage zum Thema Systemaufrufe ist richtig?",
      "options": [
        "Durch die Bereitstellung von Systemaufrufen, kann ein Benutzerprogramm das Betriebssystem um eigene Funktionen erweitern.",
        "Mit Hilfe von Systemaufrufen kann ein Benutzerprogramm privilegierte Operationen durch das Betriebssystem ausführen lassen, die es im normalen Ablauf nicht selbst ausführen dürfte.",
        "Die Bearbeitung eines Systemaufrufs findet immer in dem Adressraum des aufrufenden Prozesses statt.",
        "Benutzerprogramme dürfen keine Systemaufrufe absetzen, diese sind dem Betriebssystem vorbehalten."
      ],
      "correct": [1]
    },
    "en": {
      "question": "Which statement about system calls is correct?",
      "options": [
        "By providing system calls, a user program can extend the operating system with its own functions.",
        "With the help of system calls, a user program can have the operating system perform privileged operations that it is not allowed to do by itself.",
        "System call processing always takes place in the address space of the calling process.",
        "User programs are not allowed to make system calls; these are reserved for the operating system."
      ],
      "correct": [1]
    }
  },{
    "de": {
      "question": "Welche Aussage zu Prozessen und Fäden (Threads) ist richtig?",
      "options": [
        "Der Aufruf von fork(2) gibt im Elternprozess die Prozess-ID des Kindprozesses zurück, im Kindprozess hingegen den Wert 0.",
        "Die Veränderung von Variablen und Datenstrukturen in einem mittels fork(2) erzeugten Kindprozess beeinflusst auch die Datenstrukturen im Elternprozess.",
        "Mittels fork(2) erzeugte Kindprozesse müssen stets vor dem Elternprozess beendet werden.",
        "Fäden, die mittels pthread_create(3) erzeugt wurden, besitzen jeweils einen eigenen Adressraum."
      ],
      "correct": [0]
    },
    "en": {
      "question": "Which statement about processes and threads is correct?",
      "options": [
        "The call to fork(2) returns the child process's PID in the parent process, and the value 0 in the child process.",
        "Changing variables and data structures in a child process created with fork(2) also affects the data in the parent process.",
        "Child processes created using fork(2) must always terminate before the parent process.",
        "Threads created with pthread_create(3) each have their own address space."
      ],
      "correct": [0]
    }
  },




  


  



  






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

      feedback.innerHTML = isCorrect ?
        (currentLang === 'de' ? 'Richtig!' : 'Correct!') :
        (currentLang === 'de' ? 'Falsch! Die richtigen Antworten sind:' : 'Incorrect! The correct answers are:');

      feedback.className = 'feedback ' + (isCorrect ? 'correct' : 'incorrect');

      // Clear previous highlighting
      const allLabels = form.querySelectorAll('label');
      allLabels.forEach(label => {
        label.classList.remove('correct-answer', 'incorrect-answer');
      });

      if (!isCorrect) {
        // Highlight correct answers in green
        shuffledCorrect.forEach(correctIndex => {
          allLabels[correctIndex].classList.add('correct-answer');
        });

        // Highlight incorrectly selected answers in red
        checked.forEach(selectedIndex => {
          if (!shuffledCorrect.includes(selectedIndex)) {
            allLabels[selectedIndex].classList.add('incorrect-answer');
          }
        });

        // Create a list of correct answers
        const correctAnswersList = document.createElement('ul');
        correctAnswersList.style.marginTop = '10px';
        correctAnswersList.style.textAlign = 'left';

        shuffledCorrect.forEach(correctIndex => {
          const item = document.createElement('li');
          item.textContent = shuffledOptions[correctIndex];
          correctAnswersList.appendChild(item);
        });

        feedback.appendChild(correctAnswersList);
      }

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
