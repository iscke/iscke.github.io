window.MafiaData = JSON.parse(String.raw`{
    "roles": {
      "villager": {
        "name": "Villager",
        "alignment": "town",
        "image": "fx/mafia-villager.png",
        "memo": [
          "Vanilla Townie: Town player without any additional abilities."
        ]
      },
      "goon": {
        "name": "Goon",
        "alignment": "mafia",
        "memo": [
          "Goon: Mafia player without any additional abilities."
        ]
      },
      "alien-of-all-trades": {
        "name": "Alien-of-all-Trades",
        "alignment": "alien",
        "memo": [
          "Alien-of-all-Trades: Before the game starts, you may pick another role. You will gain any powers this role has for the rest of the game."
        ]
      },
      "aligner": {
        "name": "Aligner",
        "id": "aligner",
        "alignment": "solo",
        "memo": [
          "Aligner: Once a game, you may target someone. You will win if that person wins. Otherwise, you are a Survivor."
        ]
      },
      "anti-survivor": {
        "name": "Anti-Survivor",
        "id": "antisurvivor",
        "alignment": "solo",
        "memo": [
          "Anti-Survivor: You are the only person who wins if you survive until the end of the game."
        ]
      },
      "area 51 detective": {
        "name": "Area 51 Detective",
        "id": "area51detective",
        "memo": [
          "Area 51 Detective: During the Night, you may PM the host the name of another player. This player will not be able to use an action if they are an Alien."
        ]
      },
      "area 51 immunologist": {
        "name": "Area 51 Immunologist",
        "id": "area51immunologist",
        "memo": [
          "Area 51 Immunologist: During the Night, you may PM the host the name of another player. This player will become permanently immune to Alien kills."
        ]
      },
      "assassin": {
        "name": "Assassin",
        "id": "assassin",
        "alignment": "solo",
        "memo": [
          "Assassin (Assassin in the Court): Wins when the King dies. Can shoot another player publicly once a game, but loses if this wasn't the King."
        ]
      },
      "avoider": {
        "name": "Avoider",
        "id": "avoider",
        "memo": [
          "Avoider: During the Night, you may PM the host the name of another player. If this player targeted you with an action, this action fails."
        ]
      },
      "baby monarch": {
        "name": "Baby Monarch",
        "id": "babymonarch",
        "memo": [
          "Baby Monarch: Turns into a Monarch at the start of Day 4. It is announced that someone has turned into a Monarch."
        ]
      },
      "babysitter": {
        "name": "Babysitter",
        "id": "babysitter",
        "memo": [
          "Babysitter: During the Night, you may PM the host the name of another player. This player will be protected from all nightkills for that Night, but if the Babysitter dies, its target will die too."
        ],
        "image": "fx/mafia-doctor.png"
      },
      "bailiff": {
        "name": "Bailiff",
        "id": "bailiff",
        "memo": [
          "Bailiff: During the Night, you may PM the host the name of another player. If this player is an X-Shot role, they will lose all of their shots."
        ]
      },
      "birthday boy": {
        "name": "Birthday Boy",
        "id": "birthdayboy",
        "alignment": "solo",
        "memo": [
          "Birthday Boy: You start as a Survivor. When you are lynched, you may pick another player. You become an exact copy of this player, including alignment."
        ]
      },
      "black goo": {
        "name": "Black Goo",
        "id": "blackgoo",
        "alignment": "town",
        "memo": [
          "Black Goo: Anyone who targets you will join the Cult."
        ]
      },
      "blackmailer": {
        "name": "Blackmailer",
        "id": "blackmailer",
        "memo": [
          "Blackmailer: During the Night, you may PM the host the name of another player. This player will kill their target."
        ]
      },
      "blacksmith": {
        "name": "Blacksmith",
        "id": "blacksmith",
        "memo": [
          "Blacksmith: During the Day, you may PM the host the name of another player. This player will be protected from one kill that day."
        ]
      },
      "blockade": {
        "name": "Blockade",
        "id": "blockade",
        "memo": [
          "Blockade: During the Night, you may PM the host the name of another player. This player will not be able to use an action, and you will get to know who, if anyone, they targeted."
        ]
      },
      "bloodhound": {
        "name": "Bloodhound",
        "id": "bloodhound",
        "memo": [
          "Bloodhound: Each night you can PM the host the name of another player. You will be told if they are TOWN or NOT TOWN, or receive NO RESULT if your investigation failed."
        ],
        "image": "fx/mafia-cop.png"
      },
      "bloodsucker": {
        "name": "Bloodsucker",
        "id": "bloodsucker",
        "memo": [
          "Bloodsucker: Each night you can PM the host the name of another player. This player will die and become a Treestump."
        ]
      },
      "bodyguard": {
        "name": "Bodyguard",
        "id": "bodyguard",
        "memo": [
          "Bodyguard: During the Night, you may PM the host the name of another player. This player will be protected from all nightkills for that Night, but the Bodyguard will be killed instead."
        ],
        "image": "fx/mafia-doctor.png"
      },
      "bouncer": {
        "name": "Bouncer",
        "id": "bouncer",
        "memo": [
          "Bouncer: During the Night, you may PM the host the name of another player. Anyone who targeted this player will die."
        ]
      },
      "broken vanillaiser": {
        "name": "Broken Vanillaiser",
        "id": "brokenvanillaiser",
        "memo": [
          "Broken Vanillaiser: Once a game, at night, you may PM the host that you want to activate the Broken Vanillaiser. For the next day and night, all players will be their Vanilla variants."
        ]
      },
      "busdriver": {
        "name": "Bus Driver",
        "id": "busdriver",
        "memo": [
          "Bus Driver: During the Night, you may PM the host the names of two players. People who targeted either of these players will instead target the other one."
        ]
      },
      "chameleon goo": {
        "name": "Chameleon Goo",
        "id": "chameleongoo",
        "alignment": "goo",
        "memo": [
          "Chameleon Goo: Anyone who targets you will join the Cult. You are a Mason, and will die after Night 2. There is no way to stop this death."
        ]
      },
      "chauffeur": {
        "name": "Chauffeur",
        "id": "chauffeur",
        "memo": [
          "Chauffeur: During the Night, you may PM the host the names of two players. They will use the action the other player used. If either idled, it fails."
        ]
      },
      "commuter": {
        "name": "Commuter",
        "id": "commuter",
        "memo": [
          "Commuter: During the Night, you may PM the host that you want to commute. No other player will be able to target you this night."
        ]
      },
      "compatibility checker": {
        "name": "Compatibility Checker",
        "id": "compatibilitychecker",
        "memo": [
          "Compatibility Checker: During the Night, you may PM the host the names of two players. You will get to know whether they are COMPATIBLE or NOT COMPATIBLE, depending on whether they are the same alignment or not."
        ]
      },
      "confidant": {
        "name": "Confidant",
        "id": "confidant",
        "memo": [
          "Confidant: During the Night, you may PM the host the name of another player. You will use the same action as the target, on the same target as them."
        ]
      },
      "conspiracy theorist": {
        "name": "Conspiracy Theorist",
        "id": "conspiracytheorist",
        "memo": [
          "Conspiracy Theorist: Each night you can PM the host the name of another player. You will be told if they are ALIEN or NOT ALIEN, or receive NO RESULT if your investigation failed. Additionally, you will always be inspected as an ALIEN when possible."
        ],
        "image": "fx/mafia-cop.png"
      },
      "power cop": {
        "name": "Power Cop",
        "id": "powercop",
        "memo": [
          "Power Cop: During the Night, you can PM the host the name of another player. You will be told how strong that player's role is on a scale from 0 to 10, as judged by the host."
        ]
      },
      "role cop": {
        "name": "Role Cop",
        "id": "rolecop",
        "memo": [
          "Role Cop: Each night you can PM the host the name of another player. You will be told their exact role (not alignment), or NO RESULT if your investigation failed."
        ],
        "image": "fx/mafia-cop.png"
      },
      "rolecopclassic": {
        "name": "Role Cop (Classic)",
        "id": "rolecopclassic",
        "memo": [
          "Role Cop: Each night you can PM the host the name of another player. You will be told their exact role and alignment, or NO RESULT if your investigation failed."
        ],
        "image": "fx/mafia-cop.png"
      },
      "vanilla cop": {
        "name": "Vanilla Cop",
        "id": "vanillacop",
        "memo": [
          "Vanilla Cop: Each night you can PM the host the name of another player. You will be told if they are VANILLA or NOT VANILLA, or NO RESULT if your investigation failed."
        ],
        "image": "fx/mafia-cop.png"
      },
      "cop": {
        "name": "Cop",
        "id": "cop",
        "memo": [
          "Cop: Each night you can PM the host the name of another player. You will be told if they are MAFIA or NOT MAFIA, or receive NO RESULT if your investigation failed."
        ],
        "image": "fx/mafia-cop.png"
      },
      "cop-of-all-trades": {
        "name": "Cop-of-all-Trades",
        "id": "copofalltrades",
        "memo": [
          "Cop-of-all-Trades: You may use the actions of a Cop, a Seer, an FBI Agent, a Conspiracy Theorist, and a Private Investigator once a game each."
        ]
      },
      "coronereternalsun": {
        "name": "Coroner (Eternal Sun)",
        "id": "coronereternalsun",
        "memo": [
          "Coroner: When any player dies, you will be PMd which role they were. Note: Check 'Coroner CI' for information about Coroners in Cracking Idea."
        ]
      },
      "coronercrackingidea": {
        "name": "Coroner (Cracking Idea)",
        "id": "coronercrackingidea",
        "memo": [
          "Coroner: Each night you can PM the host the name of another (dead) player. You learn the role(s) of the player who killed them, but not who this role belongs to. This also works when your target dies the night you used it."
        ]
      },
      "corrupt queen": {
        "name": "Corrupt Queen",
        "id": "corruptqueen",
        "alignment": "solo",
        "memo": [
          "Corrupt Queen: During the Night, you may PM the host the name of another player. This player will become a King, and be the only person to be able to lynch the following day. However, after the following day, this player will die."
        ]
      },
      "cowardly hero": {
        "name": "Cowardly Hero",
        "id": "cowardlyhero",
        "memo": [
          "Cowardly Hero: During the Night, you may PM the host the name of another player. This player will be protected from nightkills. If you are killed, the player you protected will die instead. Afterwards, you will not be able to use this action anymor."
        ]
      },
      "cpr doctor": {
        "name": "CPR Doctor",
        "id": "cprdoctor",
        "memo": [
          "CPR Doctor: During the Night, you may PM the host the name of another player. This player will be protected from all nightkills for that Night. If they would not be nightkilled, you kill them instead."
        ]
      },
      "cupid": {
        "name": "Cupid",
        "id": "cupid",
        "memo": [
          "Cupid: At Night One you can PM the host the name of another player. Every other player who targeted the target becomes Lovers with the target."
        ]
      },
      "deputy": {
        "name": "Deputy",
        "id": "deputy",
        "memo": [
          "Deputy: If a Cop dies, you will inherit their ability and become a Cop yourself."
        ]
      },
      "desperado": {
        "name": "Desperado",
        "id": "desperado",
        "memo": [
          "Desperado: At Night, you can PM the host the name of another player. You will kill this player if they're not aligned with the TOWN, but you will die if they are."
        ]
      },
      "wild discard": {
        "name": "Wild disCard",
        "id": "wilddiscard",
        "alignment": "solo",
        "memo": [
          "Wild disCard: You may choose a different role from the game's discards."
        ]
      },
      "discard": {
        "name": "Discard",
        "id": "discard",
        "memo": [
          "Discard: In IDEAs you may not pick this role."
        ]
      },
      "discard vendor": {
        "name": "Discard Vendor",
        "id": "discardvendor",
        "memo": [
          "Discard Vendor: During the Night, you may PM the host the name of another player and a discarded role. The chosen player will receive a One-Shot version of the discarded role to use."
        ]
      },
      "doctor": {
        "name": "Doctor",
        "id": "doctor",
        "memo": [
          "Doctor: During the Night, you may PM the host the name of another player. This player will be protected from all nightkills for that Night."
        ],
        "image": "fx/mafia-doctor.png"
      },
      "do-it-yourselfer": {
        "name": "Do-It-Yourselfer",
        "id": "doityourselfer",
        "memo": [
          "Do-It-Yourselfer: Each Night, you may use a One-Shot ability of a discarded role. You may not use a discarded role multiple times."
        ]
      },
      "drookez": {
        "name": "Drookez",
        "id": "drookez",
        "alignment": "mafia",
        "memo": [
          "Drookez: A Deathproof Mafia's Child Lover. Drookez gets revealed at the start of the game, but can only die when their (unknown) lover dies!"
        ]
      },
      "duskiller": {
        "name": "Duskiller",
        "id": "duskiller",
        "alignment": "solo",
        "memo": [
          "Duskiller: At night you may PM the host the name of another player. This player will die after the following day."
        ]
      },
      "et": {
        "name": "E.T.",
        "id": "et",
        "alignment": "solo",
        "memo": [
          "E.T.: You win if either the Town or the Aliens win."
        ]
      },
      "fbi agent": {
        "name": "FBI Agent",
        "id": "fbiagent",
        "memo": [
          "FBI Agent: Each night you can PM the host the name of another player. You will be told if they are SERIAL KILLER or NOT SERIAL KILLER, or receive NO RESULT if your investigation failed."
        ],
        "image": "fx/mafia-cop.png"
      },
      "firefighter": {
        "name": "Firefighter",
        "id": "firefighter",
        "memo": [
          "Firefighter: During the Night, you may PM the host the name of another player. This player can't be primed by an Arsonist that night."
        ]
      },
      "flip flop": {
        "name": "Flip Flop",
        "id": "flipflop",
        "alignment": "solo",
        "memo": [
          "Flip Flop: Every odd Day and Night, you are aligned with the Town, and every even Day and Night with the Mafia."
        ]
      },
      "follower": {
        "name": "Follower",
        "id": "follower",
        "memo": [
          "Follower: During the Night, you may PM the host the name of another player. You will get to know what action, if any, this player performed."
        ],
        "image": "fx/mafia-cop.png"
      },
      "friend recruiter": {
        "name": "Friend Recruiter",
        "id": "friendrecruiter",
        "memo": [
          "Besides your normal win-condition, you can win when only Friends are left alive. You can talk to other Friends. Once a game, at night, you may PM the host the name of another player. This player will be turned into a Friend."
        ]
      },
      "fruit vendor": {
        "name": "Fruit Vendor",
        "id": "fruitvendor",
        "memo": [
          "Fruit Vendor: During the Night, you may PM the host the name of another player. This player will be notified that they received fruit."
        ]
      },
      "gladiator": {
        "name": "Gladiator",
        "id": "gladiator",
        "memo": [
          "Gladiator: During the Night, you may PM the host the names of two players. These two players will be the only two who can be lynched the next day, assuming both of them are alive at the end of the night."
        ]
      },
      "goofactory": {
        "name": "Goofactory",
        "id": "goofactory",
        "memo": [
          "goofactory: During the Night, you may PM the host the name of another player. You will be able to turn this player into a Goo type of your choice."
        ]
      },
      "goomaker": {
        "name": "Goomaker",
        "id": "goomaker",
        "memo": [
          "Goomaker: During the Night, you may PM the host the name of another player. This player will take on the Black Goo ability."
        ]
      },
      "governor": {
        "name": "Governor",
        "id": "governor",
        "memo": [
          "Governor: At the end of each day, the Governor can decide whether the person who would be lynched will die or not."
        ]
      },
      "grey goo": {
        "name": "Grey Goo",
        "id": "greygoo",
        "memo": [
          "You can target a player to turn them into more Grey Goo. Their alignment doesn't change."
        ]
      },
      "greygoocrackingidea": {
        "name": "Grey Goo (Cracking Idea)",
        "id": "greygoocrackingidea",
        "alignment": "goo",
        "memo": [
          "Grey Goo: Anyone who targets you will join the Cult. You will die after Night 2. There is no way to stop this death."
        ]
      },
      "gossiper": {
        "name": "Gossiper",
        "id": "gossiper",
        "memo": [
          "Gossiper: During the Night, you can PM the host the name of another player. This player will get to know who targeted you."
        ]
      },
      "guard": {
        "name": "Guard",
        "id": "guard",
        "memo": [
          "Guard (Assassin in the Court): You get to know the identity of the King at the start of the game."
        ]
      },
      "gunsmith": {
        "name": "Gunsmith",
        "id": "gunsmith",
        "memo": [
          "Gunsmith: Once per day or night, you can PM the name of a player to the host. This player will receive a gun, which they can kill someone with that day (if given at day) or the next day (if given at night)."
        ]
      },
      "halter": {
        "name": "Halter",
        "id": "halter",
        "memo": [
          "Halter: During the night, you can give the host a set of arbitrary roles. You will be told if the setup will HALT or RUN INDEFINITELY."
        ]
      },
      "hasty lover": {
        "name": "Hasty Lover",
        "id": "hastylover",
        "memo": [
          "Hasty Lover: During the Night, you must PM the name of a player to the host. For that night and the following day, you are Lovers."
        ]
      },
      "hater": {
        "name": "Hater",
        "id": "hater",
        "memo": [
          "Hater: During the Night, you can PM the name of a player to the host. This player will take one less vote to be lynched the next day."
        ]
      },
      "hider": {
        "name": "Hider",
        "id": "hider",
        "memo": [
          "Hider: During the Night, you may PM the host the name of another player. You will not be able to be targeted that night, but if the person you targeted died or is not aligned with the TOWN, you die."
        ]
      },
      "homekeeper": {
        "name": "Homekeeper",
        "id": "homekeeper",
        "memo": [
          "Homekeeper: During the Night, you may PM the host the name of another player. If they idled, they will not be able to be nightkilled that night."
        ]
      },
      "innocent child": {
        "name": "Innocent Child",
        "id": "innocentchild",
        "alignment": "Town",
        "memo": [
          "Innocent Child: At any point during the game, you may PM the host to reveal you as TOWN publicly."
        ]
      },
      "inquisitor": {
        "name": "Inquisitor",
        "id": "inquisitor",
        "alignment": "solo",
        "memo": [
          "Inquisitor: During the Night, you may PM the host the name of another player. This player will die, if not, they will be recruited into your cult."
        ]
      },
      "jack-of-all-trades": {
        "name": "Jack-of-all-Trades",
        "id": "jackofalltrades",
        "memo": [
          "Jack-of-all-Trades: You may use the actions of a Cop, a Roleblocker, and a Doctor once a game each."
        ]
      },
      "jailkeeper": {
        "name": "Jailkeeper",
        "id": "jailkeeper",
        "memo": [
          "Jailkeeper: During the Night, you may PM the host the name of another player. This player will be protected from all nightkills for that Night and won't be able to use an action that Night."
        ]
      },
      "janitor": {
        "name": "Janitor",
        "id": "janitor",
        "memo": [
          "Janitor: Whenever a player dies, the Janitor can decide whether or not their role gets revealed."
        ]
      },
      "jester": {
        "name": "Jester",
        "id": "jester",
        "alignment": "solo",
        "memo": [
          "Jester: You are aligned with yourself. You win if you get lynched at any point during the game."
        ]
      },
      "journalist": {
        "name": "Journalist",
        "id": "journalist",
        "memo": [
          "Journalist: Each night, you can PM the host the name of a player. When you die, all players you inspected will be publicly revealed as TOWN or NOT TOWN."
        ]
      },
      "judas": {
        "name": "Judas",
        "id": "judas",
        "alignment": "solo",
        "memo": [
          "Judas: You start off aligned with the TOWN, but when you get lynched for the first time you don't die. Instead, you become aligned with the MAFIA."
        ]
      },
      "judge": {
        "name": "Judge",
        "id": "judge",
        "memo": [
          "Judge: During the Night, you can PM the host the name of a player. If they are of a different alignment than the person being lynched the day prior, they die."
        ]
      },
      "king": {
        "name": "King",
        "id": "king",
        "memo": [
          "King (Assassin in the Court): The Assassin wins if you die. The Guards know your identity."
        ]
      },
      "kingmaker": {
        "name": "Kingmaker",
        "id": "kingmaker",
        "memo": [
          "Kingmaker: Each night, you can PM the host the name of a player. The next day this person, if alive, will decide the lynch for that day."
        ]
      },
      "leader": {
        "name": "Leader",
        "id": "leader",
        "memo": [
          "Leader: You are the leader of a faction. You may get special actions. Ask the host for more information."
        ]
      },
      "litteliar": {
        "name": "Little Liar",
        "id": "litteliar",
        "memo": [
          "Little Liar: At any point during the game, you may PM the host to reveal you as TOWN publicly. (Little Liars are usually scum-aligned)"
        ]
      },
      "loner": {
        "name": "Loner",
        "id": "loner",
        "alignment": "solo",
        "memo": [
          "Loner: You win when everyone else is dead. You have no partners or nightkill."
        ]
      },
      "loverboy": {
        "name": "Loverboy",
        "id": "loverboy",
        "memo": [
          "Loverboy: During the Night, you can PM the host the name of another player. They will die if you die and are informed of this."
        ]
      },
      "loyal lover": {
        "name": "Loyal Lover",
        "id": "loyallover",
        "alignment": "solo",
        "memo": [
          "Loyal Lover: Once a game, at night, you may PM the host the name of another player. You will become lovers with them. You can only win if the person you're lovers with wins."
        ]
      },
      "lure": {
        "name": "Lure",
        "id": "lure",
        "memo": [
          "Lure: During the Night, you can PM the host the name of another player. This player will be forced to target you."
        ]
      },
      "lyncher": {
        "name": "Lyncher",
        "id": "lyncher",
        "alignment": "solo",
        "memo": [
          "Lyncher: You win when you get a specific player lynched."
        ]
      },
      "magician": {
        "name": "Magician",
        "id": "magician",
        "memo": [
          "Magician: During the Night, you can PM the host the name of another player. This player will be removed from the game at the end of the night, without a reveal. While the Mafia's kill target (if successful) stays in the game. At the end of the next day, the Magician's target is added back, while the Mafia's kill is removed."
        ]
      },
      "mentor": {
        "name": "Mentor",
        "id": "mentor",
        "alignment": "solo",
        "memo": [
          "Mentor: Can recruit a mentee when they do not have a living mentee. They share a factional kill while there is a living mentee. If the mentor dies, the mentee dies with them."
        ]
      },
      "millermaker": {
        "name": "Millermaker",
        "id": "millermaker",
        "memo": [
          "Millermaker: Each night, you can PM the host the name of a player. This player will permanently show up as guilty to investigative role."
        ]
      },
      "missionary": {
        "name": "Missionary",
        "id": "missionary",
        "memo": [
          "Missionary: During the Night, you can PM the host the name of another player. This player will not be able to kill anyone else."
        ]
      },
      "modposter": {
        "name": "Modposter",
        "id": "modposter",
        "memo": [
          "Modposter: At any point during the game, you may PM the host a phrase. They will publicly, yet anonymously, post this phrase in chat."
        ]
      },
      "monarch": {
        "name": "Monarch",
        "id": "monarch",
        "memo": [
          "Monarch: You are Bulletproof, Unlynchable and a Day Vigilante. However, all these abilities go away when any one of them has been activated."
        ]
      },
      "motion detector": {
        "name": "Motion Detector",
        "id": "motiondetector",
        "memo": [
          "Motion Detector: During the Night, you may PM the host the name of another player. You will get to know whether any actions were performed on or by this player."
        ],
        "image": "fx/mafia-cop.png"
      },
      "multiplier": {
        "name": "Multiplier",
        "id": "multiplier",
        "memo": [
          "Multiplier: During the Night, you can PM the host the name of another player. This player's action will target all players in the game."
        ]
      },
      "neapolitan": {
        "name": "Neapolitan",
        "id": "neapolitan",
        "memo": [
          "Neapolitan: Each night, you can PM the host the name of a player. You will be told if they are VT or NOT VT, or receive NO RESULT if your investigation failed."
        ],
        "image": "fx/mafia-cop.png"
      },
      "necromancer": {
        "name": "Necromancer",
        "id": "necromancer",
        "memo": [
          "Necromancer: Once a game at Night, you can PM the host to revive all dead players for the following Day and Night."
        ]
      },
      "nightmare": {
        "name": "Nightmare",
        "id": "nightmare",
        "memo": [
          "Nightmare: During the Night, you can PM the host the name of another player. This player will not be able to talk or lynch the next day, but can use their action again."
        ]
      },
      "nurse": {
        "name": "Nurse",
        "id": "nurse",
        "memo": [
          "Nurse: When a Doctor dies, you will become a Doctor instead."
        ],
        "image": "mafia-doctor.png"
      },
      "nymphomaniac": {
        "name": "Nymphomaniac",
        "id": "nymphomaniac",
        "memo": [
          "Nymphomaniac: Has to PM the host the name of a player Night 1. You will become Lovers with this player."
        ]
      },
      "one shot townie": {
        "name": "One Shot Townie",
        "id": "oneshottownie",
        "alignment": "solo",
        "memo": [
          "One Shot Townie: Starts out as a Town player. Turns into a Survivor at the start of Day 2."
        ]
      },
      "oracle": {
        "name": "Oracle",
        "id": "oracle",
        "memo": [
          "Oracle: Each night, you can PM the host the name of a player. If you die that night, or the next day, you will reveal their role publicly."
        ]
      },
      "oraclesi": {
        "name": "Oracle (Snaq's Idea)",
        "id": "oraclesi",
        "memo": [
          "Oracle: During the Night, you can PM the host a question about the setup of the game. They will answer you with YES or NO."
        ]
      },
      "organ donor": {
        "name": "Organ Donor",
        "id": "organdonor",
        "memo": [
          "Organ Donor: During the Night, you can PM the host the name of a dead player. You will die, but this player will be revived."
        ]
      },
      "palette goo": {
        "name": "Palette Goo",
        "id": "palettegoo",
        "memo": [
          "Palette Goo: During the Night, you may PM the the host a Goo type. You will turn into this type of Goo."
        ]
      },
      "parrot role": {
        "name": "Parrot Role",
        "id": "parrotrole",
        "memo": [
          "Parrot Role: Each night, you can PM the host the name of a player. If they have an active ability, you use this ability on them."
        ]
      },
      "politician": {
        "name": "Politician",
        "id": "politician",
        "memo": [
          "Politician: Each night, you can PM the host the name of two players. You give the vote of the former player to the latter player for the next day."
        ]
      },
      "praiser": {
        "name": "Praiser",
        "id": "praiser",
        "memo": [
          "Praiser: During the Night, you can PM the host the name of another player. This player will take one more lynch to be lynched the following day."
        ]
      },
      "pretty lady": {
        "name": "Pretty Lady",
        "id": "prettylady",
        "memo": [
          "Pretty Lady: During the Night, you may PM the host the name of another player. This player won't be able to use an action this Night. If you target a Werewolf performing a kill, you redirect its kill onto you."
        ]
      },
      "private investigator": {
        "name": "Private Investigator",
        "id": "privateinvestigator",
        "memo": [
          "Private Investigator: Each night you can PM the host the name of another player. You will be told if they are CULT or NOT CULT, or receive NO RESULT if your investigation failed."
        ],
        "image": "fx/mafia-cop.png"
      },
      "prober": {
        "name": "Prober",
        "id": "prober",
        "memo": [
          "Prober: Each night you can PM the host the name of another player. You will be told if they are WEREWOLF or NOT WEREWOLF, or receive NO RESULT if your investigation failed. Additionally, this player can't perform a night action that night."
        ]
      },
      "pseudocider": {
        "name": "Pseudocider",
        "id": "pseudocider",
        "memo": [
          "Pseudocider: Once a game, during the Night, you can PM the host to remove you from the game. You will be removed without reveal, and can be added back during a future night upon choice."
        ]
      },
      "pseudojester": {
        "name": "Pseudojester",
        "id": "pseudojester",
        "alignment": "solo",
        "memo": [
          "Pseudojester: You are only able to win if you get lynched. You will be aligned with the player who placed the last lynch."
        ]
      },
      "pseudolyncher": {
        "name": "Pseudolyncher",
        "alignment": "solo",
        "memo": [
          "Pseudolyncher: You are only able to win if you get your target lynched. You will be aligned with the alignment of this player."
        ]
      },
      "psychiatrist": {
        "name": "Psychiatrist",
        "id": "psychiatrist",
        "memo": [
          "Psychiatrist: During the Night, you may PM the host the name of another player. If this player is a Serial Killer, they will be converted to a Vanilla Townie."
        ]
      },
      "psychomagnet": {
        "name": "Psychomagnet",
        "id": "psychomagnet",
        "memo": [
          "Psychomagnet: During the Night, you may PM the host the name of another player. All other actions used that Night will target this player instead."
        ]
      },
      "reloader": {
        "name": "Reloader",
        "id": "reloader",
        "memo": [
          "Reloader: During the Night, you may PM the host the name of another player. If this player has used an X-Shot action, they regain their shot, allowing them to use the action again."
        ]
      },
      "recruiter": {
        "name": "Recruiter",
        "id": "recruiter",
        "memo": [
          "Recruiter: During the Night, you may PM the host the name of another player. This player will be recruited to your own alignment."
        ]
      },
      "redgoocrackingidea": {
        "name": "Red Goo (Cracking Idea)",
        "id": "redgoocrackingidea",
        "alignment": "goo",
        "memo": [
          "Red Goo: Once a game, you may PM the host the name of another player at night. This player will unstoppably die. It is announced that a Red Goo performed this kill."
        ]
      },
      "redirector": {
        "name": "Redirector",
        "id": "redirector",
        "memo": [
          "Redirector: During the Night, you may PM the host the names of two other players. The former player will target the latter player instead."
        ]
      },
      "reviver": {
        "name": "Reviver",
        "id": "reviver",
        "memo": [
          "Reviver: During the Night, you may PM the host the name of a dead player. This player will be added back to the game."
        ]
      },
      "roleblocker": {
        "name": "Roleblocker",
        "id": "roleblocker",
        "memo": [
          "Roleblocker: During the Night, you may PM the host the name of another player. This player won't be able to use an action this Night."
        ]
      },
      "role vanillaiser": {
        "name": "Role Vanillaiser",
        "id": "rolevanillaiser",
        "memo": [
          "Role Vanillaiser: During the Night, you may PM the host the name of a role. If this role is in this setup, you will vanillaise any player with this role."
        ]
      },
      "rolestopper": {
        "name": "Rolestopper",
        "id": "rolestopper",
        "memo": [
          "Rolestopper: Each night you can PM the host the name of another player. All other actions on this player will fail, excluding kills."
        ],
        "image": "mafia-doctor.png"
      },
      "saulus": {
        "name": "Saulus",
        "id": "saulus",
        "alignment": "solo",
        "memo": [
          "Saulus: You start off aligned with the MAFIA, but when you get lynched for the first time you don't die. Instead, you become aligned with the TOWN."
        ]
      },
      "schemer": {
        "name": "Schemer",
        "id": "schemer",
        "memo": [
          "Schemer: During the Night, you may PM the host the name of another player. You will get to know what kind of action this player used, and may redirect it."
        ]
      },
      "screamer": {
        "name": "Screamer",
        "id": "screamer",
        "memo": [
          "Screamer: During the Night, you may PM the host to scream. This will prevent anyone in the game from getting a result."
        ]
      },
      "seer": {
        "name": "Seer",
        "id": "seer",
        "memo": [
          "Seer: During the Night, you may PM the host the name of another player. You will be told if they are WEREWOLF or NOT WEREWOLF, or receive NO RESULT if your investigation failed."
        ],
        "image": "fx/mafia-cop.png"
      },
      "seraph knight": {
        "name": "Seraph Knight",
        "id": "seraphknight",
        "memo": [
          "Seraph Knight: Once a game, you may PM the host the name of another player at night. This player will not be able to be killed at night until you die."
        ],
        "image": "mafia-doctor.png"
      },
      "serial killer": {
        "name": "Serial Killer",
        "id": "serialkiller",
        "alignment": "solo",
        "memo": [
          "Serial Killer: You are aligned with yourself and win when you are the last player standing. During the Night, you may PM the host the name of another player. This player will die."
        ]
      },
      "shadow": {
        "name": "Shadow",
        "id": "shadow",
        "alignment": "solo",
        "memo": [
          "Shadow: You are aligned with yourself. Once a game at Night, you may PM the host the name of another player. You will copy any abilities this player has. Additionally, you may kill someone once each night."
        ]
      },
      "silencer": {
        "name": "Silencer",
        "id": "silencer",
        "memo": [
          "Silencer: During the Night, you may PM the host the name of another player. This player will not be able to talk during the next day. Ask the host whether this player will be able to lynch or not."
        ]
      },
      "silencergreateridea": {
        "name": "Silencer (Greater Idea)",
        "id": "silencergreateridea",
        "memo": [
          "Silencer: During the Night, you may PM the host the name of another player. This player will not be able to lynch during the next day."
        ]
      },
      "solar god": {
        "name": "Solar God",
        "id": "solargod",
        "memo": [
          "Solar God: During the Day, you may PM the host to end the Day. The Day will immediately end."
        ]
      },
      "stalker": {
        "name": "Stalker",
        "id": "stalker",
        "memo": [
          "Stalker: During the Night, you may PM the host the name of another player. You will get to know who this player targeted, and their target will be roleblocked."
        ]
      },
      "substitute": {
        "name": "Substitute",
        "id": "substitute",
        "memo": [
          "Substitute: Once a game, during the Night, you may PM the host the name of another player. If you die before this player, this player will die instead of you."
        ]
      },
      "subway recruiter": {
        "name": "Subway Recruiter",
        "id": "subwayrecruiter",
        "memo": [
          "Subway Recruiter: During the Night, you may PM the host to add a player. If there's a player on the sublist, they will be added to the game, as your alignment."
        ]
      },
      "suicide bomber": {
        "name": "Suicide Bomber",
        "id": "suicidebomber",
        "memo": [
          "Suicide Bomber: During the Night, you may PM the host the name of another player. This player will be killed, but you will die as well."
        ]
      },
      "super": {
        "name": "Super",
        "id": "super",
        "memo": [
          "Super: Once a game, during the Night, you may PM the host to activate. If you would die that night, or the following day, you survive and may kill someone instead."
        ]
      },
      "survivor": {
        "name": "Survivor",
        "id": "survivor",
        "alignment": "solo",
        "memo": [
          "Survivor: You are aligned with yourself. You win when you are alive when the game ends."
        ]
      },
      "sympathiser": {
        "name": "Sympathiser",
        "id": "sympathiser",
        "memo": [
          "Sympathiser: You are aligned with a specified alignment when there are other players of this alignment in the game. Otherwise, you are TOWN."
        ]
      },
      "tallier": {
        "name": "Tallier",
        "id": "tallier",
        "memo": [
          "Tallier: During the Night, you may PM the host to get to know how many people on yesterday's lynch were not aligned with the Town."
        ]
      },
      "teacher": {
        "name": "Teacher",
        "id": "teacher",
        "memo": [
          "Teacher: During the Night, you may PM the host the name of another player. This player will receive a One-Shot Cop to use, that gets TOWN / NOT TOWN results."
        ]
      },
      "tourist": {
        "name": "Tourist",
        "id": "tourist",
        "memo": [
          "Tourist: During the Night, you have to PM the host the name of another player. You'll target this player, without any additional affect."
        ]
      },
      "tracker": {
        "name": "Tracker",
        "id": "tracker",
        "memo": [
          "Tracker: During the Night, you may PM the host the name of another player. You will be told who, if anyone, this player targeted."
        ],
        "image": "fx/mafia-cop.png"
      },
      "trainwreck": {
        "name": "Trainwreck",
        "id": "trainwreck",
        "memo": [
          "Trainwreck: During the Night, you may PM the host the name of another player. Everyone who is lynching this person at the end of the day dies."
        ]
      },
      "traitor": {
        "name": "Traitor",
        "id": "traitor",
        "alignment": "solo",
        "memo": [
          "Traitor: You are aligned with the MAFIA, but are not able to perform the factional kill, and do not know the other members of the Mafia."
        ]
      },
      "unblocker": {
        "name": "Unblocker",
        "id": "unblocker",
        "memo": [
          "Unblocker: During the Night, you may PM the host the name of another player. Their action will not fail."
        ]
      },
      "underdog": {
        "name": "Underdog",
        "id": "underdog",
        "alignment": "solo",
        "memo": [
          "Underdog: You are aligned with yourself. You start out as a Survivor, but turn into the alignment of the first player to die during a day when they die."
        ]
      },
      "universal sympathiser": {
        "name": "Universal Sympathiser",
        "id": "univeralsympathiser",
        "alignment": "solo",
        "memo": [
          "Universal Sympathiser: You win if the Town does not win."
        ]
      },
      "universal usurper": {
        "name": "Universal Usurper",
        "id": "universalusurper",
        "alignment": "solo",
        "memo": [
          "Universal Usurper: You win if you are alive and the Town does not win. No one else will win."
        ]
      },
      "unjester": {
        "name": "Unjester",
        "id": "unjester",
        "alignment": "solo",
        "memo": [
          "Unjester: You are aligned with yourself. You win when you are killed."
        ]
      },
      "unlyncher": {
        "name": "Unlyncher",
        "id": "unlyncher",
        "alignment": "solo",
        "memo": [
          "Unlyncher: You are aligned with yourself. To win, you must make sure a specific player is never lynched during the game."
        ]
      },
      "vanillaiser": {
        "name": "Vanillaiser",
        "id": "vanillaiser",
        "memo": [
          "Vanillaiser: During the Night, you may PM the host the name of another player. Starting the next day, this player will lose any role they have, turning into a Vanilla role."
        ]
      },
      "vanguard": {
        "name": "Vanguard",
        "id": "vanguard",
        "memo": [
          "Vanguard: During the Night, you may PM the host the name of another player. If this player used an action, they can't be killed that night."
        ]
      },
      "vigilante": {
        "name": "Vigilante",
        "id": "vigilante",
        "memo": [
          "Vigilante: During the Night, you may PM the host the name of another player. This player will be killed."
        ]
      },
      "voyeur": {
        "name": "Voyeur",
        "id": "voyeur",
        "memo": [
          "Voyeur: During the Night, you may PM the host the name of another player. You will be told what actions, if any, targeted this player."
        ],
        "image": "fx/mafia-cop.png"
      },
      "watcher": {
        "name": "Watcher",
        "id": "watcher",
        "memo": [
          "Watcher: During the Night, you may PM the host the name of another player. You will be told who, if anyone, targeted this player."
        ],
        "image": "fx/mafia-cop.png"
      },
      "wild card": {
        "name": "Wild Card",
        "id": "wildcard",
        "memo": [
          "Wild Card: During the Night, you may PM the host the name of another player. All actions used on the Wild Card, except kills, are redirected to the target."
        ]
      },
      "wildcardgreateridea": {
        "name": "Wild Card (Greater Idea)",
        "id": "wildcardgreateridea",
        "alignment": "solo",
        "memo": [
          "Wild Card: You get a different randomised role."
        ]
      },
      "yogi bear": {
        "name": "Yogi Bear",
        "id": "yogibear",
        "memo": [
          "Yogi Bear: During the Night, you may PM the host the name of another player. You will be told whether they are TREESTUMP or NOT TREESTUMP, or NO RESULT if your investigation failed."
        ]
      },
      "active": {
        "name": "Active",
        "id": "active",
        "memo": [
          "Active: You can choose when to activate your role."
        ]
      },
      "alpha": {
        "name": "Alpha",
        "id": "alpha",
        "memo": [
          "Alpha: You will be inspected as NOT WEREWOLF."
        ]
      },
      "ascetic": {
        "name": "Ascetic",
        "id": "ascetic",
        "memo": [
          "Ascetic: Actions on you will fail, excluding kills."
        ]
      },
      "backup": {
        "name": "Backup",
        "id": "backup",
        "memo": [
          "Backup: If the role specified in your role PM dies, you become that role instead."
        ]
      },
      "blue goo": {
        "name": "Blue Goo",
        "id": "bluegoo",
        "memo": [
          "Blue Goo: If you die or are lynched, the player who kills you or casts the lynching vote becomes blue goo themselves."
        ]
      },
      "bomb": {
        "name": "Bomb",
        "id": "bomb",
        "memo": [
          "Bomb: If you are killed, your killer will die too."
        ]
      },
      "brown goo": {
        "name": "Brown Goo",
        "id": "browngoo",
        "memo": [
          "Brown Goo: You will steal the vote of anyone who targets you for the next game day."
        ]
      },
      "bulletproof": {
        "name": "Bulletproof",
        "id": "bulletproof",
        "memo": [
          "Bulletproof: You cannot be nightkilled."
        ]
      },
      "card dealer": {
        "name": "Card Dealer",
        "id": "carddealer",
        "memo": [
          "Anyone who targets you, will have their role replaced by a random other role."
        ]
      },
      "celebrity": {
        "name": "Celebrity",
        "id": "celebrity",
        "memo": [
          "It will be publicly revealed who targeted you each night."
        ]
      },
      "clairvoyant": {
        "name": "Clairvoyant",
        "id": "clairvoyant",
        "memo": [
          "Clairvoyant: You get to know how many different alignments are in the game."
        ]
      },
      "compulsive": {
        "name": "Compulsive",
        "id": "compulsive",
        "memo": [
          "Compulsive: You must your use action each night."
        ]
      },
      "compulsive child killer": {
        "name": "Compulsive Child Killer",
        "id": "compulsivechildkiller",
        "memo": [
          "Compulsive Child Killer: Whenever an Innocent Child (or a variation of one) reveals itself, you will immediately kill them."
        ]
      },
      "consistent": {
        "name": "Consistent",
        "id": "consistent",
        "memo": [
          "Consistent: Once you targeted someone, you may not target anyone else."
        ]
      },
      "contrary": {
        "name": "Contrary",
        "id": "contrary",
        "memo": [
          "Contrary: Your action only succeeds when it'd fail without this modifier."
        ]
      },
      "curfew agent": {
        "name": "Curfew Agent",
        "id": "curfewagent",
        "memo": [
          "Curfew Agent: While you are alive, no one will die at night."
        ]
      },
      "day": {
        "name": "Day",
        "id": "day",
        "memo": [
          "Day: You have to use your action during the Day."
        ]
      },
      "deactivator": {
        "name": "Deactivator",
        "id": "deactivator",
        "memo": [
          "Deactivator: While you are alive, a specific role can't be used."
        ]
      },
      "death miller": {
        "name": "Death Miller",
        "id": "deathmiller",
        "memo": [
          "Death Miller: You are revealed as a Mafia Goon upon dying."
        ]
      },
      "death": {
        "name": "Death",
        "id": "death",
        "memo": [
          "Death: You can use your action upon dying."
        ]
      },
      "deathproof": {
        "name": "Deathproof",
        "id": "deathproof",
        "memo": [
          "Deathproof: You can't die."
        ]
      },
      "detector": {
        "name": "Detector",
        "id": "detector",
        "memo": [
          "Detector: You will be informed of anyone who targeted you."
        ]
      },
      "delayed": {
        "name": "Delayed",
        "id": "delayed",
        "memo": [
          "Delayed: Your action will only go through the following night."
        ]
      },
      "doppelganger": {
        "name": "Doppelganger",
        "id": "doppelganger",
        "memo": [
          "Doppelganger: All investigative actions on you return results for the target on the left of you on the userlist."
        ]
      },
      "enabler": {
        "name": "Enabler",
        "id": "enabler",
        "memo": [
          "Enabler: When you die, a certain role can't be used anymore."
        ]
      },
      "evangelistic": {
        "name": "Evangelistic",
        "id": "evangelistic",
        "memo": [
          "Evangelistic: You will be inspected as CULT."
        ]
      },
      "excellent sense of smell": {
        "name": "Excellent Sense of Smell",
        "id": "ecxellentsenseofsmell",
        "memo": [
          "Excellent Sense of Smell: You know how many Goo-aligned players there are in the game."
        ]
      },
      "false": {
        "name": "False",
        "id": "false",
        "memo": [
          "False: You are not aware that this part of your role doesn't work."
        ]
      },
      "friend": {
        "name": "Friend",
        "id": "friend",
        "memo": [
          "Friend: Besides your normal win-condition, you can win when only Friends are left alive. You can talk to other Friends."
        ]
      },
      "gambit": {
        "name": "Gambit",
        "id": "gambit",
        "memo": [
          "Gambit: Your action only works if you die that same night."
        ]
      },
      "godfather": {
        "name": "Godfather",
        "id": "godfather",
        "memo": [
          "Godfather: You will be inspected as NOT MAFIA."
        ]
      },
      "gold goo": {
        "name": "Gold Goo",
        "id": "goldgoo",
        "memo": [
          "Whenever someone targets you with a non-factional action, they lose the ability to use that action and you gain it."
        ]
      },
      "gravedigger": {
        "name": "Gravedigger",
        "id": "gravedigger",
        "memo": [
          "Gravedigger: You will return as if you targeted the player who died to Watchers and Trackers."
        ]
      },
      "green goo": {
        "name": "Green Goo",
        "id": "greengoo",
        "memo": [
          "Whenever a player targets you with an action, they will become green goo and lose any powers they currently have. Their faction doesn't change."
        ]
      },
      "grim reaper": {
        "name": "Grim Reaper",
        "id": "grimreaper",
        "memo": [
          "Grim Reaper: While you are alive, all dead players are Restless Spirits."
        ]
      },
      "hallucinator": {
        "name": "Hallucinator",
        "id": "hallucinator",
        "memo": [
          "Hallucinator: While you are alive, all dead players reveal a random role in the setup, instead of their own role."
        ]
      },
      "haunting": {
        "name": "Haunting",
        "id": "haunting",
        "memo": [
          "Haunting: You can only use your actions after you've died."
        ]
      },
      "hero": {
        "name": "Hero",
        "id": "hero",
        "memo": [
          "Hero: When a King (from Kingmaker) tries to execute you, they die instead."
        ]
      },
      "hirsute": {
        "name": "Hirsute",
        "id": "hirsute",
        "memo": [
          "Hirsute: You will be inspected as WEREWOLF."
        ]
      },
      "hidden": {
        "name": "Hidden",
        "id": "hidden",
        "memo": [
          "Hidden: You are not aware of this part of your role."
        ]
      },
      "hopefuly": {
        "name": "Hopeful",
        "id": "hopeful",
        "memo": [
          "Hopeful: You always receive VIGILANTE upon inspection."
        ]
      },
      "illusionist": {
        "name": "Illusionist",
        "id": "illusionist",
        "memo": [
          "Illusionist: You become a Restless Spirit after death."
        ]
      },
      "immobile parrot": {
        "name": "Immobile Parrot",
        "id": "immobileparrot",
        "memo": [
          "Immobile Parrot: Anyone who targets you, targets themselves instead."
        ]
      },
      "inconsistent": {
        "name": "Inconsistent",
        "id": "inconsistent",
        "memo": [
          "Inconsistent: You may not target any player multiple times."
        ]
      },
      "inheritor": {
        "name": "Inheritor",
        "id": "inheritor",
        "memo": [
          "Inheritor: You inherit the abilities of the most recently killed player."
        ]
      },
      "insane": {
        "name": "Insane",
        "id": "insane",
        "memo": [
          "Insane: You receive the opposite results from expected upon inspection."
        ]
      },
      "insomniac": {
        "name": "Insomniac",
        "id": "insomniac",
        "memo": [
          "Insomniac: You may talk at night."
        ]
      },
      "lightkeeper": {
        "name": "Lightkeeper",
        "id": "lightkeeper",
        "memo": [
          "Lightkeeper: When you die, the next day is anonymous (and all messages go through the host)."
        ]
      },
      "lightning rod": {
        "name": "Lightning Rod",
        "id": "lightningrod",
        "memo": [
          "Lightning Rod: All actions target you."
        ]
      },
      "lover": {
        "name": "Lover",
        "id": "lover",
        "memo": [
          "Lover: You get a Lover partner, who you can talk with. If either of you dies, the other dies as well."
        ]
      },
      "loyal": {
        "name": "Loyal",
        "id": "loyal",
        "memo": [
          "Loyal: Your actions only work on players with the same alignment as you."
        ]
      },
      "lynchbait": {
        "name": "Lynchbait",
        "id": "lynchbait",
        "memo": [
          "Lynchbait: All Lynchers win when you get lynched."
        ]
      },
      "macho": {
        "name": "Macho",
        "id": "macho",
        "memo": [
          "Macho: You cannot be protected from being killed."
        ]
      },
      "mason": {
        "name": "Mason",
        "id": "mason",
        "memo": [
          "Mason: You can speak to other Masons, who are confirmed to not be members of the MAFIA."
        ]
      },
      "mayor": {
        "name": "Mayor",
        "id": "mayor",
        "memo": [
          "Mayor: Your lynch counts as two."
        ]
      },
      "miller": {
        "name": "Miller",
        "id": "miller",
        "memo": [
          "Miller: You will always be inspected as MAFIA."
        ]
      },
      "mirror": {
        "name": "Mirror",
        "id": "mirror",
        "memo": [
          "Mirror: When someone targets you, you use the same action on them."
        ]
      },
      "monk": {
        "name": "Monk",
        "id": "monk",
        "memo": [
          "Monk: You can speak to other Monks, who are confirmed to not be WEREWOLVES."
        ]
      },
      "murderous": {
        "name": "Murderous",
        "id": "murderous",
        "memo": [
          "Murderous: You die if you don't kill anyone."
        ]
      },
      "naive": {
        "name": "Naive",
        "id": "naive",
        "memo": [
          "Naive: You always receive a NOT GUILTY result upon inspection, or an equivalent to this."
        ]
      },
      "named": {
        "name": "Named",
        "id": "named",
        "memo": [
          "Named: You got a different role name than usual."
        ]
      },
      "neighbor": {
        "name": "Neighbor",
        "id": "neighbor",
        "memo": [
          "Neighbor: You can talk to other Neighbors."
        ]
      },
      "nexus": {
        "name": "Nexus",
        "id": "nexus",
        "memo": [
          "Nexus: All actions targeting you, excluding kills, will be redirected to a random other player."
        ]
      },
      "night": {
        "name": "Night",
        "id": "night",
        "memo": [
          "Night: You have to use your action during the Night."
        ]
      },
      "ninja": {
        "name": "Ninja",
        "id": "ninja",
        "memo": [
          "Ninja: Trackers, Watchers and similar roles will always get it as if you targeted nobody, or nobody targeted you."
        ]
      },
      "omniscient": {
        "name": "Omniscient",
        "id": "omniscient",
        "memo": [
          "Omniscient: You know all roles that are present in the setup."
        ]
      },
      "orange goo": {
        "name": "Orange Goo",
        "id": "orangegoo",
        "memo": [
          "Orange Goo: You will steal the vote of anyone who targets you for the rest of the game."
        ]
      },
      "pacifist": {
        "name": "Pacifist",
        "id": "pacifist",
        "memo": [
          "Pacifist: You are unable to kill."
        ]
      },
      "paranoid": {
        "name": "Paranoid",
        "id": "paranoid",
        "memo": [
          "Paranoid: You always receive GUILTY upon inspection, or an equivalent to this."
        ]
      },
      "patron": {
        "name": "Patron",
        "id": "patron",
        "memo": [
          "Patron: Once you die, your faction loses."
        ]
      },
      "prism": {
        "name": "Prism",
        "id": "prism",
        "memo": [
          "Prism: Any actions targeting you, target all players."
        ]
      },
      "randomizer": {
        "name": "Randomizer",
        "id": "randomizer",
        "memo": [
          "Randomizer: If multiple people targeted you, they will target a random person who targeted you instead."
        ]
      },
      "paranoid gun owner": {
        "name": "Paranoid Gun Owner",
        "id": "paranoidgunowner",
        "memo": [
          "Paranoid Gun Owner: You kill anyone who targets you."
        ]
      },
      "passive": {
        "name": "Passive",
        "id": "passive",
        "memo": [
          "Passive: You cannot choose when to activate your role."
        ]
      },
      "post restriction": {
        "name": "Post Restriction",
        "id": "postrestriction",
        "memo": [
          "Post Restriction: You have a certain limit on what you post."
        ]
      },
      "psychotrooper": {
        "name": "Psychotrooper",
        "id": "psychotrooper",
        "memo": [
          "Psychotrooper: All investigative results are reversed while you are alive."
        ]
      },
      "public": {
        "name": "Public",
        "id": "public",
        "memo": [
          "Public: Your result is displayed publicly."
        ]
      },
      "purple goo": {
        "name": "Purple Goo",
        "id": "purplegoo",
        "memo": [
          "Purple Goo: Whenever someone targets you with an action, you switch roles with that player."
        ]
      },
      "rainbow goo": {
        "name": "Rainbow Goo",
        "id": "rainbowgoo",
        "memo": [
          "Rainbow Goo: Whenever a player targets you with an action, you do something random (anything any other color goo can do) to them."
        ]
      },
      "random": {
        "name": "Random",
        "id": "random",
        "memo": [
          "Random: Your role is used randomly."
        ]
      },
      "red goo": {
        "name": "Red Goo",
        "id": "redgoo",
        "memo": [
          "Red Goo: Whenever a player targets you with an action, you become neighbors with them."
        ]
      },
      "reflexive": {
        "name": "Reflexive",
        "id": "reflexive",
        "memo": [
          "Reflexive: You use your action on people who target you."
        ]
      },
      "reserved": {
        "name": "Reserved",
        "id": "reserved",
        "memo": [
          "Reserved: This player can PM anyone, and can be PMd back, but may not talk in the main chat (excluding lynches)."
        ]
      },
      "restless spirit": {
        "name": "Restless Spirit",
        "id": "restlessspirit",
        "memo": [
          "Restless Spirit: You can lynch after your death."
        ]
      },
      "retired marine": {
        "name": "Retired Marine",
        "id": "retiredmarine",
        "memo": [
          "Retired Marine: You cannot be killed by Serial Killers."
        ]
      },
      "retired werewolf hunter": {
        "name": "Retired Werewolf Hunter",
        "id": "retiredwerewolfhunter",
        "memo": [
          "Retired Werewolf Hunter: You cannot be killed by Werewolves."
        ]
      },
      "sacrifice": {
        "name": "Sacrifice",
        "id": "sacrifice",
        "memo": [
          "Sacrifice: No one else can die, besides other Sacrifices, until you die."
        ]
      },
      "sane": {
        "name": "Sane",
        "id": "sane",
        "memo": [
          "Sane: You receive the correct results upon inspection."
        ]
      },
      "secret agent": {
        "name": "Secret Agent",
        "id": "secretagent",
        "memo": [
          "Secret Agent: You are informed of which factions are in the game immediately."
        ]
      },
      "self": {
        "name": "Self",
        "id": "self",
        "memo": [
          "Self: You must target yourself."
        ]
      },
      "semilyncher": {
        "name": "Semilyncher",
        "id": "semilyncher",
        "memo": [
          "Semilyncher: If you get a specific player lynched, they turn into your alignment."
        ]
      },
      "senpai": {
        "name": "Senpai",
        "id": "senpai",
        "memo": [
          "Senpai: When you get lynched, everyone who lynched you dies as well."
        ]
      },
      "silver goo": {
        "name": "Silver Goo",
        "id": "silvergoo",
        "memo": [
          "Silver Goo: Whenever another player targets you with an action, you become a perfect copy of that player."
        ]
      },
      "strongman": {
        "name": "Strongman",
        "id": "strongman",
        "memo": [
          "Strongman: Your kill can not fail."
        ]
      },
      "strong-willed": {
        "name": "Strong-Willed",
        "id": "strongwilled",
        "memo": [
          "Strong-Willed: Your actions can not fail, excluding kills."
        ]
      },
      "suicidal": {
        "name": "Suicidal",
        "id": "suicidal",
        "memo": [
          "Suicidal: You will passively die."
        ]
      },
      "supersaint": {
        "name": "Supersaint",
        "id": "supersaint",
        "memo": [
          "Supersaint: When this player is lynched, the player who placed the hammering vote dies as well."
        ]
      },
      "talkative": {
        "name": "Talkative",
        "id": "talkative",
        "memo": [
          "Talkative: If anyone else has an ability that causes them to be able to talk to other players, you may talk with them too."
        ]
      },
      "teal goo": {
        "name": "Teal Goo",
        "id": "tealgoo",
        "memo": [
          "Teal Goo: Anyone who targets you with an action will become a different role."
        ]
      },
      "temporary": {
        "name": "Temporary",
        "id": "temporary",
        "memo": [
          "Temporary: Only affects the target for one night."
        ]
      },
      "tentacled": {
        "name": "Tentacled",
        "id": "tentacled",
        "memo": [
          "Tentacled: You will always be inspected as ALIEN."
        ]
      },
      "toxic goo": {
        "name": "Toxic Goo",
        "id": "toxicgoo",
        "memo": [
          "Toxic Goo: Anyone who targets you with an ability will die of poison at the end of the next day."
        ]
      },
      "tree": {
        "name": "Tree",
        "id": "tree",
        "memo": [
          "Tree: You can talk after your death, provided you died due to a lynch."
        ]
      },
      "treestump": {
        "name": "Treestump",
        "id": "treestump",
        "memo": [
          "Treestump: You can talk after your death."
        ]
      },
      "trypophobic": {
        "name": "Trypophobic",
        "id": "trypophobic",
        "memo": [
          "Trypophobic: You may vanillaise someone upon being lynched."
        ]
      },
      "turquoise goo": {
        "name": "Turquoise Goo",
        "id": "turquoisegoo",
        "memo": [
          "Turquoise Goo: When you die, you can turn another player into Turquoise Goo."
        ]
      },
      "ugly": {
        "name": "Ugly",
        "id": "ugly",
        "memo": [
          "Ugly: You know how many Goo-aligned players there are, and can win with them as long as you survive. You are inspected as ALIEN."
        ]
      },
      "universal backup": {
        "name": "Universal Backup",
        "id": "universalbacup",
        "memo": [
          "Universal Backup: You inherit the role of the first player who died."
        ]
      },
      "unlynchable": {
        "name": "Unlynchable",
        "id": "unlynchable",
        "memo": [
          "Unlynchable: You cannot be lynched. If you're lynched, you will survive and the game will turn to Night."
        ]
      },
      "usurper": {
        "name": "Usurper",
        "id": "usurper",
        "memo": [
          "Usurper: You must outlive a Godfather before you can win."
        ]
      },
      "vengeful": {
        "name": "Vengeful",
        "id": "vengeful",
        "memo": [
          "Vengeful: When this player is lynched, they can kill another player."
        ]
      },
      "watchlisted": {
        "name": "Watchlisted",
        "id": "watchlisted",
        "memo": [
          "Watchlisted: You will always be inspected as SERIAL KILLER."
        ]
      },
      "weak": {
        "name": "Weak",
        "id": "weak",
        "memo": [
          "Weak: You will die if you target a player who is not aligned with the TOWN."
        ]
      },
      "whisperer": {
        "name": "Whisperer",
        "id": "whisperer",
        "memo": [
          "Whisperer: You may PM any player in the game, but they may not PM you back."
        ]
      },
      "white goo": {
        "name": "White Goo",
        "id": "whitegoo",
        "memo": [
          "White Goo: All dead players will turn to White Goo as they die. You show up as town on death."
        ]
      },
      "wrong place at the wrong time": {
        "name": "Wrong Place at the Wrong Time",
        "id": "wrongplaceatthewrongtime",
        "memo": [
          "Wrong Place at the Wrong Time: You will always be inspected as the result that implies NOT TOWN."
        ]
      },
      "xshot": {
        "name": "X-Shot",
        "id": "xshot",
        "memo": [
          "X-Shot: You may only use this ability X times during the game."
        ]
      },
      "yellow goo": {
        "name": "Yellow Goo",
        "id": "yellowgoo",
        "memo": [
          "Yellow Goo: Whenever someone targets you with an action, they lose the ability to use that action and you gain it. This even affects factional actions. That member of the faction can no longer perform that action. Other members of the faction can still perform it."
        ]
      }
    },
    "alignments": {
      "town": {
        "name": "Town",
        "plural": "Town",
        "id": "town",
        "color": "#060",
        "buttonColor": "#0A0",
        "memo": [
          "You are aligned with the <span style=\"color:#060;font-weight:bold\">Town</span>. You win when all threats to the Town are eliminated and at least one Town-aligned player is still alive, or nothing can prevent the same."
        ],
        "image": "fx/mafia-villager.png"
      },
      "mafia": {
        "name": "Mafia",
        "plural": "Mafia",
        "id": "mafia",
        "color": "#F00",
        "memo": [
          "Factional Communication: If there are other Mafia-aligned players, you may PM them during the game.",
          "Factional Kill: The Mafia may kill one player per night.",
          "You are aligned with the <span style=\"color:#F00;font-weight:bold\">Mafia</span>. You win when all players without a Mafia wincon are eliminated and at least one Mafia-aligned player is still alive (or nothing can prevent the same)."
        ],
        "image": "fx/mafia-mafia.png"
      },
      "werewolf": {
        "name": "Werewolf",
        "plural": "Werewolves",
        "id": "werewolf",
        "color": "#FFA500",
        "memo": [
          "Factional Communication: If there are other Werewolf-aligned players, you may PM them during the game.",
          "Factional Kill: The Werewolves may kill one player per Night.",
          "You are aligned with the <span style=\"color:#FFA500;font-weight:bold\">Werewolves</span>. You win when all players without a Werewolf wincon are eliminated and at least one Werewolf-aligned player is still alive (or nothing can prevent the same)."
        ],
        "image": "fx/mafia-werewolf.png"
      },
      "alien": {
        "name": "Alien",
        "plural": "Aliens",
        "id": "alien",
        "color": "#F0F",
        "memo": [
          "Factional Communication: If there are other Alien-aligned players, you may PM them during the game.",
          "Factional Kill: The Aliens may kill one player <span style=\"text-decoration:underline\">once during the game</span>.",
          "You are aligned with the <span style=\"color:#F0F;font-weight:bold\">Aliens</span>. You win when all players without a Alien wincon are eliminated and at least one Alien-aligned player is still alive (or nothing can prevent the same)."
        ],
        "image": "fx/mafia-villager.png"
      },
      "cult": {
        "name": "Cult",
        "plural": "Cultists",
        "id": "cult",
        "color": "#000",
        "memo": [
          "Factional Communication: If there are other Cult-aligned players, you may PM them during the game.",
          "Factional Concept: The Cult can recruit other players into the Cult more often than not. Ask the Host for more information about how this works exactly.",
          "You are aligned with the <span style=\"color:#000;font-weight:bold\">Cult</span>. You win when all players without a Cult wincon are eliminated and at least one Cult-aligned player is still alive (or nothing can prevent the same)."
        ],
        "image": "fx/mafia-villager.png"
      },
      "cultafia": {
        "name": "Cultafia",
        "plural": "Cultafia",
        "id": "cultafia",
        "color": "#600",
        "memo": [
          "Factional Communication: If there are other Cultafia-aligned players, you may PM them during the game.",
          "Factional Concept: The Cultafia can recruit and kill players. Ask the Host for more information about how this works exactly.",
          "You are aligned with the <span style=\"color:#600;font-weight:bold\">Cultafia</span>. You win when all players without a Cultafia wincon are eliminated and at least one Cultafia-aligned player is still alive (or nothing can prevent the same)."
        ],
        "image": "fx/mafia-villager.png"
      },
      "goo": {
        "name": "Goo",
        "plural": "Goos",
        "id": "goo",
        "color": "#2FF",
        "memo": [
          "Factional Communication: If there are other Goo-aligned players, you may PM them during the game.",
          "Factional Concept: Goos have interesting Reflexive abilities to aid them more often than not.",
          "You are aligned with the <span style=\"color:#2FF;font-weight:bold\">Goos</span>. You win when all players without a Goo wincon are eliminated and at least one Goo-aligned player is still alive (or nothing can prevent the same)."
        ],
        "image": "fx/mafia-villager.png"
      },
      "replicant": {
        "name": "Replicant",
        "plural": "Replicants",
        "id": "replicant",
        "color": "#DDD",
        "memo": [
          "Factional Communication: If there are other Replicant-aligned players, you may PM them during the game.",
          "Factional Kill: The Replicants may kill one player per night.",
          "You are aligned with the <span style=\"color:#DDD;font-weight:bold\">Replicants</span>. You win when all players without a Replicant wincon are eliminated and at least one Replicant-aligned player is still alive (or nothing can prevent the same)."
        ],
        "image": "fx/mafia-villager.png"
      },
      "mime": {
        "name": "Mime",
        "plural": "Mimes",
        "id": "mime",
        "color": "#590eb5",
        "memo": [
          "Factional Communication: If there are other Mime-aligned players, you may PM them during the game.",
          "Factional Roleblock: The Mimes may roleblock one player per night.",
          "You are aligned with the <span style=\"color:#A6B;font-weight:bold\">Mimes</span>. You win when all players with a Mime wincon have been lynched."
        ],
        "image": "fx/mafia-villager.png"
      },
      "arsonist": {
        "name": "Arsonist",
        "plural": "Arsonists",
        "id": "arsonist",
        "color": "#E82",
        "memo": [
          "Factional Communication: If there are other Arsonist-aligned players, you may PM them during the game.",
          "Factional Actions: The Arsonists may together use one factional action a night.",
          "Factional Prime: The Arsonists prime someone by dousing them with gasoline.",
          "Factional Ignite: The Arsonists light all previously primed players on fire, killing them.",
          "You are aligned with the <span style=\"color:#E82;font-weight:bold\">Arsonists</span>. You win when all players without an Arsonist wincon are eliminated and at least one Arsonist-aligned player is still alive (or nothing can prevent the same)."
        ],
        "image": "fx/mafia-villager.png"
      },
      "pygmee": {
        "name": "Pygmee",
        "plural": "Pygmees",
        "id": "pygmee",
        "color": "#640",
        "memo": [
          "Factional Knowledge: If there are other Pygmee-aligned players, you know who they are.",
          "Factional Kill: The Pygmees may attempt to kill someone at any moment.",
          "You are aligned with the <span style=\"color:#640;font-weight:bold\">Pygmees</span>. You win when all players without a Pygmee wincon are eliminated and at least one Pygmee-aligned player is still alive (or nothing can prevent the same)."
        ],
        "image": "fx/mafia-villager.png"
      },
      "hypnotist": {
        "name": "Hypnotist",
        "plural": "Hypnotists",
        "id": "hypnotist",
        "color": "#A26",
        "memo": [
          "Factional Communication: If there are other Hypnotist-aligned players, you may PM them during the game.",
          "Factional Hypnotise: The Hypnotists can hypnotise another player every night. For the next day only, this player gains an additional win-condition of lynching another player specified by the Hypnotists.",
          "You are aligned with the <span style=\"color:#A26;font-weight:bold\">Hypnotists</span>. You win when all players without a Hypnotist wincon are eliminated and at least one Hypnotist-aligned player is still alive (or nothing can prevent the same)."
        ],
        "image": "fx/mafia-villager.png"
      },
      "solo": {
        "name": "Solo",
        "plural": "Solos",
        "id": "solo",
        "image": "fx/mafia-goon.png",
        "memo": []
      }
    },
    "themes": {
      "1999": {
        "8": "Mafia Goon, Mafia Goon, President, DC Cop, Ambassador, Citizen, Citizen, Citizen",
        "9": "Mafia Goon, Mafia Goon, Werewolf Assassin, DC Cop, Ambassador, Citizen, Citizen, Citizen",
        "10": "Mafia Goon, Mafia Goon, Werewolf Assassin, DC Cop, Ambassador, Citizen, Citizen, Citizen, Citizen",
        "12": "Mafia Goon, Mafia Goon, Mafia Infiltrator, Werewolf Assassin, DC Cop, Ambassador, Pope, Citizen, Citizen, Citizen, Citizen",
        "15": "Mafia Goon, Mafia Goon, Mafia Infiltrator, Werewolf Assassin, Werewolf, President, Navy Seal, DC Cop, Pope, Ambassador, Citizen, Citizen, Citizen, Citizen, Citizen",
        "name": "1999",
        "desc": "1999: Get the Town in the safe room, before the bomb explodes!"
      },
      "ace": {
        "5": "Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Compulsive Vigilante, Compulsive Vigilante, Compulsive Vigilante",
        "name": "Ace",
        "desc": "Ace: Coordinate your shots to not lose the game! Reroll if nobody is Mafia."
      },
       "assassininthecourt": {
        "4": "Assassin, Guard, Guard, King",
        "5": "Assassin, Guard, Guard, Guard, King",
        "6": "Assassin, Guard, Guard, Guard, Guard, King",
        "7": "Assassin, Guard, Guard, Guard, Guard, Guard, King",
        "name":  "Assassin in the Court",
        "desc": "The Assassin tries to shoot the King to win! The Guards try to protect the King."
      },
      "toomuchscum": {
        "8": "Mafia Goon, Mafia Goon, Serial Killer, FBI Agent, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "12": "Mafia Goon, Mafia Goon, Mafia Goon, Werewolf, Werewolf, Lyncher, Cop, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "name":  "Too Much Scum",
        "desc":  "Too Much Scum: Find the many scum, reminiscent of the Jungle Republic setup."
      },
      "brothel": {
        "9": "Mafia Goon, Mafia Goon, Pretty Lady, Pretty Lady, Pretty Lady, Pretty Lady, Pretty Lady, Pretty Lady, Girl",
        "name": "Brothel Mafia",
        "desc": "Brothel Mafia: 6 Pretty Ladies that don't know their specific role. Some may do unexpected things like in MedMaf."
      },
      "bullethell": {
        "5": "Mason, Mason, Serial Killer, Serial Killer, Serial Killer",
        "name": "Bullet Hell",
        "desc": "Bullet Hell: Try to avoid all the shots at Night to win!"
      },
      "classic": {
        "5": "Mafia Goon, Cop, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "6": "Mafia Goon, Mafia Goon, Cop, Jailkeeper, Vanilla Townie, Vanilla Townie",
        "7": "Mafia Goon, Mafia Goon, Macho Cop, Doctor, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "8": "Mafia Goon, Mafia Pretty Lady, Cop, Doctor, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "9": "Mafia Goon, Mafia Pretty Lady, Cop, Doctor, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "10": "Mafia Goon, Mafia Pretty Lady, Bulletproof Werewolf, Cop, Doctor, Pretty Lady, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "11": "Mafia Goon, Mafia Pretty Lady, Bulletproof Werewolf, Cop, Doctor, Pretty Lady, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "12": "Mafia Goon, Mafia Pretty Lady, Bulletproof Werewolf, Cop, Doctor, Pretty Lady, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "13": "Mafia Goon, Mafia Pretty Lady, Bulletproof Werewolf, Cop, Doctor, Pretty Lady, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "14": "Mafia Goon, Mafia Goon, Mafia Pretty Lady, Bulletproof Werewolf JOAT, Cop, Doctor, Pretty Lady, Jailkeeper, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "15": "Mafia Goon, Mafia Role Cop, Mafia Pretty Lady, Bulletproof Werewolf JOAT, Cop, Doctor, Doctor, Pretty Lady, Jailkeeper, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "16": "Mafia Goon, Mafia Role Cop, Mafia Pretty Lady, Bulletproof Werewolf JOAT, Cop, Doctor, Doctor, Pretty Lady, Jailkeeper, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "17": "Mafia Goon, Mafia Role Cop, Mafia Pretty Lady, Bulletproof Werewolf JOAT, Cop, Doctor, Doctor, Pretty Lady, Jailkeeper, One-Shot Vigilante, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "18": "Mafia Goon, Mafia Role Cop, Mafia Pretty Lady, Bulletproof Werewolf JOAT, Cop, Doctor, Doctor, Pretty Lady, Jailkeeper, One-Shot Vigilante, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "19": "Mafia Goon, Mafia Goon, Mafia Role Cop, Mafia Pretty Lady, Bulletproof Werewolf JOAT, Cop, Doctor, Doctor, Pretty Lady, Jailkeeper, One-Shot Vigilante, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "20": "Mafia Goon, Mafia Goon, Mafia Role Cop, Mafia Pretty Lady, Bulletproof Werewolf JOAT, Cop, Doctor, Doctor, Pretty Lady, Jailkeeper, One-Shot Vigilante, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "name": "Classic",
        "desc": "Classic: A PS! Mafia Classic. It's common, strategic, and fun!"
      },
      "conformities": {
        "3": "Mafia Goon, Alien, Pygmee",
        "name": "Conformities",
        "desc": "Conformities: Don't get too attached to your role, because it is bound to change."
      },
      "creepygirl": {
        "5": "Solo Creepy Girl, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "name": "Creepy Girl",
        "desc": "Creepy Girl: Night 0 the Creepy Girl gives someone a doll. Each night, it has to be passed. If the person with the Doll is lynched, or a person gets the Doll for a second time, the Creepy Girl wins."
      },
      "desperado": {
        "4": "Mafia Goon, Desperado, Vanilla Townie, Vanilla Townie",
        "6": "Mafia Goon, Mafia Goon, Desperado, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "8": "Mafia Goon, Mafia Goon, Desperado, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "10": "Mafia Goon, Mafia Goon, Desperado, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "12": "Mafia Goon, Mafia Goon, Mafia Little Liar, Innocent Child, Desperado, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "name": "Desperado",
        "desc": "Desperado: Vanilla spiced up with a Desperado, who can attempt to shoot someone at Day!"
      },
      "dethy": {
        "5": "Mafia Goon, Cop, Cop, Cop, Cop",
        "11": "Mafia Goon, Mafia Goon, Mafia Goon, Cop, Cop, Cop, Cop, Cop, Cop, Cop, Cop",
        "name": "Dethy",
        "desc": "Dethy: Four Cops against one Mafia Goon. They just won't always get the correct results..."
      },
      "donnerparty": {
        "12": "Cannibal Mafia Goon, Cannibal Mafia Goon, Cannibal Serial Killer, Cannibal Vigilante, Dietist, Roleblocker, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "name": "Donner Party",
        "desc": "Donner Party: Many kills happen... but they won't just flip that easily!"
      },
      "doubleday": {
        "16": "Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "name": "Double Day",
        "desc": "Double Day: Like Vanilla, but with two Days prior to each Night. Double the chances to lynch scum!"
      },
      "dayvig3": {
        "3": "Mafia One-Shot Day-Vigilante, One-Shot Day-Vigilante, Vanilla Townie",
        "name": "Day-Vig3",
        "desc": "Day-Vig3: Shoot the other Day-Vig, before they shoot you!"
      },
      "drookezismafiamafia": {
        "5": "Drookez, Traitor Lover, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "name":  "Drookez is Mafia Mafia",
        "desc": "Drookez is Mafia Mafia: Drookez is Mafia, but try to find his Lover! Drookez must survive with his Lover to win."
      },
      "eternalsun": {
        "5": "Mafia Compulsive Janitor, One-Shot Gunsmith, Vanilla Townie, Vanilla Townie, Vanilla Townie,",
        "6": "Mafia Compulsive Janitor, Mafia Goon, One-Shot Gunsmith, One-Shot Reviver, Vanilla Townie, Vanilla Townie,",
        "7": "Mafia Compulsive Janitor, Mafia Coroner, Coroner, One-Shot Gunsmith, Vanilla Townie, Vanilla Townie, Vanilla Townie,",
        "8": "Mafia Compulsive Janitor, Mafia Coroner, Coroner, One-Shot Gunsmith, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie,",
        "9": "Mafia Compulsive Janitor, Mafia Coroner, Coroner, One-Shot Gunsmith, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie,",
        "10": "Mafia Compulsive Janitor, Mafia Coroner, Mafia Goon, Coroner, One-Shot Gunsmith, One-Shot Reviver, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie,",
        "11": "Mafia Compulsive Janitor, Mafia Coroner, Mafia Goon, Coroner, Gunsmith, One-Shot Reviver, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie,",
        "12": "Mafia Compulsive Janitor, Mafia Coroner, Mafia Goon, Coroner, Gunsmith, One-Shot Reviver, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie,",
        "13": "Mafia Compulsive Janitor, Mafia Coroner, Mafia Goons, Mafia Goons, Coroners, Coroners, Gunsmith, One-Shot Reviver, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie,",
        "14": "Mafia Compulsive Janitor, Mafia Coroner, Mafia Goons, Mafia Goons, Coroners, Coroners, Gunsmith, One-Shot Reviver, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie,",
        "15": "Mafia Compulsive Janitor, Mafia Coroners, Mafia Coroners, Mafia Goon, Coroners, Coroners, Gunsmith, One-Shot Reviver, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie,",
        "16": "Mafia Compulsive Janitor, Mafia Coroners, Mafia Coroners, Mafia Goon, Coroners, Coroners, Gunsmith, One-Shot Reviver, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie,",
        "17": "Mafia Compulsive Janitor, Mafia Coroners, Mafia Coroners, Mafia Goons, Mafia Goons, Coroners, Coroners, Coroners, Gunsmith, One-Shot Reviver, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie,",
        "18": "Mafia Compulsive Janitor, Mafia Coroners, Mafia Coroners, Mafia Goons, Mafia Goons, Coroners, Coroners, Coroners, Gunsmith, One-Shot Reviver, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie,",
        "19": "Mafia Compulsive Janitor, Mafia Coroners, Mafia Coroners, Mafia Goons, Mafia Goons, Coroners, Coroners, Coroners, Gunsmith, One-Shot Reviver, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie,",
        "20": "Mafia Compulsive Janitor, Mafia Coroners, Mafia Coroners, Mafia Goons, Mafia Goons, Coroners, Coroners, Coroners, Gunsmith, One-Shot Reviver, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie,",
        "name": "Eternal Sun",
        "desc": "Eternal Sun: A theme without nights! Everyone can use their action once a day."
      },
      "eyes": {
        "7": "Mafia Roleblocker, Mafia Goon, Watcher, Tracker, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "name": "Eyes",
        "desc": "Eyes: Avoid the Tracker and Watcher to last till the end!"
      },
      "friendsandenemiesandenemies": {
        "12": "Mafia Goon, Mafia Goon, Werewolf, Werewolf, Mason, Mason, Mason, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "name": "Friends and Enemies and Enemies",
        "desc": "Two opposing scum factions and a group of Masons fight for dominance!"
      },
      "forestfire": {
        "9": "Arsonist, Arsonist, Tree, Tree, Tree, Tree, Tree, Tree, Firefighter",
        "name": "Forest Fire",
        "desc": "Forest Fire: The forest risks being burned down! Stop the Arsonists before its too late."
      },
      "fireandice": {
        "13": "Fire Mafia, Fire Mafia, Ice Goo, Ice Goo, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Doctor",
        "name": "Fire and Ice",
        "desc": "Fire and Ice: Two opposing Mafia factions battle for dominance. Their kills are flavored and neutralise each other! Goo is used for flavor, but they have Mafia powers."
      },
      "frenzy": {
        "4": "Mafia Goon, Unblocker, Unblocker, Vigilante",
        "5": "Mafia Goon, Unblocker, Unblocker, Unblocker, Vigilante",
        "6": "Mafia Goon, Unblocker, Unblocker, Unblocker, Unblocker, Vigilante",
        "7": "Mafia Goon, Mafia Goon, Unblocker, Unblocker, Unblocker, Vigilante, Vigilante",
        "8": "Mafia Goon, Mafia Goon, Unblocker, Unblocker, Unblocker, Unblocker, Vigilante, Vigilante",
        "9": "Mafia Goon, Mafia Goon, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Vigilante, Vigilante",
        "10": "Mafia Goon, Mafia Goon, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Vigilante, Vigilante",
        "11": "Mafia Goon, Mafia Goon, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Vigilante, Vigilante",
        "12": "Mafia Goon, Mafia Goon, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Vigilante, Vigilante",
        "13": "Mafia Goon, Mafia Goon, Mafia Goon, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Vigilante, Vigilante, Vigilante",
        "14": "Mafia Goon, Mafia Goon, Mafia Goon, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Vigilante, Vigilante, Vigilante",
        "15": "Mafia Goon, Mafia Goon, Mafia Goon, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Vigilante, Vigilante, Vigilante",
        "16": "Mafia Goon, Mafia Goon, Mafia Goon, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Vigilante, Vigilante, Vigilante",
        "17": "Mafia Goon, Mafia Goon, Mafia Goon, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Vigilante, Vigilante, Vigilante",
        "18": "Mafia Goon, Mafia Goon, Mafia Goon, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Vigilante, Vigilante, Vigilante",
        "19": "Mafia Goon, Mafia Goon, Mafia Goon, Mafia Goon, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Vigilante, Vigilante, Vigilante, Vigilante",
        "20": "Mafia Goon, Mafia Goon, Mafia Goon, Mafia Goon, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Unblocker, Vigilante, Vigilante, Vigilante, Vigilante",
        "name": "Frenzy",
        "desc": "Frenzy: An Outside Contact game where who you trust is essential. Which role will you claim to be?"
      },
      "journalist": {
        "8": "Mafia Framer, Mafia Goon, Journalist, Journalist, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "name": "Journalist",
        "desc": "Journalist: Successful inspections require death..."
      },
      "jungleofbullshit": {
        "5": "Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie",
        "name": "Jungle of Bullshit",
        "desc": "Jungle of Bullshit: When a Vanilla Townie is lynched Day 1, they shoot two players instead. When a Mafia Goon is lynched, they kill one of their partners and clear a Vanilla Townie."
      },
      "jungleanarchy": {
        "15": "Mafia Goon, Mafia Goon, Mafia Goon, Werewolf, Werewolf, Vigilante, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "name": "Jungle Anarchy",
        "desc": "Jungle Anarchy: Two scum factions and a town nightkill. What could go wrong?"
      },
      "junglerepublic": {
        "12": "Mafia Goon, Mafia Goon, Mafia Goon, Werewolf, Werewolf, Seer, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "name": "Jungle Republic",
        "desc": "Jungle Republic: There's too many scum, so the Mafia can't kill..."
      },
      "killalltownies": {
        "17": "Mafia Goon, Mafia Godfather, Mafia Doctor, Werewolf, Alpha Werewolf, Werewolf Doctor, Cop, Seer, Vigilante, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "name": "Kill All Townies",
        "desc": "Kill All Townies: The more Town deaths, the more days! For each Town role's death at Night, there's a Day."
      },
      "kidswithguns": {
        "8": "Mafia Suicide Bomber, Mafia Goon, One-Shot Vigilante, Innocent Child, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "name": "Kids With Guns",
        "desc": "Kids With Guns: A theme based around roles that can kill people!"
      },
      "kirby": {
        "5": "Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "9": "Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "11": "Mafia Goon, Mafia Goon, Serial Killer, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "14": "Mafia Goon, Mafia Goon, Mafia Goon, Serial Killer, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "16": "Mafia Goon, Mafia Goon, Mafia Goon, One-Shot Bulletproof Serial Killer, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "name": "Kirby",
        "desc": "Kirby: Decide who you think would use this power-up well, or give a bad one to your scumread. It's all up to you!"
      },
      "lesspressure": {
        "8": "Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Innocent Child, Innocent Child",
        "name": "Less Pressure",
        "desc": "Less Pressure: Lead the town as an Innocent Child by finding the 3 Mafia Goons. Be aware, they get to kill someone upon dying."
      },
      "lifeordeath": {
        "6": "One-Shot Deathproof Mafia Goon, One-Shot Deathproof Traitor Vigilante, One-Shot Deathproof Vigilante, One-Shot Deathproof Reloader, One-Shot Deathproof Reloader, One-Shot Deathproof Reloader",
        "name": "Life or Death",
        "desc": "Life or Death: Everyone is Deathproof! Who will be reloaded, and who won't?"
      },
      "lighthouse": {
        "5": "Mafia Goon, Lightkeeper, Oracle, Oracle, Oracle",
        "6": "Mafia Goon, Mafia Goon, Lightkeeper, Gunsmith, Oracle, Oracle",
        "7": "Mafia Goon, Mafia Goon, Lightkeeper, Gunsmith, Oracle, Oracle, Oracle",
        "8": "Mafia Goon, Mafia Goon, Lightkeeper, Gunsmith, One-Shot Oracle, One-Shot Oracle, One-Shot Oracle, One-Shot Oracle",
        "9": "Mafia Goon, Mafia Goon, Lightkeeper, Gunsmith, One-Shot Oracle, One-Shot Oracle, One-Shot Oracle, One-Shot Oracle, One-Shot Oracle",
        "10": "Mafia Goon, Mafia Goon, Lightkeeper, Lightkeeper, Gunsmith, One-Shot Oracle, One-Shot Oracle, One-Shot Oracle, One-Shot Oracle, One-Shot Oracle",
        "11": "Mafia Goon, Mafia Goon, Mafia Goon, Lightkeeper, Lightkeeper, Gunsmith, One-Shot Oracle, One-Shot Oracle, One-Shot Oracle, One-Shot Oracle, One-Shot Oracle",
        "12": "Mafia Goon, Mafia Goon, Mafia Goon, Lightkeeper, Lightkeeper, Gunsmith, One-Shot Oracle, One-Shot Oracle, One-Shot Oracle, One-Shot Oracle, One-Shot Oracle, One-Shot Oracle",
        "13": "Mafia Goon, Mafia Goon, Mafia Goon, Lightkeeper, Lightkeeper, Gunsmith, One-Shot Oracle, One-Shot Oracle, One-Shot Oracle, One-Shot Oracle, One-Shot Oracle, One-Shot Oracle, One-Shot Oracle",
        "14": "Mafia Goon, Mafia Goon, Mafia Goon, Lightkeeper, Lightkeeper, Gunsmith, One-Shot Oracle, One-Shot Oracle, One-Shot Oracle, One-Shot Oracle, One-Shot Oracle, One-Shot Oracle, One-Shot Oracle, One-Shot Oracle",
        "15": "Mafia Goon, Mafia Goon, Mafia Goon, Mafia Goon, Lightkeeper, Lightkeeper, Gunsmith, Gunsmith, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle",
        "16": "Mafia Goon, Mafia Goon, Mafia Goon, Mafia Goon, Lightkeeper, Lightkeeper, Gunsmith, Gunsmith, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle",
        "17": "Mafia Goon, Mafia Goon, Mafia Goon, Mafia Goon, Lightkeeper, Lightkeeper, Gunsmith, Gunsmith, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle",
        "18": "Mafia Goon, Mafia Goon, Mafia Goon, Mafia Goon, Lightkeeper, Lightkeeper, Gunsmith, Gunsmith, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle",
        "19": "Mafia Goon, Mafia Goon, Mafia Goon, Mafia Goon, Mafia Goon, Lightkeeper, Lightkeeper, Gunsmith, Gunsmith, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle",
        "20": "Mafia Goon, Mafia Goon, Mafia Goon, Mafia Goon, Mafia Goon, Lightkeeper, Lightkeeper, Gunsmith, Gunsmith, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle, Two-Shot Oracle",
        "name": "Lighthouse",
        "desc": "Lighthouse: A theme where the town has a Lightkeeper. When this role dies, the next day is anonymous!"
      },
      "madness": {
        "8": "Mafia Goon, Mafia Bus Driver, Cop, Cop, Doctor, Doctor, Pretty Lady, Pretty Lady, Universal Backup",
        "name": "Madness",
        "desc": "Madness: The Mafia try to survive in a Power Role Mania. The Mafia Goon gains the Town role not distributed, reroll if a Mafia role wasn't given. The Bus Driver may target itself."
      },
      "masonries": {
        "6": "Traitor One-Shot Vigilante, Traitor One-Shot Vigilante, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "9": "Werewolf, Werewolf, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "12": "Werewolf, Werewolf, Werewolf, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "name": "Masonries",
        "desc": "Masonries: You are divided into three chats, of which you can see only two..."
      },
      "maintaininglaworderandshallowrelationships": {
        "10": "Mafia One-Shot Paranoid Gun Owner, Mafia One-Shot Paranoid Gun Owner, Cop, Jailkeeper, Tourist, Tourist, Tourist, Tourist, Tourist, Tourist",
        "name": "Maintaining Law, Order and Shallow Relationships",
        "desc": "Maintaining Law, Order and Shallow Relationships: A theme where the Mafia try to kill the town roles passively by activating their PGO!"
      },
      "medicalmafia": {
        "9": "Mafia Goon, Mafia Goon, Doctor, Doctor, Doctor, Doctor, Doctor, Doctor, Nurse",
        "name": "Medical Mafia",
        "desc": "Medical Mafia: A theme where the Mafia invade a hospital. The Mafia has to beat a group of Doctors... who may not all heal their patients."
      },
      "minesweeper": {
        "17": "Mafia Godfather, Mafia Goon, Mafia Goon, Alpha Werewolf, Werewolf, Werewolf, Bomb (Mafia), Bomb (Mafia), Bomb (Mafia), Bomb (Mafia), Bomb (Werewolf), Bomb (Werewolf), Bomb (Werewolf), Bomb (Werewolf), Cop, Seer, Bloodhound",
        "name": "Minesweeper",
        "desc": "Minesweeper: A lot of scum... and a lot of bombs who explode upon being hit."
      },
      "modifiedexecution": {
        "4": "Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "5": "Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "6": "Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "7": "Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "8": "Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "9": "Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "10": "Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "11": "Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "12": "Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "13": "Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "14": "Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "15": "Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "16": "Mafia Goon, Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "17": "Mafia Goon, Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "18": "Mafia Goon, Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "19": "Mafia Goon, Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "20": "Mafia Goon, Mafia Goon, Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "name": "Modified Execution",
        "desc": "Modified Execution: Lynch someone to give them a kill, but beware of the Mafia corrupt. If they get the kill, they kill themselves!"
      },
      "nearvanilla": {
        "14": "Mafia Goon, Mafia Goon, Mafia Goon, Doctor, Jailkeeper, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "name": "Near-Vanilla",
        "desc": "Near-Vanilla: Vanilla with with a Doctor and a Jailkeeper for some spice."
      },
      "neighborsdilemma": {
        "6": "Odd-Night Serial Killer Neighbor, Even-Night Serial Killer Neighbor, Town Neighbor, Town Neighbor, Town Neighbor, Town Neighbor",
        "name": "Neighbors Dilemma",
        "desc": "Neighbors Dilemma: A theme where you get a Neighbor, who you can privately talk to. However, they may be scum..."
      },
      "nominations": {
        "7": "Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "11": "Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "15": "Mafia Goon, Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "19": "Mafia Goon, Mafia Goon, Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "name": "Nominations",
        "desc": "Nominations: A theme where every even day there's only three possible lynches, as chosen by the Mafia!"
      },
      "nosetup": {
        "4": "Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "5": "Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "6": "Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "7": "Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "8": "Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "9": "Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "10": "Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "11": "Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "12": "Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "13": "Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "14": "Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "15": "Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "16": "Mafia Goon, Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "17": "Mafia Goon, Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "18": "Mafia Goon, Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "19": "Mafia Goon, Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "20": "Mafia Goon, Mafia Goon, Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "name": "No Setup",
        "desc": "No Setup: Despite having a Vanilla role, you may use any action from a wide list of possible actions!"
      },
      "pairings": {
        "8": "Mafia Goon (Pair), Mafia Goon (Pair), Vanilla Townie (Pair), Vanilla Townie (Pair), Vanilla Townie (Pair), Vanilla Townie (Pair), Vanilla Townie (Pair), Vanilla Townie (Pair)",
        "name": "Pairings",
        "desc": "Pairings: A theme where all players are paired up. Pairs have the same role and alignment, which is only revealed when both of them have died!"
      },
      "parismafia": {
        "11": "Mafia Goon, Mafia Goon, Mime, Mime, Watcher, Jailkeeper, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "12": "Mafia Goon, Mafia Goon, Mime, Mime, Watcher, Jailkeeper, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "name": "Paris Mafia",
        "desc": "Paris Mafia: Watch out for the Mimes who try to get lynched!"
      },
      "popcorn": {
        "11": "Mafia Goon, Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "18": "Vengeful Mafia, Vengeful Mafia, Vengeful Mafia, Mafia Goon, Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "name": "Popcorn",
        "desc": "Mafia picks a person to start with the gun. The person with the gun is the person who decides the lynch. If Mafia is chosen, the Mafia dies and the person keeps the gun. If Town is chosen, then the person with the gun dies, and the Town gets the gun instead."
      },
      "purgatory": {
        "9": "Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "15": "Mafia Goon, Mafia Goon, Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "name": "Purgatory",
        "desc": "Purgatory: Send Town to Heaven, Mafia to Hell!"
      },
      "pygmee": {
        "4": "Town Elder, Town Spy, Town Spy, Pygmee Elder",
        "5": "Town Elder, Town Spy, Town Villager, Town Villager, Pygmee Elder",
        "6": "Town Elder, Town Spy, Town Patrol, Town Villager, Pygmee Elder, Pygmee Member",
        "7": "Town Elder, Town Spy, Town Patrol, Town Villager, Town Villager, Pygmee Elder, Pygmee Member",
        "8": "Town Elder, Town Spy, Town Villager, Town Villager, Town Villager, Town Villager, Pygmee Elder, Pygmee Member",
        "9": "Town Elder, Town Spy, Town Patrol, Town Villager, Town Villager, Town Villager, Town Villager, Pygmee Elder, Pygmee Warrior",
        "10": "Town Elder, Town Spy, Town Spy, Town Patrol, Town Scout, Town Villager, Town Villager, Pygmee Elder, Pygmee Member, Pygmee Member",
        "11": "Town Elder, Town Spy, Town Spy, Town Patrol, Town Scout, Town Villager, Town Villager, Town Villager, Pygmee Elder, Pygmee Member, Pygmee Member",
        "12": "Town Elder, Town Spy, Town Spy, Town Patrol, Town Scout, Town Villager, Town Villager, Town Villager, Town Villager, Pygmee Elder, Pygmee Member, Pygmee Warrior",
        "13": "Town Elder, Town Spy, Town Spy, Town Patrol, Town Patrol, Town Scout, Town Villager, Town Villager, Town Villager, Pygmee Elder, Pygmee Member, Pygmee Member, Pygmee Member",
        "14": "Town Elder, Town Spy, Town Spy, Town Patrol, Town Patrol, Town Scout, Town Villager, Town Villager, Town Villager, Town Villager, Pygmee Elder, Pygmee Warrior, Pygmee Member, Pygmee Member",
        "15": "Town Elder, Town Spy, Town Spy, Town Patrol, Town Patrol, Town Scout, Town Villager, Town Villager, Town Villager, Town Villager, Town Villager, Pygmee Elder, Pygmee Warrior, Pygmee Member, Pygmee Member",
        "16": "Town Elder, Town Spy, Town Spy, Town Patrol, Town Patrol, Town Patrol, Town Scout, Town Villager, Town Villager, Town Villager, Town Villager, Town Villager, Pygmee Elder, Pygmee Warrior, Pygmee Member, Pygmee Member",
        "17": "Town Elder, Town Spy, Town Spy, Town Patrol, Town Patrol, Town Patrol, Town Scout, Town Villager, Town Villager, Town Villager, Town Villager, Town Villager, Pygmee Elder, Pygmee Warrior, Pygmee Member, Pygmee Member, Pygmee Member",
        "18": "Town Elder, Town Spy, Town Spy, Town Patrol, Town Patrol, Town Patrol, Town Scout, Town Villager, Town Villager, Town Villager, Town Villager, Town Villager, Town Villager, Pygmee Elder, Pygmee Warrior, Pygmee Member, Pygmee Member, Pygmee Member",
        "19": "Town Elder, Town Spy, Town Spy, Town Patrol, Town Patrol, Town Patrol, Town Scout, Town Villager, Town Villager, Town Villager, Town Villager, Town Villager, Town Villager, Town Villager, Pygmee Elder, Pygmee Warrior, Pygmee Member, Pygmee Member, Pygmee Member",
        "20": "Town Elder, Town Spy, Town Spy, Town Spy, Town Patrol, Town Patrol, Town Patrol, Town Scout, Town Villager, Town Villager, Town Villager, Town Villager, Town Villager, Town Villager, Town Villager, Pygmee Elder, Pygmee Warrior, Pygmee Member, Pygmee Member, Pygmee Member",
        "name": "Pygmee",
        "desc": "Pygmee: An Outside-Contact theme based around switching locations. You'll have to communicate to win, but who is worth your trust?"
      },
      "sacrifice": {
        "4": "Mafia Sacrifice, Mafia Sacrifice, Vanilla Townie, Vanilla Townie",
        "name": "Sacrifice",
        "desc": "Sacrifice: The Vanilla Townies can't die until a Mafia Sacrifice has died. Use this to clear them!"
      },
      "seminightless": {
        "11": "Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "name": "Semi-Nightless",
        "desc": "Semi-Nightless: Mafia can't kill Night 1 and 2!"
      },
      "senpai": {
        "7": "Mafia Goon, Mafia Goon, Senpai, Senpai, Senpai, Senpai, Senpai",
        "name": "Senpai",
        "desc": "Senpai: When a Senpai dies, everyone who lynched them dies as well!"
      },
      "shifting": {
        "4": "Mafia Goon, Doctor, Doctor, Vanilla Townie",
        "name": "Shifting",
        "desc": "Shifting: When someone is successfully protected, they become a Doctor. The Doctor who protected becomes a Mafia Goon, and the Mafia Goon becomes whatever the protected person was. After each night, all users are informed of their current role."
      },
      "spaceinvaders": {
        "5": "Alien, Junior Laser Cannon, Bunker, Bunker, Bunker",
        "6": "Alien, Junior Laser Cannon, Bunker, Bunker, Bunker, Bunker",
        "7": "Alien, Junior Laser Cannon, Bunker, Bunker, Bunker, Bunker, Bunker",
        "8": "Alien, Alien, Junior Laser Cannon, Bunker, Bunker, Bunker, Bunker, Bunker",
        "9": "Alien, Alien, Junior Laser Cannon, Bunker, Bunker, Bunker, Bunker, Bunker, Bunker",
        "10": "Alien, Alien, Junior Laser Cannon, Bunker, Bunker, Bunker, Bunker, Bunker, Bunker, Bunker",
        "11": "Alien, Alien, Alien, Junior Laser Cannon, Bunker, Bunker, Bunker, Bunker, Bunker, Bunker, Bunker",
        "12": "Alien, Alien, Alien, Junior Laser Cannon, Bunker, Bunker, Bunker, Bunker, Bunker, Bunker, Bunker, Bunker",
        "13": "Alien, Alien, Alien, Junior Laser Cannon, Bunker, Bunker, Bunker, Bunker, Bunker, Bunker, Bunker, Bunker, Bunker",
        "14": "Alien, Alien, Alien, Junior Laser Cannon, Bunker, Bunker, Bunker, Bunker, Bunker, Bunker, Bunker, Bunker, Bunker, Bunker",
        "15": "Alien, Alien, Alien, Alien, Junior Laser Cannon, Bunker, Bunker, Bunker, Bunker, Bunker, Bunker, Bunker, Bunker, Bunker, Bunker",
        "name": "Space Invaders",
        "desc": "Space Invaders: Many years ago, Earth was invaded from aliens. Luckily thanks to General Laser Cannon, the aliens were sent back to their home. The general saved many bunkers from destruction."
      },
      "starcrossed": {
        "8": "Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "name": "Star-Crossed",
        "desc": "Star-Crossed: Mafia cannot talk with each other. Their kill only succeeds if they both send the same kill."
      },
      "supersaint2": {
        "2": "Hated Mafia, Hated Supersaint, Hated Supersaint",
        "name": "SS2",
        "desc": "SS2: A two-player theme where you have to decide whether the opponent is Town or Mafia!"
      },
      "supersaint3": {
        "3": "Mafia Goon, Supersaint, Vanilla Townie",
        "name": "SS3",
        "desc": "SS3: A three-player theme where even the Mafia has to be careful of whom they hammer!"
      },
      "triplets": {
        "9": "Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "name": "Triplets",
        "desc": "Triplets: A nine-player theme, where at first everyone is split into groups of three. You must lynch someone in this group first!"
      },
      "theoneicannotkill": {
        "3": "Mafia Semi-Priest, Vanilla Townie, Vanilla Townie",
        "name": "The One I Cannot Kill",
        "desc": "The One I Cannot Kill: Here, the Mafia may not hammer one of the two townies, determined pre-game."
      },
      "shortnight": {
        "6": "Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "name": "Shortnight",
        "desc": "Shortnight: A smaller version of Triplets, where you play in two groups of three."
      },
      "twintrap": {
        "9": "Track-Immune Mafia Goon, Watch-Immune Mafia Goon, Tracker, Watcher, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "name": "Twin Trap",
        "desc": "Twin Trap: The Mafia has to make a choice. Who is more at risk of being spotted?"
      },
      "vanilla": {
        "4": "Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "5": "Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "6": "Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "7": "Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "8": "Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "9": "Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "10": "Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "11": "Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "12": "Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "13": "Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "14": "Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "15": "Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "16": "Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "17": "Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "18": "Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "19": "Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "20": "Mafia Goon, Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "name": "Vanilla",
        "desc": "A simple theme with only Mafia Goons and Vanilla Townies."
      },
      "weneedaclear": {
        "5": "Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie, Vanilla Townie",
        "name": "We Need a Clear",
        "desc": "We Need a Clear: When a Vanilla Townie is lynched Day 1, they get cleared instead."
      },
      "weneedafifth": {
        "4": "Mafia Goon, Mafia Goon, Vanilla Townie, Vanilla Townie",
        "name": "We Need a Fifth",
        "desc": "We Need a Fifth: When a Vanilla Townie is lynched Day 1, they shoot another player instead. When a Mafia Goon is lynched, they have to clear a Vanilla Townie."
      }
    },
    "IDEAs": {
      "greateridea": {
        "name": "Greater Idea",
        "roles": [
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Watcher",
          "Tracker",
          "Tracker",
          "Cop",
          "Cop",
          "Cop Lover",
          "Seer",
          "Seer",
          "FBI Agent",
          "Doctor",
          "Doctor",
          "Roleblocker",
          "Jailkeeper",
          "Bodyguard",
          "Vigilante",
          "One-Shot Vigilante",
          "One-Shot Day Vigilante",
          "One-Shot Day Vigilante",
          "Compulsive Childkiller",
          "Bulletproof Townie",
          "Supersaint",
          "One-Shot Paranoid Gun Owner",
          "Mason",
          "Mason",
          "Mason",
          "Mason",
          "Mason Doctor",
          "Mason Lover",
          "Lover",
          "Lover",
          "Lover",
          "Jack-of-all-Trades",
          "Vengeful Townie",
          "Retired Werewolf Hunter",
          "Retired Marine",
          "Miller",
          "Hirsute Townie",
          "Evangelistic Townie",
          "Tentacled Townie",
          "Watchlisted Townie",
          "Wrong Place at the Wrong Time Townie",
          "Town Black Goo",
          "Ascetic Townie",
          "Private Investigator",
          "Gravedigger",
          "Nymphomaniac",
          "One-Shot Governor",
          "One-Shot Unlynchable Townie",
          "Town Godfather",
          "Innocent Child",
          "Hider",
          "Enabler",
          "Treestump",
          "Conspiracy Theorist",
          "Conspiracy Theorist",
          "Conspiracy Theorist",
          "One-Shot Kingmaker",
          "Weak Jailkeeper",
          "Bloodhound",
          "Vanilla Cop",
          "Hero",
          "Tourist",
          "Nurse",
          "One-Shot Commuter",
          "Cop-of-all-Trades",
          "One-Shot Gladiator",
          "Lynchbait",
          "Psychiatrist",
          "Reloader",
          "Fruit Vendor",
          "Parrot Role",
          "Judas",
          "Saulus",
          "One-Shot Townie",
          "Underdog",
          "Mafia Goon",
          "Mafia Goon",
          "Mafia Goon",
          "Mafia Goon",
          "Mafia Goon",
          "Mafia Godfather",
          "Mafia Tracker",
          "Mafia Doctor",
          "Mafia Roleblocker",
          "Mafia Lover",
          "Mafia Seer",
          "Mafia One-Shot Day Vigilante",
          "Mafia One-Shot Governor",
          "Mafia Strongman",
          "Mafia Reflexive Doctor",
          "Mafia Hirsute Goon",
          "Mafia Cupid",
          "Mafia Alpha Goon",
          "Mafia Compulsive Hider",
          "Mafia Fruit Vendor",
          "Werewolf",
          "Werewolf",
          "Werewolf",
          "Werewolf",
          "Alpha Werewolf",
          "Werewolf Roleblocker",
          "One-Shot Bulletproof Werewolf",
          "Werewolf Cop",
          "Werewolf Mason",
          "Werewolf Watcher",
          "Werewolf FBI Agent",
          "Ninja Werewolf",
          "Werewolf One-Shot Paranoid Gun Owner",
          "Werewolf Miller",
          "Werewolf Supersaint",
          "Werewolf Godfather",
          "Werewolf Gravedigger",
          "Werewolf Wereparrot",
          "One-Shot Unlynchable Alien",
          "Alien Prober",
          "Alien Vanillaiser",
          "Alien Silencer GI",
          "Bulletproof Alien Lover",
          "Alien Psychotrooper",
          "Alien One-Shot Mass Redirector",
          "Alien Bloodsucker",
          "Alien Sympathiser",
          "Survivor",
          "Compulsive Bodyguard Survivor",
          "Survivor Mason",
          "Lyncher",
          "Lyncher",
          "Two-Shot Bulletproof Serial Killer",
          "Serial Killer (Immune to Mafia Kills)",
          "Serial Killer (Immune to Werewolf Kills)",
          "Serial Killer (Immune to Alien Kills)",
          "One-Shot Cult Recruiter",
          "One-Shot Cult Goomaker",
          "Wild Card GI"
        ],
        "picks": [
          "role"
        ],
        "choices": 2
      },
      "greatestidea": {
        "name": "Greatest Idea",
        "roles": [
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Watcher",
          "Tracker",
          "Tracker",
          "Cop",
          "Cop",
          "Cop Lover",
          "Seer",
          "Seer",
          "FBI Agent",
          "Doctor",
          "Doctor",
          "Roleblocker",
          "Jailkeeper",
          "Bodyguard",
          "Vigilante",
          "One-Shot Vigilante",
          "One-Shot Day Vigilante",
          "One-Shot Day Vigilante",
          "Compulsive Childkiller",
          "Bulletproof Townie",
          "Supersaint",
          "One-Shot Paranoid Gun Owner",
          "Mason",
          "Mason",
          "Mason",
          "Mason",
          "Mason Doctor",
          "Mason Lover",
          "Lover",
          "Lover",
          "Lover",
          "Jack-of-all-Trades",
          "Vengeful Townie",
          "Retired Werewolf Hunter",
          "Retired Marine",
          "Miller",
          "Hirsute Townie",
          "Evangelistic Townie",
          "Tentacled Townie",
          "Watchlisted Townie",
          "Wrong Place at the Wrong Time Townie",
          "Town Black Goo",
          "Ascetic Townie",
          "Private Investigator",
          "Gravedigger",
          "Nymphomaniac",
          "One-Shot Governor",
          "One-Shot Unlynchable Townie",
          "Town Godfather",
          "Innocent Child",
          "Hider",
          "Enabler",
          "Treestump",
          "Conspiracy Theorist",
          "Conspiracy Theorist",
          "Conspiracy Theorist",
          "One-Shot Kingmaker",
          "Weak Jailkeeper",
          "Bloodhound",
          "Vanilla Cop",
          "Hero",
          "Tourist",
          "Nurse",
          "One-Shot Commuter",
          "Cop-of-all-Trades",
          "One-Shot Gladiator",
          "Lynchbait",
          "Psychiatrist",
          "Reloader",
          "Fruit Vendor",
          "Parrot Role",
          "Judas",
          "Saulus",
          "One-Shot Townie",
          "Underdog",
          "Mafia Goon",
          "Mafia Goon",
          "Mafia Goon",
          "Mafia Goon",
          "Mafia Goon",
          "Mafia Godfather",
          "Mafia Tracker",
          "Mafia Doctor",
          "Mafia Roleblocker",
          "Mafia Lover",
          "Mafia Seer",
          "Mafia One-Shot Day Vigilante",
          "Mafia One-Shot Governor",
          "Mafia Strongman",
          "Mafia Reflexive Doctor",
          "Mafia Hirsute Goon",
          "Mafia Cupid",
          "Mafia Alpha Goon",
          "Mafia Compulsive Hider",
          "Mafia Fruit Vendor",
          "Werewolf",
          "Werewolf",
          "Werewolf",
          "Werewolf",
          "Alpha Werewolf",
          "Werewolf Roleblocker",
          "One-Shot Bulletproof Werewolf",
          "Werewolf Cop",
          "Werewolf Mason",
          "Werewolf Watcher",
          "Werewolf FBI Agent",
          "Ninja Werewolf",
          "Werewolf One-Shot Paranoid Gun Owner",
          "Werewolf Miller",
          "Werewolf Supersaint",
          "Werewolf Godfather",
          "Werewolf Gravedigger",
          "Werewolf Wereparrot",
          "One-Shot Unlynchable Alien",
          "Alien Prober",
          "Alien Vanillaiser",
          "Alien Silencer GI",
          "Bulletproof Alien Lover",
          "Alien Psychotrooper",
          "Alien One-Shot Mass Redirector",
          "Alien Bloodsucker",
          "Alien Sympathiser",
          "Survivor",
          "Compulsive Bodyguard Survivor",
          "Survivor Mason",
          "Lyncher",
          "Lyncher",
          "Two-Shot Bulletproof Serial Killer",
          "Serial Killer (Immune to Mafia Kills)",
          "Serial Killer (Immune to Werewolf Kills)",
          "Serial Killer (Immune to Alien Kills)",
          "One-Shot Cult Recruiter",
          "One-Shot Cult Goomaker",
          "Wild Card GI"
        ],
        "picks": [
          "role",
          "alignment"
        ],
        "choices": 3
      },
      "replicantgreateridea": {
        "name": "Replicant Greater Idea",
        "roles": [
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Watcher",
          "Tracker",
          "Tracker",
          "Cop",
          "Cop",
          "Cop Lover",
          "Seer",
          "Seer",
          "FBI Agent",
          "Doctor",
          "Doctor",
          "Roleblocker",
          "Jailkeeper",
          "Bodyguard",
          "Vigilante",
          "One-Shot Vigilante",
          "One-Shot Day Vigilante",
          "One-Shot Day Vigilante",
          "Compulsive Childkiller",
          "Bulletproof Townie",
          "Supersaint",
          "One-Shot Paranoid Gun Owner",
          "Mason",
          "Mason",
          "Mason",
          "Mason",
          "Mason Doctor",
          "Mason Lover",
          "Lover",
          "Lover",
          "Lover",
          "Jack-of-all-Trades",
          "Vengeful Townie",
          "Retired Werewolf Hunter",
          "Retired Marine",
          "Miller",
          "Hirsute Townie",
          "Evangelistic Townie",
          "Tentacled Townie",
          "Watchlisted Townie",
          "Wrong Place at the Wrong Time Townie",
          "Town Black Goo",
          "Ascetic Townie",
          "Private Investigator",
          "Gravedigger",
          "Nymphomaniac",
          "One-Shot Governor",
          "One-Shot Unlynchable Townie",
          "Town Godfather",
          "Innocent Child",
          "Hider",
          "Enabler",
          "Treestump",
          "Conspiracy Theorist",
          "Conspiracy Theorist",
          "Conspiracy Theorist",
          "One-Shot Kingmaker",
          "Weak Jailkeeper",
          "Bloodhound",
          "Vanilla Cop",
          "Hero",
          "Tourist",
          "Nurse",
          "One-Shot Commuter",
          "Cop-of-all-Trades",
          "One-Shot Gladiator",
          "Lynchbait",
          "Psychiatrist",
          "Reloader",
          "Fruit Vendor",
          "Parrot Role",
          "Judas",
          "Saulus",
          "One-Shot Townie",
          "Underdog",
          "Mafia Goon",
          "Mafia Goon",
          "Mafia Goon",
          "Mafia Goon",
          "Mafia Goon",
          "Mafia Godfather",
          "Mafia Tracker",
          "Mafia Doctor",
          "Mafia Roleblocker",
          "Mafia Lover",
          "Mafia Seer",
          "Mafia One-Shot Day Vigilante",
          "Mafia One-Shot Governor",
          "Mafia Strongman",
          "Mafia Reflexive Doctor",
          "Mafia Hirsute Goon",
          "Mafia Cupid",
          "Mafia Alpha Goon",
          "Mafia Compulsive Hider",
          "Mafia Fruit Vendor",
          "Werewolf",
          "Werewolf",
          "Werewolf",
          "Werewolf",
          "Alpha Werewolf",
          "Werewolf Roleblocker",
          "One-Shot Bulletproof Werewolf",
          "Werewolf Cop",
          "Werewolf Mason",
          "Werewolf Watcher",
          "Werewolf FBI Agent",
          "Ninja Werewolf",
          "Werewolf One-Shot Paranoid Gun Owner",
          "Werewolf Miller",
          "Werewolf Supersaint",
          "Werewolf Godfather",
          "Werewolf Gravedigger",
          "Werewolf Wereparrot",
          "Replicant One-Shot Lightning Rod",
          "Replicant Odd-Night Cop Even-Night Seer",
          "Replicant Doppelganger",
          "Replicant Suppressor",
          "Replicant Millermaker",
          "Replicant One-Shot Politician",
          "Replicant Day Suicide Bomber",
          "Bulletproof Replicant",
          "Replicant Sympathiser",
          "Survivor",
          "Compulsive Bodyguard Survivor",
          "Survivor Mason",
          "Lyncher",
          "Lyncher",
          "Two-Shot Bulletproof Serial Killer",
          "Serial Killer (Immune to Mafia Kills)",
          "Serial Killer (Immune to Werewolf Kills)",
          "Serial Killer (Immune to Alien Kills)",
          "One-Shot Cult Recruiter",
          "One-Shot Cult Goomaker",
          "Wild Card GI"
        ],
        "picks": [
          "role"
        ],
        "choices": 2
      },
      "classicidea": {
        "name": "Classic Idea",
        "roles": [
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Doctor",
          "Doctor",
          "Cop",
          "Cop",
          "Vigilante",
          "One-shot Vigilante",
          "Bulletproof Townie",
          "Hider",
          "Tracker",
          "Mason",
          "Mason",
          "Mason Lover",
          "Lover",
          "Lover",
          "Cop Lover",
          "Roleblocker",
          "Jailkeeper",
          "Miller",
          "Wrong Place at the Wrong Time Townie",
          "Nurse",
          "Vanilla Cop",
          "Supersaint",
          "Innocent Child",
          "One-shot Governor",
          "Enabler",
          "FBI Agent",
          "Town Godfather",
          "Mafia Godfather",
          "Mafia Roleblocker",
          "Mafia Doctor",
          "Mafia Reflexive Doctor",
          "Mafia Strongman",
          "Mafia Tracker",
          "Mafia Compulsive Hider",
          "Mafia One-shot Governor",
          "Mafia Lover",
          "Alpha Goon",
          "Mafia Hirsute Goon",
          "Mafia Goon",
          "Mafia Goon",
          "Mafia Goon",
          "Mafia Goon",
          "Serial Killer (Immune to Mafia kills)",
          "Serial Killer (Two-shot Bulletproof)"
        ],
        "picks": [
          "role"
        ],
        "choices": 2
      },
      "basictwoscum": {
        "name": "Basic Two Scum",
        "roles": [
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Cop",
          "Seer",
          "Doctor",
          "Nurse",
          "Roleblocker",
          "Jailkeeper",
          "Tracker",
          "Watcher",
          "Miller",
          "Hirsute Townie",
          "Wrong Place at the Wrong Time Townie",
          "Vigilante",
          "One-shot Vigilante",
          "Bulletproof Townie",
          "Mason",
          "Mason",
          "Mason Lover",
          "Lover",
          "Lover",
          "Innocent Child",
          "One-shot Commuter",
          "Vengeful Townie",
          "Vanilla Cop",
          "Enabler",
          "Town Godfather",
          "Retired Werewolf Hunter",
          "Mafia Godfather",
          "Mafia Roleblocker",
          "Mafia Lover",
          "Mafia Doctor",
          "Mafia Tracker",
          "Mafia Seer",
          "Mafia Strongman",
          "Mafia Hirsute Goon",
          "Mafia Goon",
          "Mafia Goon",
          "Alpha Werewolf",
          "Werewolf Roleblocker",
          "Werewolf Mason",
          "Werewolf One-shot Bulletproof",
          "Werewolf Watcher",
          "Werewolf Cop",
          "Ninja Werewolf",
          "Werewolf Miller",
          "Werewolf",
          "Werewolf"
        ],
        "picks": [
          "role"
        ],
        "choices": 2
      },
      "basicmafiaandaliens": {
        "name": "Basic Mafia and Aliens",
        "roles": [
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Cop",
          "Cop",
          "Doctor",
          "Conspiracy Theorist",
          "Conspiracy Theorist",
          "Miller",
          "Tentacled Townie",
          "Wrong Place at the Wrong Time Townie",
          "Tracker",
          "Vanilla Cop",
          "Jack-of-all-Trades",
          "Bulletproof Townie",
          "One-shot Vigilante",
          "Lover",
          "Lover",
          "Lover",
          "Mason",
          "Mason",
          "Vengeful Townie",
          "Innocent Child",
          "Hider",
          "One-shot Governor",
          "Jailkeeper",
          "Enabler",
          "Mafia Godfather",
          "Mafia Roleblocker",
          "Mafia Strongman",
          "Mafia Lover",
          "Mafia Doctor",
          "Mafia Tracker",
          "Mafia One-shot Governor",
          "Mafia Compulsive Hider",
          "Mafia Hirsute Goon",
          "Mafia Goon",
          "Mafia Goon",
          "Mafia Goon",
          "Mafia Goon",
          "Alien Prober",
          "Alien Vanillaiser",
          "Alien Bloodsucker",
          "Alien Sympathiser",
          "Bulletproof Alien Lover",
          "Alien Psychotrooper",
          "Alien Silencer GI",
          "Alien One-shot Mass Redirector"
        ],
        "picks": [
          "role"
        ],
        "choices": 2
      },
      "lifeanddeath": {
        "name": "Life and Death",
        "roles": [
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Doctor",
          "Doctor",
          "Nurse",
          "Roleblocker",
          "Jailkeeper",
          "Weak Jailkeeper",
          "Bodyguard",
          "Vigilante",
          "One-shot Vigilante",
          "One-shot Dayvig",
          "One-shot Dayvig",
          "Compulsive Childkiller",
          "Bulletproof Townie",
          "Supersaint",
          "One-shot Paranoid Gun Owner",
          "Cop Lover",
          "Lover",
          "Lover",
          "Mason Lover",
          "Mason Doctor",
          "Mason",
          "Jack-of-all-Trades",
          "Vengeful Townie",
          "Retired Marine",
          "Ascetic Townie",
          "Nymphomaniac",
          "One-shot Governor",
          "One-shot Unlynchable Townie",
          "Innocent Child",
          "Hider",
          "Treestump",
          "One-shot Kingmaker",
          "Hero",
          "One-shot Commuter",
          "One-shot Gladiator",
          "Psychiatrist",
          "Judas",
          "Saulus",
          "Survivor",
          "Survivor Mason",
          "Compulsive Bodyguard Survivor",
          "Lyncher",
          "Lyncher",
          "Serial Killer (Two-shot bulletproof)",
          "Serial Killer (Immune to Mafia kills)",
          "Serial Killer (Immune to Alien & Replicant kills)",
          "Alien One-shot Unlynchable",
          "Alien Prober",
          "Alien Vanillaiser",
          "Alien Silencer GI",
          "Alien Bloodsucker",
          "Alien One-shot Mass Redirector",
          "Bulletproof Alien Lover",
          "Alien Sympathiser",
          "Alien Psychotrooper",
          "Mafia Godfather",
          "Mafia Roleblocker",
          "Mafia Doctor",
          "Mafia Lover",
          "Mafia One-shot Dayvig",
          "Mafia One-shot Governor",
          "Mafia Strongman",
          "Mafia Reflexive Doctor",
          "Mafia Cupid",
          "Mafia Compulsive Hider",
          "Mafia Tracker",
          "Mafia Goon",
          "Mafia Goon",
          "Mafia Goon",
          "Mafia Goon",
          "Mafia Goon",
          "Alpha Goon"
        ],
        "picks": [
          "role"
        ],
        "choices": 2
      },
      "101waystoplaywithathirdparty": {
        "name": "101 Ways to Play with a Third Party",
        "roles": [
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie","
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Town Cop",
          "Town Cop",
          "Town Doctor",
          "Town Doctor",
          "Town Jailkeeper",
          "Town Jailkeeper",
          "Town 1-Shot Gladiator",
          "Town 1-Shot Gladiator",
          "Town 1-Shot Gladiator",
          "Town 1-Shot Gladiator",
          "Town Gunsmith",
          "Town Gunsmith",
          "Town Nurse",
          "Town Nurse",
          "Vengeful Townie",
          "Vengeful Townie",
          "Town Vigilante",
          "Town Vigilante",
          "Town 1-Shot Vigilante",
          "Town 1-Shot Vigilante",
          "Town Tracker",
          "Town Tracker",
          "Town Mason",
          "Town Mason",
          "Town Mason",
          "Town Mason",
          "Town Vanilla Cop",
          "Town Vanilla Cop",
          "Town Innocent Child",
          "Town Innocent Child",
          "Town 1-Shot Paranoid Gun Owner",
          "Town 1-Shot Paranoid Gun Owner",
          "Town 1-Shot Paranoid Gun Owner",
          "Town 1-Shot Paranoid Gun Owner",
          "Town 1-Shot Dayvig",
          "Town 1-Shot Dayvig",
          "Town 1-Shot Bulletproof",
          "Town 1-Shot Bulletproof",
          "Town Watcher",
          "Town Jack-of-all-Trades",
          "Mafia Goon",
          "Mafia Goon",
          "Mafia Goon",
          "Mafia Goon",
          "Mafia Goon",
          "Mafia Goon",
          "Mafia Goon",
          "Mafia Goon",
          "Mafia Roleblocker",
          "Mafia Roleblocker",
          "Mafia 1-Shot Strongman",
          "Mafia 1-Shot Strongman",
          "Mafia Rolecop",
          "Mafia Rolecop",
          "Mafia Doctor",
          "Mafia Doctor",
          "Mafia Tracker",
          "Mafia Tracker",
          "Mafia Watcher",
          "Mafia 1-Shot Dayvig",
          "Mafia 1-Shot Gladiator",
          "Mafia Encryptor",
          "Mafia Encryptor",
          "Mafia Encryptor",
          "Mafia Encryptor",
          "Investigation Immune Serial Killer",
          "2-Shot Bulletproof Serial Killer",
          "Mentor",
          "Inquisitor",
          "Jester",
          "Jester",
          "Lyncher",
          "Lyncher",
          "Unlyncher",
          "Unlyncher",
          "Survivor",
          "Survivor",
          "Mime",
          "Mime",
          "Mime",
          "Mime"
        ],
        "picks": [
          "role"
        ],
        "choices": 2
      },
      "vanillaidea": {
        "name": "Vanilla Idea",
        "roles": [
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Town",
          "Mafia",
          "Mafia",
          "Mafia",
          "Mafia",
          "Mafia",
          "Mafia",
          "Mafia",
          "Mafia",
          "Mafia",
          "Mafia",
          "Mafia",
          "Traitor",
          "Traitor",
          "Traitor",
          "Traitor",
          "Werewolf",
          "Werewolf",
          "Werewolf",
          "Werewolf",
          "Werewolf",
          "Werewolf",
          "Werewolf",
          "Werewolf",
          "Werewolf",
          "Werewolf",
          "Werewolf",
          "Werewolf",
          "Werewolf",
          "Cult",
          "Cult",
          "Cult",
          "Cult",
          "Cult",
          "Serial Killer",
          "Serial Killer",
          "Serial Killer",
          "Serial Killer",
          "Serial Killer",
          "Survivor",
          "Survivor",
          "Jester",
          "Unjester",
          "Lyncher",
          "Unlyncher",
          "Underdog",
          "Aligner",
          "Universal Usurper",
          "Universal Sympathiser",
          "Wild Card GI"
        ],
        "picks": [
          "role"
        ],
        "choices": 2
      },
      "crackingidea": {
        "name": "Cracking Idea",
        "roles": [
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Vanilla Townie",
          "Doctor",
          "Doctor",
          "Coroner CI",
          "Coroner CI",
          "Coroner CI",
          "Coroner CI",
          "Bodyguard",
          "Bodyguard",
          "One-Shot Commuter",
          "Cop",
          "Cop",
          "Ascetic Cop",
          "Backup Cop ",
          "Watcher",
          "Tracker",
          "Hider",
          "Ascetic Hider",
          "Area 51 Detective",
          "Area 51 Immunologist",
          "Conspiracy Theorist",
          "Conspiracy Theorist",
          "Conspiracy Theorist",
          "Conspiracy Theorist",
          "Conspiracy Theorist",
          "Conspiracy Theorist",
          "Conspiracy Theorist",
          "Compulsive Roleblocker",
          "Jailkeeper",
          "Jailkeeper",
          "Jack Of All Trades ",
          "Mason",
          "Mason",
          "Mason",
          "Ascetic Mason",
          "Mason Compulsive Bodyguard",
          "Mason Reflexive Doctor",
          "One-Shot Vigilante",
          "Miller Vigilante",
          "One-Shot Day Vigilante",
          "Nymphomaniac ",
          "Excellent Sense of Smell Townie",
          "Excellent Sense of Smell Townie",
          "Ugly Townie",
          "Ugly Townie",
          "Clairvoyant",
          "Clairvoyant",
          "Clairvoyant",
          "Clairvoyant",
          "Treestump",
          "Lynchbait",
          "Macho One-Shot Kingmaker",
          "Macho Death Kingmaker",
          "Supersaint",
          "Vengeful Townie",
          "One-Shot Unlynchable Townie",
          "Universal Backup",
          "Universal Backup",
          "Mafia Goon",
          "Mafia Goon",
          "Mafia Goon",
          "Mafia Goon",
          "Ascetic Mafia Goon",
          "Ascetic Mafia Goon",
          "Bulletproof Mafia Goon",
          "Bulletproof Mafia Goon",
          "Mafia Tracker",
          "Mafia One-Shot Role Cop",
          "Mafia One-Shot Role Cop",
          "Traitor Cop",
          "Mafia Conspiracy Theorist",
          "Mafia Conspiracy Theorist",
          "Mafia Clairvoyant",
          "Mafia Clairvoyant",
          "Mafia One-Shot Day Vigilante",
          "Mafia Godfather",
          "Alien Avenger",
          "Alien Avenger",
          "Alien Vanillerizer",
          "Alien Vanillerizer",
          "Alien Psychotrooper",
          "Alien One-Shot Psychomagnet",
          "Alien Monarch",
          "Baby Alien Monarch",
          "Baby Alien Monarch",
          "Lyncher",
          "Pseudojester",
          "Red Goo CI",
          "Red Goo CI",
          "Grey Goo CI",
          "Chameleon Goo"
        ],
        "picks": [
          "role"
        ],
        "choices": 2
      },
      "snaqsidea": {
        "name": "Snaq's Idea",
        "roles": [
          "Vanilla Townie (Must Pick)",
          "Discard",
          "Hater",
          "Hater",
          "Praiser",
          "Praiser",
          "Hasty Lover",
          "Hasty Lover",
          "Loverboy",
          "Compulsive Screamer",
          "Secret Agent",
          "Secret Agent",
          "Oracle SI",
          "Oracle SI",
          "Oracle SI",
          "Deactivator",
          "Deactivator",
          "Mayor",
          "Mayor",
          "Enabler",
          "Enabler",
          "Pariah",
          "Pariah",
          "Missionary",
          "Missionary",
          "Missionary",
          "OS Curfew Agent",
          "OS Curfew Agent",
          "Homekeeper",
          "Homekeeper",
          "Homekeeper",
          "Vanguard",
          "Vanguard",
          "Vanguard",
          "Cowardly Hero",
          "Cowardly Hero",
          "Cop-Of-All-Trades",
          "Cop-Of-All-Trades",
          "Cop-Of-All-Trades",
          "Journalist",
          "Journalist",
          "Journalist",
          "Compatibility Checker",
          "Compatibility Checker",
          "Compatibility Checker",
          "Teacher",
          "Teacher",
          "Teacher",
          "Power Cop",
          "Power Cop",
          "Tallier",
          "Yogi Bear",
          "Innocent Child",
          "Innocent Child",
          "Innocent Child",
          "Day 4 Suicidal Deathproof Townie",
          "Treestump",
          "Treestump",
          "Illusionist",
          "Illusionist",
          "OS Subway Recruiter",
          "OS Subway Recruiter",
          "Detector",
          "Detector",
          "Detector",
          "Blockade",
          "Blockade",
          "Blockade",
          "Stalker",
          "Stalker",
          "Bailiff",
          "Bailiff",
          "Bailiff",
          "Confidant",
          "Confidant",
          "Avoider",
          "Avoider",
          "Avoider",
          "Celebrity",
          "Celebrity",
          "Gossiper",
          "Gossiper",
          "Gossiper",
          "Unblocker",
          "Unblocker",
          "Unblocker",
          "Bus Driver",
          "Bus Driver",
          "Chauffeur",
          "Chauffeur",
          "One-Shot Mass Redirector",
          "One-Shot Mass Redirector",
          "Bulletproof Lure",
          "Bulletproof Lure",
          "Mirror",
          "Mirror",
          "2S Multiplier",
          "Wild Card",
          "Wild Card",
          "Wild Card",
          "Broken Vanillaiser",
          "Immobile OS Parrot",
          "Role Vanillaizer",
          "Role Vanillaizer",
          "Schemer",
          "One-Shot Day-Vigilante",
          "One-Shot Day-Vigilante",
          "Midnight Desperado",
          "Midnight Desperado",
          "Murderous Vigilante",
          "Murderous Vigilante",
          "Judge",
          "Haunting Vigilante",
          "Haunting Vigilante",
          "Haunting Doctor",
          "Haunting Doctor",
          "Haunting Doctor",
          "Gambit Vigilante",
          "Gambit Vigilante",
          "Gambit Vigilante",
          "Gambit Public Cop",
          "Gambit Public Cop",
          "Trypophobic Townie",
          "Trypophobic Townie",
          "Trypophobic Townie",
          "One-Shot Reviver",
          "One-Shot Reviver",
          "Substitute",
          "Substitute",
          "Compulsive Janitor Coroner",
          "Compulsive Janitor Coroner",
          "Compulsive Janitor Coroner",
          "Grim Reaper",
          "Grim Reaper",
          "Hallucinator",
          "Necromancer",
          "Insomniac",
          "Insomniac",
          "Friend",
          "Friend",
          "Friend",
          "Friend",
          "Friend",
          "Friend OS Friend Recruiter",
          "Talkative Townie",
          "Talkative Townie",
          "Whisperer",
          "Whisperer",
          "Reserved Townie",
          "Reserved Townie",
          "Discard Vendor",
          "Do-It-Yourselfer",
          "Inheritor",
          "Inheritor",
          "OS Prism",
          "Randomizer",
          "Randomizer",
          "Card Dealer",
          "Pseudocider",
          "Pseudocider",
          "Sacrifice",
          "Sacrifice",
          "Magician",
          "Flip Flop",
          "Mafia Hater",
          "Mafia Praiser",
          "Mafia One-Shot Day-Vigilante",
          "Mafia Schemer",
          "Mafia Bus Driver",
          "Mafia Chauffeur",
          "Mafia Confidant",
          "Mafia Blockade",
          "Mafia Unblocker",
          "Mafia Insomniac",
          "Mafia Compulsive Janitor",
          "Mafia Compulsive Janitor Coroner",
          "Mafia Haunting Compulsive Janitor",
          "Mafia Secret Agent",
          "Mafia Oracle SI",
          "Mafia Compatibility Checker",
          "Mafia Teacher",
          "Mafia Wild Card",
          "Mafia Detector",
          "Mafia Mirror",
          "Mafia OS Modposter",
          "Mafia Whisperer",
          "Reserved Mafia",
          "Mafia Little Liar",
          "Mafia Magician",
          "Mafia Magician",
          "Mafia Bulletproof Lure",
          "Mafia Grim Reaper",
          "Mafia Screamer",
          "Mafia Psychotrooper Button",
          "Mafia Houdini",
          "Mafia Inheritor",
          "Mafia Role Vanillaizer",
          "Mafia Friend",
          "Mafia Friend",
          "Mafia Friend",
          "Traitor Discard Vendor",
          "Traitor Pseudocider",
          "Traitor Celebrity",
          "Traitor Gossiper",
          "Traitor Broken Vanillaiser",
          "Traitor OS Subway Recruiter",
          "Traitor Hasty Lover",
          "Talkative Traitor",
          "Alien Contrary",
          "Alien Contrary",
          "Alien Friend",
          "Alien Friend",
          "Alien Unblocker",
          "Alien One-Shot Reviver",
          "Alien One-Shot Mass Redirector",
          "Alien Bouncer",
          "Alien Blackmailer",
          "Alien Do-It-Yourselfer",
          "Alien Loverboy",
          "Alien Nightmare",
          "Alien Card Dealer",
          "Alien Judge",
          "Alien OS Trainwreck",
          "Alien OS Solar God",
          "Alien-of-all-Trades",
          "Alien Omniscient",
          "E.T",
          "Cultafia Leader",
          "Gambit Cult Recruiter",
          "Inquisitor",
          "Bulletproof Duskiller",
          "Bulletproof Corrupt Queen",
          "Substitute Loner",
          "Substitute Loner",
          "Bulletproof Shadow",
          "Solo Panther",
          "Survivor Hallucinator",
          "Survivor Pseudocider",
          "Aligner",
          "Aligner",
          "Loyal Lover",
          "Survivor Friend",
          "Pseudojester",
          "Pseudolyncher",
          "Birthday Boy",
          "Universal Usurper",
          "Universal Sympathiser",
          "Anti-Survivor",
          "Wild disCard"
        ],
        "picks": [
          "role"
        ],
        "choices": 2
      }
    },
    "aliases": {
      "101ways": "101waystoplaywithathirdparty",
      "aitc":  "assassininthecourt",
      "aitp":  "assassininthecourt",
      "assassin in the castle":  "assassininthecourt",
      "assassin in the palace":  "assassininthecourt",
      "tms":  "toomuchscum",
      "btms":  "toomuchscum",
      "baby too much scum":  "toomuchscum",
      "bma": "basicmafiaandaliens",
      "brothel mafia": "brothel",
      "bts": "basictwoscum",
      "bh": "bloodhound",
      "classi": "classicidea",
      "dv3": "dayvig3",
      "dimm":  "drookezismafiamafia",
      "fee": "friendsandenemiesandenemies",
      "ff": "forestfire",
      "fi": "fireandice",
      "fire ice": "fireandice",
      "job": "jungleofbullshit",
      "kat": "killalltownies",
      "kwg": "kidswithguns",
      "lad": "lifeanddeath",
      "lod": "lifeordeath",
      "lod6": "lifeordeath",
      "lh": "lighthouse",
      "madness os": "madness",
      "mlosr": "maintaininglaworderandshallowrelationships",
      "medmaf": "medicalmafia",
      "bomb os": "minesweeper",
      "execution": "modifiedexecution",
      "modexe": "modifiedexecution",
      "near vanilla": "nearvanilla",
      "nd": "neighborsdilemma",
      "nommy": "nominations",
      "nomination": "nominations",
      "pairs": "pairings",
      "paris": "parismafia",
      "semi nightless": "seminightless",
      "ss2": "supersaint2",
      "ss3": "supersaint3",
      "semipriest": "theoneicannotkill",
      "nilla": "vanilla",
      "wnac": "weneedaclear",
      "wnaf": "weneedafifth",
      "gi": "greateridea",
      "gesti": "greatestidea",
      "rgi": "replicantgreateridea",
      "vi": "vanillaidea",
      "ci": "crackingidea",
      "si": "snaqsidea",
      "vt": "villager",
      "vanilla townie": "villager",
      "vanillager": "villager",
      "villy": "villager",
      "townie": "villager",
      "aoat": "alien-of-all-trades",
      "alien of all trades": "alien-of-all-trades",
      "anti survivor": "anti-survivor",
      "antisurvivor": "anti-survivor",
      "area51detective": "area 51 detective",
      "area51immunologist": "area 51 immunologist",
      "bg": "bodyguard",
      "backup cop": "deputy",
      "role cop classic": "rolecopclassic",
      "coat": "cop-of-all-trades",
      "cop of all trades": "cop-of-all-trades",
      "coroner": "coronereternalsun",
      "coroneresun": "coronereternalsun",
      "coroner esun": "coronereternalsun",
      "coroner eternal sun": "coronereternalsun",
      "coroner ci": "coronercrackingidea",
      "coronerci": "coronercrackingidea",
      "coroner cracking idea": "coronercrackingidea",
      "backup doctor": "nurse",
      "doc": "doctor",
      "diyer": "do-it-yourselfer",
      "do it yourselfer": "do-it-yourselfer",
      "doityourselfer": "do-it-yourselfer",
      "deathproof mafias child lover": "drookez",
      "flipflop": "flip flop",
      "gray goo": "grey goo",
      "graygooci": "greygoocrackingidea",
      "gray goo ci": "greygoocrackingidea",
      "gray goo cracking idea": "greygoocrackingidea",
      "graygoocrackingidea": "greygoocrackingidea",
      "greygooci": "greygoocrackingidea",
      "grey goo ci": "greygoocrackingidea",
      "grey goo cracking idea": "greygoocrackingidea",
      "child": "innocent child",
      "joat": "jack-of-all-trades",
      "jack of all trades": "jack-of-all-trades",
      "jk": "jailkeeper",
      "stripper": "lure",
      "oracle si": "oraclesi",
      "oracle snaqs idea": "oraclesi",
      "parrot": "parrot role",
      "wereparrot": "parrot role",
      "hooker": "pretty lady",
      "pl": "pretty lady",
      "pi": "private investigator",
      "mass redirector": "psychomagnet",
      "redgooci": "redgoocrackingidea",
      "red goo ci": "redgoocrackingidea",
      "red goo cracking idea": "redgoocrackingidea",
      "role vanillaizer": "role vanillaiser",
      "suppressor": "rolestopper",
      "sk": "serial killer",
      "silencer gi": "silencergreateridea",
      "silencergi": "silencergreateridea",
      "silencer greater idea": "silencergreateridea",
      "kamikaze pilot": "suicide bomber",
      "super townie": "super",
      "sensor": "tallier",
      "vig": "vigilante",
      "wild card gi": "wildcardgreateridea",
      "wildcardgi": "wildcardgreateridea",
      "wild card greater idea": "wildcardgreateridea",
      "bp": "bulletproof",
      "cck": "compulsive child killer",
      "excellent sense of smell townie": "excellent sense of smell",
      "immobile os parrot": "immobile parrot",
      "doublevoter": "mayor",
      "double voter": "mayor",
      "midnight": "night",
      "reflexive vigilante": "paranoid gun owner",
      "pgo": "paranoid gun owner",
      "restriction": "post restriction",
      "publishing": "public",
      "strong willed": "strong-willed",
      "strongwilled": "strong-willed",
      "avenger": "supersaint",
      "ss": "supersaint",
      "ugly townie": "ugly",
      "unibackup": "universal backup",
      "uni backup": "universal backup",
      "lynchproof": "unlynchable"
    }
  }
`)

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
    const roleWords = roleString.split(' ').map(toID);
    outer: while (roleWords.length) {
        const currentWord = roleWords.slice();

        while (currentWord.length) {
            let currentSearch = currentWord.join(' ');
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
        role.memo.push(...MafiaData.alignments[role.alignment].memo);
    }

    return {role, problems, ignored};
}
