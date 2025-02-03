function reflex_agent(location, state) {
    if (state == "DIRTY") return "CLEAN";
    else if (location == "A") return "RIGHT";
    else if (location == "B") return "LEFT";
}

function test(states) {
    var log = document.getElementById("log");
    log.innerHTML += `<br>State: [${states}]`;
    
    var location = states[0];
    var state = location == "A" ? states[1] : states[2];
    var action_result = reflex_agent(location, state);
    log.innerHTML += `<br>Location: ${location} | Action: ${action_result}`;
    
    if (action_result == "CLEAN") {
        if (location == "A") states[1] = "CLEAN";
        else if (location == "B") states[2] = "CLEAN";
    }
    else if (action_result == "RIGHT") states[0] = "B";
    else if (action_result == "LEFT") states[0] = "A";
    
    setTimeout(() => test(states), 2000); // Ejecuta recursivamente cada 2 segundos
}

function testAllStates() {
    let possibleStates = ["A", "B"];
    let dirtStates = ["CLEAN", "DIRTY"];
    let log = document.getElementById("log");
    log.innerHTML = "";
    
    for (let loc of possibleStates) {
        for (let aState of dirtStates) {
            for (let bState of dirtStates) {
                let states = [loc, aState, bState];
                test(states);
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let button = document.createElement("button");
    button.textContent = "Run All States";
    button.onclick = testAllStates;
    document.body.appendChild(button);
    let logDiv = document.createElement("div");
    logDiv.id = "log";
    document.body.appendChild(logDiv);
});
