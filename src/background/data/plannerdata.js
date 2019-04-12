//Templates
const PLANNER_TEMPLATES = {
    orbs: {
        low: {
            type: SUPPLYTYPE.treasure,
            Fire: 1011,
            Water: 1021,
            Earth: 1031,
            Wind: 1041,
            Light: 1051,
            Dark: 1061
        },
        high: {
            type: SUPPLYTYPE.treasure,
            Fire: 1012,
            Water: 1022,
            Earth: 1032,
            Wind: 1042,
            Light: 1052,
            Dark: 1062
        }
    },
    whorls: {
        type: SUPPLYTYPE.treasure,
        Fire: 1313,
        Water: 1323,
        Earth: 1333,
        Wind: 1343,
        Light: 1353,
        Dark: 1363
    },
    tomes: {
        type: SUPPLYTYPE.treasure,
        Fire: 1311,
        Water: 1321,
        Earth: 1331,
        Wind: 1341,
        Light: 1351,
        Dark: 1361
    },
    scrolls: {
        type: SUPPLYTYPE.treasure,
        Fire: 1312,
        Water: 1322,
        Earth: 1332,
        Wind: 1342,
        Light: 1352,
        Dark: 1362
    },
    scales: {
        type: SUPPLYTYPE.treasure,
        Fire: 1111,
        Water: 1121,
        Earth: 1131,
        Wind: 1141,
        Light: 1151,
        Dark: 1161
    },
    stones: {
        type: SUPPLYTYPE.treasure,
        Sword: 4011,
        Dagger: 4021,
        Spear: 4031,
        Axe: 4041,
        Staff: 4051,
        Gun: 4061,
        Fist: 4071,
        Bow: 4081,
        Harp: 4091,
        Katana: 4101
    },
    quartz: {
        type: SUPPLYTYPE.treasure,
        Fire: 5011,
        Water: 5021,
        Earth: 5031,
        Wind: 5041,
        Light: 5051,
        Dark: 5061
    },
    trueAnima: {
        type: SUPPLYTYPE.treasure,
        Fire: 41,
        Water: 42,
        Earth: 43,
        Wind: 44,
        Light: 45,
        Dark: 46
    },
    omegaItem: {
        type: SUPPLYTYPE.treasure,
        Fire: 47,
        Water: 48,
        Earth: 49,
        Wind: 32,
        Light: 50,
        Dark: 51
    },
    anima: {
        primal: {
            type: SUPPLYTYPE.treasure,
            Fire: 11,
            Water: 12,
            Earth: 13,
            Wind: 10,
            Light: 25,
            Dark: 30
        },
        omegaMagna: {
        type: SUPPLYTYPE.treasure,
        Fire: 19,
        Water: 20,
        Earth: 21,
        Wind: 18,
        Light: 26,
        Dark: 31
        },       
        tierOne: {
        type: SUPPLYTYPE.treasure,
        Fire: 64,
        Water: 60,
        Earth: 62,
        Wind: 65,
        Light: 66,
        Dark: 63
        },
        tierOneOmega: {
        type: SUPPLYTYPE.treasure,
        Fire: 76,
        Water: 73,
        Earth: 74,
        Wind: 77,
        Light: 78,
        Dark: 75
        },
        tierTwo: {
        type: SUPPLYTYPE.treasure,
        Fire: 85,
        Water: 68,
        Earth: 87,
        Wind: 92,
        Light: 67,
        Dark: 72
        },
        tierTwoOmega: {
        type: SUPPLYTYPE.treasure,
        Fire: 86,
        Water: 142,
        Earth: 88,
        Wind: 93,
        Light: 141,
        Dark: 143
        },
        magnaImpossible: {
        type: SUPPLYTYPE.treasure,
        Fire: 510,
        Water: 512,
        Earth: 514,
        Wind: 516,
        Light: 518,
        Dark: 520
        },
        magnaImpossibleOmega: {
        type: SUPPLYTYPE.treasure,
        Fire: 511,
        Water: 513,
        Earth: 515,
        Wind: 517,
        Light: 519,
        Dark: 521
        },
    },
    centrums: {
            type: SUPPLYTYPE.treasure,
            Fire: 101,
            Water: 102,
            Earth: 103,
            Wind: 104,
            Light: 105,
            Dark: 106,
            Silver: 107
    },

    trialFragments: {
//        __proto__: PlannerTemplate,
        type: SUPPLYTYPE.treasure,
        Fire: 5111,
        Water: 5121,
        Earth: 5131,
        Wind: 5141,
        Light: [5111, 5141],
        Dark: [5121, 5131]
    },
    urns: {
        type: SUPPLYTYPE.treasure,
        Fire: 111,
        Water: 112,
        Earth: 113,
        Wind: 114,
        Light: 115,
        Dark: 116
    },
    relicShards: {
        type: SUPPLYTYPE.treasure,
        Sword: 5411,
        Dagger: 5421,
        Spear: 5431,
        Axe: 5441,
        Staff: 5451,
        Gun: 5461,
        Fist: 5471,
        Bow: 5481,
        Harp: 5491,
        Katana: 5501
    },
    revenantFragments: {
        type: SUPPLYTYPE.treasure,
        Sword: 5671,
        Dagger: 5641,
        Spear: 5611,
        Axe: 5631,
        Staff: 5651,
        Gun: 5701,
        Fist: 5661,
        Bow: 5621,
        Harp: 5691,
        Katana: 5681
    },
    astras: {
        type: SUPPLYTYPE.treasure,
        Fire: 25001,
        Water: 25002,
        Earth: 25003,
        Wind: 25004,
        Light: 25005,
        Dark: 25006
    },
    verumProofs: {
        type: SUPPLYTYPE.treasure,
        Fire: 25023,
        Water: 25024,
        Earth: 25025,
        Wind: 25026,
        Light: [25023, 25026],
        Dark: [25024, 25025]
    }
};

const PLANNER_ITEMS = {
    blueSkyCrystal: new PlannerItem(SUPPLYTYPE.treasure, 1),
    championMerit: new PlannerItem(SUPPLYTYPE.treasure, 2001),
    supremeMerit: new PlannerItem(SUPPLYTYPE.treasure, 2002),
    legendaryMerit: new PlannerItem(SUPPLYTYPE.treasure, 2003),
    flawlessPrism: new PlannerItem(SUPPLYTYPE.treasure, 1203),
    rainbowPrism: new PlannerItem(SUPPLYTYPE.treasure, 1204),
    antiqueCloth: new PlannerItem(SUPPLYTYPE.treasure, 54),
    flawedPrism: new PlannerItem(SUPPLYTYPE.treasure, 1202),
    bahaHorn: new PlannerItem(SUPPLYTYPE.treasure, 59),
    silverCentrum: new PlannerItem(SUPPLYTYPE.treasure, 107),
    sephiraStone: new PlannerItem(SUPPLYTYPE.treasure, 25000)
};

/** Creates an item for the planner from any accepted input.
    @arg {Number|Object|PlannerItem} type
**/
function PlannerItem (step, type, id, needed) {
    if (arguments.length == 2) {
        this.type = arguments[0];
        this.id = arguments[1];
        return;
    }
    else if (arguments.length == 3) {
        let item = arguments[1];
        needed = arguments[2];
        if (item instanceof PlannerItem) {
            id = item.id;
            type = item.type;
        }
        else if (item.type) { //templates
            id = item;
            type = item.type;
            this.isTemplate = true;
        }
        else {
            deverror("Invalid planner item, check data.", type);
        }
    }

    this.step = step;
    this.type = type;
    this.id = id;
    this.needed = needed;
}

