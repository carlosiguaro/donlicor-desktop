function connector(recursiveResolve) {
    return new Promise((resolve, reject) => {
        var img = document.body.appendChild(document.createElement("img"));
        img.onload = function() { 
            resolve(true);
        };
        img.onerror = function() { 
            console.log("Paso por aca ", Math.random().toString().substring(2.8));
            recursiveResolve == undefined ? resolve : recursiveResolve;
            connector(recursiveResolve);
        };
        img.src = `http://localhost:8087/logo.png?${Math.random().toString().substring(2.8)}`;
    })
}

window.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(function() {
        connector()
        .then(()=> {
            this.resizeTo(this.screen.availWidth, this.screen.availHeight);
            window.location = "http://localhost/donlicor";
        });
    }, 2500);
})