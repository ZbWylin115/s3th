const SCENES = {
  intro: {
    speaker: "Narrator",
    text: `A warm afternoon settles over the zoo like it has nowhere else to be.

A staff member near one of the shaded enclosures finishes explaining animal enrichment to a family with the patience of a saint and the expression of a man who has absolutely had enough of other people for one day.

When the family leaves, he glances over.

His tag says SETH.

He catches you looking. Not in a shy way. In a "well, now you’ve committed to this" way.`,
    choices: [
      {
        text: `“So do all the zoo employees look this good, or are you the premium exhibit?”`,
        effect: { chemistry: 2, boldness: 1 },
        next: "intro_flirty"
      },
      {
        text: `“You made that look easy. I’d have launched one of those kids into the flamingo pond.”`,
        effect: { comfort: 1, respect: 1 },
        flags: { madeLaugh: true },
        next: "intro_sarcastic"
      },
      {
        text: `“You were good with them. That can’t be a coincidence.”`,
        effect: { comfort: 2, respect: 1 },
        next: "intro_warm"
      }
    ]
  },

  intro_flirty: {
    speaker: "Seth",
    text: `He gives you a long, evaluating look.

“Wow. You opened with that.”

He folds his arms, though not defensively. More like he’s settling in.

“Bold. Slightly embarrassing. Not ineffective.”`,
    choices: [
      {
        text: `“I try to give people a strong first impression.”`,
        effect: { chemistry: 1, boldness: 1 },
        next: "walk_start"
      },
      {
        text: `“I can still pivot to charming and normal.”`,
        effect: { comfort: 1, respect: 1 },
        next: "walk_start"
      }
    ]
  },

  intro_sarcastic: {
    speaker: "Seth",
    text: `He snorts.

“Oh good, you’re funny. That helps. I was worried I’d have to carry the entire conversational burden myself.”

He tilts his head.

“For the record, the flamingos are innocent. The children are often not.”`,
    choices: [
      {
        text: `“So you do have standards. Hot.”`,
        effect: { chemistry: 1 },
        next: "walk_start"
      },
      {
        text: `“Thank God. I was hoping you weren’t one of those aggressively wholesome zoo people.”`,
        effect: { comfort: 2 },
        flags: { madeLaugh: true },
        next: "walk_start"
      }
    ]
  },

  intro_warm: {
    speaker: "Seth",
    text: `That softens him a little.

“Thanks. Most people hear ‘zoo’ and immediately ask me what animal could kill them fastest. Which, to be fair, is one of the better questions.”

He studies you for a beat.

“But you seem less exhausting than average.”`,
    choices: [
      {
        text: `“That might be the nicest thing anyone’s said to me.”`,
        effect: { comfort: 2 },
        next: "walk_start"
      },
      {
        text: `“I’m aiming for memorable, not exhausting.”`,
        effect: { comfort: 1, chemistry: 1 },
        next: "walk_start"
      }
    ]
  },

  walk_start: {
    speaker: "Narrator",
    text: `Seth jerks his head toward a quieter path.

“Walk with me,” he says. “I’ve got a few minutes before I go back to being educational infrastructure.”

You fall into step beside him.

The service path is calmer, less crowded. More birds, more shade, less humanity. Seth visibly approves of this.`,
    choices: [
      {
        text: "Ask what animal he never gets tired of",
        effect: { comfort: 1, respect: 1 },
        flags: { talkedAnimals: true },
        next: "animal_talk"
      },
      {
        text: "Ask what he does when he’s not here",
        effect: { comfort: 1, chemistry: 1 },
        next: "life_talk"
      },
      {
        text: "Tell him he looks like he belongs in the hidden part",
        effect: { chemistry: 2, boldness: 1 },
        next: "flirt_path"
      }
    ]
  },

  animal_talk: {
    speaker: "Seth",
    text: `“Otters are overpowered. Goats are underrated. Big cats are beautiful, but they know it, which makes them a little tedious.”

He glances over.

“People think this job is about spectacle. It isn’t. It’s care. Routine. Attention. Half of love is maintenance, which is not a sexy sentence, but it’s true.”`,
    choices: [
      {
        text: `“Actually that was an alarmingly attractive sentence.”`,
        effect: { chemistry: 2 },
        next: "bridge_to_patio"
      },
      {
        text: `“That might be the most grounded thing I’ve heard all week.”`,
        effect: { comfort: 1, respect: 2 },
        flags: { feltReal: true },
        next: "bridge_to_patio"
      }
    ]
  },

  life_talk: {
    speaker: "Seth",
    text: `“Hiking. Beer. Traveling when my schedule and wallet stop fighting each other.”

He slides his hands into his pockets.

“I’ve got two kids, too. Older son, younger daughter. They’re both old enough to roast me, which is lovely. Really keeps the ego in check.”`,
    choices: [
      {
        text: `“That actually explains your expression. You’ve seen things.”`,
        effect: { comfort: 2 },
        flags: { madeLaugh: true, handledKidsWell: true },
        next: "kids_followup"
      },
      {
        text: `“You say that like being roastable is part of the dad job description.”`,
        effect: { comfort: 1, respect: 1 },
        flags: { handledKidsWell: true },
        next: "kids_followup"
      },
      {
        text: `“That’s... kind of hot, unfortunately.”`,
        effect: { chemistry: 2, boldness: 1 },
        next: "kids_followup"
      }
    ]
  },

  kids_followup: {
    speaker: "Seth",
    text: `He laughs under his breath.

“Oh, it absolutely is. If your children can’t humble you in under thirty seconds, you’ve failed as a parent.”

He looks ahead, then back at you.

“They’re great, though. Smart. Mean in a way I have to respect. So naturally I blame myself.”`,
    choices: [
      {
        text: "Ask if they’d approve of you talking to him like this",
        effect: { chemistry: 1, comfort: 1 },
        next: "bridge_to_patio"
      },
      {
        text: "Say he talks about them like he’s proud of them",
        effect: { comfort: 2, respect: 1 },
        flags: { feltReal: true },
        next: "bridge_to_patio"
      }
    ]
  },

  flirt_path: {
    speaker: "Seth",
    text: `He cuts his eyes toward you.

“That sounded better in your head, didn’t it?”

A beat.

Then his mouth twitches.

“Don’t look so wounded. It still worked.”`,
    choices: [
      {
        text: `“Good. I’d hate to waste premium material on a weekday.”`,
        effect: { chemistry: 1, comfort: 1 },
        flags: { madeLaugh: true },
        next: "bridge_to_patio"
      },
      {
        text: `“You seem like a man who appreciates effort.”`,
        effect: { chemistry: 2 },
        next: "bridge_to_patio"
      },
      {
        text: `“I can go harder.”`,
        effect: { chemistry: 2, boldness: 1 },
        flags: { gotPushy: true },
        next: "bridge_to_patio"
      }
    ]
  },

  bridge_to_patio: {
    speaker: "Narrator",
    text: `You reach a railing overlooking a quieter section of the zoo.

Seth rests his forearms there, relaxed. The light catches in his beard, and for one profoundly annoying moment he looks even better than he did five minutes ago.

“I’m off soon,” he says. “There’s a place nearby with a patio, respectable beer, and a low concentration of screaming children. One of my finer discoveries.”

His eyes settle on you.

“You want to keep this going, or should I assume you’ve peaked already?”`,
    choices: [
      {
        text: `“Please. I haven’t even started showing off yet.”`,
        effect: { chemistry: 2, boldness: 1 },
        next: "patio_open"
      },
      {
        text: `“Yeah. I’d like that.”`,
        effect: { comfort: 2, respect: 1 },
        next: "patio_open"
      },
      {
        text: `“Only if your beer opinions are as good as your face.”`,
        effect: { chemistry: 1, comfort: 1 },
        next: "patio_open"
      }
    ]
  },

  patio_open: {
    speaker: "Narrator",
    text: `The patio is strung with warm lights and soft chatter.

Seth has changed out of his work shirt. This helps nobody. Least of all you.

He settles across from you with the ease of someone who already knows how to exist in a room.

“So,” he says, lifting his glass, “what exactly are your intentions with the sarcastic zoo dad?”`,
    choices: [
      {
        text: `“To flirt irresponsibly and hope the universe rewards courage.”`,
        effect: { chemistry: 2, boldness: 1 },
        next: "patio_mid"
      },
      {
        text: `“To find out if there’s an actual person under all this targeted harassment.”`,
        effect: { comfort: 2, chemistry: 1 },
        flags: { madeLaugh: true },
        next: "patio_mid"
      },
      {
        text: `“Honestly? I saw you and wanted another hour.”`,
        effect: { comfort: 2, chemistry: 1 },
        flags: { feltReal: true },
        next: "patio_mid"
      }
    ]
  },

  patio_mid: {
    speaker: "Seth",
    text: `He laughs softly and leans back.

“Well, that’s already better than most first-date answers. Usually I get something bleak like ‘seeing what happens’ from a man whose emotional range is three IPA names and a truck payment.”

He studies you over the rim of his glass.

“You, at least, appear to have blood circulating behind the eyes.”`,
    choices: [
      {
        text: "Ask him about his favorite trip",
        effect: { comfort: 1, chemistry: 1 },
        flags: { talkedTravel: true },
        next: "travel_scene"
      },
      {
        text: "Ask what kind of beer snob he is",
        effect: { comfort: 1, chemistry: 1 },
        flags: { talkedBeer: true },
        next: "beer_scene"
      },
      {
        text: "Tell him he’s extremely attractive when he’s mean",
        effect: { chemistry: 2, boldness: 1 },
        next: "heat_scene"
      }
    ]
  },

  travel_scene: {
    speaker: "Seth",
    text: `“Anywhere green,” he says. “Trails, weather, decent food, one local bar everyone insists is the real one.”

He taps his glass.

“The older I get, the more I think a trip is fifty percent scenery and fifty percent who you’re with. Beautiful places are wasted on bad company.”`,
    choices: [
      {
        text: `“Then I’d better qualify as decent company.”`,
        effect: { chemistry: 1, comfort: 1 },
        next: "late_patioshift"
      },
      {
        text: `“Window seat or aisle? This decides everything.”`,
        effect: { comfort: 2 },
        flags: { madeLaugh: true },
        next: "late_patioshift"
      }
    ]
  },

  beer_scene: {
    speaker: "Seth",
    text: `“I like clean lagers, good stouts, the occasional Belgian, and I hate overpriced nonsense that tastes like somebody infused a candle with resentment.”

He arches a brow.

“And you? Are you actually into beer, or are you flirting through beverage discourse because it’s the only socially acceptable foreplay left?”`,
    choices: [
      {
        text: `“Both. I believe in layered strategy.”`,
        effect: { chemistry: 1, comfort: 1 },
        flags: { madeLaugh: true },
        next: "late_patioshift"
      },
      {
        text: `“A little of both, but I can be sincere if rewarded.”`,
        effect: { comfort: 1, respect: 1 },
        next: "late_patioshift"
      }
    ]
  },

  heat_scene: {
    speaker: "Seth",
    text: `His eyes narrow, amused.

“That’s unfortunate for both of us.”

He says it dryly, but he doesn’t look away.

“Because now I have to decide whether to encourage you or protect my peace.”`,
    choices: [
      {
        text: `“Encourage me. Obviously.”`,
        effect: { chemistry: 2, boldness: 1 },
        next: "late_patioshift"
      },
      {
        text: `“Your peace is overrated.”`,
        effect: { chemistry: 2, boldness: 1 },
        flags: { gotPushy: true },
        next: "late_patioshift"
      },
      {
        text: `“You can do both. You seem talented.”`,
        effect: { chemistry: 1, comfort: 1 },
        next: "late_patioshift"
      }
    ]
  },

  late_patioshift: {
    speaker: "Narrator",
    text: `The evening deepens.

Patio lights blur softly overhead. Conversation around you fades into the background until it is mostly just Seth, the table, the warm air, and the increasingly obvious fact that this has become a real moment.

He looks at you in that unmistakable way people do when they have stopped pretending not to consider the possibility.`,
    choices: [
      {
        text: "Hold eye contact and let the silence work",
        effect: { chemistry: 1, comfort: 1, respect: 1 },
        next: "final_turn"
      },
      {
        text: "Touch his hand, briefly",
        effect: { chemistry: 2, boldness: 1 },
        next: "final_turn"
      },
      {
        text: "Make him laugh one more time before things get serious",
        effect: { comfort: 2 },
        flags: { madeLaugh: true },
        next: "final_turn"
      }
    ]
  },

  final_turn: {
    speaker: "Seth",
    text: `He does not pull away.

Interesting.

He glances down at your hand, or your mouth, or maybe both, then back up.

“Well,” he says softly, “this is either going somewhere or becoming an anecdote. Try not to make me hate the anecdote.”`,
    choices: [
      {
        text: `Tell him you want to see him again, properly`,
        effect: { comfort: 2, respect: 2 },
        flags: { feltReal: true },
        next: "ending"
      },
      {
        text: `Tell him you’ve wanted to kiss him for half an hour`,
        effect: { chemistry: 3, boldness: 2 },
        next: "ending"
      },
      {
        text: `Tease: “You’re being looked at in a way that should concern you.”`,
        effect: { chemistry: 2, comfort: 1 },
        next: "ending"
      }
    ]
  }
};