window.PlannerData = {
    Arcarum: {
        core: [ //Items needed for every craft
            new PlannerItem(1, PLANNER_ITEMS.sephiraStone, 2),
            new PlannerItem(1, PLANNER_ITEMS.flawlessPrism, 100),
            new PlannerItem(2, PLANNER_ITEMS.sephiraStone, 5),
            new PlannerItem(2, PLANNER_ITEMS.rainbowPrism, 100),
            new PlannerItem(3, PLANNER_ITEMS.sephiraStone, 10),
            new PlannerItem(4, PLANNER_ITEMS.sephiraStone, 15),
            new PlannerItem(4, PLANNER_ITEMS.legendaryMerit, 3),
            new PlannerItem(5, PLANNER_ITEMS.sephiraStone, 30),
            new PlannerItem(5, PLANNER_ITEMS.silverCentrum, 5),
            new PlannerItem(5, SUPPLYTYPE.evolution, 20014, 1),
            new PlannerItem(6, PLANNER_ITEMS.sephiraStone, 45),
            new PlannerItem(7, SUPPLYTYPE.treasure, 79, 10),
            new PlannerItem(7, SUPPLYTYPE.treasure, 535, 80),
            new PlannerItem(8, PLANNER_ITEMS.sephiraStone, 30),
            //new PlannerItem(8, Evolite)
        ],
        wtype: { //Summon specific items
            "Justice (Maria Theresa)":[
                new PlannerItem(1, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Water, 3), 
                new PlannerItem(1, SUPPLYTYPE.treasure, 25007, 2), //idean
                new PlannerItem(1, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Water, 6),
                new PlannerItem(1, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.anima.omegaMagna.Water, 30),
                new PlannerItem(1, SUPPLYTYPE.treasure, 25021, 1), //haze
                new PlannerItem(2, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Water, 5), 
                new PlannerItem(2, SUPPLYTYPE.treasure, 25007, 3), //idean
                new PlannerItem(2, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Water, 16),
                new PlannerItem(2, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.quartz.Water, 100),
                new PlannerItem(2, SUPPLYTYPE.treasure, 25021, 3), //haze
                new PlannerItem(3, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Water, 10), 
                new PlannerItem(3, SUPPLYTYPE.treasure, 25007, 5), //idean
                new PlannerItem(3, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Water, 30),
                new PlannerItem(3, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.anima.tierOne.Water, 30),
                new PlannerItem(3, SUPPLYTYPE.treasure, 25021, 7), //haze
                new PlannerItem(4, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Water, 15), 
                new PlannerItem(4, SUPPLYTYPE.treasure, 25007, 7), //idean
                new PlannerItem(4, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Water, 50),
                new PlannerItem(4, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.anima.tierTwo.Water, 30),
                new PlannerItem(4, SUPPLYTYPE.treasure, 25021, 16), //haze
                new PlannerItem(5, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Water, 30), 
                new PlannerItem(5, SUPPLYTYPE.treasure, 25007, 15), //idean
                new PlannerItem(5, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Water, 80),
                new PlannerItem(5, SUPPLYTYPE.treasure, 507, 20),
                new PlannerItem(5, SUPPLYTYPE.treasure, 25021, 24), //haze
                new PlannerItem(6, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Water, 45), 
                new PlannerItem(6, SUPPLYTYPE.treasure, 25007, 25), //idean
                new PlannerItem(6, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Water, 120),
                new PlannerItem(6, SUPPLYTYPE.treasure, 25034, 10), //fragment
                new PlannerItem(6, SUPPLYTYPE.treasure, 25021, 32), //haze
                new PlannerItem(7, SUPPLYTYPE.treasure, 20621, 100),
                new PlannerItem(7, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.trialFragments.Water, 50),
                new PlannerItem(7, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Water, 250),
                new PlannerItem(7, SUPPLYTYPE.treasure, 25034, 20),
                new PlannerItem(7, SUPPLYTYPE.treasure, 130, 50), //treasure
                new PlannerItem(8, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Water, 200),
                new PlannerItem(8, SUPPLYTYPE.treasure, 25007, 20)
            ],
            "The Hanged Man (Caim)":[
                new PlannerItem(1, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Earth, 3), 
                new PlannerItem(1, SUPPLYTYPE.treasure, 25008, 2), //idean
                new PlannerItem(1, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Earth, 6),
                new PlannerItem(1, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.anima.omegaMagna.Earth, 30),
                new PlannerItem(1, SUPPLYTYPE.treasure, 25021, 1), //haze
                new PlannerItem(2, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Earth, 5), 
                new PlannerItem(2, SUPPLYTYPE.treasure, 25008, 3), //idean
                new PlannerItem(2, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Earth, 16),
                new PlannerItem(2, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.quartz.Earth, 100),
                new PlannerItem(2, SUPPLYTYPE.treasure, 25021, 3), //haze
                new PlannerItem(3, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Earth, 10), 
                new PlannerItem(3, SUPPLYTYPE.treasure, 25008, 5), //idean
                new PlannerItem(3, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Earth, 30),
                new PlannerItem(3, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.anima.tierOne.Earth, 30),
                new PlannerItem(3, SUPPLYTYPE.treasure, 25021, 7), //haze
                new PlannerItem(4, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Earth, 15), 
                new PlannerItem(4, SUPPLYTYPE.treasure, 25008, 7), //idean
                new PlannerItem(4, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Earth, 50),
                new PlannerItem(4, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.anima.tierTwo.Earth, 30),
                new PlannerItem(4, SUPPLYTYPE.treasure, 25021, 16), //haze
                new PlannerItem(5, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Earth, 30), 
                new PlannerItem(5, SUPPLYTYPE.treasure, 25008, 15), //idean
                new PlannerItem(5, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Earth, 80),
                new PlannerItem(5, SUPPLYTYPE.treasure, 508, 20),
                new PlannerItem(5, SUPPLYTYPE.treasure, 25021, 24), //haze
                new PlannerItem(6, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Earth, 45), 
                new PlannerItem(6, SUPPLYTYPE.treasure, 25008, 25), //idean
                new PlannerItem(6, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Earth, 120),
                new PlannerItem(6, SUPPLYTYPE.treasure, 25033, 10), //fragment
                new PlannerItem(6, SUPPLYTYPE.treasure, 25021, 32), //haze
                new PlannerItem(7, SUPPLYTYPE.treasure, 20631, 100),
                new PlannerItem(7, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.trialFragments.Earth, 50),
                new PlannerItem(7, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Earth, 250),
                new PlannerItem(7, SUPPLYTYPE.treasure, 25033, 20), //fragment
                new PlannerItem(7, SUPPLYTYPE.treasure, 129, 50), //treasure
                new PlannerItem(8, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Earth, 200),
                new PlannerItem(8, SUPPLYTYPE.treasure, 25008, 20) //idean
            ],
            "Death (Nier)":[
                new PlannerItem(1, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Dark, 3), 
                new PlannerItem(1, SUPPLYTYPE.treasure, 25009, 2), //idean
                new PlannerItem(1, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Dark, 3),
                new PlannerItem(1, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.anima.omegaMagna.Dark, 30),
                new PlannerItem(1, SUPPLYTYPE.treasure, 25021, 1), //haze
                new PlannerItem(2, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Dark, 5), 
                new PlannerItem(2, SUPPLYTYPE.treasure, 25009, 3), //idean
                new PlannerItem(2, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Dark, 8),
                new PlannerItem(2, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.quartz.Dark, 100),
                new PlannerItem(2, SUPPLYTYPE.treasure, 25021, 3), //haze
                new PlannerItem(3, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Dark, 10), 
                new PlannerItem(3, SUPPLYTYPE.treasure, 25009, 5), //idean
                new PlannerItem(3, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Dark, 15),
                new PlannerItem(3, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.anima.tierOne.Dark, 30),
                new PlannerItem(3, SUPPLYTYPE.treasure, 25021, 7), //haze
                new PlannerItem(4, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Dark, 15), 
                new PlannerItem(4, SUPPLYTYPE.treasure, 25009, 7), //idean
                new PlannerItem(4, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Dark, 25),
                new PlannerItem(4, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.anima.tierTwo.Dark, 30),
                new PlannerItem(4, SUPPLYTYPE.treasure, 25021, 16), //haze
                new PlannerItem(5, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Dark, 30), 
                new PlannerItem(5, SUPPLYTYPE.treasure, 25009, 15), //idean
                new PlannerItem(5, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Dark, 40),
                new PlannerItem(5, SUPPLYTYPE.treasure, 507, 10),
                new PlannerItem(5, SUPPLYTYPE.treasure, 508, 10),
                new PlannerItem(5, SUPPLYTYPE.treasure, 25021, 24), //haze
                new PlannerItem(6, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Dark, 45), 
                new PlannerItem(6, SUPPLYTYPE.treasure, 25009, 25), //idean
                new PlannerItem(6, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Dark, 120),
                new PlannerItem(6, SUPPLYTYPE.treasure, 25035, 10), //fragment
                new PlannerItem(6, SUPPLYTYPE.treasure, 25021, 32), //haze
                new PlannerItem(7, SUPPLYTYPE.treasure, 20661, 100),
                new PlannerItem(7, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.trialFragments.Dark, 25),
                new PlannerItem(7, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Dark, 125),
                new PlannerItem(7, SUPPLYTYPE.treasure, 25035, 20), //fragment
                new PlannerItem(7, SUPPLYTYPE.treasure, 128, 50), //treasure
                new PlannerItem(8, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Dark, 200),
                new PlannerItem(8, SUPPLYTYPE.treasure, 25009, 20) //idean
            ],
            "Temperance (Estarriola)":[
                new PlannerItem(1, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Wind, 3), 
                new PlannerItem(1, SUPPLYTYPE.treasure, 25010, 2), //idean
                new PlannerItem(1, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Wind, 6),
                new PlannerItem(1, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.anima.omegaMagna.Wind, 30),
                new PlannerItem(1, SUPPLYTYPE.treasure, 25020, 1), //haze
                new PlannerItem(2, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Wind, 5), 
                new PlannerItem(2, SUPPLYTYPE.treasure, 25010, 3), //idean
                new PlannerItem(2, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Wind, 16),
                new PlannerItem(2, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.quartz.Wind, 100),
                new PlannerItem(2, SUPPLYTYPE.treasure, 25020, 3), //haze
                new PlannerItem(3, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Wind, 10), 
                new PlannerItem(3, SUPPLYTYPE.treasure, 25010, 5), //idean
                new PlannerItem(3, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Wind, 30),
                new PlannerItem(3, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.anima.tierOne.Wind, 30),
                new PlannerItem(3, SUPPLYTYPE.treasure, 25020, 7), //haze
                new PlannerItem(4, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Wind, 15), 
                new PlannerItem(4, SUPPLYTYPE.treasure, 25010, 7), //idean
                new PlannerItem(4, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Wind, 50),
                new PlannerItem(4, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.anima.tierTwo.Wind, 30),
                new PlannerItem(4, SUPPLYTYPE.treasure, 25020, 16), //haze
                new PlannerItem(5, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Wind, 30), 
                new PlannerItem(5, SUPPLYTYPE.treasure, 25010, 15), //idean
                new PlannerItem(5, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Wind, 80),
                new PlannerItem(5, SUPPLYTYPE.treasure, 509, 20),
                new PlannerItem(5, SUPPLYTYPE.treasure, 25020, 24), //haze
                new PlannerItem(6, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Wind, 45), 
                new PlannerItem(6, SUPPLYTYPE.treasure, 25010, 25), //idean
                new PlannerItem(6, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Wind, 120),
                new PlannerItem(6, SUPPLYTYPE.treasure, 25035, 10), //fragment
                new PlannerItem(6, SUPPLYTYPE.treasure, 25020, 32), //haze
                new PlannerItem(7, SUPPLYTYPE.treasure, 20641, 100),
                new PlannerItem(7, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.trialFragments.Wind, 50),
                new PlannerItem(7, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Wind, 250),
                new PlannerItem(7, SUPPLYTYPE.treasure, 25035, 20), //fragment
                new PlannerItem(7, SUPPLYTYPE.treasure, 126, 50), //treasure
                new PlannerItem(8, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Wind, 200),
                new PlannerItem(8, SUPPLYTYPE.treasure, 25010, 20) //idean
            ],
            "The Devil (Fraux)":[
                new PlannerItem(1, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Fire, 3), 
                new PlannerItem(1, SUPPLYTYPE.treasure, 25011, 2), //idean
                new PlannerItem(1, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Fire, 6),
                new PlannerItem(1, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.anima.omegaMagna.Fire, 30),
                new PlannerItem(1, SUPPLYTYPE.treasure, 25020, 1), //haze
                new PlannerItem(2, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Fire, 5), 
                new PlannerItem(2, SUPPLYTYPE.treasure, 25011, 3), //idean
                new PlannerItem(2, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Fire, 16),
                new PlannerItem(2, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.quartz.Fire, 100),
                new PlannerItem(2, SUPPLYTYPE.treasure, 25020, 3), //haze
                new PlannerItem(3, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Fire, 10), 
                new PlannerItem(3, SUPPLYTYPE.treasure, 25011, 5), //idean
                new PlannerItem(3, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Fire, 30),
                new PlannerItem(3, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.anima.tierOne.Fire, 30),
                new PlannerItem(3, SUPPLYTYPE.treasure, 25020, 7), //haze
                new PlannerItem(4, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Fire, 15), 
                new PlannerItem(4, SUPPLYTYPE.treasure, 25011, 7), //idean
                new PlannerItem(4, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Fire, 50),
                new PlannerItem(4, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.anima.tierTwo.Fire, 30),
                new PlannerItem(4, SUPPLYTYPE.treasure, 25020, 16), //haze
                new PlannerItem(5, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Fire, 30), 
                new PlannerItem(5, SUPPLYTYPE.treasure, 25011, 15), //idean
                new PlannerItem(5, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Fire, 80),
                new PlannerItem(5, SUPPLYTYPE.treasure, 506, 20),
                new PlannerItem(5, SUPPLYTYPE.treasure, 25020, 24), //haze
                new PlannerItem(6, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Fire, 45), 
                new PlannerItem(6, SUPPLYTYPE.treasure, 25011, 25), //idean
                new PlannerItem(6, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Fire, 120),
                new PlannerItem(6, SUPPLYTYPE.treasure, 25033, 10), //fragment
                new PlannerItem(6, SUPPLYTYPE.treasure, 25020, 32), //haze
                new PlannerItem(7, SUPPLYTYPE.treasure, 20611, 100),
                new PlannerItem(7, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.trialFragments.Fire, 50),
                new PlannerItem(7, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Fire, 250),
                new PlannerItem(7, SUPPLYTYPE.treasure, 25033, 20), //fragment
                new PlannerItem(7, SUPPLYTYPE.treasure, 144, 50), //treasure
                new PlannerItem(8, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Fire, 200),
                new PlannerItem(8, SUPPLYTYPE.treasure, 25011, 20) //idean
            ],
            "The Tower (Lobelia)":[
                new PlannerItem(1, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Earth, 3), 
                new PlannerItem(1, SUPPLYTYPE.treasure, 25012, 2), //idean
                new PlannerItem(1, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Earth, 6),
                new PlannerItem(1, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.anima.omegaMagna.Earth, 30),
                new PlannerItem(1, SUPPLYTYPE.treasure, 25021, 1), //haze
                new PlannerItem(2, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Earth, 5), 
                new PlannerItem(2, SUPPLYTYPE.treasure, 25012, 3), //idean
                new PlannerItem(2, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Earth, 16),
                new PlannerItem(2, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.quartz.Earth, 100),
                new PlannerItem(2, SUPPLYTYPE.treasure, 25021, 3), //haze
                new PlannerItem(3, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Earth, 10), 
                new PlannerItem(3, SUPPLYTYPE.treasure, 25012, 5), //idean
                new PlannerItem(3, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Earth, 30),
                new PlannerItem(3, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.anima.tierOne.Earth, 30),
                new PlannerItem(3, SUPPLYTYPE.treasure, 25021, 7), //haze
                new PlannerItem(4, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Earth, 15), 
                new PlannerItem(4, SUPPLYTYPE.treasure, 25012, 7), //idean
                new PlannerItem(4, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Earth, 50),
                new PlannerItem(4, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.anima.tierTwo.Earth, 30),
                new PlannerItem(4, SUPPLYTYPE.treasure, 25021, 16), //haze
                new PlannerItem(5, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Earth, 30), 
                new PlannerItem(5, SUPPLYTYPE.treasure, 25012, 15), //idean
                new PlannerItem(5, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Earth, 80),
                new PlannerItem(5, SUPPLYTYPE.treasure, 508, 20),
                new PlannerItem(5, SUPPLYTYPE.treasure, 25021, 24), //haze
                new PlannerItem(6, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Earth, 45), 
                new PlannerItem(6, SUPPLYTYPE.treasure, 25012, 25), //idean
                new PlannerItem(6, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Earth, 120),
                new PlannerItem(6, SUPPLYTYPE.treasure, 25035, 10), //fragment
                new PlannerItem(6, SUPPLYTYPE.treasure, 25021, 32), //haze
                new PlannerItem(7, SUPPLYTYPE.treasure, 20631, 100),
                new PlannerItem(7, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.trialFragments.Earth, 50),
                new PlannerItem(7, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Earth, 250),
                new PlannerItem(7, SUPPLYTYPE.treasure, 25035, 20), //fragment
                new PlannerItem(7, SUPPLYTYPE.treasure, 148, 50), //treasure
                new PlannerItem(8, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Earth, 200),
                new PlannerItem(8, SUPPLYTYPE.treasure, 25012, 20) //idean
            ],
            "The Star (Geisenborger)":[
                new PlannerItem(1, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Light, 3), 
                new PlannerItem(1, SUPPLYTYPE.treasure, 25013, 2), //idean
                new PlannerItem(1, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Light, 3),
                new PlannerItem(1, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.anima.omegaMagna.Light, 30),
                new PlannerItem(1, SUPPLYTYPE.treasure, 25020, 1), //haze
                new PlannerItem(2, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Light, 5), 
                new PlannerItem(2, SUPPLYTYPE.treasure, 25013, 3), //idean
                new PlannerItem(2, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Light, 8),
                new PlannerItem(2, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.quartz.Light, 100),
                new PlannerItem(2, SUPPLYTYPE.treasure, 25020, 3), //haze
                new PlannerItem(3, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Light, 10), 
                new PlannerItem(3, SUPPLYTYPE.treasure, 25013, 5), //idean
                new PlannerItem(3, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Light, 15),
                new PlannerItem(3, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.anima.tierOne.Light, 30),
                new PlannerItem(3, SUPPLYTYPE.treasure, 25020, 7), //haze
                new PlannerItem(4, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Light, 15), 
                new PlannerItem(4, SUPPLYTYPE.treasure, 25013, 7), //idean
                new PlannerItem(4, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Light, 25),
                new PlannerItem(4, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.anima.tierTwo.Light, 30),
                new PlannerItem(4, SUPPLYTYPE.treasure, 25020, 16), //haze
                new PlannerItem(5, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Light, 30), 
                new PlannerItem(5, SUPPLYTYPE.treasure, 25013, 15), //idean
                new PlannerItem(5, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Light, 40),
                new PlannerItem(5, SUPPLYTYPE.treasure, 506, 10),
                new PlannerItem(5, SUPPLYTYPE.treasure, 509, 10),
                new PlannerItem(5, SUPPLYTYPE.treasure, 25020, 24), //haze
                new PlannerItem(6, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Light, 45), 
                new PlannerItem(6, SUPPLYTYPE.treasure, 25013, 25), //idean
                new PlannerItem(6, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Light, 60),
                new PlannerItem(6, SUPPLYTYPE.treasure, 25035, 10), //fragment
                new PlannerItem(6, SUPPLYTYPE.treasure, 25020, 32), //haze
                new PlannerItem(7, SUPPLYTYPE.treasure, 20651, 100),
                new PlannerItem(7, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.trialFragments.Light, 25),
                new PlannerItem(7, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Light, 125),
                new PlannerItem(7, SUPPLYTYPE.treasure, 25035, 20), //fragment
                new PlannerItem(7, SUPPLYTYPE.treasure, 145, 50), //treasure
                new PlannerItem(8, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Light, 200),
                new PlannerItem(8, SUPPLYTYPE.treasure, 25013, 20) //idean
            ],
            "The Moon (Haaselia)":[
                new PlannerItem(1, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Water, 3), 
                new PlannerItem(1, SUPPLYTYPE.treasure, 25014, 2), //idean
                new PlannerItem(1, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Water, 6),
                new PlannerItem(1, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.anima.omegaMagna.Water, 30),
                new PlannerItem(1, SUPPLYTYPE.treasure, 25021, 1), //haze
                new PlannerItem(2, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Water, 5), 
                new PlannerItem(2, SUPPLYTYPE.treasure, 25014, 3), //idean
                new PlannerItem(2, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Water, 16),
                new PlannerItem(2, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.quartz.Water, 100),
                new PlannerItem(2, SUPPLYTYPE.treasure, 25021, 3), //haze
                new PlannerItem(3, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Water, 10), 
                new PlannerItem(3, SUPPLYTYPE.treasure, 25014, 5), //idean
                new PlannerItem(3, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Water, 30),
                new PlannerItem(3, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.anima.tierOne.Water, 30),
                new PlannerItem(3, SUPPLYTYPE.treasure, 25021, 7), //haze
                new PlannerItem(4, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Water, 15), 
                new PlannerItem(4, SUPPLYTYPE.treasure, 25014, 7), //idean
                new PlannerItem(4, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Water, 50),
                new PlannerItem(4, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.anima.tierTwo.Water, 30),
                new PlannerItem(4, SUPPLYTYPE.treasure, 25021, 16), //haze
                new PlannerItem(5, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Water, 30), 
                new PlannerItem(5, SUPPLYTYPE.treasure, 25014, 15), //idean
                new PlannerItem(5, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Water, 80),
                new PlannerItem(5, SUPPLYTYPE.treasure, 507, 20),
                new PlannerItem(5, SUPPLYTYPE.treasure, 25021, 24), //haze
                new PlannerItem(6, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Water, 45), 
                new PlannerItem(6, SUPPLYTYPE.treasure, 25014, 25), //idean
                new PlannerItem(6, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Water, 120),
                new PlannerItem(6, SUPPLYTYPE.treasure, 25034, 10), //fragment
                new PlannerItem(6, SUPPLYTYPE.treasure, 25021, 32), //haze
                new PlannerItem(7, SUPPLYTYPE.treasure, 20621, 100),
                new PlannerItem(7, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.trialFragments.Water, 50),
                new PlannerItem(7, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Water, 250),
                new PlannerItem(7, SUPPLYTYPE.treasure, 25034, 20), //fragment
                new PlannerItem(7, SUPPLYTYPE.treasure, 146, 50), //treasure
                new PlannerItem(8, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Water, 200),
                new PlannerItem(8, SUPPLYTYPE.treasure, 25014, 20) //idean
            ],
            "The Sun (Alanaan)":[
                new PlannerItem(1, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Fire, 3), 
                new PlannerItem(1, SUPPLYTYPE.treasure, 25015, 2), //idean
                new PlannerItem(1, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Fire, 6),
                new PlannerItem(1, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.anima.omegaMagna.Fire, 30),
                new PlannerItem(1, SUPPLYTYPE.treasure, 25020, 1), //haze
                new PlannerItem(2, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Fire, 5), 
                new PlannerItem(2, SUPPLYTYPE.treasure, 25015, 3), //idean
                new PlannerItem(2, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Fire, 16),
                new PlannerItem(2, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.quartz.Fire, 100),
                new PlannerItem(2, SUPPLYTYPE.treasure, 25020, 3), //haze
                new PlannerItem(3, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Fire, 10), 
                new PlannerItem(3, SUPPLYTYPE.treasure, 25015, 5), //idean
                new PlannerItem(3, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Fire, 30),
                new PlannerItem(3, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.anima.tierOne.Fire, 30),
                new PlannerItem(3, SUPPLYTYPE.treasure, 25020, 7), //haze
                new PlannerItem(4, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Fire, 15), 
                new PlannerItem(4, SUPPLYTYPE.treasure, 25015, 7), //idean
                new PlannerItem(4, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Fire, 50),
                new PlannerItem(4, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.anima.tierTwo.Fire, 30),
                new PlannerItem(4, SUPPLYTYPE.treasure, 25020, 16), //haze
                new PlannerItem(5, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Fire, 30), 
                new PlannerItem(5, SUPPLYTYPE.treasure, 25015, 15), //idean
                new PlannerItem(5, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Fire, 80),
                new PlannerItem(5, SUPPLYTYPE.treasure, 506, 20),
                new PlannerItem(5, SUPPLYTYPE.treasure, 25020, 24), //haze
                new PlannerItem(6, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Fire, 45), 
                new PlannerItem(6, SUPPLYTYPE.treasure, 25015, 25), //idean
                new PlannerItem(6, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Fire, 120),
                new PlannerItem(6, SUPPLYTYPE.treasure, 25033, 10), //fragment
                new PlannerItem(6, SUPPLYTYPE.treasure, 25020, 32), //haze
                new PlannerItem(7, SUPPLYTYPE.treasure, 20611, 100),
                new PlannerItem(7, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.trialFragments.Fire, 50),
                new PlannerItem(7, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Fire, 250),
                new PlannerItem(7, SUPPLYTYPE.treasure, 25033, 20), //fragment
                new PlannerItem(7, SUPPLYTYPE.treasure, 127, 50), //treasure
                new PlannerItem(8, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Fire, 200),
                new PlannerItem(8, SUPPLYTYPE.treasure, 25015, 20) //idean
            ],
            "Judgement (Katzelia)":[
                new PlannerItem(1, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Wind, 3), 
                new PlannerItem(1, SUPPLYTYPE.treasure, 25016, 2), //idean
                new PlannerItem(1, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Wind, 6),
                new PlannerItem(1, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.anima.omegaMagna.Wind, 30),
                new PlannerItem(1, SUPPLYTYPE.treasure, 25020, 1), //haze
                new PlannerItem(2, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Wind, 5), 
                new PlannerItem(2, SUPPLYTYPE.treasure, 25016, 3), //idean
                new PlannerItem(2, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Wind, 16),
                new PlannerItem(2, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.quartz.Wind, 100),
                new PlannerItem(2, SUPPLYTYPE.treasure, 25020, 3), //haze
                new PlannerItem(3, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Wind, 10), 
                new PlannerItem(3, SUPPLYTYPE.treasure, 25016, 5), //idean
                new PlannerItem(3, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Wind, 30),
                new PlannerItem(3, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.anima.tierOne.Wind, 30),
                new PlannerItem(3, SUPPLYTYPE.treasure, 25020, 7), //haze
                new PlannerItem(4, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Wind, 15), 
                new PlannerItem(4, SUPPLYTYPE.treasure, 25016, 7), //idean
                new PlannerItem(4, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Wind, 50),
                new PlannerItem(4, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.anima.tierTwo.Wind, 30),
                new PlannerItem(4, SUPPLYTYPE.treasure, 25020, 16), //haze
                new PlannerItem(5, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Wind, 30), 
                new PlannerItem(5, SUPPLYTYPE.treasure, 25016, 15), //idean
                new PlannerItem(5, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Wind, 80),
                new PlannerItem(5, SUPPLYTYPE.treasure, 509, 20),
                new PlannerItem(5, SUPPLYTYPE.treasure, 25020, 24), //haze
                new PlannerItem(6, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Wind, 45), 
                new PlannerItem(6, SUPPLYTYPE.treasure, 25016, 25), //idean
                new PlannerItem(6, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Wind, 120),
                new PlannerItem(6, SUPPLYTYPE.treasure, 25034, 10), //fragment
                new PlannerItem(6, SUPPLYTYPE.treasure, 25020, 32), //haze
                new PlannerItem(7, SUPPLYTYPE.treasure, 20641, 100),
                new PlannerItem(7, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.trialFragments.Wind, 50),
                new PlannerItem(7, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.verumProofs.Wind, 250),
                new PlannerItem(7, SUPPLYTYPE.treasure, 25034, 20), //fragment
                new PlannerItem(7, SUPPLYTYPE.treasure, 147, 50), //treasure
                new PlannerItem(8, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.astras.Wind, 200),
                new PlannerItem(8, SUPPLYTYPE.treasure, 25016, 20) //idean
            ]
        },
        element: {
            Dark: null //no special items, but name needed for option parsing (well not really, but it's nice)
        },
        stepNames: ["Select step","Obtain 0*", "SR 1*", "SR 2*", "SR 3*", "SSR 3*", "SSR 4*", "SSR 5*", "Recruitment"]
    },

    Bahamut: {
        core: [ //Items needed for every craft
            new PlannerItem(1, SUPPLYTYPE.treasure, 59, 1),

            //Nova
            new PlannerItem(2, SUPPLYTYPE.treasure, 59, 3),
            new PlannerItem(2, SUPPLYTYPE.treasure, 1, 7),
            new PlannerItem(2, SUPPLYTYPE.treasure, 1111, 30),
            new PlannerItem(2, SUPPLYTYPE.treasure, 1121, 30),
            new PlannerItem(2, SUPPLYTYPE.treasure, 1131, 30),
            new PlannerItem(2, SUPPLYTYPE.treasure, 1141, 30),
            new PlannerItem(2, SUPPLYTYPE.treasure, 1151, 30),
            new PlannerItem(2, SUPPLYTYPE.treasure, 1161, 30),

            //Coda
            new PlannerItem(3, SUPPLYTYPE.treasure, 79, 5),
            new PlannerItem(3, SUPPLYTYPE.treasure, 2003, 3)
        ],
        wtype: { //Weapon type specific items
            Sword: [new PlannerItem(2, SUPPLYTYPE.treasure, 47, 20)],
            Dagger: [new PlannerItem(2, SUPPLYTYPE.treasure, 51, 20)],
            Spear: [new PlannerItem(2, SUPPLYTYPE.treasure, 32, 20)],
            Axe: [new PlannerItem(2, SUPPLYTYPE.treasure, 49, 20)],
            Staff: [new PlannerItem(2, SUPPLYTYPE.treasure, 50, 20)],
            Gun: [new PlannerItem(2, SUPPLYTYPE.treasure, 47, 20)],
            Fist: [new PlannerItem(2, SUPPLYTYPE.treasure, 49, 20)],
            Bow: [new PlannerItem(2, SUPPLYTYPE.treasure, 32, 20)],
            Harp: [new PlannerItem(2, SUPPLYTYPE.treasure, 48, 20)],
            Katana: [new PlannerItem(2, SUPPLYTYPE.treasure, 48, 20)]
        },
        element: {
            Dark: null //no special items, but name needed for option parsing (well not really, but it's nice)
        },
        stepNames: ["Rusted", "Base", "Nova", "Coda"] //In order starting from 0, which is the true starting (not part of the craft) step
    },

    Class: {
        core: [ //Items needed for every craft
             new PlannerItem(1, SUPPLYTYPE.treasure, 54, 40),
             new PlannerItem(1, SUPPLYTYPE.treasure, 1201, 200),
             new PlannerItem(1, SUPPLYTYPE.treasure, 1, 5),
             //Rebuild
             new PlannerItem(2, SUPPLYTYPE.treasure, 1201, 120),
             new PlannerItem(2, SUPPLYTYPE.treasure, 2001, 30),
             new PlannerItem(2, SUPPLYTYPE.evolution, 20003, 2),
             new PlannerItem(2, SUPPLYTYPE.treasure, 1, 5),
             //Elechange
             new PlannerItem(3, SUPPLYTYPE.treasure, 107, 3),
             new PlannerItem(3, SUPPLYTYPE.treasure, 1, 15),

             new PlannerItem(4, SUPPLYTYPE.treasure, 20771, 3),
             new PlannerItem(4, SUPPLYTYPE.treasure, 79, 1),
             new PlannerItem(4, SUPPLYTYPE.treasure, 1, 20),
             new PlannerItem(4, SUPPLYTYPE.treasure, 107, 3),
        ],
        wtype: { //Weapon type specific items
            Avenger: [new PlannerItem(1, SUPPLYTYPE.treasure, 20611, 70),
                      new PlannerItem(1, SUPPLYTYPE.treasure, 1311, 70),
                      new PlannerItem(1, SUPPLYTYPE.treasure, 20211, 10),
                      new PlannerItem(1, SUPPLYTYPE.treasure, 20111, 30),
                      new PlannerItem(2, SUPPLYTYPE.treasure, 20411, 10),
                      new PlannerItem(2, SUPPLYTYPE.treasure, 4041, 256),
                      new PlannerItem(2, SUPPLYTYPE.treasure, 5011, 50),
                      new PlannerItem(2, SUPPLYTYPE.treasure, 20211, 25),
                      new PlannerItem(3, SUPPLYTYPE.treasure, 20411, 30),
//                      createItem(3, SUPPLYTYPE.treasure, 4041, 512),
//                      templateItem(3, PLANNER_TEMPLATES.stones, "axe", 512),
                      new PlannerItem(4, SUPPLYTYPE.treasure, 4041, 255),
                      new PlannerItem(4, SUPPLYTYPE.treasure, 20231, 10)
            ],
            Skofnung: [new PlannerItem(1, SUPPLYTYPE.treasure, 20621, 70),
                       new PlannerItem(1, SUPPLYTYPE.treasure, 1321, 70),
                       new PlannerItem(1, SUPPLYTYPE.treasure, 20211, 10),
                       new PlannerItem(1, SUPPLYTYPE.treasure, 20121, 30),
                       new PlannerItem(2, SUPPLYTYPE.treasure, 20421, 10),
                       new PlannerItem(2, SUPPLYTYPE.treasure, 4011, 256),
                       new PlannerItem(2, SUPPLYTYPE.treasure, 5021, 50),
                       new PlannerItem(2, SUPPLYTYPE.treasure, 20211, 25),
                       new PlannerItem(3, SUPPLYTYPE.treasure, 20421, 30),
                       new PlannerItem(3, SUPPLYTYPE.treasure, 4011, 512),
                       new PlannerItem(4, SUPPLYTYPE.treasure, 4011, 255),
                       new PlannerItem(4, SUPPLYTYPE.treasure, 20231, 10)
            ],
            Ipetam: [new PlannerItem(1, SUPPLYTYPE.treasure, 20661, 70),
                     new PlannerItem(1, SUPPLYTYPE.treasure, 1361, 70),
                     new PlannerItem(1, SUPPLYTYPE.treasure, 20221, 10),
                     new PlannerItem(1, SUPPLYTYPE.treasure, 20121, 15),
                     new PlannerItem(1, SUPPLYTYPE.treasure, 20131, 15),
                     new PlannerItem(2, SUPPLYTYPE.treasure, 20461, 10),
                     new PlannerItem(2, SUPPLYTYPE.treasure, 4021, 256),
                     new PlannerItem(2, SUPPLYTYPE.treasure, 5061, 50),
                     new PlannerItem(2, SUPPLYTYPE.treasure, 20221, 25),
                     new PlannerItem(3, SUPPLYTYPE.treasure, 20461, 30),
                     new PlannerItem(3, SUPPLYTYPE.treasure, 4021, 512),
                     new PlannerItem(4, SUPPLYTYPE.treasure, 4021, 255),
                     new PlannerItem(4, SUPPLYTYPE.treasure, 20241, 10)
            ],
            Aschallon: [new PlannerItem(1, SUPPLYTYPE.treasure, 20611, 70),
                        new PlannerItem(1, SUPPLYTYPE.treasure, 1311, 70),
                        new PlannerItem(1, SUPPLYTYPE.treasure, 20211, 10),
                        new PlannerItem(1, SUPPLYTYPE.treasure, 20111, 30),
                        new PlannerItem(2, SUPPLYTYPE.treasure, 20691, 10),
                        new PlannerItem(2, SUPPLYTYPE.treasure, 4011, 256),
                        new PlannerItem(2, SUPPLYTYPE.treasure, 5011, 50),
                        new PlannerItem(2, SUPPLYTYPE.treasure, 20211, 25),
                        new PlannerItem(3, SUPPLYTYPE.treasure, 20691, 30),
                        new PlannerItem(3, SUPPLYTYPE.treasure, 4011, 512),
                        new PlannerItem(4, SUPPLYTYPE.treasure, 4011, 255),
                        new PlannerItem(4, SUPPLYTYPE.treasure, 20231, 10)
            ],
            Keraunos: [new PlannerItem(1, SUPPLYTYPE.treasure, 20631, 80),
                       new PlannerItem(1, SUPPLYTYPE.treasure, 1331, 70),
                       new PlannerItem(1, SUPPLYTYPE.treasure, 20221, 10),
                       new PlannerItem(1, SUPPLYTYPE.treasure, 20131, 30),
                       new PlannerItem(2, SUPPLYTYPE.treasure, 20441, 10),
                       new PlannerItem(2, SUPPLYTYPE.treasure, 4051, 256),
                       new PlannerItem(2, SUPPLYTYPE.treasure, 5031, 50),
                       new PlannerItem(2, SUPPLYTYPE.treasure, 20221, 25),
                       new PlannerItem(3, SUPPLYTYPE.treasure, 20441, 30),
                       new PlannerItem(3, SUPPLYTYPE.treasure, 4051, 512),
                       new PlannerItem(4, SUPPLYTYPE.treasure, 4051, 255),
                       new PlannerItem(4, SUPPLYTYPE.treasure, 20241, 10)
            ],
            Rosenbogen: [new PlannerItem(1, SUPPLYTYPE.treasure, 20641, 80),
                         new PlannerItem(1, SUPPLYTYPE.treasure, 1341, 70),
                         new PlannerItem(1, SUPPLYTYPE.treasure, 20211, 10),
                         new PlannerItem(1, SUPPLYTYPE.treasure, 20141, 30),
                         new PlannerItem(2, SUPPLYTYPE.treasure, 20481, 10),
                         new PlannerItem(2, SUPPLYTYPE.treasure, 4081, 256),
                         new PlannerItem(2, SUPPLYTYPE.treasure, 5041, 50),
                         new PlannerItem(2, SUPPLYTYPE.treasure, 20211, 25),
                         new PlannerItem(3, SUPPLYTYPE.treasure, 20481, 30),
                         new PlannerItem(3, SUPPLYTYPE.treasure, 4081, 512),
                         new PlannerItem(4, SUPPLYTYPE.treasure, 4081, 255),
                         new PlannerItem(4, SUPPLYTYPE.treasure, 20231, 10)
            ],
            Langeleik: [new PlannerItem(1, SUPPLYTYPE.treasure, 20621, 80),
                        new PlannerItem(1, SUPPLYTYPE.treasure, 1321, 70),
                        new PlannerItem(1, SUPPLYTYPE.treasure, 20221, 10),
                        new PlannerItem(1, SUPPLYTYPE.treasure, 20121, 30),
                        new PlannerItem(2, SUPPLYTYPE.treasure, 20491, 10),
                        new PlannerItem(2, SUPPLYTYPE.treasure, 4091, 256),
                        new PlannerItem(2, SUPPLYTYPE.treasure, 5021, 50),
                        new PlannerItem(2, SUPPLYTYPE.treasure, 20221, 25),
                        new PlannerItem(3, SUPPLYTYPE.treasure, 20491, 30),
                        new PlannerItem(3, SUPPLYTYPE.treasure, 4091, 512),
                        new PlannerItem(4, SUPPLYTYPE.treasure, 4091, 255),
                        new PlannerItem(4, SUPPLYTYPE.treasure, 20241, 10)
            ],
            Romulus: [new PlannerItem(1, SUPPLYTYPE.treasure, 20651, 80),
                      new PlannerItem(1, SUPPLYTYPE.treasure, 1351, 70),
                      new PlannerItem(1, SUPPLYTYPE.treasure, 20211, 10),
                      new PlannerItem(1, SUPPLYTYPE.treasure, 20111, 15),
                      new PlannerItem(1, SUPPLYTYPE.treasure, 20141, 15),
                      new PlannerItem(2, SUPPLYTYPE.treasure, 20501, 10),
                      new PlannerItem(2, SUPPLYTYPE.treasure, 4031, 256),
                      new PlannerItem(2, SUPPLYTYPE.treasure, 5051, 50),
                      new PlannerItem(2, SUPPLYTYPE.treasure, 20211, 25),
                      new PlannerItem(3, SUPPLYTYPE.treasure, 20501, 30),
                      new PlannerItem(3, SUPPLYTYPE.treasure, 4031, 512),
                      new PlannerItem(4, SUPPLYTYPE.treasure, 4031, 255),
                      new PlannerItem(4, SUPPLYTYPE.treasure, 20231, 10)
            ],
            Faust: [new PlannerItem(1, SUPPLYTYPE.treasure, 20631, 80),
                    new PlannerItem(1, SUPPLYTYPE.treasure, 1331, 70),
                    new PlannerItem(1, SUPPLYTYPE.treasure, 20221, 10),
                    new PlannerItem(1, SUPPLYTYPE.treasure, 20131, 30),
                    new PlannerItem(2, SUPPLYTYPE.treasure, 20511, 10),
                    new PlannerItem(2, SUPPLYTYPE.treasure, 4021, 256),
                    new PlannerItem(2, SUPPLYTYPE.treasure, 5031, 50),
                    new PlannerItem(2, SUPPLYTYPE.treasure, 20221, 25),
                    new PlannerItem(3, SUPPLYTYPE.treasure, 20511, 30),
                    new PlannerItem(3, SUPPLYTYPE.treasure, 4021, 512),
                    new PlannerItem(4, SUPPLYTYPE.treasure, 4021, 255),
                    new PlannerItem(4, SUPPLYTYPE.treasure, 20241, 10)
            ],
            Murakumo: [new PlannerItem(1, SUPPLYTYPE.treasure, 20651, 80),
                       new PlannerItem(1, SUPPLYTYPE.treasure, 1351, 70),
                       new PlannerItem(1, SUPPLYTYPE.treasure, 20211, 10),
                       new PlannerItem(1, SUPPLYTYPE.treasure, 20111, 15),
                       new PlannerItem(1, SUPPLYTYPE.treasure, 20141, 15),
                       new PlannerItem(2, SUPPLYTYPE.treasure, 20671, 10),
                       new PlannerItem(2, SUPPLYTYPE.treasure, 4101, 256),
                       new PlannerItem(2, SUPPLYTYPE.treasure, 5051, 50),
                       new PlannerItem(2, SUPPLYTYPE.treasure, 20211, 25),
                       new PlannerItem(3, SUPPLYTYPE.treasure, 20671, 30),
                       new PlannerItem(3, SUPPLYTYPE.treasure, 4101, 512),
                       new PlannerItem(4, SUPPLYTYPE.treasure, 4101, 255),
                       new PlannerItem(4, SUPPLYTYPE.treasure, 20231, 10)
            ],
            Kapilavastu: [new PlannerItem(1, SUPPLYTYPE.treasure, 20621, 80),
                          new PlannerItem(1, SUPPLYTYPE.treasure, 1321, 70),
                          new PlannerItem(1, SUPPLYTYPE.treasure, 20221, 10),
                          new PlannerItem(1, SUPPLYTYPE.treasure, 20121, 30),
                          new PlannerItem(2, SUPPLYTYPE.treasure, 20751, 10),
                          new PlannerItem(2, SUPPLYTYPE.treasure, 4051, 256),
                          new PlannerItem(2, SUPPLYTYPE.treasure, 5021, 50),
                          new PlannerItem(2, SUPPLYTYPE.treasure, 20221, 25),
                          new PlannerItem(3, SUPPLYTYPE.treasure, 20751, 30),
                          new PlannerItem(3, SUPPLYTYPE.treasure, 4051, 512),
                          new PlannerItem(4, SUPPLYTYPE.treasure, 4051, 255),
                          new PlannerItem(4, SUPPLYTYPE.treasure, 20241, 10)
            ],
            Nirvana: [new PlannerItem(1, SUPPLYTYPE.treasure, 20651, 90),
                      new PlannerItem(1, SUPPLYTYPE.treasure, 1351, 70),
                      new PlannerItem(1, SUPPLYTYPE.treasure, 20221, 10),
                      new PlannerItem(1, SUPPLYTYPE.treasure, 20111, 15),
                      new PlannerItem(1, SUPPLYTYPE.treasure, 20141, 15),
                      new PlannerItem(2, SUPPLYTYPE.treasure, 20431, 10),
                      new PlannerItem(2, SUPPLYTYPE.treasure, 4051, 256),
                      new PlannerItem(2, SUPPLYTYPE.treasure, 5051, 50),
                      new PlannerItem(2, SUPPLYTYPE.treasure, 20221, 25),
                      new PlannerItem(3, SUPPLYTYPE.treasure, 20431, 30),
                      new PlannerItem(3, SUPPLYTYPE.treasure, 4051, 512),
                      new PlannerItem(4, SUPPLYTYPE.treasure, 4051, 255),
                      new PlannerItem(4, SUPPLYTYPE.treasure, 20241, 10)
            ],
            Oliver: [new PlannerItem(1, SUPPLYTYPE.treasure, 20641, 90),
                     new PlannerItem(1, SUPPLYTYPE.treasure, 1341, 70),
                     new PlannerItem(1, SUPPLYTYPE.treasure, 20211, 10),
                     new PlannerItem(1, SUPPLYTYPE.treasure, 20141, 30),
                     new PlannerItem(2, SUPPLYTYPE.treasure, 20451, 10),
                     new PlannerItem(2, SUPPLYTYPE.treasure, 4061, 256),
                     new PlannerItem(2, SUPPLYTYPE.treasure, 5041, 50),
                     new PlannerItem(2, SUPPLYTYPE.treasure, 20211, 25),
                     new PlannerItem(3, SUPPLYTYPE.treasure, 20451, 30),
                     new PlannerItem(3, SUPPLYTYPE.treasure, 4061, 512),
                     new PlannerItem(4, SUPPLYTYPE.treasure, 4061, 255),
                     new PlannerItem(4, SUPPLYTYPE.treasure, 20231, 10)
            ],
            Hellion: [new PlannerItem(1, SUPPLYTYPE.treasure, 20611, 90),
                      new PlannerItem(1, SUPPLYTYPE.treasure, 1311, 70),
                      new PlannerItem(1, SUPPLYTYPE.treasure, 20211, 10),
                      new PlannerItem(1, SUPPLYTYPE.treasure, 20111, 30),
                      new PlannerItem(2, SUPPLYTYPE.treasure, 20471, 10),
                      new PlannerItem(2, SUPPLYTYPE.treasure, 4071, 256),
                      new PlannerItem(2, SUPPLYTYPE.treasure, 5011, 50),
                      new PlannerItem(2, SUPPLYTYPE.treasure, 20211, 25),
                      new PlannerItem(3, SUPPLYTYPE.treasure, 20471, 30),
                      new PlannerItem(3, SUPPLYTYPE.treasure, 4071, 512),
                      new PlannerItem(4, SUPPLYTYPE.treasure, 4071, 255),
                      new PlannerItem(4, SUPPLYTYPE.treasure, 20231, 10)
            ],
            Muramasa: [new PlannerItem(1, SUPPLYTYPE.treasure, 20661, 90),
                       new PlannerItem(1, SUPPLYTYPE.treasure, 1361, 70),
                       new PlannerItem(1, SUPPLYTYPE.treasure, 20221, 10),
                       new PlannerItem(1, SUPPLYTYPE.treasure, 20121, 15),
                       new PlannerItem(1, SUPPLYTYPE.treasure, 20131, 15),
                       new PlannerItem(2, SUPPLYTYPE.treasure, 20681, 10),
                       new PlannerItem(2, SUPPLYTYPE.treasure, 4101, 256),
                       new PlannerItem(2, SUPPLYTYPE.treasure, 5061, 50),
                       new PlannerItem(2, SUPPLYTYPE.treasure, 20221, 25),
                       new PlannerItem(3, SUPPLYTYPE.treasure, 20681, 30),
                       new PlannerItem(3, SUPPLYTYPE.treasure, 4101, 512),
                       new PlannerItem(4, SUPPLYTYPE.treasure, 4101, 255),
                       new PlannerItem(4, SUPPLYTYPE.treasure, 20241, 10)
            ],
            Nebuchad: [new PlannerItem(1, SUPPLYTYPE.treasure, 20661, 90),
                       new PlannerItem(1, SUPPLYTYPE.treasure, 1361, 70),
                       new PlannerItem(1, SUPPLYTYPE.treasure, 20221, 10),
                       new PlannerItem(1, SUPPLYTYPE.treasure, 20121, 15),
                       new PlannerItem(1, SUPPLYTYPE.treasure, 20131, 15),
                       new PlannerItem(2, SUPPLYTYPE.treasure, 20701, 10),
                       new PlannerItem(2, SUPPLYTYPE.treasure, 4061, 256),
                       new PlannerItem(2, SUPPLYTYPE.treasure, 5061, 50),
                       new PlannerItem(2, SUPPLYTYPE.treasure, 20221, 25),
                       new PlannerItem(3, SUPPLYTYPE.treasure, 20701, 30),
                       new PlannerItem(3, SUPPLYTYPE.treasure, 4061, 512),
                       new PlannerItem(4, SUPPLYTYPE.treasure, 4061, 255),
                       new PlannerItem(4, SUPPLYTYPE.treasure, 20241, 10)
            ],
            Misericorde: [new PlannerItem(1, SUPPLYTYPE.treasure, 20641, 90),
                          new PlannerItem(1, SUPPLYTYPE.treasure, 1341, 70),
                          new PlannerItem(1, SUPPLYTYPE.treasure, 20211, 10),
                          new PlannerItem(1, SUPPLYTYPE.treasure, 20141, 30),
                          new PlannerItem(2, SUPPLYTYPE.treasure, 20761, 10),
                          new PlannerItem(2, SUPPLYTYPE.treasure, 4021, 256),
                          new PlannerItem(2, SUPPLYTYPE.treasure, 5041, 50),
                          new PlannerItem(2, SUPPLYTYPE.treasure, 20211, 25),
                          new PlannerItem(3, SUPPLYTYPE.treasure, 20761, 30),
                          new PlannerItem(3, SUPPLYTYPE.treasure, 4021, 512),
                          new PlannerItem(4, SUPPLYTYPE.treasure, 4021, 255),
                          new PlannerItem(4, SUPPLYTYPE.treasure, 20231, 10)
            ],
        },
        element: {
            Fire: [new PlannerItem(3, SUPPLYTYPE.treasure, 101, 30),
                   new PlannerItem(3, SUPPLYTYPE.treasure, 20711, 30),
                   new PlannerItem(3, SUPPLYTYPE.treasure, 10018, 200),
                   new PlannerItem(4, SUPPLYTYPE.treasure, 101, 30),
                   new PlannerItem(4, SUPPLYTYPE.treasure, 506, 6)
            ],
            Water: [new PlannerItem(3, SUPPLYTYPE.treasure, 102, 30),
                    new PlannerItem(3, SUPPLYTYPE.treasure, 20721, 30),
                    new PlannerItem(3, SUPPLYTYPE.treasure, 10005, 200),
                    new PlannerItem(4, SUPPLYTYPE.treasure, 102, 30),
                    new PlannerItem(4, SUPPLYTYPE.treasure, 507, 6)
            ],
            Earth: [new PlannerItem(3, SUPPLYTYPE.treasure, 103, 30),
                    new PlannerItem(3, SUPPLYTYPE.treasure, 20731, 30),
                    new PlannerItem(3, SUPPLYTYPE.treasure, 10011, 200),
                    new PlannerItem(3, SUPPLYTYPE.treasure, 103, 30),
                    new PlannerItem(4, SUPPLYTYPE.treasure, 508, 6)
            ],
            Wind: [new PlannerItem(3, SUPPLYTYPE.treasure, 104, 30),
                   new PlannerItem(3, SUPPLYTYPE.treasure, 20741, 30),
                   new PlannerItem(3, SUPPLYTYPE.treasure, 10027, 200),
                   new PlannerItem(3, SUPPLYTYPE.treasure, 104, 30),
                   new PlannerItem(4, SUPPLYTYPE.treasure, 509, 6)
            ],
            Light: [new PlannerItem(3, SUPPLYTYPE.treasure, 105, 30),
                    new PlannerItem(3, SUPPLYTYPE.treasure, 20711, 15),
                    new PlannerItem(3, SUPPLYTYPE.treasure, 20741, 15),
                    new PlannerItem(3, SUPPLYTYPE.treasure, 10046, 200),
                    new PlannerItem(3, SUPPLYTYPE.treasure, 105, 30),
                    new PlannerItem(4, SUPPLYTYPE.treasure, 506, 6),
                    new PlannerItem(4, SUPPLYTYPE.treasure, 509, 6)
            ],
            Dark: [new PlannerItem(3, SUPPLYTYPE.treasure, 106, 30),
                   new PlannerItem(3, SUPPLYTYPE.treasure, 20721, 15),
                   new PlannerItem(3, SUPPLYTYPE.treasure, 20731, 15),
                   new PlannerItem(3, SUPPLYTYPE.treasure, 10065, 200),
                   new PlannerItem(3, SUPPLYTYPE.treasure, 106, 30),
                   new PlannerItem(4, SUPPLYTYPE.treasure, 507, 6),
                   new PlannerItem(4, SUPPLYTYPE.treasure, 508, 6)
            ],
        },
        stepNames: ["Replica", "Forge", "Rebuild", "Elechange", "FLB"]
    },

    Revenant:{
        core: [
            //Awakening
            new PlannerItem(1, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.orbs.high.Light, 50),
            new PlannerItem(1, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.scrolls.Light, 50),
            new PlannerItem(1, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.whorls.Light, 50),
            new PlannerItem(1, SUPPLYTYPE.treasure, 1151, 50),
            new PlannerItem(1, SUPPLYTYPE.treasure, 2001, 50),
            new PlannerItem(1, SUPPLYTYPE.crystals, 0, 100),
            new PlannerItem(2, SUPPLYTYPE.treasure, 1202, 250),

            //Upgrade 1
            new PlannerItem(3, SUPPLYTYPE.treasure, 2, 300),
            new PlannerItem(3, SUPPLYTYPE.treasure, 5, 100),
            new PlannerItem(3, SUPPLYTYPE.treasure, 8, 100),
            new PlannerItem(3, PLANNER_ITEMS.supremeMerit, 10),
            new PlannerItem(3, PLANNER_ITEMS.blueSkyCrystal, 3),
            new PlannerItem(3, SUPPLYTYPE.crystals, 0, 100),

            //2
            new PlannerItem(4, SUPPLYTYPE.treasure, 6, 100),
            new PlannerItem(4, SUPPLYTYPE.treasure, 24, 100),
            new PlannerItem(4, SUPPLYTYPE.treasure, 28, 100),
            new PlannerItem(4, PLANNER_ITEMS.rainbowPrism, 50),
            new PlannerItem(4, PLANNER_ITEMS.blueSkyCrystal, 5),
            new PlannerItem(4, SUPPLYTYPE.crystals, 0, 200),

            //3
            new PlannerItem(5, SUPPLYTYPE.treasure, 3, 300),
            new PlannerItem(5, SUPPLYTYPE.treasure, 22, 100),
            new PlannerItem(5, SUPPLYTYPE.treasure, 39, 80),
            new PlannerItem(5, PLANNER_ITEMS.supremeMerit, 10),
            new PlannerItem(5, PLANNER_ITEMS.blueSkyCrystal, 7),
            new PlannerItem(5, SUPPLYTYPE.crystals, 0, 300),

            //4
            new PlannerItem(6, SUPPLYTYPE.treasure, 17, 100),
            new PlannerItem(6, SUPPLYTYPE.treasure, 29, 100),
            new PlannerItem(6, SUPPLYTYPE.treasure, 40, 80),
            new PlannerItem(6, PLANNER_ITEMS.rainbowPrism, 150),
            new PlannerItem(6, PLANNER_ITEMS.blueSkyCrystal, 10),
            new PlannerItem(6, SUPPLYTYPE.crystals, 0, 400),
            //5
            new PlannerItem(7, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.omegaItem.Wind, 20),
            new PlannerItem(7, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.omegaItem.Fire, 20),
            new PlannerItem(7, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.omegaItem.Water, 20),
            new PlannerItem(7, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.omegaItem.Earth, 20),
            new PlannerItem(7, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.omegaItem.Light, 20),
            new PlannerItem(7, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.omegaItem.Dark, 20),
            new PlannerItem(7, PLANNER_ITEMS.antiqueCloth, 100),
            new PlannerItem(7, PLANNER_ITEMS.supremeMerit, 10),
            new PlannerItem(7, PLANNER_ITEMS.blueSkyCrystal, 15),
            new PlannerItem(7, SUPPLYTYPE.crystals, 0, 500),
            //6
            new PlannerItem(8, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.trueAnima.Fire, 3),
            new PlannerItem(8, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.trueAnima.Water, 3),
            new PlannerItem(8, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.trueAnima.Earth, 3),
            new PlannerItem(8, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.trueAnima.Wind, 3),
            new PlannerItem(8, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.trueAnima.Light, 3),
            new PlannerItem(8, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.trueAnima.Dark, 3),
            new PlannerItem(8, PLANNER_ITEMS.rainbowPrism, 250),
            new PlannerItem(8, PLANNER_ITEMS.blueSkyCrystal, 30),
            new PlannerItem(8, SUPPLYTYPE.evolution, 20004, 1), //Gold brick 1
            new PlannerItem(8, SUPPLYTYPE.crystals, 0, 600),

           //8 Crafting an uncapped Silver relic
            new PlannerItem(10, SUPPLYTYPE.treasure, 5011, 300),
            new PlannerItem(10, SUPPLYTYPE.treasure, 5021, 300),
            new PlannerItem(10, SUPPLYTYPE.treasure, 5031, 300),
            new PlannerItem(10, SUPPLYTYPE.treasure, 5041, 300),
            new PlannerItem(10, SUPPLYTYPE.treasure, 5051, 300),
            new PlannerItem(10, SUPPLYTYPE.treasure, 5061, 300),

           //9 Creating a Golden Relic
           new PlannerItem(11, SUPPLYTYPE.evolution, 20004, 1),
           new PlannerItem(11, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.centrums.Silver, 10),
           new PlannerItem(11, SUPPLYTYPE.treasure, 203, 10),
           new PlannerItem(11, PLANNER_ITEMS.legendaryMerit, 5),
           new PlannerItem(11, PLANNER_ITEMS.flawedPrism, 1500),
           new PlannerItem(11, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.whorls.Fire, 250),
           new PlannerItem(11, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.whorls.Water, 250),
           new PlannerItem(11, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.whorls.Earth, 250),
           new PlannerItem(11, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.whorls.Wind, 250),
           new PlannerItem(11, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.whorls.Light, 250),
           new PlannerItem(11, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.whorls.Dark, 250),
           new PlannerItem(11, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.orbs.low.Fire, 250),
           new PlannerItem(11, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.orbs.low.Water, 250),
           new PlannerItem(11, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.orbs.low.Earth, 250),
           new PlannerItem(11, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.orbs.low.Wind, 250),
           new PlannerItem(11, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.orbs.low.Light, 250),
           new PlannerItem(11, SUPPLYTYPE.treasure, PLANNER_TEMPLATES.orbs.low.Dark, 250)
        ],
        wtype: {

            //All need 24 rusted weapons of the same type as the Eternal.

            "Uno (spear)": [
                new PlannerItem(11, SUPPLYTYPE.treasure, 20421, 30)
                ],
            "Sorn (bow)": [
                new PlannerItem(11, SUPPLYTYPE.treasure, 20481, 30)
                ],
            "Sarasa (axe)": [
                new PlannerItem(11, SUPPLYTYPE.treasure, 20411, 30)
                ],
            "Feower (dagger)": [
                new PlannerItem(11, SUPPLYTYPE.treasure, 20461, 30)
                ],
            "Funf (staff)": [
                new PlannerItem(11, SUPPLYTYPE.treasure, 20431, 30)
                ],
            "Six (fist)": [
                new PlannerItem(11, SUPPLYTYPE.treasure, 20471, 30)
                ],
            "Siete (sword)": [
                new PlannerItem(11, SUPPLYTYPE.treasure, 20691, 30)
                ],
            "Okto (katana)": [
                new PlannerItem(11, SUPPLYTYPE.treasure, 20671, 30)
                ],
            "Nio (harp)": [
                new PlannerItem(11, SUPPLYTYPE.treasure, 20491, 30)
                ],
            "Esser (gun)": [
                new PlannerItem(11, SUPPLYTYPE.treasure, 20451, 30)
                ],
            templates: [
               new PlannerItem(9, PLANNER_TEMPLATES.relicShards, 40), //Silver fragments
               new PlannerItem(10, PLANNER_TEMPLATES.stones, 300), //Stones
               new PlannerItem(11, PLANNER_TEMPLATES.revenantFragments, 100) //Revenant Fragments
            ]
        },
        element: {
            Fire: null,
            Water: null,
            Earth: null,
            Wind: null,
            Light: null,
            Dark: null,
            templates: [
                new PlannerItem(2, PLANNER_TEMPLATES.orbs.low, 250),
                new PlannerItem(2, PLANNER_TEMPLATES.whorls, 250),

                //Upgrade 1
                new PlannerItem(3, PLANNER_TEMPLATES.orbs.low, 100),
                new PlannerItem(3, PLANNER_TEMPLATES.whorls, 100),
                new PlannerItem(3, PLANNER_TEMPLATES.tomes, 100),
                new PlannerItem(3, PLANNER_TEMPLATES.scrolls, 150),

                //Upgrade 2
                new PlannerItem(4, PLANNER_TEMPLATES.orbs.low, 150),
                new PlannerItem(4, PLANNER_TEMPLATES.tomes, 150),
                new PlannerItem(4, PLANNER_TEMPLATES.whorls, 150),
                new PlannerItem(4, PLANNER_TEMPLATES.scales, 30),
                new PlannerItem(4, PLANNER_TEMPLATES.trueAnima, 3),

                //Upgrade 3
                new PlannerItem(5, PLANNER_TEMPLATES.orbs.low, 200),
                new PlannerItem(5, PLANNER_TEMPLATES.orbs.high, 100),
                new PlannerItem(5, PLANNER_TEMPLATES.whorls, 200),
                new PlannerItem(5, PLANNER_TEMPLATES.anima.primal, 100),

                //Upgrade 4
                new PlannerItem(6, PLANNER_TEMPLATES.orbs.low, 250),
                new PlannerItem(6, PLANNER_TEMPLATES.scales, 50),
                new PlannerItem(6, PLANNER_TEMPLATES.whorls, 250),
                new PlannerItem(6, PLANNER_TEMPLATES.trueAnima, 3),

                //Upgrade 5
                new PlannerItem(7, PLANNER_TEMPLATES.omegaItem, 60),
            ]
        },
        stepNames: ["Revenant", "Awaken", "Elechange", "Upgrade 1", "Upgrade 2", "Upgrade 3", "Upgrade 4", "Upgrade 5", "Upgrade 6", 'Silver Relic', 'Silver Uncap','Golden Relic'],
        typeNames: {
            "Uno (spear)": "Spear",
            "Sorn (bow)": "Bow",
            "Sarasa (axe)": "Axe",
            "Feower (dagger)": "Dagger",
            "Funf (staff)": "Staff",
            "Six (fist)": "Fist",
            "Siete (sword)": "Sword",
            "Okto (katana)": "Katana",
            "Nio (harp)": "Harp",
            "Esser (gun)": "Gun",
        }
    },

    "Atma/Ultima": {
        core: [
            new PlannerItem(1, PLANNER_ITEMS.flawedPrism, 250),

            new PlannerItem(2, PLANNER_ITEMS.bahaHorn, 2),
            new PlannerItem(2, SUPPLYTYPE.treasure, 137, 10),
            new PlannerItem(2, PLANNER_ITEMS.supremeMerit, 20),
            new PlannerItem(2, SUPPLYTYPE.treasure, 140, 1),

            new PlannerItem(3, PLANNER_ITEMS.legendaryMerit, 10),
            new PlannerItem(3, PLANNER_ITEMS.silverCentrum, 10),
            new PlannerItem(3, SUPPLYTYPE.treasure, 79, 3),
            new PlannerItem(3, SUPPLYTYPE.treasure, 138, 5)
        ],
        wtype: {
            Sword: null,
            Dagger: null,
            Spear: null,
            Axe: null,
            Staff: null,
            Gun: null,
            Fist: null,
            Bow: null,
            Harp: null,
            Katana: null,
            templates: [
                new PlannerItem(3, PLANNER_TEMPLATES.stones, 500)
            ]
        },
        element: {
            Fire: null,
            Water: null,
            Earth: null,
            Wind: null,
            Light: null,
            Dark: null,
            templates: [
                new PlannerItem(1, PLANNER_TEMPLATES.orbs.low, 250),
                new PlannerItem(1, PLANNER_TEMPLATES.whorls, 250),
                new PlannerItem(2, PLANNER_TEMPLATES.trialFragments, 20),
                new PlannerItem(3, PLANNER_TEMPLATES.quartz, 500),
                new PlannerItem(3, PLANNER_TEMPLATES.urns, 30)
            ]
        },
        stepNames: ["Rusted", "Relic", "Atma", "Ultima"]
    }
};

(function hideTemplates(o) {
    if (o.templates) {
        Object.defineProperty(o, "templates", {enumerable: false});
    }
    else {
        for (let k of Object.keys(o)) {
            if (o[k] instanceof Object) { hideTemplates(o[k]); }
        }
    }
})(PlannerData);
