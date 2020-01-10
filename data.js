window.MafiaData = JSON.parse(String.raw`{
  "roles": {
    "villager": {
      "name": "Villager",
      "alignment": "town",
      "image": "villager",
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
    "alienofalltrades": {
      "name": "Alien-of-all-Trades",
      "alignment": "alien",
      "memo": [
        "Alien-of-all-Trades: Before the game starts, you may pick another role. You will gain any powers this role has for the rest of the game."
      ]
    },
    "aligner": {
      "name": "Aligner",
      "alignment": "solo",
      "memo": [
        "Aligner: Once a game, you may target someone. You will win if that person wins. Otherwise, you are a Survivor."
      ]
    },
    "antisurvivor": {
      "name": "Anti-Survivor",
      "alignment": "solo",
      "memo": [
        "Anti-Survivor: You are the only person who wins if you survive until the end of the game."
      ]
    },
    "area51detective": {
      "name": "Area 51 Detective",
      "memo": [
        "Area 51 Detective: During the Night, you may PM the host the name of another player. This player will not be able to use an action if they are an Alien."
      ]
    },
    "area51immunologist": {
      "name": "Area 51 Immunologist",
      "memo": [
        "Area 51 Immunologist: During the Night, you may PM the host the name of another player. This player will become permanently immune to Alien kills."
      ]
    },
    "assassin": {
      "name": "Assassin",
      "alignment": "solo",
      "memo": [
        "Assassin (Assassin in the Court): Wins when the King dies. Can shoot another player publicly once a game, but loses if this wasn't the King."
      ]
    },
    "avoider": {
      "name": "Avoider",
      "memo": [
        "Avoider: During the Night, you may PM the host the name of another player. If this player targeted you with an action, this action fails."
      ]
    },
    "babymonarch": {
      "name": "Baby Monarch",
      "memo": [
        "Baby Monarch: Turns into a Monarch at the start of Day 4. It is announced that someone has turned into a Monarch."
      ]
    },
    "babysitter": {
      "name": "Babysitter",
      "memo": [
        "Babysitter: During the Night, you may PM the host the name of another player. This player will be protected from all nightkills for that Night, but if the Babysitter dies, its target will die too."
      ],
      "image": "doctor"
    },
    "bailiff": {
      "name": "Bailiff",
      "memo": [
        "Bailiff: During the Night, you may PM the host the name of another player. If this player is an X-Shot role, they will lose all of their shots."
      ]
    },
    "birthdayboy": {
      "name": "Birthday Boy",
      "alignment": "solo",
      "memo": [
        "Birthday Boy: You start as a Survivor. When you are lynched, you may pick another player. You become an exact copy of this player, including alignment."
      ]
    },
    "blackgoo": {
      "name": "Black Goo",
      "alignment": "town",
      "memo": [
        "Black Goo: Anyone who targets you will join the Cult."
      ]
    },
    "blackmailer": {
      "name": "Blackmailer",
      "memo": [
        "Blackmailer: During the Night, you may PM the host the name of another player. This player will kill their target."
      ]
    },
    "blacksmith": {
      "name": "Blacksmith",
      "memo": [
        "Blacksmith: During the Day, you may PM the host the name of another player. This player will be protected from one kill that day."
      ]
    },
    "blockade": {
      "name": "Blockade",
      "memo": [
        "Blockade: During the Night, you may PM the host the name of another player. This player will not be able to use an action, and you will get to know who, if anyone, they targeted."
      ]
    },
    "bloodhound": {
      "name": "Bloodhound",
      "memo": [
        "Bloodhound: Each night you can PM the host the name of another player. You will be told if they are TOWN or NOT TOWN, or receive NO RESULT if your investigation failed."
      ],
      "image": "cop"
    },
    "bloodsucker": {
      "name": "Bloodsucker",
      "memo": [
        "Bloodsucker: Each night you can PM the host the name of another player. This player will die and become a Treestump."
      ]
    },
    "bodyguard": {
      "name": "Bodyguard",
      "memo": [
        "Bodyguard: During the Night, you may PM the host the name of another player. This player will be protected from all nightkills for that Night, but the Bodyguard will be killed instead."
      ],
      "image": "doctor"
    },
    "bouncer": {
      "name": "Bouncer",
      "memo": [
        "Bouncer: During the Night, you may PM the host the name of another player. Anyone who targeted this player will die."
      ]
    },
    "brokenvanillaiser": {
      "name": "Broken Vanillaiser",
      "memo": [
        "Broken Vanillaiser: Once a game, at night, you may PM the host that you want to activate the Broken Vanillaiser. For the next day and night, all players will be their Vanilla variants."
      ]
    },
    "busdriver": {
      "name": "Bus Driver",
      "memo": [
        "Bus Driver: During the Night, you may PM the host the names of two players. People who targeted either of these players will instead target the other one."
      ]
    },
    "chameleongoo": {
      "name": "Chameleon Goo",
      "alignment": "goo",
      "memo": [
        "Chameleon Goo: Anyone who targets you will join the Cult. You are a Mason, and will die after Night 2. There is no way to stop this death."
      ]
    },
    "chauffeur": {
      "name": "Chauffeur",
      "memo": [
        "Chauffeur: During the Night, you may PM the host the names of two players. They will use the action the other player used. If either idled, it fails."
      ]
    },
    "commuter": {
      "name": "Commuter",
      "memo": [
        "Commuter: During the Night, you may PM the host that you want to commute. No other player will be able to target you this night."
      ]
    },
    "compatibilitychecker": {
      "name": "Compatibility Checker",
      "memo": [
        "Compatibility Checker: During the Night, you may PM the host the names of two players. You will get to know whether they are COMPATIBLE or NOT COMPATIBLE, depending on whether they are the same alignment or not."
      ]
    },
    "confidant": {
      "name": "Confidant",
      "memo": [
        "Confidant: During the Night, you may PM the host the name of another player. You will use the same action as the target, on the same target as them."
      ]
    },
    "conspiracytheorist": {
      "name": "Conspiracy Theorist",
      "memo": [
        "Conspiracy Theorist: Each night you can PM the host the name of another player. You will be told if they are ALIEN or NOT ALIEN, or receive NO RESULT if your investigation failed. Additionally, you will always be inspected as an ALIEN when possible."
      ],
      "image": "cop"
    },
    "powercop": {
      "name": "Power Cop",
      "memo": [
        "Power Cop: During the Night, you can PM the host the name of another player. You will be told how strong that player's role is on a scale from 0 to 10, as judged by the host."
      ]
    },
    "rolecop": {
      "name": "Role Cop",
      "memo": [
        "Role Cop: Each night you can PM the host the name of another player. You will be told their exact role (not alignment), or NO RESULT if your investigation failed."
      ],
      "image": "cop"
    },
    "rolecopclassic": {
      "name": "Role Cop (Classic)",
      "memo": [
        "Role Cop: Each night you can PM the host the name of another player. You will be told their exact role and alignment, or NO RESULT if your investigation failed."
      ],
      "image": "cop"
    },
    "vanillacop": {
      "name": "Vanilla Cop",
      "memo": [
        "Vanilla Cop: Each night you can PM the host the name of another player. You will be told if they are VANILLA or NOT VANILLA, or NO RESULT if your investigation failed."
      ],
      "image": "cop"
    },
    "cop": {
      "name": "Cop",
      "memo": [
        "Cop: Each night you can PM the host the name of another player. You will be told if they are MAFIA or NOT MAFIA, or receive NO RESULT if your investigation failed."
      ],
      "image": "cop"
    },
    "copofalltrades": {
      "name": "Cop-of-all-Trades",
      "memo": [
        "Cop-of-all-Trades: You may use the actions of a Cop, a Seer, an FBI Agent, a Conspiracy Theorist, and a Private Investigator once a game each."
      ]
    },
    "coronereternalsun": {
      "name": "Coroner (Eternal Sun)",
      "memo": [
        "Coroner: When any player dies, you will be PMd which role they were. Note: Check 'Coroner CI' for information about Coroners in Cracking Idea."
      ]
    },
    "coronercrackingidea": {
      "name": "Coroner (Cracking Idea)",
      "memo": [
        "Coroner: Each night you can PM the host the name of another (dead) player. You learn the role(s) of the player who killed them, but not who this role belongs to. This also works when your target dies the night you used it."
      ]
    },
    "corruptqueen": {
      "name": "Corrupt Queen",
      "alignment": "solo",
      "memo": [
        "Corrupt Queen: During the Night, you may PM the host the name of another player. This player will become a King, and be the only person to be able to lynch the following day. However, after the following day, this player will die."
      ]
    },
    "cowardlyhero": {
      "name": "Cowardly Hero",
      "memo": [
        "Cowardly Hero: During the Night, you may PM the host the name of another player. This player will be protected from nightkills. If you are killed, the player you protected will die instead. Afterwards, you will not be able to use this action anymor."
      ]
    },
    "cprdoctor": {
      "name": "CPR Doctor",
      "memo": [
        "CPR Doctor: During the Night, you may PM the host the name of another player. This player will be protected from all nightkills for that Night. If they would not be nightkilled, you kill them instead."
      ]
    },
    "cupid": {
      "name": "Cupid",
      "memo": [
        "Cupid: At Night One you can PM the host the name of another player. Every other player who targeted the target becomes Lovers with the target."
      ]
    },
    "deputy": {
      "name": "Deputy",
      "memo": [
        "Deputy: If a Cop dies, you will inherit their ability and become a Cop yourself."
      ]
    },
    "desperado": {
      "name": "Desperado",
      "memo": [
        "Desperado: At Night, you can PM the host the name of another player. You will kill this player if they're not aligned with the TOWN, but you will die if they are."
      ]
    },
    "wilddiscard": {
      "name": "Wild disCard",
      "alignment": "solo",
      "memo": [
        "Wild disCard: You may choose a different role from the game's discards."
      ]
    },
    "discard": {
      "name": "Discard",
      "memo": [
        "Discard: In IDEAs you may not pick this role."
      ]
    },
    "discardvendor": {
      "name": "Discard Vendor",
      "memo": [
        "Discard Vendor: During the Night, you may PM the host the name of another player and a discarded role. The chosen player will receive a One-Shot version of the discarded role to use."
      ]
    },
    "doctor": {
      "name": "Doctor",
      "memo": [
        "Doctor: During the Night, you may PM the host the name of another player. This player will be protected from all nightkills for that Night."
      ],
      "image": "doctor"
    },
    "doityourselfer": {
      "name": "Do-It-Yourselfer",
      "memo": [
        "Do-It-Yourselfer: Each Night, you may use a One-Shot ability of a discarded role. You may not use a discarded role multiple times."
      ]
    },
    "drookez": {
      "name": "Drookez",
      "alignment": "mafia",
      "memo": [
        "Drookez: A Deathproof Mafia's Child Lover. Drookez gets revealed at the start of the game, but can only die when their (unknown) lover dies!"
      ]
    },
    "duskiller": {
      "name": "Duskiller",
      "alignment": "solo",
      "memo": [
        "Duskiller: At night you may PM the host the name of another player. This player will die after the following day."
      ]
    },
    "et": {
      "name": "E.T.",
      "alignment": "solo",
      "memo": [
        "E.T.: You win if either the Town or the Aliens win."
      ]
    },
    "fbiagent": {
      "name": "FBI Agent",
      "memo": [
        "FBI Agent: Each night you can PM the host the name of another player. You will be told if they are SERIAL KILLER or NOT SERIAL KILLER, or receive NO RESULT if your investigation failed."
      ],
      "image": "cop"
    },
    "firefighter": {
      "name": "Firefighter",
      "memo": [
        "Firefighter: During the Night, you may PM the host the name of another player. This player can't be primed by an Arsonist that night."
      ]
    },
    "flipflop": {
      "name": "Flip Flop",
      "alignment": "solo",
      "memo": [
        "Flip Flop: Every odd Day and Night, you are aligned with the Town, and every even Day and Night with the Mafia."
      ]
    },
    "follower": {
      "name": "Follower",
      "memo": [
        "Follower: During the Night, you may PM the host the name of another player. You will get to know what action, if any, this player performed."
      ],
      "image": "cop"
    },
    "friendrecruiter": {
      "name": "Friend Recruiter",
      "memo": [
        "Besides your normal win-condition, you can win when only Friends are left alive. You can talk to other Friends. Once a game, at night, you may PM the host the name of another player. This player will be turned into a Friend."
      ]
    },
    "fruitvendor": {
      "name": "Fruit Vendor",
      "memo": [
        "Fruit Vendor: During the Night, you may PM the host the name of another player. This player will be notified that they received fruit."
      ]
    },
    "gladiator": {
      "name": "Gladiator",
      "memo": [
        "Gladiator: During the Night, you may PM the host the names of two players. These two players will be the only two who can be lynched the next day, assuming both of them are alive at the end of the night."
      ]
    },
    "goofactory": {
      "name": "Goofactory",
      "memo": [
        "goofactory: During the Night, you may PM the host the name of another player. You will be able to turn this player into a Goo type of your choice."
      ]
    },
    "goomaker": {
      "name": "Goomaker",
      "memo": [
        "Goomaker: During the Night, you may PM the host the name of another player. This player will take on the Black Goo ability."
      ]
    },
    "governor": {
      "name": "Governor",
      "memo": [
        "Governor: At the end of each day, the Governor can decide whether the person who would be lynched will die or not."
      ]
    },
    "greygoo": {
      "name": "Grey Goo",
      "memo": [
        "You can target a player to turn them into more Grey Goo. Their alignment doesn't change."
      ]
    },
    "greygoocrackingidea": {
      "name": "Grey Goo (Cracking Idea)",
      "alignment": "goo",
      "memo": [
        "Grey Goo: Anyone who targets you will join the Cult. You will die after Night 2. There is no way to stop this death."
      ]
    },
    "gossiper": {
      "name": "Gossiper",
      "memo": [
        "Gossiper: During the Night, you can PM the host the name of another player. This player will get to know who targeted you."
      ]
    },
    "guard": {
      "name": "Guard",
      "memo": [
        "Guard (Assassin in the Court): You get to know the identity of the King at the start of the game."
      ]
    },
    "gunsmith": {
      "name": "Gunsmith",
      "memo": [
        "Gunsmith: Once per day or night, you can PM the name of a player to the host. This player will receive a gun, which they can kill someone with that day (if given at day) or the next day (if given at night)."
      ]
    },
    "halter": {
      "name": "Halter",
      "memo": [
        "Halter: During the night, you can give the host a set of arbitrary roles. You will be told if the setup will HALT or RUN INDEFINITELY."
      ]
    },
    "hastylover": {
      "name": "Hasty Lover",
      "memo": [
        "Hasty Lover: During the Night, you must PM the name of a player to the host. For that night and the following day, you are Lovers."
      ]
    },
    "hater": {
      "name": "Hater",
      "memo": [
        "Hater: During the Night, you can PM the name of a player to the host. This player will take one less vote to be lynched the next day."
      ]
    },
    "hider": {
      "name": "Hider",
      "memo": [
        "Hider: During the Night, you may PM the host the name of another player. You will not be able to be targeted that night, but if the person you targeted died or is not aligned with the TOWN, you die."
      ]
    },
    "homekeeper": {
      "name": "Homekeeper",
      "memo": [
        "Homekeeper: During the Night, you may PM the host the name of another player. If they idled, they will not be able to be nightkilled that night."
      ]
    },
    "innocentchild": {
      "name": "Innocent Child",
      "alignment": "town",
      "memo": [
        "Innocent Child: At any point during the game, you may PM the host to reveal you as TOWN publicly."
      ]
    },
    "inquisitor": {
      "name": "Inquisitor",
      "alignment": "solo",
      "memo": [
        "Inquisitor: During the Night, you may PM the host the name of another player. This player will die, if not, they will be recruited into your cult."
      ]
    },
    "jackofalltrades": {
      "name": "Jack-of-all-Trades",
      "memo": [
        "Jack-of-all-Trades: You may use the actions of a Cop, a Roleblocker, and a Doctor once a game each."
      ]
    },
    "jailkeeper": {
      "name": "Jailkeeper",
      "memo": [
        "Jailkeeper: During the Night, you may PM the host the name of another player. This player will be protected from all nightkills for that Night and won't be able to use an action that Night."
      ]
    },
    "janitor": {
      "name": "Janitor",
      "memo": [
        "Janitor: Whenever a player dies, the Janitor can decide whether or not their role gets revealed."
      ]
    },
    "jester": {
      "name": "Jester",
      "alignment": "solo",
      "memo": [
        "Jester: You are aligned with yourself. You win if you get lynched at any point during the game."
      ]
    },
    "journalist": {
      "name": "Journalist",
      "memo": [
        "Journalist: Each night, you can PM the host the name of a player. When you die, all players you inspected will be publicly revealed as TOWN or NOT TOWN."
      ]
    },
    "judas": {
      "name": "Judas",
      "alignment": "solo",
      "memo": [
        "Judas: You start off aligned with the TOWN, but when you get lynched for the first time you don't die. Instead, you become aligned with the MAFIA."
      ]
    },
    "judge": {
      "name": "Judge",
      "memo": [
        "Judge: During the Night, you can PM the host the name of a player. If they are of a different alignment than the person being lynched the day prior, they die."
      ]
    },
    "king": {
      "name": "King",
      "memo": [
        "King (Assassin in the Court): The Assassin wins if you die. The Guards know your identity."
      ]
    },
    "kingmaker": {
      "name": "Kingmaker",
      "memo": [
        "Kingmaker: Each night, you can PM the host the name of a player. The next day this person, if alive, will decide the lynch for that day."
      ]
    },
    "leader": {
      "name": "Leader",
      "memo": [
        "Leader: You are the leader of a faction. You may get special actions. Ask the host for more information."
      ]
    },
    "littleliar": {
      "name": "Little Liar",
      "memo": [
        "Little Liar: At any point during the game, you may PM the host to reveal you as TOWN publicly. (Little Liars are usually scum-aligned)"
      ]
    },
    "loner": {
      "name": "Loner",
      "alignment": "solo",
      "memo": [
        "Loner: You win when everyone else is dead. You have no partners or nightkill."
      ]
    },
    "loverboy": {
      "name": "Loverboy",
      "memo": [
        "Loverboy: During the Night, you can PM the host the name of another player. They will die if you die and are informed of this."
      ]
    },
    "loyallover": {
      "name": "Loyal Lover",
      "alignment": "solo",
      "memo": [
        "Loyal Lover: Once a game, at night, you may PM the host the name of another player. You will become lovers with them. You can only win if the person you're lovers with wins."
      ]
    },
    "lure": {
      "name": "Lure",
      "memo": [
        "Lure: During the Night, you can PM the host the name of another player. This player will be forced to target you."
      ]
    },
    "lyncher": {
      "name": "Lyncher",
      "alignment": "solo",
      "memo": [
        "Lyncher: You win when you get a specific player lynched."
      ]
    },
    "magician": {
      "name": "Magician",
      "memo": [
        "Magician: During the Night, you can PM the host the name of another player. This player will be removed from the game at the end of the night, without a reveal. While the Mafia's kill target (if successful) stays in the game. At the end of the next day, the Magician's target is added back, while the Mafia's kill is removed."
      ]
    },
    "mentor": {
      "name": "Mentor",
      "alignment": "solo",
      "memo": [
        "Mentor: Can recruit a mentee when they do not have a living mentee. They share a factional kill while there is a living mentee. If the mentor dies, the mentee dies with them."
      ]
    },
    "millermaker": {
      "name": "Millermaker",
      "memo": [
        "Millermaker: Each night, you can PM the host the name of a player. This player will permanently show up as guilty to investigative role."
      ]
    },
    "missionary": {
      "name": "Missionary",
      "memo": [
        "Missionary: During the Night, you can PM the host the name of another player. This player will not be able to kill anyone else."
      ]
    },
    "modposter": {
      "name": "Modposter",
      "memo": [
        "Modposter: At any point during the game, you may PM the host a phrase. They will publicly, yet anonymously, post this phrase in chat."
      ]
    },
    "monarch": {
      "name": "Monarch",
      "memo": [
        "Monarch: You are Bulletproof, Unlynchable and a Day Vigilante. However, all these abilities go away when any one of them has been activated."
      ]
    },
    "motiondetector": {
      "name": "Motion Detector",
      "memo": [
        "Motion Detector: During the Night, you may PM the host the name of another player. You will get to know whether any actions were performed on or by this player."
      ],
      "image": "cop"
    },
    "multiplier": {
      "name": "Multiplier",
      "memo": [
        "Multiplier: During the Night, you can PM the host the name of another player. This player's action will target all players in the game."
      ]
    },
    "neapolitan": {
      "name": "Neapolitan",
      "memo": [
        "Neapolitan: Each night, you can PM the host the name of a player. You will be told if they are VT or NOT VT, or receive NO RESULT if your investigation failed."
      ],
      "image": "cop"
    },
    "necromancer": {
      "name": "Necromancer",
      "memo": [
        "Necromancer: Once a game at Night, you can PM the host to revive all dead players for the following Day and Night."
      ]
    },
    "nightmare": {
      "name": "Nightmare",
      "memo": [
        "Nightmare: During the Night, you can PM the host the name of another player. This player will not be able to talk or lynch the next day, but can use their action again."
      ]
    },
    "nurse": {
      "name": "Nurse",
      "memo": [
        "Nurse: When a Doctor dies, you will become a Doctor instead."
      ],
      "image": "doctor"
    },
    "nymphomaniac": {
      "name": "Nymphomaniac",
      "memo": [
        "Nymphomaniac: Has to PM the host the name of a player Night 1. You will become Lovers with this player."
      ]
    },
    "oneshottownie": {
      "name": "One Shot Townie",
      "alignment": "solo",
      "memo": [
        "One Shot Townie: Starts out as a Town player. Turns into a Survivor at the start of Day 2."
      ]
    },
    "oracle": {
      "name": "Oracle",
      "memo": [
        "Oracle: Each night, you can PM the host the name of a player. If you die that night, or the next day, you will reveal their role publicly."
      ]
    },
    "oraclesnaqsidea": {
      "name": "Oracle (Snaq's Idea)",
      "memo": [
        "Oracle: During the Night, you can PM the host a question about the setup of the game. They will answer you with YES or NO."
      ]
    },
    "organdonor": {
      "name": "Organ Donor",
      "memo": [
        "Organ Donor: During the Night, you can PM the host the name of a dead player. You will die, but this player will be revived."
      ]
    },
    "palettegoo": {
      "name": "Palette Goo",
      "memo": [
        "Palette Goo: During the Night, you may PM the the host a Goo type. You will turn into this type of Goo."
      ]
    },
    "parrotrole": {
      "name": "Parrot Role",
      "memo": [
        "Parrot Role: Each night, you can PM the host the name of a player. If they have an active ability, you use this ability on them."
      ]
    },
    "politician": {
      "name": "Politician",
      "memo": [
        "Politician: Each night, you can PM the host the name of two players. You give the vote of the former player to the latter player for the next day."
      ]
    },
    "praiser": {
      "name": "Praiser",
      "memo": [
        "Praiser: During the Night, you can PM the host the name of another player. This player will take one more lynch to be lynched the following day."
      ]
    },
    "prettylady": {
      "name": "Pretty Lady",
      "memo": [
        "Pretty Lady: During the Night, you may PM the host the name of another player. This player won't be able to use an action this Night. If you target a Werewolf performing a kill, you redirect its kill onto you."
      ]
    },
    "privateinvestigator": {
      "name": "Private Investigator",
      "memo": [
        "Private Investigator: Each night you can PM the host the name of another player. You will be told if they are CULT or NOT CULT, or receive NO RESULT if your investigation failed."
      ],
      "image": "cop"
    },
    "prober": {
      "name": "Prober",
      "memo": [
        "Prober: Each night you can PM the host the name of another player. You will be told if they are WEREWOLF or NOT WEREWOLF, or receive NO RESULT if your investigation failed. Additionally, this player can't perform a night action that night."
      ]
    },
    "pseudocider": {
      "name": "Pseudocider",
      "memo": [
        "Pseudocider: Once a game, during the Night, you can PM the host to remove you from the game. You will be removed without reveal, and can be added back during a future night upon choice."
      ]
    },
    "pseudojester": {
      "name": "Pseudojester",
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
      "memo": [
        "Psychiatrist: During the Night, you may PM the host the name of another player. If this player is a Serial Killer, they will be converted to a Vanilla Townie."
      ]
    },
    "psychomagnet": {
      "name": "Psychomagnet",
      "memo": [
        "Psychomagnet: During the Night, you may PM the host the name of another player. All other actions used that Night will target this player instead."
      ]
    },
    "reloader": {
      "name": "Reloader",
      "memo": [
        "Reloader: During the Night, you may PM the host the name of another player. If this player has used an X-Shot action, they regain their shot, allowing them to use the action again."
      ]
    },
    "recruiter": {
      "name": "Recruiter",
      "memo": [
        "Recruiter: During the Night, you may PM the host the name of another player. This player will be recruited to your own alignment."
      ]
    },
    "redgoocrackingidea": {
      "name": "Red Goo (Cracking Idea)",
      "alignment": "goo",
      "memo": [
        "Red Goo: Once a game, you may PM the host the name of another player at night. This player will unstoppably die. It is announced that a Red Goo performed this kill."
      ]
    },
    "redirector": {
      "name": "Redirector",
      "memo": [
        "Redirector: During the Night, you may PM the host the names of two other players. The former player will target the latter player instead."
      ]
    },
    "reviver": {
      "name": "Reviver",
      "memo": [
        "Reviver: During the Night, you may PM the host the name of a dead player. This player will be added back to the game."
      ]
    },
    "roleblocker": {
      "name": "Roleblocker",
      "memo": [
        "Roleblocker: During the Night, you may PM the host the name of another player. This player won't be able to use an action this Night."
      ]
    },
    "rolevanillaiser": {
      "name": "Role Vanillaiser",
      "memo": [
        "Role Vanillaiser: During the Night, you may PM the host the name of a role. If this role is in this setup, you will vanillaise any player with this role."
      ]
    },
    "rolestopper": {
      "name": "Rolestopper",
      "memo": [
        "Rolestopper: Each night you can PM the host the name of another player. All other actions on this player will fail, excluding kills."
      ],
      "image": "doctor"
    },
    "saulus": {
      "name": "Saulus",
      "alignment": "solo",
      "memo": [
        "Saulus: You start off aligned with the MAFIA, but when you get lynched for the first time you don't die. Instead, you become aligned with the TOWN."
      ]
    },
    "schemer": {
      "name": "Schemer",
      "memo": [
        "Schemer: During the Night, you may PM the host the name of another player. You will get to know what kind of action this player used, and may redirect it."
      ]
    },
    "screamer": {
      "name": "Screamer",
      "memo": [
        "Screamer: During the Night, you may PM the host to scream. This will prevent anyone in the game from getting a result."
      ]
    },
    "seer": {
      "name": "Seer",
      "memo": [
        "Seer: During the Night, you may PM the host the name of another player. You will be told if they are WEREWOLF or NOT WEREWOLF, or receive NO RESULT if your investigation failed."
      ],
      "image": "cop"
    },
    "seraphknight": {
      "name": "Seraph Knight",
      "memo": [
        "Seraph Knight: Once a game, you may PM the host the name of another player at night. This player will not be able to be killed at night until you die."
      ],
      "image": "doctor"
    },
    "serialkiller": {
      "name": "Serial Killer",
      "alignment": "solo",
      "memo": [
        "Serial Killer: You are aligned with yourself and win when you are the last player standing. During the Night, you may PM the host the name of another player. This player will die."
      ]
    },
    "shadow": {
      "name": "Shadow",
      "alignment": "solo",
      "memo": [
        "Shadow: You are aligned with yourself. Once a game at Night, you may PM the host the name of another player. You will copy any abilities this player has. Additionally, you may kill someone once each night."
      ]
    },
    "silencer": {
      "name": "Silencer",
      "memo": [
        "Silencer: During the Night, you may PM the host the name of another player. This player will not be able to talk during the next day. Ask the host whether this player will be able to lynch or not."
      ]
    },
    "silencergreateridea": {
      "name": "Silencer (Greater Idea)",
      "memo": [
        "Silencer: During the Night, you may PM the host the name of another player. This player will not be able to lynch during the next day."
      ]
    },
    "solargod": {
      "name": "Solar God",
      "memo": [
        "Solar God: During the Day, you may PM the host to end the Day. The Day will immediately end."
      ]
    },
    "stalker": {
      "name": "Stalker",
      "memo": [
        "Stalker: During the Night, you may PM the host the name of another player. You will get to know who this player targeted, and their target will be roleblocked."
      ]
    },
    "substitute": {
      "name": "Substitute",
      "memo": [
        "Substitute: Once a game, during the Night, you may PM the host the name of another player. If you die before this player, this player will die instead of you."
      ]
    },
    "subwayrecruiter": {
      "name": "Subway Recruiter",
      "memo": [
        "Subway Recruiter: During the Night, you may PM the host to add a player. If there's a player on the sublist, they will be added to the game, as your alignment."
      ]
    },
    "suicidebomber": {
      "name": "Suicide Bomber",
      "memo": [
        "Suicide Bomber: During the Night, you may PM the host the name of another player. This player will be killed, but you will die as well."
      ]
    },
    "super": {
      "name": "Super",
      "memo": [
        "Super: Once a game, during the Night, you may PM the host to activate. If you would die that night, or the following day, you survive and may kill someone instead."
      ]
    },
    "survivor": {
      "name": "Survivor",
      "alignment": "solo",
      "memo": [
        "Survivor: You are aligned with yourself. You win when you are alive when the game ends."
      ]
    },
    "sympathiser": {
      "name": "Sympathiser",
      "memo": [
        "Sympathiser: You are aligned with a specified alignment when there are other players of this alignment in the game. Otherwise, you are TOWN."
      ]
    },
    "tallier": {
      "name": "Tallier",
      "memo": [
        "Tallier: During the Night, you may PM the host to get to know how many people on yesterday's lynch were not aligned with the Town."
      ]
    },
    "teacher": {
      "name": "Teacher",
      "memo": [
        "Teacher: During the Night, you may PM the host the name of another player. This player will receive a One-Shot Cop to use, that gets TOWN / NOT TOWN results."
      ]
    },
    "tourist": {
      "name": "Tourist",
      "memo": [
        "Tourist: During the Night, you have to PM the host the name of another player. You'll target this player, without any additional affect."
      ]
    },
    "tracker": {
      "name": "Tracker",
      "memo": [
        "Tracker: During the Night, you may PM the host the name of another player. You will be told who, if anyone, this player targeted."
      ],
      "image": "cop"
    },
    "trainwreck": {
      "name": "Trainwreck",
      "memo": [
        "Trainwreck: During the Night, you may PM the host the name of another player. Everyone who is lynching this person at the end of the day dies."
      ]
    },
    "traitor": {
      "name": "Traitor",
      "alignment": "solo",
      "memo": [
        "Traitor: You are aligned with the MAFIA, but are not able to perform the factional kill, and do not know the other members of the Mafia."
      ]
    },
    "unblocker": {
      "name": "Unblocker",
      "memo": [
        "Unblocker: During the Night, you may PM the host the name of another player. Their action will not fail."
      ]
    },
    "underdog": {
      "name": "Underdog",
      "alignment": "solo",
      "memo": [
        "Underdog: You are aligned with yourself. You start out as a Survivor, but turn into the alignment of the first player to die during a day when they die."
      ]
    },
    "universalsympathiser": {
      "name": "Universal Sympathiser",
      "alignment": "solo",
      "memo": [
        "Universal Sympathiser: You win if the Town does not win."
      ]
    },
    "universalusurper": {
      "name": "Universal Usurper",
      "alignment": "solo",
      "memo": [
        "Universal Usurper: You win if you are alive and the Town does not win. No one else will win."
      ]
    },
    "unjester": {
      "name": "Unjester",
      "alignment": "solo",
      "memo": [
        "Unjester: You are aligned with yourself. You win when you are killed."
      ]
    },
    "unlyncher": {
      "name": "Unlyncher",
      "alignment": "solo",
      "memo": [
        "Unlyncher: You are aligned with yourself. To win, you must make sure a specific player is never lynched during the game."
      ]
    },
    "vanillaiser": {
      "name": "Vanillaiser",
      "memo": [
        "Vanillaiser: During the Night, you may PM the host the name of another player. Starting the next day, this player will lose any role they have, turning into a Vanilla role."
      ]
    },
    "vanguard": {
      "name": "Vanguard",
      "memo": [
        "Vanguard: During the Night, you may PM the host the name of another player. If this player used an action, they can't be killed that night."
      ]
    },
    "vigilante": {
      "name": "Vigilante",
      "memo": [
        "Vigilante: During the Night, you may PM the host the name of another player. This player will be killed."
      ]
    },
    "voyeur": {
      "name": "Voyeur",
      "memo": [
        "Voyeur: During the Night, you may PM the host the name of another player. You will be told what actions, if any, targeted this player."
      ],
      "image": "cop"
    },
    "watcher": {
      "name": "Watcher",
      "memo": [
        "Watcher: During the Night, you may PM the host the name of another player. You will be told who, if anyone, targeted this player."
      ],
      "image": "cop"
    },
    "wildcard": {
      "name": "Wild Card",
      "memo": [
        "Wild Card: During the Night, you may PM the host the name of another player. All actions used on the Wild Card, except kills, are redirected to the target."
      ]
    },
    "wildcardgreateridea": {
      "name": "Wild Card (Greater Idea)",
      "alignment": "solo",
      "memo": [
        "Wild Card: You get a different randomised role."
      ]
    },
    "yogibear": {
      "name": "Yogi Bear",
      "memo": [
        "Yogi Bear: During the Night, you may PM the host the name of another player. You will be told whether they are TREESTUMP or NOT TREESTUMP, or NO RESULT if your investigation failed."
      ]
    },
    "active": {
      "name": "Active",
      "memo": [
        "Active: You can choose when to activate your role."
      ]
    },
    "alpha": {
      "name": "Alpha",
      "memo": [
        "Alpha: You will be inspected as NOT WEREWOLF."
      ]
    },
    "ascetic": {
      "name": "Ascetic",
      "memo": [
        "Ascetic: Actions on you will fail, excluding kills."
      ]
    },
    "backup": {
      "name": "Backup",
      "memo": [
        "Backup: If the role specified in your role PM dies, you become that role instead."
      ]
    },
    "bluegoo": {
      "name": "Blue Goo",
      "memo": [
        "Blue Goo: If you die or are lynched, the player who kills you or casts the lynching vote becomes blue goo themselves."
      ]
    },
    "bomb": {
      "name": "Bomb",
      "memo": [
        "Bomb: If you are killed, your killer will die too."
      ]
    },
    "browngoo": {
      "name": "Brown Goo",
      "memo": [
        "Brown Goo: You will steal the vote of anyone who targets you for the next game day."
      ]
    },
    "bulletproof": {
      "name": "Bulletproof",
      "memo": [
        "Bulletproof: You cannot be nightkilled."
      ]
    },
    "carddealer": {
      "name": "Card Dealer",
      "memo": [
        "Anyone who targets you, will have their role replaced by a random other role."
      ]
    },
    "celebrity": {
      "name": "Celebrity",
      "memo": [
        "It will be publicly revealed who targeted you each night."
      ]
    },
    "clairvoyant": {
      "name": "Clairvoyant",
      "memo": [
        "Clairvoyant: You get to know how many different alignments are in the game."
      ]
    },
    "compulsive": {
      "name": "Compulsive",
      "memo": [
        "Compulsive: You must your use action each night."
      ]
    },
    "compulsivechildkiller": {
      "name": "Compulsive Child Killer",
      "memo": [
        "Compulsive Child Killer: Whenever an Innocent Child (or a variation of one) reveals itself, you will immediately kill them."
      ]
    },
    "consistent": {
      "name": "Consistent",
      "memo": [
        "Consistent: Once you targeted someone, you may not target anyone else."
      ]
    },
    "contrary": {
      "name": "Contrary",
      "memo": [
        "Contrary: Your action only succeeds when it'd fail without this modifier."
      ]
    },
    "curfewagent": {
      "name": "Curfew Agent",
      "memo": [
        "Curfew Agent: While you are alive, no one will die at night."
      ]
    },
    "day": {
      "name": "Day",
      "memo": [
        "Day: You have to use your action during the Day."
      ]
    },
    "deactivator": {
      "name": "Deactivator",
      "memo": [
        "Deactivator: While you are alive, a specific role can't be used."
      ]
    },
    "deathmiller": {
      "name": "Death Miller",
      "memo": [
        "Death Miller: You are revealed as a Mafia Goon upon dying."
      ]
    },
    "death": {
      "name": "Death",
      "memo": [
        "Death: You can use your action upon dying."
      ]
    },
    "deathproof": {
      "name": "Deathproof",
      "memo": [
        "Deathproof: You can't die."
      ]
    },
    "detector": {
      "name": "Detector",
      "memo": [
        "Detector: You will be informed of anyone who targeted you."
      ]
    },
    "delayed": {
      "name": "Delayed",
      "memo": [
        "Delayed: Your action will only go through the following night."
      ]
    },
    "doppelganger": {
      "name": "Doppelganger",
      "memo": [
        "Doppelganger: All investigative actions on you return results for the target on the left of you on the userlist."
      ]
    },
    "enabler": {
      "name": "Enabler",
      "memo": [
        "Enabler: When you die, a certain role can't be used anymore."
      ]
    },
    "evangelistic": {
      "name": "Evangelistic",
      "memo": [
        "Evangelistic: You will be inspected as CULT."
      ]
    },
    "excellentsenseofsmell": {
      "name": "Excellent Sense of Smell",
      "memo": [
        "Excellent Sense of Smell: You know how many Goo-aligned players there are in the game."
      ]
    },
    "false": {
      "name": "False",
      "memo": [
        "False: You are not aware that this part of your role doesn't work."
      ]
    },
    "friend": {
      "name": "Friend",
      "memo": [
        "Friend: Besides your normal win-condition, you can win when only Friends are left alive. You can talk to other Friends."
      ]
    },
    "gambit": {
      "name": "Gambit",
      "memo": [
        "Gambit: Your action only works if you die that same night."
      ]
    },
    "godfather": {
      "name": "Godfather",
      "memo": [
        "Godfather: You will be inspected as NOT MAFIA."
      ]
    },
    "goldgoo": {
      "name": "Gold Goo",
      "memo": [
        "Whenever someone targets you with a non-factional action, they lose the ability to use that action and you gain it."
      ]
    },
    "gravedigger": {
      "name": "Gravedigger",
      "memo": [
        "Gravedigger: You will return as if you targeted the player who died to Watchers and Trackers."
      ]
    },
    "greengoo": {
      "name": "Green Goo",
      "memo": [
        "Whenever a player targets you with an action, they will become green goo and lose any powers they currently have. Their faction doesn't change."
      ]
    },
    "grimreaper": {
      "name": "Grim Reaper",
      "memo": [
        "Grim Reaper: While you are alive, all dead players are Restless Spirits."
      ]
    },
    "hallucinator": {
      "name": "Hallucinator",
      "memo": [
        "Hallucinator: While you are alive, all dead players reveal a random role in the setup, instead of their own role."
      ]
    },
    "haunting": {
      "name": "Haunting",
      "memo": [
        "Haunting: You can only use your actions after you've died."
      ]
    },
    "hero": {
      "name": "Hero",
      "memo": [
        "Hero: When a King (from Kingmaker) tries to execute you, they die instead."
      ]
    },
    "hirsute": {
      "name": "Hirsute",
      "memo": [
        "Hirsute: You will be inspected as WEREWOLF."
      ]
    },
    "hidden": {
      "name": "Hidden",
      "memo": [
        "Hidden: You are not aware of this part of your role."
      ]
    },
    "hopeful": {
      "name": "Hopeful",
      "memo": [
        "Hopeful: You always receive VIGILANTE upon inspection."
      ]
    },
    "illusionist": {
      "name": "Illusionist",
      "memo": [
        "Illusionist: You become a Restless Spirit after death."
      ]
    },
    "immobileparrot": {
      "name": "Immobile Parrot",
      "memo": [
        "Immobile Parrot: Anyone who targets you, targets themselves instead."
      ]
    },
    "inconsistent": {
      "name": "Inconsistent",
      "memo": [
        "Inconsistent: You may not target any player multiple times."
      ]
    },
    "inheritor": {
      "name": "Inheritor",
      "memo": [
        "Inheritor: You inherit the abilities of the most recently killed player."
      ]
    },
    "insane": {
      "name": "Insane",
      "memo": [
        "Insane: You receive the opposite results from expected upon inspection."
      ]
    },
    "insomniac": {
      "name": "Insomniac",
      "memo": [
        "Insomniac: You may talk at night."
      ]
    },
    "lightkeeper": {
      "name": "Lightkeeper",
      "memo": [
        "Lightkeeper: When you die, the next day is anonymous (and all messages go through the host)."
      ]
    },
    "lightningrod": {
      "name": "Lightning Rod",
      "memo": [
        "Lightning Rod: All actions target you."
      ]
    },
    "lover": {
      "name": "Lover",
      "memo": [
        "Lover: You get a Lover partner, who you can talk with. If either of you dies, the other dies as well."
      ]
    },
    "loyal": {
      "name": "Loyal",
      "memo": [
        "Loyal: Your actions only work on players with the same alignment as you."
      ]
    },
    "lynchbait": {
      "name": "Lynchbait",
      "memo": [
        "Lynchbait: All Lynchers win when you get lynched."
      ]
    },
    "macho": {
      "name": "Macho",
      "memo": [
        "Macho: You cannot be protected from being killed."
      ]
    },
    "mason": {
      "name": "Mason",
      "memo": [
        "Mason: You can speak to other Masons, who are confirmed to not be members of the MAFIA."
      ]
    },
    "mayor": {
      "name": "Mayor",
      "memo": [
        "Mayor: Your lynch counts as two."
      ]
    },
    "miller": {
      "name": "Miller",
      "memo": [
        "Miller: You will always be inspected as MAFIA."
      ]
    },
    "mirror": {
      "name": "Mirror",
      "memo": [
        "Mirror: When someone targets you, you use the same action on them."
      ]
    },
    "monk": {
      "name": "Monk",
      "memo": [
        "Monk: You can speak to other Monks, who are confirmed to not be WEREWOLVES."
      ]
    },
    "murderous": {
      "name": "Murderous",
      "memo": [
        "Murderous: You die if you don't kill anyone."
      ]
    },
    "naive": {
      "name": "Naive",
      "memo": [
        "Naive: You always receive a NOT GUILTY result upon inspection, or an equivalent to this."
      ]
    },
    "named": {
      "name": "Named",
      "memo": [
        "Named: You got a different role name than usual."
      ]
    },
    "neighbor": {
      "name": "Neighbor",
      "memo": [
        "Neighbor: You can talk to other Neighbors."
      ]
    },
    "nexus": {
      "name": "Nexus",
      "memo": [
        "Nexus: All actions targeting you, excluding kills, will be redirected to a random other player."
      ]
    },
    "night": {
      "name": "Night",
      "memo": [
        "Night: You have to use your action during the Night."
      ]
    },
    "ninja": {
      "name": "Ninja",
      "memo": [
        "Ninja: Trackers, Watchers and similar roles will always get it as if you targeted nobody, or nobody targeted you."
      ]
    },
    "omniscient": {
      "name": "Omniscient",
      "memo": [
        "Omniscient: You know all roles that are present in the setup."
      ]
    },
    "orangegoo": {
      "name": "Orange Goo",
      "memo": [
        "Orange Goo: You will steal the vote of anyone who targets you for the rest of the game."
      ]
    },
    "pacifist": {
      "name": "Pacifist",
      "memo": [
        "Pacifist: You are unable to kill."
      ]
    },
    "paranoid": {
      "name": "Paranoid",
      "memo": [
        "Paranoid: You always receive GUILTY upon inspection, or an equivalent to this."
      ]
    },
    "patron": {
      "name": "Patron",
      "memo": [
        "Patron: Once you die, your faction loses."
      ]
    },
    "prism": {
      "name": "Prism",
      "memo": [
        "Prism: Any actions targeting you, target all players."
      ]
    },
    "randomizer": {
      "name": "Randomizer",
      "memo": [
        "Randomizer: If multiple people targeted you, they will target a random person who targeted you instead."
      ]
    },
    "paranoidgunowner": {
      "name": "Paranoid Gun Owner",
      "memo": [
        "Paranoid Gun Owner: You kill anyone who targets you."
      ]
    },
    "passive": {
      "name": "Passive",
      "memo": [
        "Passive: You cannot choose when to activate your role."
      ]
    },
    "postrestriction": {
      "name": "Post Restriction",
      "memo": [
        "Post Restriction: You have a certain limit on what you post."
      ]
    },
    "psychotrooper": {
      "name": "Psychotrooper",
      "memo": [
        "Psychotrooper: All investigative results are reversed while you are alive."
      ]
    },
    "public": {
      "name": "Public",
      "memo": [
        "Public: Your result is displayed publicly."
      ]
    },
    "purplegoo": {
      "name": "Purple Goo",
      "memo": [
        "Purple Goo: Whenever someone targets you with an action, you switch roles with that player."
      ]
    },
    "rainbowgoo": {
      "name": "Rainbow Goo",
      "memo": [
        "Rainbow Goo: Whenever a player targets you with an action, you do something random (anything any other color goo can do) to them."
      ]
    },
    "random": {
      "name": "Random",
      "memo": [
        "Random: Your role is used randomly."
      ]
    },
    "redgoo": {
      "name": "Red Goo",
      "memo": [
        "Red Goo: Whenever a player targets you with an action, you become neighbors with them."
      ]
    },
    "reflexive": {
      "name": "Reflexive",
      "memo": [
        "Reflexive: You use your action on people who target you."
      ]
    },
    "reserved": {
      "name": "Reserved",
      "memo": [
        "Reserved: This player can PM anyone, and can be PMd back, but may not talk in the main chat (excluding lynches)."
      ]
    },
    "restlessspirit": {
      "name": "Restless Spirit",
      "memo": [
        "Restless Spirit: You can lynch after your death."
      ]
    },
    "retiredmarine": {
      "name": "Retired Marine",
      "memo": [
        "Retired Marine: You cannot be killed by Serial Killers."
      ]
    },
    "retiredwerewolfhunter": {
      "name": "Retired Werewolf Hunter",
      "memo": [
        "Retired Werewolf Hunter: You cannot be killed by Werewolves."
      ]
    },
    "sacrifice": {
      "name": "Sacrifice",
      "memo": [
        "Sacrifice: No one else can die, besides other Sacrifices, until you die."
      ]
    },
    "sane": {
      "name": "Sane",
      "memo": [
        "Sane: You receive the correct results upon inspection."
      ]
    },
    "secretagent": {
      "name": "Secret Agent",
      "memo": [
        "Secret Agent: You are informed of which factions are in the game immediately."
      ]
    },
    "self": {
      "name": "Self",
      "memo": [
        "Self: You must target yourself."
      ]
    },
    "semilyncher": {
      "name": "Semilyncher",
      "memo": [
        "Semilyncher: If you get a specific player lynched, they turn into your alignment."
      ]
    },
    "senpai": {
      "name": "Senpai",
      "memo": [
        "Senpai: When you get lynched, everyone who lynched you dies as well."
      ]
    },
    "silvergoo": {
      "name": "Silver Goo",
      "memo": [
        "Silver Goo: Whenever another player targets you with an action, you become a perfect copy of that player."
      ]
    },
    "strongman": {
      "name": "Strongman",
      "memo": [
        "Strongman: Your kill can not fail."
      ]
    },
    "strongwilled": {
      "name": "Strong-Willed",
      "memo": [
        "Strong-Willed: Your actions can not fail, excluding kills."
      ]
    },
    "suicidal": {
      "name": "Suicidal",
      "memo": [
        "Suicidal: You will passively die."
      ]
    },
    "supersaint": {
      "name": "Supersaint",
      "memo": [
        "Supersaint: When this player is lynched, the player who placed the hammering vote dies as well."
      ]
    },
    "talkative": {
      "name": "Talkative",
      "memo": [
        "Talkative: If anyone else has an ability that causes them to be able to talk to other players, you may talk with them too."
      ]
    },
    "tealgoo": {
      "name": "Teal Goo",
      "memo": [
        "Teal Goo: Anyone who targets you with an action will become a different role."
      ]
    },
    "temporary": {
      "name": "Temporary",
      "memo": [
        "Temporary: Only affects the target for one night."
      ]
    },
    "tentacled": {
      "name": "Tentacled",
      "memo": [
        "Tentacled: You will always be inspected as ALIEN."
      ]
    },
    "toxicgoo": {
      "name": "Toxic Goo",
      "memo": [
        "Toxic Goo: Anyone who targets you with an ability will die of poison at the end of the next day."
      ]
    },
    "tree": {
      "name": "Tree",
      "memo": [
        "Tree: You can talk after your death, provided you died due to a lynch."
      ]
    },
    "treestump": {
      "name": "Treestump",
      "memo": [
        "Treestump: You can talk after your death."
      ]
    },
    "trypophobic": {
      "name": "Trypophobic",
      "memo": [
        "Trypophobic: You may vanillaise someone upon being lynched."
      ]
    },
    "turquoisegoo": {
      "name": "Turquoise Goo",
      "memo": [
        "Turquoise Goo: When you die, you can turn another player into Turquoise Goo."
      ]
    },
    "ugly": {
      "name": "Ugly",
      "memo": [
        "Ugly: You know how many Goo-aligned players there are, and can win with them as long as you survive. You are inspected as ALIEN."
      ]
    },
    "universalbackup": {
      "name": "Universal Backup",
      "memo": [
        "Universal Backup: You inherit the role of the first player who died."
      ]
    },
    "unlynchable": {
      "name": "Unlynchable",
      "memo": [
        "Unlynchable: You cannot be lynched. If you're lynched, you will survive and the game will turn to Night."
      ]
    },
    "usurper": {
      "name": "Usurper",
      "memo": [
        "Usurper: You must outlive a Godfather before you can win."
      ]
    },
    "vengeful": {
      "name": "Vengeful",
      "memo": [
        "Vengeful: When this player is lynched, they can kill another player."
      ]
    },
    "watchlisted": {
      "name": "Watchlisted",
      "memo": [
        "Watchlisted: You will always be inspected as SERIAL KILLER."
      ]
    },
    "weak": {
      "name": "Weak",
      "memo": [
        "Weak: You will die if you target a player who is not aligned with the TOWN."
      ]
    },
    "whisperer": {
      "name": "Whisperer",
      "memo": [
        "Whisperer: You may PM any player in the game, but they may not PM you back."
      ]
    },
    "whitegoo": {
      "name": "White Goo",
      "memo": [
        "White Goo: All dead players will turn to White Goo as they die. You show up as town on death."
      ]
    },
    "wrongplaceatthewrongtime": {
      "name": "Wrong Place at the Wrong Time",
      "memo": [
        "Wrong Place at the Wrong Time: You will always be inspected as the result that implies NOT TOWN."
      ]
    },
    "xshot": {
      "name": "X-Shot",
      "memo": [
        "X-Shot: You may only use this ability X times during the game."
      ]
    },
    "yellowgoo": {
      "name": "Yellow Goo",
      "memo": [
        "Yellow Goo: Whenever someone targets you with an action, they lose the ability to use that action and you gain it. This even affects factional actions. That member of the faction can no longer perform that action. Other members of the faction can still perform it."
      ]
    }
  },
  "alignments": {
    "town": {
      "name": "Town",
      "plural": "Town",
      "color": "#060",
      "buttonColor": "#0A0",
      "memo": [
        "You are aligned with the <span style=\"color:#060;font-weight:bold\">Town</span>. You win when all threats to the Town are eliminated and at least one Town-aligned player is still alive, or nothing can prevent the same."
      ],
      "image": "villager"
    },
    "mafia": {
      "name": "Mafia",
      "plural": "Mafia",
      "color": "#F00",
      "memo": [
        "Factional Communication: If there are other aligned players, you may PM them during the game.",
        "Factional Kill: The Mafia may kill one player per night.",
        "You are aligned with the <span style=\"color:#F00;font-weight:bold\">Mafia</span>. You win when all players without a Mafia wincon are eliminated and at least one aligned player is still alive (or nothing can prevent the same)."
      ],
      "image": "mafia"
    },
    "werewolf": {
      "name": "Werewolf",
      "plural": "Werewolves",
      "color": "#FFA500",
      "memo": [
        "Factional Communication: If there are other Werewolf-aligned players, you may PM them during the game.",
        "Factional Kill: The Werewolves may kill one player per Night.",
        "You are aligned with the <span style=\"color:#FFA500;font-weight:bold\">Werewolves</span>. You win when all players without a Werewolf wincon are eliminated and at least one Werewolf-aligned player is still alive (or nothing can prevent the same)."
      ],
      "image": "werewolf"
    },
    "alien": {
      "name": "Alien",
      "plural": "Aliens",
      "color": "#F0F",
      "memo": [
        "Factional Communication: If there are other Alien-aligned players, you may PM them during the game.",
        "Factional Kill: The Aliens may kill one player <span style=\"text-decoration:underline\">once during the game</span>.",
        "You are aligned with the <span style=\"color:#F0F;font-weight:bold\">Aliens</span>. You win when all players without a Alien wincon are eliminated and at least one Alien-aligned player is still alive (or nothing can prevent the same)."
      ],
      "image": "villager"
    },
    "cult": {
      "name": "Cult",
      "plural": "Cultists",
      "color": "#000",
      "memo": [
        "Factional Communication: If there are other Cult-aligned players, you may PM them during the game.",
        "Factional Concept: The Cult can recruit other players into the Cult more often than not. Ask the Host for more information about how this works exactly.",
        "You are aligned with the <span style=\"color:#000;font-weight:bold\">Cult</span>. You win when all players without a Cult wincon are eliminated and at least one Cult-aligned player is still alive (or nothing can prevent the same)."
      ],
      "image": "villager"
    },
    "cultafia": {
      "name": "Cultafia",
      "plural": "Cultafia",
      "color": "#600",
      "memo": [
        "Factional Communication: If there are other Cultafia-aligned players, you may PM them during the game.",
        "Factional Concept: The Cultafia can recruit and kill players. Ask the Host for more information about how this works exactly.",
        "You are aligned with the <span style=\"color:#600;font-weight:bold\">Cultafia</span>. You win when all players without a Cultafia wincon are eliminated and at least one Cultafia-aligned player is still alive (or nothing can prevent the same)."
      ],
      "image": "villager"
    },
    "goo": {
      "name": "Goo",
      "plural": "Goos",
      "color": "#2FF",
      "memo": [
        "Factional Communication: If there are other Goo-aligned players, you may PM them during the game.",
        "Factional Concept: Goos have interesting Reflexive abilities to aid them more often than not.",
        "You are aligned with the <span style=\"color:#2FF;font-weight:bold\">Goos</span>. You win when all players without a Goo wincon are eliminated and at least one Goo-aligned player is still alive (or nothing can prevent the same)."
      ],
      "image": "villager"
    },
    "replicant": {
      "name": "Replicant",
      "plural": "Replicants",
      "color": "#DDD",
      "memo": [
        "Factional Communication: If there are other Replicant-aligned players, you may PM them during the game.",
        "Factional Kill: The Replicants may kill one player per night.",
        "You are aligned with the <span style=\"color:#DDD;font-weight:bold\">Replicants</span>. You win when all players without a Replicant wincon are eliminated and at least one Replicant-aligned player is still alive (or nothing can prevent the same)."
      ],
      "image": "villager"
    },
    "mime": {
      "name": "Mime",
      "plural": "Mimes",
      "color": "#590eb5",
      "memo": [
        "Factional Communication: If there are other Mime-aligned players, you may PM them during the game.",
        "Factional Roleblock: The Mimes may roleblock one player per night.",
        "You are aligned with the <span style=\"color:#A6B;font-weight:bold\">Mimes</span>. You win when all players with a Mime wincon have been lynched."
      ],
      "image": "villager"
    },
    "arsonist": {
      "name": "Arsonist",
      "plural": "Arsonists",
      "color": "#E82",
      "memo": [
        "Factional Communication: If there are other Arsonist-aligned players, you may PM them during the game.",
        "Factional Actions: The Arsonists may together use one factional action a night.",
        "Factional Prime: The Arsonists prime someone by dousing them with gasoline.",
        "Factional Ignite: The Arsonists light all previously primed players on fire, killing them.",
        "You are aligned with the <span style=\"color:#E82;font-weight:bold\">Arsonists</span>. You win when all players without an Arsonist wincon are eliminated and at least one Arsonist-aligned player is still alive (or nothing can prevent the same)."
      ],
      "image": "villager"
    },
    "pygmee": {
      "name": "Pygmee",
      "plural": "Pygmees",
      "color": "#640",
      "memo": [
        "Factional Knowledge: If there are other Pygmee-aligned players, you know who they are.",
        "Factional Kill: The Pygmees may attempt to kill someone at any moment.",
        "You are aligned with the <span style=\"color:#640;font-weight:bold\">Pygmees</span>. You win when all players without a Pygmee wincon are eliminated and at least one Pygmee-aligned player is still alive (or nothing can prevent the same)."
      ],
      "image": "villager"
    },
    "hypnotist": {
      "name": "Hypnotist",
      "plural": "Hypnotists",
      "color": "#A26",
      "memo": [
        "Factional Communication: If there are other Hypnotist-aligned players, you may PM them during the game.",
        "Factional Hypnotise: The Hypnotists can hypnotise another player every night. For the next day only, this player gains an additional win-condition of lynching another player specified by the Hypnotists.",
        "You are aligned with the <span style=\"color:#A26;font-weight:bold\">Hypnotists</span>. You win when all players without a Hypnotist wincon are eliminated and at least one Hypnotist-aligned player is still alive (or nothing can prevent the same)."
      ],
      "image": "villager"
    },
    "solo": {
      "name": "Solo",
      "plural": "Solos",
      "image": "goon",
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
      "name": "Assassin in the Court",
      "desc": "The Assassin tries to shoot the King to win! The Guards try to protect the King."
    },
    "toomuchscum": {
      "8": "Mafia Goon, Mafia Goon, Serial Killer, FBI Agent, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
      "12": "Mafia Goon, Mafia Goon, Mafia Goon, Werewolf, Werewolf, Lyncher, Cop, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie, Vanilla Townie",
      "name": "Too Much Scum",
      "desc": "Too Much Scum: Find the many scum, reminiscent of the Jungle Republic setup."
    },
    "brothelmafia": {
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
      "name": "Drookez is Mafia Mafia",
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
      "6": " One-Shot Deathproof Mafia Goon, One-Shot Deathproof Traitor Vigilante, One-Shot Deathproof Vigilante, One-Shot Deathproof Reloader, One-Shot Deathproof Reloader, One-Shot Deathproof Reloader",
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
    "ss2": {
      "2": "Hated Mafia, Hated Supersaint, Hated Supersaint",
      "name": "SS2",
      "desc": "SS2: A two-player theme where you have to decide whether the opponent is Town or Mafia!"
    },
    "ss3": {
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
        "Vanilla Townie",
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
  "terms": {},
  "aliases": {
    "assassininthecourt": {
      "name": "assassin in the court"
    },
    "toomuchscum": {
      "name": "too much scum"
    },
    "brothel": {
      "name": "brothel"
    },
    "bloodhound": {
      "name": "bloodhound"
    },
    "dayvig3": {
      "name": "day-vig3"
    },
    "drookezismafiamafia": {
      "name": "drookez is mafia mafia"
    },
    "friendsandenemiesandenemies": {
      "name": "friends and enemies and enemies"
    },
    "forestfire": {
      "name": "forest fire"
    },
    "fireandice": {
      "name": "fire and ice"
    },
    "jungleofbullshit": {
      "name": "jungle of bullshit"
    },
    "killalltownies": {
      "name": "kill all townies"
    },
    "kidswithguns": {
      "name": "kids with guns"
    },
    "lifeordeath": {
      "name": "life or death"
    },
    "lighthouse": {
      "name": "lighthouse"
    },
    "madness": {
      "name": "madness"
    },
    "maintaininglaworderandshallowrelationships": {
      "name": "maintaining law order and shallow relationships"
    },
    "medicalmafia": {
      "name": "medical mafia"
    },
    "minesweeper": {
      "name": "minesweeper"
    },
    "modifiedexecution": {
      "name": "modified execution"
    },
    "nearvanilla": {
      "name": "near vanilla"
    },
    "neighborsdilemma": {
      "name": "neighbors dilemma"
    },
    "nominations": {
      "name": "nominations"
    },
    "pairings": {
      "name": "pairings"
    },
    "parismafia": {
      "name": "paris mafia"
    },
    "seminightless": {
      "name": "semi-nightless"
    },
    "ss2": {
      "name": "ss2"
    },
    "ss3": {
      "name": "ss3"
    },
    "theoneicannotkill": {
      "name": "the one i cannot kill"
    },
    "vanilla": {
      "name": "vanilla"
    },
    "weneedaclear": {
      "name": "we need a clear"
    },
    "weneedafifth": {
      "name": "we need a fifth"
    },
    "greateridea": {
      "name": "greater idea"
    },
    "greatestidea": {
      "name": "greatest idea"
    },
    "replicantgreateridea": {
      "name": "replicant greater idea"
    },
    "vanillaidea": {
      "name": "vanilla idea"
    },
    "crackingidea": {
      "name": "cracking idea"
    },
    "snaqsidea": {
      "name": "snaqs idea"
    },
    "villager": {
      "name": "villager"
    },
    "alienofalltrades": {
      "name": "alien-of-all-trades"
    },
    "antisurvivor": {
      "name": "anti-survivor"
    },
    "area51detective": {
      "name": "area 51 detective"
    },
    "area51immunologist": {
      "name": "area 51 immunologist"
    },
    "bodyguard": {
      "name": "bodyguard"
    },
    "deputy": {
      "name": "deputy"
    },
    "rolecopclassic": {
      "name": "role cop classic"
    },
    "copofalltrades": {
      "name": "cop-of-all-trades"
    },
    "coronereternalsun": {
      "name": "coroner eternal sun"
    },
    "coronercrackingidea": {
      "name": "coroner cracking idea"
    },
    "nurse": {
      "name": "nurse"
    },
    "doctor": {
      "name": "doctor"
    },
    "doityourselfer": {
      "name": "do-it-yourselfer"
    },
    "drookez": {
      "name": "drookez"
    },
    "flipflop": {
      "name": "flip flop"
    },
    "greygoo": {
      "name": "grey goo"
    },
    "greygoocrackingidea": {
      "name": "grey goo cracking idea"
    },
    "innocentchild": {
      "name": "innocent child"
    },
    "jackofalltrades": {
      "name": "jack-of-all-trades"
    },
    "jailkeeper": {
      "name": "jailkeeper"
    },
    "lure": {
      "name": "lure"
    },
    "oraclesnaqsidea": {
      "name": "oracle snaqs idea"
    },
    "parrotrole": {
      "name": "parrot role"
    },
    "prettylady": {
      "name": "pretty lady"
    },
    "privateinvestigator": {
      "name": "private investigator"
    },
    "psychomagnet": {
      "name": "psychomagnet"
    },
    "redgoocrackingidea": {
      "name": "red goo cracking idea"
    },
    "rolevanillaiser": {
      "name": "role vanillaiser"
    },
    "rolestopper": {
      "name": "rolestopper"
    },
    "serialkiller": {
      "name": "serial killer"
    },
    "silencergreateridea": {
      "name": "silencer greater idea"
    },
    "suicidebomber": {
      "name": "suicide bomber"
    },
    "super": {
      "name": "super"
    },
    "tallier": {
      "name": "tallier"
    },
    "vigilante": {
      "name": "vigilante"
    },
    "wildcardgreateridea": {
      "name": "wild card greater idea"
    },
    "bulletproof": {
      "name": "bulletproof"
    },
    "compulsivechildkiller": {
      "name": "compulsive child killer"
    },
    "excellentsenseofsmell": {
      "name": "excellent sense of smell"
    },
    "immobileparrot": {
      "name": "immobile parrot"
    },
    "mayor": {
      "name": "mayor"
    },
    "night": {
      "name": "night"
    },
    "paranoidgunowner": {
      "name": "paranoid gun owner"
    },
    "postrestriction": {
      "name": "post restriction"
    },
    "public": {
      "name": "public"
    },
    "strongwilled": {
      "name": "strong-willed"
    },
    "supersaint": {
      "name": "supersaint"
    },
    "ugly": {
      "name": "ugly"
    },
    "universalbackup": {
      "name": "universal backup"
    },
    "unlynchable": {
      "name": "unlynchable"
    },
    "101ways": "101waystoplaywithathirdparty",
    "bma": "basicmafiaandaliens",
    "bts": "basictwoscum",
    "classi": "classicidea",
    "lad": "lifeanddeath"
  }
}`);

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
