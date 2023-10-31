### Esercizio

Generare una griglia di gioco quadrata in cui ognì cella contiene un numero compreso tra 1 e
100.

Quando L'utente clicca su ogni cella, la cella cliccata sì colora di azzurro.


##4 Svolgimento
- [X] Quanto utente clicca PLAY:
    - [X] Generare 16 bombe: array di 16 numerì casuali non duplicati compresi nel range del
    gioco (1 a 100)
    - [X] definire il numero massimo di tentativi consentiti: 100 - 16
    - [X] array di numeri “non bombe" cliccate dall'utente per avere il punteggio    
    - [X] Ripulire la griglia precedente
    - [X] Mostrare la griglia
    - [X] Creare X celle, per ogni numero da 1 a 100
        - [X] Creare la cella
            - [X] Popolare la cella con il numero
            - [X] Aggiungere il click listener alla cella generata
            - [X] Aggiungere la cella alla griglia

- [X]AL click sulla cella della griglia
    - [X] leggo il numero cliccato
    - [X] SE il numero cliccato è nell'array di bombe
        - [X] la cella diventa rossa
        - [X] fine gioco --> utente perde

    - [] ALTRIMENTI
        - [X] la cella diventa azzurra
        - [X] SE questo numero non è stato già cliccato precedentemente
            - [X] aggiungere il numero alt'array di numeri “non bombe" cliccati
        - [X] SE la lunghezza dell'array di "non bombe" è uguale al numero massimo di
        tentativi
            - [X] fine gioco --> utente vince
