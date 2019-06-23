// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Example:
function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function () { return this.name; }
};

// Answer:
function declareWinner(fighter1, fighter2, firstAttacker) {
    while (fighter1.health > 0 && fighter2.health > 0) {
        fighter2.health -= fighter1.damagePerAttack
        fighter1.health -= fighter2.damagePerAttack
    }

    if (fighter1.health <= 0 && fighter2.health <= 0) return firstAttacker;
    if (fighter1.health <= 0) return fighter2.name;
    return fighter1.name;
};

// Explanation:
// First we create a function that accepts both fighters and the name of the first attacker
// We then use a while loop to have the fighters attack each other until a fighters health is at or below zero
// Then after the while lopo is done, we check to seee if both fighters are under 0 health, if so the firstAttacker shouldn win since he attacked first
// if the fight1 is below zero helth, fighter2 wins
// otherwise fighter2 is below 0 health and the fighter1 wins