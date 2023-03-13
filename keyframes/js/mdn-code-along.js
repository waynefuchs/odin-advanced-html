const example1 = document.getElementById("example1");
example1.addEventListener("animationstart", listener, false);
example1.addEventListener("animationend", listener, false);
example1.addEventListener("animationiteration", listener, false);
example1.className = "example1";
console.log(example1);

function listener(event) {
    const l = document.createElement('li');
    switch(event.type) {
        case "animationstart":
            l.textContent = `Started: elapsed time is ${event.elapsedTime}`;
            break;
        case "animationend":
            l.textContent = `Ended: elapsed time is ${event.elapsedTime}`;
            break;
        case "animationiteration":
            l.textContent = `New loop started at time ${event.elapsedTime}`;
            break;
    }
    document.getElementById("output").appendChild(l);
}