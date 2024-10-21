const weapons = {
    'willow-wood-staff': {
        damage: 30,
        critical: 0,
        defense: 0,
        effect: 'None'
    },
    'bronze-cloud-staff': {
        damage: 36,
        critical: 2,
        defense: 0,
        effect: 'Upon a successful hit with charged Heavy Attack, each Focus Point cost slightly recovers Health.'
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
        effect: 'Moderately increases the damage dealt by all Pillar Stance moves.'
    },
    'rat-sage-staff': {
        damage: 66,
        critical: 7,
        defense: 0,
        effect: 'The fourth move of Light Attack Combo and Mobile Staff Spin can stir up a whirlwind of sands, increases attack range and Damage.'
    },
    'cloud-patterned-stone-staff': {
        damage: 60,
        critical: 0,
        defense: 30,
        effect: 'Defense +30; moderately increases the damage executed by charged Smash Heavy Attacks.'
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
        effect: 'Moderately increases the damage dealt by all Pillar Stance moves. A loong can be summoned to execute Thunder at the enemy at Pillar Stance Heavy Attacks that cost 3 or 4 Focus Points.'
    },
    'chu-bai-spear': {
        damage: 75,
        critical: 0,
        defense: 0,
        effect: 'Integrate spear techniques into Light Attack Combo and increases the Damage dealt by Thrust Stance moves.'
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
        effect: 'Defense +40; Burn Resistance +10; charged Heavy Attacks in Smash Stance that cost over 3 Focus Points inflict a bursting lava effect on the ground.'
    },
    'bishui-beast-staff': {
        damage: 105,
        critical: 10,
        defense: 0,
        effect: 'None'
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
        effect: 'Integrate spear techniques into Light Attack Combo and increases the Damage dealt by Thrust Stance moves; upon performing Forceful Thrust shoots swords from the staff to attack.'
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
        effect: 'Chill Resistance +5; Burn Resistance +5; considerably increases attack based on defense.'
    },
    'adept-spine-shooting-fuban-staff': {
        damage: 120,
        critical: 25,
        defense: 0,
        effect: 'Upon a successful hit with charged Heavy Attack, each Focus Point cost slightly recovers Health, attacking enemies nearby with spines shooting from the staff.'
    }
};

const headgear = {
    'bronze-monkey-mask': {
        defense: 16,
        effect: 'Burn Resistance +3',
        burnResistance: 3
    },
    'bull-kings-mask': {
        defense: 80,
        effect: 'Grants moderate Focus upon taking damage; if the Destined One is staggered, grants more Focus.',
        burnResistance: 0
    },
    'centipede-hat': {
        defense: 43,
        effect: 'None',
        burnResistance: 0
    },
    'earth-spirit-cap': {
        defense: 26,
        effect: 'Poison Resistance +15. Slowly loses Health, but massively increases Health recovery when Using Gourd.',
        poisonResistance: 15
    },
    'folk-opera-mask': {
        defense: 7,
        effect: 'None',
        burnResistance: 0
    },
    'galeguard-beast-mask': {
        defense: 18,
        effect: 'None',
        burnResistance: 0
    },
    'golden-feng-tail-crown': {
        defense: 60,
        effect: 'Maximum Mana +30',
        manaBonus: 30
    },
    'golden-mask-of-fury': {
        defense: 36,
        effect: 'Upon successful hits from Spirit skills, grants massive Focus upon reverting.',
        burnResistance: 0
    },
    'grey-wolf-mask': {
        defense: 10,
        effect: 'Inflicts considerably more Damage Bonus on enemies at critical Health.',
        burnResistance: 0
    },
    'iron-horned-helm': {
        defense: 32,
        effect: 'None',
        burnResistance: 0
    },
    'locust-antennae-mask': {
        defense: 24,
        effect: 'Considerably increases power of all Jump Attacks.',
        burnResistance: 0
    },
    'monastic-insect-hat': {
        defense: 22,
        effect: 'None',
        burnResistance: 0
    },
    'non-pure-broken-mask': {
        defense: 40,
        effect: 'None',
        burnResistance: 0
    },
    'pilgrim-headband': {
        defense: 8,
        effect: 'Allows using the gourd while Sprinting.',
        burnResistance: 0
    },
    'see-no-evil': {
        defense: 25,
        effect: 'More easily triggers Perfect Dodge.',
        burnResistance: 0
    },
    'skull-of-turtle-treasure': {
        defense: 30,
        effect: 'Moderately increases the chance of obtaining materials upon killing an enemy.',
        burnResistance: 0
    },
    'snout-mask': {
        defense: 17,
        effect: 'For a short duration after using the gourd, moderately increases Attack.',
        burnResistance: 0
    },
    'yaksha-mask-of-outrage': {
        defense: 47,
        effect: 'Significantly increases Attack when Health is low.',
        burnResistance: 0
    }
};

