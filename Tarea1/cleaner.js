function reflex_agent(location, state) {
    if (state == "DIRTY") return "CLEAN";
    else if (location == "A") return "RIGHT";
    else if (location == "B") return "LEFT";
}

let previousLocation = null;

function getStateIdentifier(states) {
    return `(${states[0]}, ${states[1]}, ${states[2]})`;
}

function getScenarioNumber(states) {
    const scenarios = [
        ["A", "DIRTY", "DIRTY"],
        ["A", "DIRTY", "CLEAN"],
        ["A", "CLEAN", "DIRTY"],
        ["A", "CLEAN", "CLEAN"],
        ["B", "DIRTY", "DIRTY"],
        ["B", "DIRTY", "CLEAN"],
        ["B", "CLEAN", "DIRTY"],
        ["B", "CLEAN", "CLEAN"]
    ];
    return scenarios.findIndex(s => s[0] === states[0] && s[1] === states[1] && s[2] === states[2]) + 1;
}

function test(states) {
    var location = states[0];
    var state = location == "A" ? states[1] : states[2];
    var action_result = reflex_agent(location, state);
    var scenarioNumber = getScenarioNumber(states);
    
    // Imprimir cuando se visita un nodo diferente
    /*if (location !== previousLocation) {
        document.getElementById("log").innerHTML += `<br><b>Cuarto Visitado: ${location} | Escenario ${scenarioNumber}: ${getStateIdentifier(states)}</b> `;
        previousLocation = location;
    }*/
    
    document.getElementById("log").innerHTML += `<br><b>Cuarto Visitado: ${location} | Accion: ${action_result} | Escenario ${scenarioNumber}: ${getStateIdentifier(states)}</b>`;
    
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
