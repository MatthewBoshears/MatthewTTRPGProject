// Actor Class
class TierSystemActor extends Actor {
  // In V13, data preparation is often done in prepareBaseData or prepareDerivedData.
  // For a simple calculation like HP, prepareBaseData is appropriate.
  prepareBaseData() {
    super.prepareBaseData();

    // V13 Change: Actor data is now found in `this.system` instead of `this.data.data`.
    const systemData = this.system;
    const tierHP = {
      alpha: 10,
      beta: 50,
      charlie: 250,
      delta: 1250,
      gamma: 6250
    };
    let maxHP = 0;
    for (const tier in systemData.levels) {
      maxHP += (systemData.levels[tier] || 0) * (tierHP[tier] || 0);
    }
    systemData.hp.max = maxHP;
  }
}


// Actor Sheet Class
class TierSystemActorSheet extends ActorSheet {
  /** @override */
  static get defaultOptions() {
    return {
      ...super.defaultOptions, // Modern spread syntax for extending options
      classes: ["experiment", "sheet", "actor"],
      template: "systems/experiment/templates/actor-sheet.html",
      width: 600,
      height: 600,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description" }]
    };
  }

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);
    // V13 uses jQuery objects, so the syntax remains similar here.
    html.find('.roll-skill').click(this._onRollSkill.bind(this));
  }

  /**
   * Handle Skill Roll
   * @param {Event} event   The originating click event
   * @private
   */
  async _onRollSkill(event) {
    event.preventDefault();
    const li = event.currentTarget.closest(".item");
    // V13 Change: Accessing embedded items is done via the `items` collection.
    const item = this.actor.items.get(li.dataset.itemId);
    
    // V13 Change: Item data is now in `item.system`.
    const rank = item.system.rank;
    const tier = item.system.tier.toLowerCase();

    const tierDice = {
        alpha: 4,
        beta: 6,
        charlie: 8,
        delta: 10,
        gamma: 12
    };

    if (!tierDice[tier]) {
        return ui.notifications.error(`Invalid tier: ${item.system.tier}`);
    }

    const dieSize = tierDice[tier];
    const rollFormula = `${rank}d${dieSize}xo${dieSize}`;

    let roll = new Roll(rollFormula);
    await roll.evaluate({async: true});

    let highestResult = 0;
    let resultsText = [];
    roll.dice[0].results.forEach(die => {
        resultsText.push(die.result);
        if (die.result > highestResult) {
            highestResult = die.result;
        }
    });

    const chatContent = `
        <h2>${item.name} Roll</h2>
        <p>Rolled: ${resultsText.join(', ')}</p>
        <h3>Final Result: ${highestResult}</h3>
    `;

    ChatMessage.create({
        user: game.user.id,
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        content: chatContent,
        roll: roll,
        type: CONST.CHAT_MESSAGE_TYPES.ROLL
    });
  }
}

// --- System Initialization ---
Hooks.once('init', async function() {
    console.log(`TierSystem | Initializing for V13`);

    CONFIG.Actor.documentClass = TierSystemActor;
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("experiment", TierSystemActorSheet, { makeDefault: true });
});