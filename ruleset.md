# [GAME TITLE] Core Mechanics v0.8

## Chapter 1: The Core Mechanic

Welcome to the game. All actions, from the swing of a sword to the scaling of a treacherous cliff, are resolved using the same core mechanic. This system is built on **Tiers of Power**, opposed dice rolls, and the idea that mastery and raw power can overcome any obstacle.

### Tiers of Power
Every being in the universe exists within a Tier of Power, which defines their fundamental potential and the type of die they use for their skills.

| Tier Name | Skill Die | Description                               |
| :-------- | :-------- | :---------------------------------------- |
| **Alpha** | `d4`      | The gifted and determined mortals.        |
| **Beta** | `d6`      | Heroes who have surpassed human limits.   |
| **Charlie**| `d8`      | Beings of immense power and skill.        |
| **Delta** | `d10`     | Legends whose actions shape history.      |
| **Gamma** | `d12`     | Mythic figures who brush against godhood. |
| **Omega** | `d6`+`d20` | Godlike entities; forces of nature.       |

### Skills: Tier and Rank
Your abilities are defined by **Skills**, each having two components:
* **Tier:** The die type associated with the skill (e.g., Alpha for `d4`, Beta for `d6`).
* **Rank:** A rating from 1 to 5 representing your training with that skill. Your Rank determines the number of dice you roll.

> For example, a character with **"Shooting, Alpha 4"** rolls four four-sided dice (`4d4`). A character with **"Dodge, Beta 2"** rolls two six-sided dice (`2d6`).

### The Opposed Roll
All rolls are **opposed**. When one character takes an action against another, both assemble their dice pools and roll simultaneously.

1.  **Assemble Dice Pools:** Each character determines their relevant skill or Item (e.g., `Alpha Shooting 4` vs. `Alpha Armor 4`).
2.  **Roll Dice:** Both parties roll their dice pools. Dice may **explode once**. If a die rolls its maximum value, reroll it and add the new result to the max value.
3.  **Determine Outcome:** The result of a roll is the **single highest die** in the pool. The character with the higher result wins the contest.

> **Example: An Exploding Roll**
> A player rolls `4d4` for their attack and gets the following results: `[2]`, `[3]`, `[4]`, `[4]`.
> The two `4`s explode! The player rerolls them, getting a `3` and a `1`.
> The final values for those two dice are `4+3=7` and `4+1=5`.
> The dice pool's results are now `[2]`, `[3]`, `[7]`, `[5]`. The player's final outcome for the roll is **7**.

#### Tiebreakers
In the case of a tie, the winner is determined by the following order:
1.  The character with the higher **Tier** wins.
2.  If Tiers are tied, the character with the higher **Rank** in the skill used wins.
3.  If both are tied, the **Attacker** or **Initiator** of the action wins.

---

## Chapter 2: The Anatomy of Power

A character's power is more than just their skills. It is a combination of their life force, their mastery over multiple Tiers, and the raw power that separates them from lesser beings.

### Health Points (HP)
A character's total HP is the cumulative sum of all the levels they have gained across all Tiers. As you ascend, you do not lose the resilience you gained before.

| Tier    | HP per Level |
| :------ | :----------- |
| Alpha   | 10           |
| Beta    | 50           |
| Charlie | 250          |
| Delta   | 1,250        |
| Gamma   | 6,250        |

> **Example: A Multi-Tiered Character**
> A powerful Charlie-tier character might have the following experience: `Alpha Soldier 5`, `Beta Chef 5`, and `Charlie Assassin 1`.
> Their total HP would be calculated as:
> (10 HP * 5 Alpha Levels) + (50 HP * 5 Beta Levels) + (250 HP * 1 Charlie Level) = 50 + 250 + 250 = **550 HP**.

### The Power Gap: Tier Multipliers
The raw power difference between Tiers is represented by a **Tier Multiplier**, which is used for calculating damage. The formula is **5<sup>N</sup>**, where N is the character's Tier number (starting with Alpha at 0).

| Tier    | Tier (N) | Multiplier |
| :------ | :------- | :--------- |
| Alpha   | 0        | x1         |
| Beta    | 1        | x5         |
| Charlie | 2        | x25        |
| Delta   | 3        | x125       |
| Gamma   | 4        | x625       |

### Skill Progression & Legacy
Skill Ranks are capped at 5 within a Tier. True mastery is not just about specializing, but building upon your past experience.

* **Legacy Bonus:** If you achieve Rank 5 in a skill at a lower Tier, you gain a permanent +1 Rank bonus when you learn the same skill in the next Tier up.
    > For example, if you have `Alpha Dodge 5` and later learn `Beta Dodge`, you begin with `Beta Dodge 2` (base 1 + 1 from your legacy).

---

## Chapter 3: The Rules of Combat

Combat is fast, lethal, and decisive. Fights are rarely wars of attrition; they are a struggle for control and dominance, often ending in a single, well-placed blow.

