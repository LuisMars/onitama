const CARD_SIZES = {
    // --- Popular ---
    'standard-card-game': { label: 'Standard Card Game / TCG (63.5 × 88mm)', group: 'Popular', width: 63.5, height: 88 },
    'standard-euro': { label: 'Standard European (59 × 92mm)', group: 'Popular', width: 59, height: 92 },
    'mini-euro': { label: 'Mini European (45 × 68mm)', group: 'Popular', width: 45, height: 68 },
    'standard-american': { label: 'Standard American (56 × 87mm)', group: 'Popular', width: 56, height: 87 },
    'tarot': { label: 'Tarot (70 × 120mm)', group: 'Popular', width: 70, height: 120 },
    'onitama': { label: 'Onitama Original (70 × 120mm)', group: 'Popular', width: 70, height: 120 },
    'mini-american': { label: 'Mini American (41 × 63mm)', group: 'Popular', width: 41, height: 63 },
    'dixit': { label: 'Dixit / Mysterium (80 × 120mm)', group: 'Popular', width: 80, height: 120 },
    '7-wonders': { label: '7 Wonders / Magnum (65 × 100mm)', group: 'Popular', width: 65, height: 100 },

    // --- Standard ---
    'standard-chimera': { label: 'Standard Chimera / Bridge (57.5 × 89mm)', group: 'Standard', width: 57.5, height: 89 },
    'mini-chimera': { label: 'Mini Chimera (43 × 65mm)', group: 'Standard', width: 43, height: 65 },
    'french-tarot': { label: 'French Tarot (61 × 112mm)', group: 'Standard', width: 61, height: 112 },

    // --- Game-Specific ---
    'everdell-mini': { label: 'Everdell Mini (44 × 63mm)', group: 'Game-Specific', width: 44, height: 63 },
    'sails-of-glory': { label: 'Sails of Glory (50 × 75mm)', group: 'Game-Specific', width: 50, height: 75 },
    'yucatan': { label: 'Yucatan (54 × 80mm)', group: 'Game-Specific', width: 54, height: 80 },
    'north-sea': { label: 'North Sea / Garphill (54 × 86mm)', group: 'Game-Specific', width: 54, height: 86 },
    'tf-mars-dice': { label: 'Terraforming Mars Dice (55 × 77mm)', group: 'Game-Specific', width: 55, height: 77 },
    'penny': { label: 'Penny (67 × 92mm)', group: 'Game-Specific', width: 67, height: 92 },
    'space-alert-lg': { label: 'Space Alert / 7W Large (67 × 103mm)', group: 'Game-Specific', width: 67, height: 103 },
    'wotr': { label: 'War of the Ring (68 × 120mm)', group: 'Game-Specific', width: 68, height: 120 },
    'warhammer-quest': { label: 'Warhammer Quest (75 × 110mm)', group: 'Game-Specific', width: 75, height: 110 },
    'betrayal': { label: 'Betrayal at House on the Hill (58 × 108mm)', group: 'Game-Specific', width: 58, height: 108 },
    'space-alert': { label: 'Space Alert (60 × 102mm)', group: 'Game-Specific', width: 60, height: 102 },
    'space-base': { label: 'Space Base (40 × 89mm)', group: 'Game-Specific', width: 40, height: 89 },
    'kd-gambler': { label: 'Kingdom Death Gambler (57 × 100mm)', group: 'Game-Specific', width: 57, height: 100 },

    // --- Square ---
    'square-small': { label: 'Small / KDM (52 × 52mm)', group: 'Square', width: 52, height: 52 },
    'square-wyrmspan': { label: 'Wyrmspan (57 × 57mm)', group: 'Square', width: 57, height: 57 },
    'square-standard': { label: 'Standard (63.5 × 63.5mm)', group: 'Square', width: 63.5, height: 63.5 },
    'square-medium': { label: 'Medium (73 × 73mm)', group: 'Square', width: 73, height: 73 },
    'square-hogwarts': { label: 'Hogwarts (76 × 76mm)', group: 'Square', width: 76, height: 76 },
    'square-large': { label: 'Large (82 × 82mm)', group: 'Square', width: 82, height: 82 },
    'square-etherfields': { label: 'Etherfields (100 × 100mm)', group: 'Square', width: 100, height: 100 },

    // --- Oversized ---
    'zombicide': { label: 'Zombicide (76 × 88mm)', group: 'Oversized', width: 76, height: 88 },
    'hogwarts-large': { label: 'Hogwarts Battle Large (76 × 102mm)', group: 'Oversized', width: 76, height: 102 },
    'super-large': { label: 'Super Large / Jumbo (89 × 146mm)', group: 'Oversized', width: 89, height: 146 },
    '8xl': { label: '8XL (90 × 140mm)', group: 'Oversized', width: 90, height: 140 },
    'xxl': { label: 'XXL Super Large (101.5 × 153mm)', group: 'Oversized', width: 101.5, height: 153 },
    'xxxl': { label: 'XXXL Super Large (101.5 × 203mm)', group: 'Oversized', width: 101.5, height: 203 },

    // --- Custom ---
    custom: { label: 'Custom Size', group: 'Custom', width: 63.5, height: 88 }
};
