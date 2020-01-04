
function parse() {
    const roleString = document.getElementById('roleinput').value;
    const {role, problems, ignored} = parseRole(roleString);

    const detailsText = `<table><tr><td style="text-align:center;"><img width="75" height="75" src="https://play.pokemonshowdown.com/${role.image || 'fx/mafia-villager'}.png"></td><td style="text-align:left;width:100%"><ul>${role.memo.map(m => `<li>${m}</li>`).join('')}</ul></td></tr></table>`;
    document.getElementById('details').innerHTML = detailsText;

    const problemsText = `<ul>${problems.map(m => `<li>${m}</li>`).join('')}</ul>`;
    document.getElementById('problems').innerHTML = problemsText;

    const ignoredText = `Didn't parse: <ul>${ignored.map(m => `<li>${m}</li>`).join('')}</ul>`;
    document.getElementById('ignored').innerHTML = ignoredText;

    document.getElementById('name').innerHTML = `Your role is: ${role.name}`;
}

