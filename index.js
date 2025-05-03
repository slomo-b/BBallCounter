let scoreHome = document.getElementById('score-home')
let scoreGuest = document.getElementById('score-guest')
let leaderStat = document.getElementById('leader')

let sumHome = 0
let sumGuest = 0

function add1Home() {
    sumHome += 1
    scoreHome.textContent = sumHome
    checkLeader()
}

function add2Home() {
    sumHome += 2
    scoreHome.textContent = sumHome
    checkLeader()
}

function add3Home() {
    sumHome += 3
    scoreHome.textContent = sumHome
    checkLeader()
}

function add1Guest() {
    sumGuest += 1
    scoreGuest.textContent = sumGuest
    checkLeader()
}

function add2Guest() {
    sumGuest += 2
    scoreGuest.textContent = sumGuest
    checkLeader()
}

function add3Guest() {
    sumGuest += 3
    scoreGuest.textContent = sumGuest
    checkLeader()
}


function reset() {
    sumGuest = 0
    sumHome = 0
    scoreGuest.textContent = sumGuest
    scoreHome.textContent = sumHome

}

function checkLeader() {

    if (sumHome > sumGuest) {
      leaderStat.textContent = "HOME";
    } else if (sumGuest > sumHome) {
      leaderStat.textContent = "GUEST";
    } else {
      leaderStat.textContent = "EVEN";
    }
  }