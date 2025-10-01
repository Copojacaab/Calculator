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


