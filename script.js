const weapons = {
    'willow-wood-staff': {
        damage: 30,
        critical: 0,
        defense: 0,
        effect: ''
    },
    'bronze-cloud-staff': {
        damage: 36,
        critical: 2,
        defense: 0,
        effect: ''
    },
    'twin-serpents-staff': {
        damage: 40,
        critical: 0,
        defense: 0,
        effect: 'Moderately increase the Damage of Light Attack Combo finishers. The effect is massively enhanced when fighting in water.'
    },
    'wind-bear-staff': {
        damage: 50,
        critical: 4,
        defense: 0,
        effect: 'Considerably increases the Critical Hit Chance of the Unveiling Strike of Cloud Step.'
    },
    'loongwreathe-staff': {
        damage: 70,
        critical: 0,
        defense: 0,
        effect: 'Moderately increases the Damage dealt by all Pillar Stance moves.'
    },
    'rat-sage-staff': {
        damage: 66,
        critical: 7,
        defense: 0,
        effect: 'The Fourth Move of Light Attack Combo and Mobile Staff Spin can stir up a whirlwind of sands, increases attack range and Damage.'
    },
    'cloud-patterned-stone-staff': {
        damage: 60,
        critical: 0,
        defense: 30,
        effect: 'Moderately increases the Damage executed by charged Smash Heavy Attacks.'
    },
    'kang-jin-staff': {
        damage: 70,
        critical: 6,
        defense: 0,
        effect: 'Punishing Downpour executes Thunder Damage to the enemy instead of area Damage.'
    },
    'golden-loong-staff': {
        damage: 108,
        critical: 0,
        defense: 0,
        effect: 'Moderately increases the Damage dealt by all Pillar Stance moves. A loong can be summoned to execute Thunder at the enemy at Pillar Stance Heavy Attacks that cost 3 or 4 Focus Points.'
    },
    'chu-bai-spear': {
        damage: 75,
        critical: 0,
        defense: 0,
        effect: 'Integrate spear techniques into Light Attack Combo and increase the Damage dealt by Thrust Stance moves.'
    },
    'spikeshaft-staff': {
        damage: 80,
        critical: 0,
        defense: 0,
        effect: 'Continuously gains Focus for a brief moment after Seeing Through the enemy.'
    },
    'chitin-staff': {
        damage: 80,
        critical: 5,
        defense: 0,
        effect: 'Upon a successful hit with charged Heavy Attack, each Focus Point cost slightly recovers Health.'
    },
    'spider-celestial-staff': {
        damage: 85,
        critical: 12,
        defense: 0,
        effect: 'Upon a successful hit with charged Heavy Attack, each Focus Point cost slightly recovers Health; in Poisoned State, hits inflict the enemy with Poison Bane.'
    },
    'visionary-centipede-staff': {
        damage: 90,
        critical: 10,
        defense: 0,
        effect: 'Upon a successful hit with charged Heavy Attack, each Focus Point cost slightly recovers Health; if the enemy is in Poisoned State, massively enhances the recovery.'
    },
    'staff-of-blazing-karma': {
        damage: 100,
        critical: 0,
        defense: 40,
        effect: 'Charged Heavy Attacks in Smash Stance that cost over 3 Focus Points inflict a bursting lava effect on the ground.'
    },
    'bishui-beast-staff': {
        damage: 105,
        critical: 10,
        defense: 0,
        effect: ''
    },
    'jingubang': {
        damage: 135,
        critical: 6,
        defense: 0,
        effect: 'The gauge of the 4th Focus Point no longer depletes over time.'
    },
    'tri-point-double-edged-spear': {
        damage: 135,
        critical: 6,
        defense: 0,
        effect: 'Integrate spear techniques into Light Attack Combo and increases the Damage dealt by Thrust Stance moves; Upon performing Forceful Thrust shoots swords from the staff to attack.'
    },
    'stormflash-loong-staff': {
        damage: 140,
        critical: 9,
        defense: 0,
        effect: 'Draws Thunder while charging, and inflicts Thunder Damage with every staff attack when in Shocked State.'
    },
    'dark-iron-staff': {
        damage: 110,
        critical: 0,
        defense: 0,
        effect: 'Considerably increases attack based on defense.'
    },
    'adept-spine-shooting-fuban-staff': {
        damage: 120,
        critical: 25,
        defense: 0,
        effect: 'Upon a successful hit with charged Heavy Attack, each Focus Point cost slightly recovers Health, attacking enemies nearby with spines shooting from the staff.'
    }
};

// Character attributes
let character = {
    health: 300,
    mana: 200,
    stamina: 200,
    staminaRecovery: 50,
    attack: 0,
    defense: 90,
    criticalHitChance: 0,
    criticalHitDamage: 130,
    damageBonus: 0,
    damageReduction: 0,
    chillResistance: 0,
    burnResistance: 0,
    poisonResistance: 0,
    shockResistance: 0,
};

// Update stats when a weapon is selected
function updateStats() {
    const weaponSelect = document.getElementById('weapon');
    const selectedWeapon = weaponSelect.value;

    // Reset character attributes
    character.attack = 0; // Reset to base value
    character.criticalHitChance = 0; // Reset to base value
    character.defense = 0; // Reset to base value

    if (selectedWeapon) {
        const weaponStats = weapons[selectedWeapon];

        // Update character stats based on weapon stats
        character.attack += weaponStats.damage; // Add weapon damage to character's attack
        character.criticalHitChance += weaponStats.critical; // Add weapon critical to character's critical chance
        character.defense += weaponStats.defense; // Add weapon defense to character's defense

        // Display weapon stats
        document.getElementById('damage').innerText = `Damage: ${character.attack}`;
        document.getElementById('critical').innerText = `Critical Hit Chance: ${character.criticalHitChance}%`;
        document.getElementById('defense').innerText = `Defense: ${character.defense}`;
        document.getElementById('unique-effect').innerText = `Unique Effect: ${weaponStats.effect}`;
    } else {
        document.getElementById('damage').innerText = 'Damage: ';
        document.getElementById('critical').innerText = 'Critical Hit Chance: ';
        document.getElementById('defense').innerText = 'Defense: ';
        document.getElementById('unique-effect').innerText = 'Unique Effect: ';
    }

    // Update character attributes display
    document.getElementById('health').innerText = `Health: ${character.health}`;
    document.getElementById('mana').innerText = `Mana: ${character.mana}`;
    document.getElementById('stamina').innerText = `Stamina: ${character.stamina}`;
    document.getElementById('stamina-recovery-rate').innerText = `Stamina Recovery Rate: ${character.staminaRecovery}`;
    document.getElementById('attack').innerText = `Attack: ${character.attack}`;
    document.getElementById('defense-stat').innerText = `Defense: ${character.defense}`;
    document.getElementById('critical-hit-chance').innerText = `Critical Hit Chance: ${character.criticalHitChance}%`;
    document.getElementById('critical-hit-damage').innerText = `Critical Hit Damage: ${character.criticalHitDamage}%`;
    document.getElementById('damage-bonus').innerText = `Damage Bonus: ${character.damageBonus}`;
    document.getElementById('damage-reduction').innerText = `Damage Reduction: ${character.damageReduction}`;
    document.getElementById('chill-resistance').innerText = `Chill Resistance: ${character.chillResistance}`;
    document.getElementById('burn-resistance').innerText = `Burn Resistance: ${character.burnResistance}`;
    document.getElementById('poison-resistance').innerText = `Poison Resistance: ${character.poisonResistance}`;
    document.getElementById('shock-resistance').innerText = `Shock Resistance: ${character.shockResistance}`;
}