let character = {
    health: 300,                   // The character's health points
    mana: 200,                     // The character's mana points
    stamina: 200,                  // The character's stamina points
    staminaRecoveryRate: 50,       // The rate at which stamina recovers
    attack: 0,                     // The character's attack power
    defense: 90,                   // The character's defense rating
    criticalHitChance: 0,          // The chance of landing a critical hit (percentage)
    criticalHitDamage: 130,        // The damage multiplier for critical hits
    burnResistance: 0,             // Resistance to burn damage
    poisonResistance: 0,            // Resistance to poison damage
    chillResistance: 0,             // Resistance to chill effects
    shockResistance: 0              // Resistance to shock effects
};
// Function to update stats for both weapon and headgear
function updateStats() {
    const weaponSelect = document.getElementById('weapon').value;
    const headgearSelect = document.getElementById('headgear').value;
    resetStats();  // Resets to base character stats before applying new gear

    // Clear weapon stats if no weapon is selected
    if (!weaponSelect) {
        document.getElementById('weapon-attack').innerText = `Weapon Attack:`; // Clear attack
        document.getElementById('weapon-defense').innerText = `Weapon Defense:`; // Clear defense
        document.getElementById('weapon-critical').innerText = `Weapon Critical Hit Chance:`; // Clear critical hit chance
        document.getElementById('weapon-effect').innerText = `Weapon Unique Effect:`; // Clear unique effect
    } else if (weapons[weaponSelect]) {
        const weaponStats = weapons[weaponSelect];
        character.attack += weaponStats.damage;
        character.criticalHitChance += weaponStats.critical;
        character.defense += weaponStats.defense;

        // Update resistances based on weapon
        if (weaponSelect === 'staff-of-blazing-karma') {
            character.burnResistance += 10; // Burn Resistance
        } else if (weaponSelect === 'dark-iron-staff') {
            character.chillResistance += 5; // Chill Resistance
            character.burnResistance += 5;  // Burn Resistance
        }

        document.getElementById('weapon-attack').innerText = `Attack: ${weaponStats.damage}`;
        document.getElementById('weapon-defense').innerText = `Defense: ${weaponStats.defense}`;
        document.getElementById('weapon-critical').innerText = `Critical Hit Chance: ${weaponStats.critical}%`;
        document.getElementById('weapon-effect').innerText = `Unique Effect: ${weaponStats.effect}`;
    }

    // Update headgear stats if headgear is selected
    if (!headgearSelect) {
        document.getElementById('headgear-defense').innerText = `Headgear Defense:`; // Clear headgear defense
        document.getElementById('headgear-effect').innerText = `Headgear Unique Effect:`; // Clear headgear unique effect
    } else if (headgear[headgearSelect]) {
        const headgearStats = headgear[headgearSelect];
        character.defense += headgearStats.defense;
        character.burnResistance += headgearStats.burnResistance || 0;
        character.poisonResistance += headgearStats.poisonResistance || 0;
        document.getElementById('headgear-defense').innerText = `Defense: ${headgearStats.defense}`;
        document.getElementById('headgear-effect').innerText = `Unique Effect: ${headgearStats.effect}`;
    }

    updateCharacterStats();  // Apply combined stats to character display
}

// Function to reset all character stats
function resetStats() {
    character = {
        health: 300,
        mana: 200,
        stamina: 200,
        staminaRecoveryRate: 50,
        attack: 0,
        defense: 90,
        criticalHitChance: 0,
        criticalHitDamage: 130,
        burnResistance: 0,    // Burn resistance attribute
        poisonResistance: 0,   // Poison resistance attribute
        chillResistance: 0     // Chill resistance attribute
        
    };
}

// Function to update character stats display
function updateCharacterStats() {
    document.getElementById('attack').innerText = `Attack: ${character.attack}`;
    document.getElementById('defense-stat').innerText = `Defense: ${character.defense}`;
    document.getElementById('critical-hit-chance').innerText = `Critical Hit Chance: ${character.criticalHitChance}%`;
    document.getElementById('burn-resistance').innerText = `Burn Resistance: ${character.burnResistance}`;
    document.getElementById('poison-resistance').innerText = `Poison Resistance: ${character.poisonResistance}`;
    document.getElementById('chill-resistance').innerText = `Chill Resistance: ${character.chillResistance}`; // Add this line for chill resistance
}

window.onload = function() {
    updateStats();  // Call this to initialize the stats
};
