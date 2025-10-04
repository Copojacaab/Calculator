# Calculator

## Steps

1. Creare le funzioni base in js: add, substrct, multipy, divide

2. Creare le tre variabili che contengono i due fattori dell'operazione e il simbolo

3. Creare una funzione `operate` che prende in input i due fattori e il simbolo e successivamente chiama uan delle funzioni di base per le operazioni

4. Creare html base(bottone delle operazioni, bottone = e bottone per ogni numero, display per la calcolatrice, bottone clear per cancellare)

5. creare la funzione che mette il tasto premuto all'interno del display

6. facciamo funzionare la calcolatrice, l'input massimo che puó ricevere il calcolatore é `fattore, simbolo, fattore, simbolo`, quindi in pratica massimo due fattori e due simboli. Quando riceve un input di questo tipo la calcolatrice deve risolvere la prima operazione, aspettare per il prossimo input dell'utente (che deve essere un numero, dato che l'ultimo era un simbolo) e successivamente svolgere l'operazione indicata tra il valore calcolato e il nuovo valore inserito dall'utente


## Branistorming

Vedendo il calcolatore di esempio posso capire che l'utente puó fare questa serie di azioni:

- (inserire un numero)* 
    - inserire un simbolo
- inserire un simbolo
    -(inserire un numero)* 

quindi in pratica un numero puó essere seguito da qualunque cosa(numero o simbolo), mentre un simbolo deve essere seguito per forza da un numero.

solo al primo calcolo posso accettare 3 valori ((numero)*, simbolo, (numero)*) (oppure appena dopo che l'utente ha cliccato clean). 
altrimenti devo sempre accettare o (numero)* o (simbolo).

Per l'uso della tastiera vado a modificare l'html. Si puo' emulare un click sul pulsante corrispondente, lo possiamo fare aggiungendo un attributo data-key a ogni tasto nell'html con il valore corrispondente al tasto. In js controllo quale tasto e' stato premuto prendendo il valore event key del bottone, lo prendo all'interno dei bottoni con queryselector e ci chiamo sopra la funzione click

## Flusso
1. Funzioni di base (JS)
Scrivi quattro funzioni: add(a, b), subtract(a, b), multiply(a, b), divide(a, b).

Ognuna prende due numeri e restituisce il risultato.

2. Variabili principali
Crea tre variabili:

firstOperand (primo numero inserito)

operator (simbolo dell'operazione)

secondOperand (secondo numero inserito)

3. Funzione operate
Questa funzione prende i due numeri e il simbolo, e chiama la funzione giusta tra quelle di base.

Esempio: se operator è +, chiama add(firstOperand, secondOperand).

4. HTML base
Crea un display (un <div> o <input> per mostrare i numeri e i risultati).

Crea i bottoni per i numeri (0-9), per le operazioni (+, -, ×, ÷), per =, e per C (clear).

5. Gestione input
Quando premi un bottone, aggiorna il display.

Se premi un numero, aggiungilo al display.

Se premi un simbolo, salva il numero attuale come firstOperand e il simbolo come operator, poi svuota il display per il secondo numero.

6. Logica operazioni
Quando premi =, salva il numero attuale come secondOperand e chiama operate.

Mostra il risultato nel display.

Se dopo un'operazione premi un simbolo, il risultato diventa il nuovo firstOperand e si riparte.

Se premi C, resetta tutto.

7. Regole sugli input
Dopo un simbolo, accetta solo numeri.

Dopo un numero, puoi accettare numeri o simboli.

Non permettere due simboli di fila.

Dopo =, puoi continuare con un simbolo (usando il risultato) o premere C per ricominciare.

## Flusso di lavoro

1. Il browser carica prima l'html,(quindi calculator --> display -->btnContainer e tutte le row con i bottoni). Contemporaneamente viene caricato il CSS.

2. Quando incontra lo script si passa a js con initCalculator che collega i bottoni e per ognuno di essi "attacca" l'event listener. qui il flusso di esecuzione si spezza a seconda del tasto premuto dall'utente.

    2a. Tasto numerico: viene fatto il controllo se si tratta del primo operando o del secondo(in base al valore di operator), poi si passa all'updateDisplay che prende il display dall' html e ci inserisce il textContent del tasto premuto.

    Adesso resto in attesa di un altro tasto(numero o operatore)

    2b. Tasto operatore: come prima cosa faccio il controllo per vedere se operatore ha gia' un valore(in caso positivo non posso accettare un operatore ma devo prendere per forza un numero), se il controllo passa allora si assegna a operatore il textContent del tasto premuto, si azzera il secondOperand(questa cosa non ho capito perche' fa funzionare l'applicazione) e successivamente chiamo la funzione updateDisplay come prima.

    Adesso resto in attesa di un altro tasto (per forza numero stavolta) e ripeto il processo 2a

    2c. Tasto clear: azzero tutte le variabili globali e faccio updateDisplay in modo da liberare lo schermo 

    2d Tasto equal: come prima cosa controllo che il primo operando, il secondo e l'operatore non siano vuoti. se non sono vuoti allora li passo alla funzione operate

3. La funzione operate come prima cosa trasforma le due stringhe in input (cioe' i numeri che erano sulla calcolatrice) in numeri, successivamente chiama la funzione di calcolo corrispondente all'operatore in input e restituisce il valore calcolato da quella funzione. adesso devo passare alla parte di mostrare i    la funzione operate (in base all'operatore che gli arriva in input)l risultato del calcolo sullo schermo.
