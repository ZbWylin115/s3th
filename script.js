const textBox = document.getElementById("textBox");
const choicesEl = document.getElementById("choices");
const nameplateEl = document.getElementById("nameplate");
const vibeTextEl = document.getElementById("vibeText");
const routeNotesEl = document.getElementById("routeNotes");
const restartBtn = document.getElementById("restartBtn");

const endingOverlay = document.getElementById("endingOverlay");
const endingTitleEl = document.getElementById("endingTitle");
const endingSubtitleEl = document.getElementById("endingSubtitle");
const endingBodyEl = document.getElementById("endingBody");
const playAgainBtn = document.getElementById("playAgainBtn");
const closeEndingBtn = document.getElementById("closeEndingBtn");

let state = {};
let lastSceneId = "intro";

function resetState() {
  state = {
    chemistry: 0,
    comfort: 0,
    respect: 0,
    boldness: 0,

    madeLaugh: false,
    talkedAnimals: false,
    talkedTravel: false,
    talkedBeer: false,
    handledKidsWell: false,
    gotPushy: false,
    feltReal: false
  };
}

function applyEffect(effect = {}) {
  Object.keys(effect).forEach((key) => {
    if (typeof state[key] === "number") {
      state[key] += effect[key];
    }
  });
}

function applyFlags(flags = {}) {
  Object.keys(flags).forEach((key) => {
    state[key] = flags[key];
  });
}

function updateVibe() {
  const total = state.chemistry + state.comfort + state.respect + state.boldness;

  if (state.gotPushy && state.respect <= 2) {
    vibeTextEl.textContent =
      "The chemistry is real, but Seth is quietly assessing whether you’re fun or a future problem.";
    return;
  }

  if (total <= 3) {
    vibeTextEl.textContent =
      "Polite opening. Some intrigue. Nobody has fully embarrassed themselves yet.";
  } else if (total <= 7) {
    vibeTextEl.textContent =
      "The vibe is solid. Seth is engaged, amused, and annoyingly attractive about it.";
  } else if (total <= 11) {
    vibeTextEl.textContent =
      "This is going well. Warmth, tension, and dangerous conversational momentum.";
  } else {
    vibeTextEl.textContent =
      "Absurdly good chemistry. The air is charged. One of you should act normal, but that ship may have sailed.";
  }
}

function updateRouteNotes() {
  const notes = [];

  if (state.madeLaugh) notes.push("You have made Seth laugh, which appears to matter.");
  if (state.talkedAnimals) notes.push("You let him talk about animals like a real person, not a zoo kiosk.");
  if (state.handledKidsWell) notes.push("You did not get weird about the kids. Strong start.");
  if (state.talkedTravel) notes.push("Travel talk landed.");
  if (state.talkedBeer) notes.push("Beer discourse survived.");
  if (state.feltReal) notes.push("A few moments have felt sincerely human.");
  if (state.gotPushy) notes.push("Caution: you may be overplaying the swagger.");

  if (notes.length === 0) {
    routeNotesEl.textContent =
      "Seth appears sarcastic, employed, and distressingly handsome.";
    return;
  }

  routeNotesEl.textContent = notes.join(" ");
}

function disableChoices() {
  const buttons = choicesEl.querySelectorAll("button");
  buttons.forEach((btn) => {
    btn.disabled = true;
  });
}

function renderScene(sceneId) {
  if (sceneId === "ending") {
    showEnding();
    return;
  }

  const scene = SCENES[sceneId];
  if (!scene) return;

  lastSceneId = sceneId;
  nameplateEl.textContent = scene.speaker;
  textBox.classList.add("scene-changing");
  disableChoices();

  setTimeout(() => {
    textBox.textContent = scene.text;
    choicesEl.innerHTML = "";

    scene.choices.forEach((choice) => {
      const btn = document.createElement("button");
      btn.textContent = choice.text;

      btn.onclick = () => {
        applyEffect(choice.effect || {});
        applyFlags(choice.flags || {});
        updateVibe();
        updateRouteNotes();
        renderScene(choice.next);
      };

      choicesEl.appendChild(btn);
    });

    updateVibe();
    updateRouteNotes();
    textBox.classList.remove("scene-changing");
  }, 180);
}

