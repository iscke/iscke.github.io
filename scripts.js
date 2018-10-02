
function generateC9(tables, chances, rolls, players, filler = 'VT')
{
    var counts = {};
    for (var letter in tables) {
        counts[letter] = 0;
    }
    var letters = [];
    var numbers = [];

    for (var i = 0; i < rolls; i++)
    {
        var number = ~~(Math.random() * 100);
        numbers.push(number);
        var letter = "";
        for (var current of chances)
        {
            if (typeof current === 'string')
            {
                letter = current;
            } else {
                if (current > number) break;
            }
        }
        letters.push(letter);
        counts[letter]++;
    }

    var roles = [];
    for (var letter in counts) {
        var count = counts[letter];
        roles = roles.concat(tables[letter][count]);
    }
    roles = roles.concat(Array(players - roles.length).fill(filler));
    return numbers + '|' + letters.join('') + ': ' + roles.join(', ');
}

function generateC9pp()
{
    document.getElementById('result').innerText = generateC9(data["C9++"].tables, data["C9++"].chances, 7, 13);
}
var data =
{  
    "C9++":{  
       "tables":{  
          "C":[  
             [  
 
             ],
             [  
                "OS Cop"
             ],
             [  
                "Cop"
             ],
             [  
                "Cop",
                "OS Cop"
             ],
             [  
                "Cop",
                "Cop"
             ],
             [  
                "Cop",
                "Cop",
                "OS Cop"
             ],
             [  
                "Cop",
                "Cop",
                "Cop"
             ]
          ],
          "D":[  
             [  
 
             ],
             [  
                "Doc"
             ],
             [  
                "Doc",
                "OS Doc"
             ],
             [  
                "Doc",
                "Doc"
             ],
             [  
                "Doc",
                "Doc",
                "OS Doc"
             ],
             [  
                "Doc",
                "Doc",
                "Doc"
             ]
          ],
          "V":[  
             [  
 
             ],
             [  
                "OS Vig"
             ],
             [  
                "Vig"
             ],
             [  
                "Vig",
                "OS Vig"
             ],
             [  
                "Vig",
                "Vig"
             ],
             [  
                "Vig",
                "Vig",
                "OS Vig"
             ]
          ],
          "M":[  
             [  
 
             ],
             [  
                "Innocent Child (d1 compulsive)"
             ],
             [  
                "Mason",
                "Mason"
             ],
             [  
                "Mason",
                "Mason",
                "Innocent Child (d1 compulsive"
             ],
             [  
                "Mason",
                "Mason",
                "Mason"
             ],
             [  
                "Mason",
                "Mason",
                "Mason",
                "Mason"
             ]
          ],
          "B":[  
             [  
 
             ],
             [  
                "Roleblocker"
             ],
             [  
                "Roleblocker",
                "OS Roleblocker"
             ],
             [  
                "Roleblocker",
                "Roleblocker"
             ],
             [  
                "Roleblocker",
                "Roleblocker",
                "OS Roleblocker"
             ]
          ],
          "T":[  
             [  
                "Mafia Goon",
                "Mafia Roleblocker",
                "Mafia Godfather"
             ],
             [  
                "Mafia Goon",
                "Mafia Roleblocker",
                "Mafia Godfather",
                "Solo SK"
             ],
             [  
                "Mafia Goon",
                "Mafia Roleblocker",
                "Mafia Godfather"
             ],
             [  
                "Mafia Goon",
                "Mafia Goon",
                "Mafia Roleblocker",
                "Solo SK"
             ],
             [  
                "Mafia Goon",
                "Mafia Goon",
                "Mafia Roleblocker"
             ],
             [  
                "Mafia Goon",
                "Mafia Godfather",
                "Solo SK"
             ],
             [  
                "Mafia Goon",
                "Mafia Godfather"
             ],
             [  
                "Mafia Goon",
                "Mafia Godfather",
                "Solo SK"
             ]
          ]
       },
       "chances":[  
          "T",
          50,
          "C",
          65,
          "D",
          75,
          "V",
          85,
          "M",
          95,
          "B"
       ]
    }
 };