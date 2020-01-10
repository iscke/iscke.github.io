
function parse() {
    const roleString = document.getElementById('roleinput').value;
    const {role, problems, ignored} = parseRole(roleString);

    const detailsText = `<table><tr><td style="text-align:center;"><img width="75" height="75" src="https://play.pokemonshowdown.com/fx/mafia-${role.image || 'villager'}.png"></td><td style="text-align:left;width:100%"><ul>${role.memo.map(m => `<li>${m}</li>`).join('')}</ul></td></tr></table>`;
    document.getElementById('details').innerHTML = detailsText;

    const problemsText = `<ul>${problems.map(m => `<li>${m}</li>`).join('')}</ul>`;
    document.getElementById('problems').innerHTML = problemsText;

    const ignoredText = `Didn't parse: <ul>${ignored.map(m => `<li>${m}</li>`).join('')}</ul>`;
    document.getElementById('ignored').innerHTML = ignoredText;

    document.getElementById('name').innerHTML = `Your role is: ${role.name}`;
}

const Chat = {
    escapeHTML(e) { return e },
}
const toID = e => e.toLowerCase().replace(/[^a-z0-9]/g, '');

function parseRole(roleString) {
  const role = {
    name: roleString,
    safeName: Chat.escapeHTML(roleString),
    id: toID(roleString),
    image: '',
    memo: ['During the Day, you may vote for whomever you want lynched.'],
    alignment: '',
  };
  const problems = [];

  const ignored = [];

  // if a role has a modifier with an alignment and a proper alignment,
  // the proper alignment overrides the modifier's alignment
  let modAlignment = '';

  const roleWords = roleString
    .replace(/\(.+?\)/g, '') // remove (notes within brackets)
    .split(' ')
    .map(toID);

  outer: while (roleWords.length) {
    const currentWord = roleWords.slice();

    while (currentWord.length) {
      let currentSearch = currentWord.join('');
      if (currentSearch in MafiaData.aliases) currentSearch = MafiaData.aliases[currentSearch];

      if (currentSearch in MafiaData.roles) {
        // we found something with our current search, remove it from the main role and restart
        const mod = MafiaData.roles[currentSearch];

        if (mod.memo) role.memo.push(...mod.memo);
        if (mod.alignment && !modAlignment) modAlignment = mod.alignment;
        if (mod.image && !role.image) role.image = mod.image;

        roleWords.splice(0, currentWord.length);
        continue outer;
      } else if (currentSearch in MafiaData.alignments) {
        if (role.alignment && role.alignment !== currentSearch) {
          problems.push(`The role ${roleString} has multiple possible alignments (${role.alignment} and ${currentSearch})`);
        }
        role.alignment = currentSearch;

        roleWords.splice(0, currentWord.length);
        continue outer;
      }

      // we didnt find something, take the last word off our current search and continue
      currentWord.pop();
    }
    // no matches, take the first word off and continue
    ignored.push(roleWords.shift());
  }

  role.alignment = role.alignment || modAlignment;
  if (!role.alignment) {
    // Default to town
    role.alignment = 'town';
  }
  if (problems.length) {
    // multiple possible alignment, default to solo
    role.alignment = 'solo';
    role.memo.push(`Your role has multiple conflicting alignments, ask the host for details.`);
  } else {
    const alignment = MafiaData.alignments[role.alignment];
    if (alignment) {
      role.memo.push(...MafiaData.alignments[role.alignment].memo);
      if (alignment.image && !role.image) role.image = alignment.image;
    } else {
      problems.push(`Alignment desync: role ${role.name}'s alignment ${role.alignment} doesn't exist in data. Please report this to a mod.`);
    }
  }

  return {role, problems, ignored};
}
