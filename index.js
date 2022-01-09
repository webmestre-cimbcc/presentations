function texteVariable (periode) {
    fetch("https://webmestre-cimbcc.github.io/presentations/data/dates_presentations.json")
    .then((res) => res.json())
    .then((data) => {
    if (periode === "debutAutomne") {console.log(data.debutAutomne)};
    if (periode === "debutFete") {console.log(data.debutFete)};
    if (periode === "debutHiver") {console.log(data.debutHiver)};
    if (periode === "debutEte") {console.log(data.debutEte)};
    })
}

texteVariable("debutEte");
