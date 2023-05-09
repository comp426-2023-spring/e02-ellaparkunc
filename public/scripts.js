// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

function showHideShots() {
    let check = document.getElementById('opponent');
    let radiorps = document.getElementById('rps');

    // Show or hide radio buttons
    if (check.checked == true) {
        $('.shots').show();
        // Show or hide based on game selected
        if (radiorps.checked == true) {
            $('.rpsls').hide();
        }
    } else {
        $('.shots').hide();
    }
}


function startOver() {
    document.getElementById('userinput').reset();
    showHideShots();
}

async function playGame(){
    let check = document.getElementById('opponent');

    let game = $('input[type=radio][name=game]:checked').val();

    let shot = '';
    if (check.checked == true) {
        shot = $('input[type=radio][name=shot]:checked').val() + '/';
    } 
    let baseurl = window.location.href + 'app/' //appending app/ will give our base url
    console.log(baseurl)
    let url = baseurl + game + '/play/' +shot
    

    let response = await fetch(url)
    let results = await response.json()
    console.log(results)

    let resultElement = document.getElementById('result');

    if (check.checked == false) {
        // Set results HTML for no shot
        resultElement.innerHTML = 'Opponent: ' + results.player;
    } else {
        // Set results HTML for shot
        resultElement.innerHTML = 'You: ' + results.player + ', Opponent: ' + results.opponent + ', Result: ' + results.result;
    }
}