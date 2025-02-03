function reflex_agent(location, state) {
    if (state == "DIRTY") return "CLEAN";
    else if (location == "A") return "RIGHT";
    else if (location == "B") return "LEFT";
}

function test(states) {
    var location = states[0];
    var state = location == "A" ? states[1] : states[2];
    var action_result = reflex_agent(location, state);
    document.getElementById("log").innerHTML += `<br>Location: ${location} | Action: ${action_result}`;
    
    if (action_result == "CLEAN") {
        if (location == "A") states[1] = "CLEAN";
        else if (location == "B") states[2] = "CLEAN";
    }
    else if (action_result == "RIGHT") states[0] = "B";
    else if (action_result == "LEFT") states[0] = "A";
    
    // Ensuciar aleatoriamente después de un ciclo
    if (Math.random() < 0.5) states[1] = "DIRTY"; // 50% de probabilidad de ensuciar A
    if (Math.random() < 0.5) states[2] = "DIRTY"; // 50% de probabilidad de ensuciar B
    
    setTimeout(function() { test(states); }, 2000);
}

var states = ["A", "DIRTY", "DIRTY"];
test(states);