function getEndingData() {
  const total = state.chemistry + state.comfort + state.respect + state.boldness;

  if (state.gotPushy && state.respect <= 2) {
    return {
      title: "Too Much, Too Soon",
      subtitle: "The chemistry was there. Your restraint was not.",
      body:
`Seth smiles, but there is distance in it now.

“You’re fun,” he says. “But fun and good for me are not automatically the same thing.”

It is not cruel. If anything, that makes it worse.

You had a shot here. A very real one. Then you leaned too hard on momentum and forgot that an actual person was sitting across from you.

He leaves you with warmth, dignity, and absolutely no second drink tonight.`
    };
  }

  if (state.chemistry >= 8 && state.boldness >= 5) {
    return {
      title: "Patio Heat",
      subtitle: "You stopped circling it. He stopped pretending not to notice.",
      body:
`Seth goes still for half a beat, then smiles in a way that feels like a private reward.

“Yeah,” he says quietly. “I was wondering when you were going to do something about this.”

The night ends close, charged, and very much not ambiguously.

Whatever this becomes later, it is undeniable now.`
    };
  }

  if (state.comfort >= 6 && state.respect >= 5 && state.feltReal) {
    return {
      title: "The Real Thing",
      subtitle: "Not just chemistry. Structure.",
      body:
`He looks at you with open warmth, the kind that makes the rest of the room fall away.

“I’d like to do this again,” he says. “Properly. On purpose.”

No fireworks. No melodrama. Something better: steadiness, curiosity, and the rare sense that this could actually hold up in daylight.

This is how something real starts. Quietly. Clearly.`
    };
  }

  if (state.handledKidsWell && state.comfort >= 5) {
    return {
      title: "Promising Trouble",
      subtitle: "He likes you. Unfortunately for his peace.",
      body:
`Seth laughs, shakes his head, and gives you a look that is half warning, half invitation.

“You are trouble,” he says. “Manageable trouble, maybe. Which is worse.”

He gives you his number.

Not out of recklessness. Out of interest. Which, coming from a sarcastic zoo dad with standards, is arguably the bigger win.`
    };
  }

  if (state.madeLaugh) {
    return {
      title: "He’d Take Another Drink With You",
      subtitle: "Not a sweep. Not a failure. A door left open.",
      body:
`“You’re charming,” Seth says, standing. “Annoying in a way I can probably survive. Funny, too, which helps more than you’d think.”

The night does not explode into instant romance.

But neither does it close.

Sometimes the first win is not conquest. Sometimes it is simply being the kind of person someone wants to see again when they are less tired and more dangerous.`
    };
  }

  if (total >= 9) {
    return {
      title: "Almost",
      subtitle: "Enough spark to haunt you a little.",
      body:
`You part on good terms and unfinished tension.

No disaster. No triumph either. Just the mild agony of knowing this could have gone further with slightly better timing, slightly clearer intent, or slightly less mutual caution.

He leaves you with a warm look and a maybe.

Sometimes maybe is the cruelest ending of all.`
    };
  }

  return {
    title: "Nice Try, Zookeeper Romeo",
    subtitle: "Nobody died. That counts for something.",
    body:
`The evening lands somewhere between decent and instructive.

You had a few good lines, a few near-misses, and at least one moment where Seth clearly considered whether you were worth the trouble.

The answer, tonight, is apparently “not quite.”

Still. You made it to the patio. Respectable innings.`
  };
}

function showEnding() {
  const ending = getEndingData();
  endingTitleEl.textContent = ending.title;
  endingSubtitleEl.textContent = ending.subtitle;
  endingBodyEl.textContent = ending.body;
  endingOverlay.classList.remove("hidden");
}

function hideEnding() {
  endingOverlay.classList.add("hidden");
}

function startGame() {
  hideEnding();
  resetState();
  updateVibe();
  updateRouteNotes();
  renderScene("intro");
}

restartBtn.onclick = startGame;
playAgainBtn.onclick = startGame;
closeEndingBtn.onclick = hideEnding;

startGame();