### Calculating Damage
Damage is determined by the **Margin** of success on an opposed roll, amplified by the attacker's raw power.

**Damage = Margin of Success x Attacker's Tier Multiplier**

> **Example:** A Charlie-tier character (Multiplier x25) attacks an Alpha character (Multiplier x1). The Charlie rolls a 7, and the Alpha rolls a 4. The Margin is 3.
> Damage = 3 * 25 = 75. This is likely enough to instantly defeat the Alpha. This is a feature, not a bug.

---

## Chapter 4: The Meta-Game

Beyond the dice, two key resources shape the narrative: Bonus Dice, which empower the players, and Complication Points, which empower the GM.

### Bonus Dice (The Player's Edge)
These represent a hero's luck, fate, or sheer determination. Players are encouraged to use them for their most important actions.

* **Gaining Bonus Dice:** Players typically get one Bonus Die per hour of play, or when they do something exceptionally clever, brave, or in-character.
* **Using a Bonus Die:** A player may declare they are using a Bonus Die before making a roll. They add one die of the **next tier up** to their dice pool for that roll (e.g., a Beta character adds a `d8`). This is one of the few ways to "punch above your weight" and is crucial for taking on higher-tier threats.

### Complication Points (The GM's Power)
The GM accumulates Complication Points when players take risks or face setbacks. These points are a shared pool and can be spent at any time to alter the narrative.

* **Gaining Complication Points:**
    * A player may choose to succeed on a failed roll by granting the GM 2 Complication Points.
    * When a lower-tier character attacks a higher-tier one and wins by **`Margin 2`**, the GM may gain 1 Complication Point.
* **Spending Complication Points:** The GM can spend points from the pool to create the following effects:
    * **1 Point:** Reroll any single die rolled by a player.
    * **2 Points:** Add a temporary +1 Rank to any NPC's skill for one roll.
    * **5 Points:** An action results in a dramatic but temporary failure. The character suffers a non-permanent Consequence for a session or two.
    * **10 Points:** An action results in a catastrophic failure. The character suffers a semi-permanent Consequence that may require a side quest to resolve.
* **Forced Spending:** If the GM's Complication Point pool is at 10 and they would gain more, they must immediately spend some points on the next available opportunity, determined by a `d10` roll. On a 1-3, use 1 point. On a 4-6, use 2. On a 7-9, use 5. On a 10, use 10.

---

## Chapter 5: Co-Operative Skill Challenges

Some obstacles are too great for one hero to overcome alone. Co-Operative Skill Challenges allow the entire party to contribute their skills to a single, complex task.

### Roles
* **The Lead:** One character is designated as the Lead. They will make the final, single roll against the challenge's difficulty. The Lead may not use Bonus Dice to auto-succeed during a Skill Challenge.
* **The Support:** All other characters are Support. They do not roll, but instead choose one of the actions below to aid the Lead.

### Support Actions
* **Direct Assistance:** Using the same skill as the Lead, grant the Lead **`Reroll 1`**. If your Tier is higher than the challenge's Tier, grant **`Reroll 2`** instead.
* **Indirect Assistance:** Using a different skill, grant the challenge **`Reduce 1`**. If your Tier is higher than the challenge's Tier, grant **`Reduce 2`**. This may only be chosen twice per challenge.
* **Failure Preparation:** Using a different skill, reduce the severity of the consequences should the Lead fail. However, this action costs the party: the challenge gets **`Increase 1`** and the GM gains 2 Complication Points.
* **Moral Encouragement:** The Lead's roll gains the **`Fortunate`** quality.

### Challenge Keywords
Some challenges have inherent properties that alter the rules:
* **Time-Sensitive:** `Failure Preparation` cannot be used.
* **Delicate:** `Indirect Assistance` can only grant `Reduce 1`, regardless of Tier.
* **Complex:** `Indirect Assistance` may be used three times.
* **Unstable:** A complication is guaranteed on any failed roll, even with `Failure Preparation`.

### Possible Results
1.  **Success:** The Lead wins the opposed roll. The party achieves its goal.
2.  **Success with Complications:** The Lead loses the roll. The party still achieves its goal, but the GM introduces a complication.
3.  **Success with Reduced Complications:** As above, but the complication is minor thanks to `Failure Preparation`.
4.  **Margin 4 Failure:** The Lead loses by a Margin of 4 or more. The party fails outright. They must find a new approach, and the Lead suffers a temporary, narrative penalty.

---
> ### **Roll & Challenge Keywords Quick Reference**
> * **Reroll N:** Reroll N dice. Does not stack. A die can only be rerolled once.
> * **Reduce N:** Lower the opposing (GM's) dice pool by N. Stacks.
> * **Increase N:** Raise the opposing (GM's) dice pool by N. Stacks.
> * **Fortunate:** Reroll all natural 1s on your dice once.
> * **Margin:** The difference between the winner's and loser's roll result.