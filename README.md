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

