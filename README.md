# Pokemon Cathcher App

## HTML Elements Needed
- [ ] Home Page
  - [ ] Three pokemon image buttons/(radios?)
    * need id's to watch event listeners
  - [ ] Results Page
- [ ] Render results table?/list?

## State to Keep track of
- [ ] **pokemonCaught** -- total plays
- [ ] **pokemonChosen** -- selected button
- [ ] **pokemonAppear** -- the three generated per session

## user events
* Page Load
  * update state -- **pokemonCaught** (total plays = 0)
  * generate three pokemon 
  * update state -- **pokemonAppear**
  * update view based on state -- render
* Button Click
  * increment total plays state -- **pokemonCaught**
  * increment selected pokemon state -- **pokemonChosen**
  * if (plays < 10) 
      * generate three pokemon 
      * update state -- **pokemonAppear**
      * update view based on state -- render
  * else () 
    * send user to results page


## functions


### Local Storage Utils Functions -- could be in a separate *storage-utils.js*
* findById -- reference products lab for this function
* set Results -- TWO FUNCTIONS
  * *Encountered* -- 
    * getResults
    * increment pokemonAppear
    * stringify
    * localStorage.setItem('RESULTS', string)
  * *Selected* -- 
    * getResults
    * increment pokemonChosen
    * stringify
    * localStorage.setItem('RESULTS', string)
* getResults
  * looks for 'RESULTS' in local storage
  * if ('RESULTS') exists 
    * localStorage.getItem('RESULTs')
    * JSON.parse
    * return results array
  * else (no 'RESULTS')
    * return empty array

  ```
  'RESULTS' = [
    {
        id: '',
        appeared: #,
        chosen: #
    },
    {
        id: '',
        appeared: #,
        chosen: #
    },
    ...
]```


### home page Functions -- app.js

* generate pokemon function -- 
  * use array.length and Math.random / Math.floor to **create an index**
    *  use a while loop to make sure the three random numbers are not the same
    (rand1 === rand2 || rand2 === rand3 || rand1 === rand3 )
  * call Encountered 
  * render image onto page



* increment pokemonCaught -- number of plays


## Contributors To the Plan on this README: 
* [https://github.com/Gcrowder93](https://github.com/Gcrowder93)
* [https://github.com/ckaynatividad](https://github.com/ckaynatividad)
* [https://github.com/Libbi-Dunham](https://github.com/Libbi-Dunham)
* [https://github.com/michellerenehey](https://github.com/michellerenehey)
* [https://github.com/fora-heims](https://github.com/fora-heims)