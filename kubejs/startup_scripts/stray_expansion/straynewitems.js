StartupEvents.registry('item', event => {
	event.create('stray_expansion:incomplete_relic_appendix', 'create:sequenced_assembly').texture('stray_expansion:item/organs/relic/incomplete_relic_appendix')
	event.create('stray_expansion:incomplete_relic_heart', 'create:sequenced_assembly').texture('stray_expansion:item/organs/relic/incomplete_relic_heart')
	event.create('stray_expansion:incomplete_relic_intestine', 'create:sequenced_assembly').texture('stray_expansion:item/organs/relic/incomplete_relic_intestine')
	event.create('stray_expansion:incomplete_relic_kidney', 'create:sequenced_assembly').texture('stray_expansion:item/organs/relic/incomplete_relic_kidney')
	event.create('stray_expansion:incomplete_relic_liver', 'create:sequenced_assembly').texture('stray_expansion:item/organs/relic/incomplete_relic_liver')
	event.create('stray_expansion:incomplete_relic_lung', 'create:sequenced_assembly').texture('stray_expansion:item/organs/relic/incomplete_relic_lung')
	event.create('stray_expansion:incomplete_relic_muscle', 'create:sequenced_assembly').texture('stray_expansion:item/organs/relic/incomplete_relic_muscle')
	event.create('stray_expansion:incomplete_relic_rib', 'create:sequenced_assembly').texture('stray_expansion:item/organs/relic/incomplete_relic_rib')
	event.create('stray_expansion:incomplete_relic_spine', 'create:sequenced_assembly').texture('stray_expansion:item/organs/relic/incomplete_relic_spine')
	event.create('stray_expansion:incomplete_relic_spleen', 'create:sequenced_assembly').texture('stray_expansion:item/organs/relic/incomplete_relic_spleen')
	event.create('stray_expansion:incomplete_relic_stomach', 'create:sequenced_assembly').texture('stray_expansion:item/organs/relic/incomplete_relic_stomach')
	
	event.create('stray_expansion:incomplete_frankenstein_appendix', 'create:sequenced_assembly').texture('stray_expansion:item/organs/frankenstein/frankenstein_appendix')
	event.create('stray_expansion:incomplete_frankenstein_heart', 'create:sequenced_assembly').texture('stray_expansion:item/organs/frankenstein/frankenstein_heart')
	event.create('stray_expansion:incomplete_frankenstein_intestine', 'create:sequenced_assembly').texture('stray_expansion:item/organs/frankenstein/frankenstein_intestine')
	event.create('stray_expansion:incomplete_frankenstein_kidney', 'create:sequenced_assembly').texture('stray_expansion:item/organs/frankenstein/frankenstein_kidney')
	event.create('stray_expansion:incomplete_frankenstein_liver', 'create:sequenced_assembly').texture('stray_expansion:item/organs/frankenstein/frankenstein_liver')
	event.create('stray_expansion:incomplete_frankenstein_lung', 'create:sequenced_assembly').texture('stray_expansion:item/organs/frankenstein/frankenstein_lung')
	event.create('stray_expansion:incomplete_frankenstein_muscle', 'create:sequenced_assembly').texture('stray_expansion:item/organs/frankenstein/frankenstein_muscle')
	event.create('stray_expansion:incomplete_frankenstein_spleen', 'create:sequenced_assembly').texture('stray_expansion:item/organs/frankenstein/frankenstein_spleen')
	event.create('stray_expansion:incomplete_frankenstein_stomach', 'create:sequenced_assembly').texture('stray_expansion:item/organs/frankenstein/frankenstein_stomach')
	
	
	event.create('stray_expansion:muscle_pile').texture('stray_expansion:item/materials/muscle_pile').group("kubejs.strayexpansion")
	event.create('stray_expansion:ender_muscle_pile').texture('stray_expansion:item/materials/ender_muscle_pile').group("kubejs.strayexpansion")
	event.create('stray_expansion:dragon_muscle_pile').texture('stray_expansion:item/materials/dragon_muscle_pile').group("kubejs.strayexpansion")
	event.create('stray_expansion:ender_rib_pile').texture('stray_expansion:item/materials/ender_rib_pile').group("kubejs.strayexpansion")
	event.create('stray_expansion:rotten_muscle_pile').texture('stray_expansion:item/materials/rotten_muscle_pile').group("kubejs.strayexpansion")
	event.create('stray_expansion:rotten_rib_pile').texture('stray_expansion:item/materials/rotten_rib_pile').group("kubejs.strayexpansion")
	event.create('stray_expansion:dragon_rib_pile').texture('stray_expansion:item/materials/dragon_rib_pile').group("kubejs.strayexpansion")
	event.create('stray_expansion:liquid_fuel_bottle').texture('stray_expansion:item/materials/liquid_fuel_bottle').group("kubejs.strayexpansion")
	event.create('stray_expansion:fire_dragon_feast').texture('stray_expansion:item/food/fire_dragon_feast').food(food => { food.hunger(30).saturation(2.5); food.effect('minecraft:fire_resistance', 20 * 300, 1, 1) }).group("kubejs.strayexpansion")
	event.create('stray_expansion:ice_dragon_feast').texture('stray_expansion:item/food/ice_dragon_feast').food(food => { food.hunger(30).saturation(2.5); food.effect('minecraft:speed', 20 * 300, 1, 1) }).group("kubejs.strayexpansion")
	event.create('stray_expansion:lightning_dragon_feast').texture('stray_expansion:item/food/lightning_dragon_feast').food(food => { food.hunger(30).saturation(2.5); food.effect('minecraft:regeneration', 20 * 300, 1, 1) }).group("kubejs.strayexpansion")
    function registerOrgan(organ) {
        global.ORGAN_LIST.push(organ)
        let builder = event.create(organ.itemID).maxStackSize(organ.maxStackSize).tag('kubejs:organ').group("kubejs.strayexpansion")
        if (organ.ctrlTextLines.length > 0) {
            builder.tag('chestcavity:active')
        }
        if (organ.altTextLines.length > 0) {
            builder.tag('chestcavity:special')
        }
        return builder
    }
	registerOrgan(new Organ('stray_expansion:relic_appendix')
        .addScore('health', 0.25).addScore('nerves', 0.25).addScore('breath_recovery', 0.25).addScore('strength', 0.25)
        .addScore('filtration', 0.25).addScore('detoxification', 0.25).addScore('defense', 0.125).addScore('nutrition', 0.125).addScore('endurance', 0.25)
        .addScore('digestion', 0.125).addScore('metabolism', 0.125).addScore('breath_capacity', 0.125).addScore('speed', 0.25).addScore('luck', 2)
        .addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.relic_set.1" })])
        .addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.relic_set.2" })])
        .build())
        .texture('stray_expansion:item/organs/relic/relic_appendix')
        .tag('kubejs:relics')
		.tag('kubejs:appendix');
		
	registerOrgan(new Organ('stray_expansion:relic_heart')
        .addScore('health', 2.25).addScore('nerves', 0.25).addScore('breath_recovery', 0.25).addScore('strength', 0.25)
        .addScore('filtration', 0.25).addScore('detoxification', 0.25).addScore('defense', 0.125).addScore('nutrition', 0.125).addScore('endurance', 0.25)
        .addScore('digestion', 0.125).addScore('metabolism', 0.125).addScore('breath_capacity', 0.125).addScore('speed', 0.25)
        .addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.relic_set.1" })])
        .addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.relic_set.2" })])
        .build())
        .texture('stray_expansion:item/organs/relic/relic_heart')
        .tag('kubejs:relics')
		.tag('kubejs:heart');
		
	registerOrgan(new Organ('stray_expansion:relic_intestine')
        .addScore('health', 0.25).addScore('nerves', 0.25).addScore('breath_recovery', 0.25).addScore('strength', 0.25)
        .addScore('filtration', 0.25).addScore('detoxification', 0.25).addScore('defense', 0.125).addScore('nutrition', 2.125).addScore('endurance', 0.25)
        .addScore('digestion', 0.125).addScore('metabolism', 0.125).addScore('breath_capacity', 0.125).addScore('speed', 0.25)
        .addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.relic_set.1" })])
        .addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.relic_set.2" })])
        .build())
        .texture('stray_expansion:item/organs/relic/relic_intestine')
        .tag('kubejs:relics')
		.tag('kubejs:intestine');
		
	registerOrgan(new Organ('stray_expansion:relic_kidney')
        .addScore('health', 0.25).addScore('nerves', 0.25).addScore('breath_recovery', 0.25).addScore('strength', 0.25)
        .addScore('filtration', 2.25).addScore('detoxification', 0.25).addScore('defense', 0.125).addScore('nutrition', 0.125).addScore('endurance', 0.25)
        .addScore('digestion', 0.125).addScore('metabolism', 0.125).addScore('breath_capacity', 0.125).addScore('speed', 0.25)
        .addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.relic_set.1" })])
        .addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.relic_set.2" })])
        .build())
        .texture('stray_expansion:item/organs/relic/relic_kidney')
        .tag('kubejs:relics')
		.tag('kubejs:kidney');
		
	registerOrgan(new Organ('stray_expansion:relic_liver')
        .addScore('health', 0.25).addScore('nerves', 0.25).addScore('breath_recovery', 0.25).addScore('strength', 0.25)
        .addScore('filtration', 0.25).addScore('detoxification', 2.25).addScore('defense', 0.125).addScore('nutrition', 0.125).addScore('endurance', 0.25)
        .addScore('digestion', 0.125).addScore('metabolism', 0.125).addScore('breath_capacity', 0.125).addScore('speed', 0.25)
        .addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.relic_set.1" })])
        .addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.relic_set.2" })])
        .build())
        .texture('stray_expansion:item/organs/relic/relic_liver')
        .tag('kubejs:relics')
		.tag('kubejs:liver');
		
	registerOrgan(new Organ('stray_expansion:relic_lung')
        .addScore('health', 0.25).addScore('nerves', 0.25).addScore('breath_recovery', 2.25).addScore('strength', 0.25)
        .addScore('filtration', 0.25).addScore('detoxification', 0.25).addScore('defense', 0.125).addScore('nutrition', 0.125).addScore('endurance', 2.25)
        .addScore('digestion', 0.125).addScore('metabolism', 0.125).addScore('breath_capacity', 2.125).addScore('speed', 0.25)
        .addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.relic_set.1" })])
        .addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.relic_set.2" })])
        .build())
        .texture('stray_expansion:item/organs/relic/relic_lung')
        .tag('kubejs:relics')
		.tag('kubejs:lung');
		
	registerOrgan(new Organ('stray_expansion:relic_muscle')
        .addScore('health', 0.25).addScore('nerves', 0.25).addScore('breath_recovery', 0.25).addScore('strength', 2.25)
        .addScore('filtration', 0.25).addScore('detoxification', 0.25).addScore('defense', 0.125).addScore('nutrition', 0.125).addScore('endurance', 0.25)
        .addScore('digestion', 0.125).addScore('metabolism', 0.125).addScore('breath_capacity', 0.125).addScore('speed', 2.25)
        .addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.relic_set.1" })])
        .addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.relic_set.2" })])
        .build())
        .texture('stray_expansion:item/organs/relic/relic_muscle')
        .tag('kubejs:relics')
		.tag('kubejs:muscle');
		
	registerOrgan(new Organ('stray_expansion:relic_rib')
        .addScore('health', 0.25).addScore('nerves', 0.25).addScore('breath_recovery', 0.25).addScore('strength', 0.25)
        .addScore('filtration', 0.25).addScore('detoxification', 0.25).addScore('defense', 2.125).addScore('nutrition', 0.125).addScore('endurance', 0.25)
        .addScore('digestion', 0.125).addScore('metabolism', 0.125).addScore('breath_capacity', 0.125).addScore('speed', 0.25)
        .addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.relic_set.1" })])
        .addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.relic_set.2" })])
        .build())
        .texture('stray_expansion:item/organs/relic/relic_rib')
        .tag('kubejs:relics')
		.tag('kubejs:rib');
		
	registerOrgan(new Organ('stray_expansion:relic_spine')
        .addScore('health', 0.25).addScore('nerves', 2.25).addScore('breath_recovery', 0.25).addScore('strength', 0.25)
        .addScore('filtration', 0.25).addScore('detoxification', 0.25).addScore('defense', 1.125).addScore('nutrition', 0.125).addScore('endurance', 0.25)
        .addScore('digestion', 0.125).addScore('metabolism', 0.125).addScore('breath_capacity', 0.125).addScore('speed', 0.25)
        .addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.relic_set.1" })])
        .addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.relic_set.2" })])
        .build())
        .texture('stray_expansion:item/organs/relic/relic_spine')
        .tag('kubejs:relics')
		.tag('kubejs:spine');
		
	registerOrgan(new Organ('stray_expansion:relic_spleen')
        .addScore('health', 0.25).addScore('nerves', 0.25).addScore('breath_recovery', 0.25).addScore('strength', 0.25)
        .addScore('filtration', 0.25).addScore('detoxification', 0.25).addScore('defense', 0.125).addScore('nutrition', 0.125).addScore('endurance', 0.25)
        .addScore('digestion', 0.125).addScore('metabolism', 2.125).addScore('breath_capacity', 0.125).addScore('speed', 0.25)
        .addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.relic_set.1" })])
        .addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.relic_set.2" })])
        .build())
        .texture('stray_expansion:item/organs/relic/relic_spleen')
        .tag('kubejs:relics')
		.tag('kubejs:spleen');
		
	registerOrgan(new Organ('stray_expansion:relic_stomach')
        .addScore('health', 0.25).addScore('nerves', 0.25).addScore('breath_recovery', 0.25).addScore('strength', 0.25)
        .addScore('filtration', 0.25).addScore('detoxification', 0.25).addScore('defense', 0.125).addScore('nutrition', 0.125).addScore('endurance', 0.25)
        .addScore('digestion', 2.125).addScore('metabolism', 0.125).addScore('breath_capacity', 0.125).addScore('speed', 0.25)
        .addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.relic_set.1" })])
        .addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.relic_set.2" })])
        .build())
        .texture('stray_expansion:item/organs/relic/relic_stomach')
        .tag('kubejs:relics')
		.tag('kubejs:stomach');
		
	registerOrgan(new Organ('stray_expansion:zombie_lung').addScore('breath_recovery', 5).addScore('endurance', 5).addScore('breath_capacity', 5).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.zombie_set.1" })]).addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.zombie_set.2" })]).build()).texture('stray_expansion:item/organs/zombie/zombie_lung').tag('kubejs:lung').tag('kubejs:active');
    registerOrgan(new Organ('stray_expansion:zombie_muscle').addScore('strength', 5).addScore('speed', 5).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.zombie_set.1" })]).addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.zombie_set.2" })]).build()).texture('stray_expansion:item/organs/zombie/zombie_muscle').tag('kubejs:muscle').tag('kubejs:active');
    registerOrgan(new Organ('stray_expansion:zombie_heart').addScore('health', 5).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.zombie_set.1" })]).addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.zombie_set.2" })]).build()).texture('stray_expansion:item/organs/zombie/zombie_heart').tag('kubejs:heart').tag('kubejs:active');
    registerOrgan(new Organ('stray_expansion:zombie_intestine').addScore('nutrition', 5).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.zombie_set.1" })]).addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.zombie_set.2" })]).build()).texture('stray_expansion:item/organs/zombie/zombie_intestine').tag('kubejs:intestine').tag('kubejs:active');
    registerOrgan(new Organ('stray_expansion:zombie_rib').addScore('defense', 5).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.zombie_set.1" })]).addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.zombie_set.2" })]).build()).texture('stray_expansion:item/organs/zombie/zombie_rib').tag('kubejs:rib').tag('kubejs:active');
    registerOrgan(new Organ('stray_expansion:zombie_spine').addScore('defense', 2.5).addScore('nerves', 5).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.zombie_set.1" })]).addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.zombie_set.2" })]).build()).texture('stray_expansion:item/organs/zombie/zombie_spine').tag('kubejs:spine').tag('kubejs:active');
    registerOrgan(new Organ('stray_expansion:zombie_spleen').addScore('metabolism', 5).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.zombie_set.1" })]).addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.zombie_set.2" })]).build()).texture('stray_expansion:item/organs/zombie/zombie_spleen').tag('kubejs:spleen').tag('kubejs:active');
    registerOrgan(new Organ('stray_expansion:zombie_stomach').addScore('digestion', 5).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.zombie_set.1" })]).addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.zombie_set.2" })]).build()).texture('stray_expansion:item/organs/zombie/zombie_stomach').tag('kubejs:stomach').tag('kubejs:active');
    registerOrgan(new Organ('stray_expansion:zombie_kidney').addScore('filtration', 5).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.zombie_set.1" })]).addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.zombie_set.2" })]).build()).texture('stray_expansion:item/organs/zombie/zombie_kidney').tag('kubejs:kidney').tag('kubejs:active');
    registerOrgan(new Organ('stray_expansion:zombie_liver').addScore('detoxification', 5).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.zombie_set.1" })]).addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.zombie_set.2" })]).build()).texture('stray_expansion:item/organs/zombie/zombie_liver').tag('kubejs:liver').tag('kubejs:active');
    registerOrgan(new Organ('stray_expansion:zombie_appendix').addScore('luck', 5).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.zombie_set.1" })]).addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.zombie_set.2" })]).build()).texture('stray_expansion:item/organs/zombie/zombie_appendix').tag('kubejs:appendix').tag('kubejs:active');
	
	registerOrgan(new Organ('stray_expansion:frankenstein_lung').addScore('breath_recovery', 1).addScore('breath_capacity', 1).addScore('endurance', 1)
		.addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_lung.1" }),Text.red({ "translate": "stray_expansion.tooltips.frankenstein_lung.2" }),Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_lung.3" }),Text.gold({"translate": "stray_expansion.tooltips.frankenstein_lung.4" })])
		.addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_lung.5" })])
		.addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_lung.6" }),Text.gold({"translate": "stray_expansion.tooltips.frankenstein_lung.7" }),Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_lung.8" }),Text.gold({"translate": "stray_expansion.tooltips.frankenstein_lung.9" })])
		.build()).texture('stray_expansion:item/organs/frankenstein/frankenstein_lung').tag('kubejs:lung').tag('kubejs:frankenstein');
	
    registerOrgan(new Organ('stray_expansion:frankenstein_muscle').addScore('strength', 1).addScore('speed', 1)
		.addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_muscle.1" })])
		.addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_muscle.2" }),Text.gold({"translate": "stray_expansion.tooltips.frankenstein_muscle.3" }),Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_muscle.4" }),Text.gold({"translate": "stray_expansion.tooltips.frankenstein_muscle.5" })])
		.addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_muscle.6" }),Text.gold({"translate": "stray_expansion.tooltips.frankenstein_muscle.7" }),Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_muscle.8" }),Text.gold({"translate": "stray_expansion.tooltips.frankenstein_muscle.9" })])
		.build()).texture('stray_expansion:item/organs/frankenstein/frankenstein_muscle').tag('kubejs:muscle').tag('kubejs:frankenstein');

    registerOrgan(new Organ('stray_expansion:frankenstein_heart')
		.addScore('health', 1)
		.addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_heart.1" })])
        .addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_heart.2" })])
		.addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_heart.3" }),Text.red({"translate": "stray_expansion.tooltips.frankenstein_heart.4" }),Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_heart.5" }),Text.gold({"translate": "stray_expansion.tooltips.frankenstein_heart.6" })])
		.addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_heart.7" })])
		.addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_heart.8" }),Text.gold({"translate": "stray_expansion.tooltips.frankenstein_heart.9" }),Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_heart.10" }),Text.gold({"translate": "stray_expansion.tooltips.frankenstein_heart.11" })])
		.build()).texture('stray_expansion:item/organs/frankenstein/frankenstein_heart').tag('kubejs:heart').tag('kubejs:frankenstein');
	
	
	registerOrgan(new Organ('stray_expansion:frankenstein_heart_active').addScore('health', 1).addScore('nerves', -1)
		.addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_heart_active.1" })])
        .addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_heart_active.2" })])
		.addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_heart_active.3" }), Text.yellow({ "translate": "stray_expansion.tooltips.frankenstein_heart_active.4" })])
		.addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_heart_active.5" })])
		.addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_heart_active.6" }),Text.red({"translate": "stray_expansion.tooltips.frankenstein_heart_active.7" }),Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_heart_active.8" }),Text.gold({"translate": "stray_expansion.tooltips.frankenstein_heart_active.9" })])
		.addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_heart_active.10" })])
		.addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_heart_active.11" }),Text.gold({"translate": "stray_expansion.tooltips.frankenstein_heart_active.12" }),Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_heart_active.13" }),Text.gold({"translate": "stray_expansion.tooltips.frankenstein_heart_active.14" })])
		.build()).texture('stray_expansion:item/organs/frankenstein/frankenstein_heart_active').tag('kubejs:heart').tag('kubejs:frankenstein').tag('kubejs:active');
	
	registerOrgan(new Organ('stray_expansion:frankenstein_heart_dragon').addScore('health', 1).addScore('nerves', -2)
		.addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_heart_dragon.1" })])
        .addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_heart_dragon.2" })])
		.addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_heart_dragon.3" }), Text.yellow({ "translate": "stray_expansion.tooltips.frankenstein_heart_dragon.4" })])
		.addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_heart_dragon.5" })])
		.addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_heart_dragon.6" }),Text.red({"translate": "stray_expansion.tooltips.frankenstein_heart_dragon.7" }),Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_heart_dragon.8" }),Text.gold({"translate": "stray_expansion.tooltips.frankenstein_heart_dragon.9" })])
		.addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_heart_dragon.10" })])
		.addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_heart_dragon.11" }),Text.gold({"translate": "stray_expansion.tooltips.frankenstein_heart_dragon.12" }),Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_heart_dragon.13" }),Text.gold({"translate": "stray_expansion.tooltips.frankenstein_heart_dragon.14" })])
		.build()).texture('stray_expansion:item/organs/frankenstein/frankenstein_heart_dragon').tag('kubejs:heart').tag('kubejs:frankenstein').tag('kubejs:active');


    registerOrgan(new Organ('stray_expansion:frankenstein_intestine').addScore('nutrition', 1)
		.addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_intestine.1" })])
		.addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_intestine.2" }),Text.gold({"translate": "stray_expansion.tooltips.frankenstein_intestine.3" }),Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_intestine.4" }),Text.gold({"translate": "stray_expansion.tooltips.frankenstein_intestine.5" })])
		.build()).texture('stray_expansion:item/organs/frankenstein/frankenstein_intestine').tag('kubejs:intestine').tag('kubejs:frankenstein');

    registerOrgan(new Organ('stray_expansion:frankenstein_spleen').addScore('metabolism', 1)
		.addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_spleen.1" }),Text.red({"translate": "stray_expansion.tooltips.frankenstein_spleen.2" }),Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_spleen.3" }),Text.gold({"translate": "stray_expansion.tooltips.frankenstein_spleen.4" })])
		.addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_spleen.5" })])
		.addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_spleen.6" }),Text.gold({"translate": "stray_expansion.tooltips.frankenstein_spleen.7" }),Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_spleen.8" }),Text.gold({"translate": "stray_expansion.tooltips.frankenstein_spleen.9" })])
		.build()).texture('stray_expansion:item/organs/frankenstein/frankenstein_spleen').tag('kubejs:spleen').tag('kubejs:frankenstein');

    registerOrgan(new Organ('stray_expansion:frankenstein_stomach').addScore('digestion', 1)
		.addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_stomach.1" })])
		.addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_stomach.2" }),Text.gold({"translate": "stray_expansion.tooltips.frankenstein_stomach.3" }),Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_stomach.4" }),Text.gold({"translate": "stray_expansion.tooltips.frankenstein_stomach.5" })])
		.build()).texture('stray_expansion:item/organs/frankenstein/frankenstein_stomach').tag('kubejs:stomach').tag('kubejs:frankenstein');

    registerOrgan(new Organ('stray_expansion:frankenstein_kidney').addScore('filtration', 1)
		.addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_kidney.1" })])
		.addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_kidney.2" }),Text.gold({"translate": "stray_expansion.tooltips.frankenstein_kidney.3" }),Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_kidney.4" }),Text.gold({"translate": "stray_expansion.tooltips.frankenstein_kidney.5" })])
		.build()).texture('stray_expansion:item/organs/frankenstein/frankenstein_kidney').tag('kubejs:kidney').tag('kubejs:frankenstein');

    registerOrgan(new Organ('stray_expansion:frankenstein_liver').addScore('detoxification', 1)
		.addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_liver.1" }),Text.red({"translate": "stray_expansion.tooltips.frankenstein_liver.2" }),Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_liver.3" }),Text.gold({"translate": "stray_expansion.tooltips.frankenstein_liver.4" })])
		.addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_liver.5" })])
		.addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_liver.6" }),Text.gold({"translate": "stray_expansion.tooltips.frankenstein_liver.7" }),Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_liver.8" }),Text.gold({"translate": "stray_expansion.tooltips.frankenstein_liver.9" })])
		.build()).texture('stray_expansion:item/organs/frankenstein/frankenstein_liver').tag('kubejs:liver').tag('kubejs:frankenstein');

    registerOrgan(new Organ('stray_expansion:frankenstein_appendix').addScore('luck', 1)
		.addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_appendix.1" })])
		.addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_appendix.2" }),Text.gold({"translate": "stray_expansion.tooltips.frankenstein_appendix.3" }),Text.gray({ "translate": "stray_expansion.tooltips.frankenstein_appendix.4" }),Text.gold({"translate": "stray_expansion.tooltips.frankenstein_appendix.5" })])
		.build()).texture('stray_expansion:item/organs/frankenstein/frankenstein_appendix').tag('kubejs:appendix').tag('kubejs:frankenstein');
		
	registerOrgan(new Organ('stray_expansion:waxed_ender_lung').addScore('breath_recovery', 1.25).addScore('breath_capacity', 1.25).addScore('endurance', 1.25).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.waxed_ender_set.1" })]).addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.waxed_ender_set.2" })]).build()).texture('stray_expansion:item/organs/waxed_ender/waxed_ender_lung').tag('kubejs:lung').tag('kubejs:active');

    registerOrgan(new Organ('stray_expansion:waxed_ender_muscle').addScore('strength', 1.25).addScore('speed', 1.25).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.waxed_ender_set.1" })]).addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.waxed_ender_set.2" })]).build()).texture('stray_expansion:item/organs/waxed_ender/waxed_ender_muscle').tag('kubejs:muscle').tag('kubejs:active');

    registerOrgan(new Organ('stray_expansion:waxed_ender_heart').addScore('health', 1.25).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.waxed_ender_set.1" })]).addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.waxed_ender_set.2" })]).build()).texture('stray_expansion:item/organs/waxed_ender/waxed_ender_heart').tag('kubejs:heart').tag('kubejs:active');

    registerOrgan(new Organ('stray_expansion:waxed_ender_intestine').addScore('nutrition', 1.25).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.waxed_ender_set.1" })]).addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.waxed_ender_set.2" })]).build()).texture('stray_expansion:item/organs/waxed_ender/waxed_ender_intestine').tag('kubejs:intestine').tag('kubejs:active');

    registerOrgan(new Organ('stray_expansion:waxed_ender_rib').addScore('defense', 1.25).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.waxed_ender_set.1" })]).addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.waxed_ender_set.2" })]).build()).texture('stray_expansion:item/organs/waxed_ender/waxed_ender_rib').tag('kubejs:rib').tag('kubejs:active');

    registerOrgan(new Organ('stray_expansion:waxed_ender_spine').addScore('defense', 0.625).addScore('nerves', 1.25).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.waxed_ender_set.1" })]).addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.waxed_ender_set.2" })]).build()).texture('stray_expansion:item/organs/waxed_ender/waxed_ender_spine').tag('kubejs:spine').tag('kubejs:active');

    registerOrgan(new Organ('stray_expansion:waxed_ender_spleen').addScore('metabolism', 1.25).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.waxed_ender_set.1" })]).addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.waxed_ender_set.2" })]).build()).texture('stray_expansion:item/organs/waxed_ender/waxed_ender_spleen').tag('kubejs:spleen').tag('kubejs:active');

    registerOrgan(new Organ('stray_expansion:waxed_ender_stomach').addScore('digestion', 1.25).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.waxed_ender_set.1" })]).addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.waxed_ender_set.2" })]).build()).texture('stray_expansion:item/organs/waxed_ender/waxed_ender_stomach').tag('kubejs:stomach').tag('kubejs:active');

    registerOrgan(new Organ('stray_expansion:waxed_ender_kidney').addScore('filtration', 1.0).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.waxed_ender_set.1" })]).addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.waxed_ender_set.2" })]).build()).texture('stray_expansion:item/organs/waxed_ender/waxed_ender_kidney').tag('kubejs:kidney').tag('kubejs:active');

    registerOrgan(new Organ('stray_expansion:waxed_ender_liver').addScore('detoxification', 1.0).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.waxed_ender_set.1" })]).addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.waxed_ender_set.2" })]).build()).texture('stray_expansion:item/organs/waxed_ender/waxed_ender_liver').tag('kubejs:liver').tag('kubejs:active');

    registerOrgan(new Organ('stray_expansion:waxed_ender_appendix').addScore('luck', 1.25).addScore('arrow_dodging', 1.0).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.waxed_ender_set.1" })]).addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.waxed_ender_set.2" })]).build()).texture('stray_expansion:item/organs/waxed_ender/waxed_ender_appendix').tag('kubejs:appendix').tag('kubejs:active');
	
	registerOrgan(new Organ('stray_expansion:activated_ender_dragon_lung').addScore('breath_recovery', 1.75).addScore('breath_capacity', 1.75).addScore('endurance', 1.75).addScore('defense', 0.125).addScore('crystalsynthesis', 0.125).addScore('dragon_breath', 1.0).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.activated_ender_dragon_set.1" })]).build()).texture('stray_expansion:item/organs/activated_ender_dragon/activated_ender_dragon_lung').tag('kubejs:lung');

    registerOrgan(new Organ('stray_expansion:activated_ender_dragon_muscle').addScore('strength', 1.75).addScore('speed', 1.75).addScore('defense', 0.125).addScore('crystalsynthesis', 0.125).addScore('launching', 1.0).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.activated_ender_dragon_set.1" })]).build()).texture('stray_expansion:item/organs/activated_ender_dragon/activated_ender_dragon_muscle').tag('kubejs:muscle');

    registerOrgan(new Organ('stray_expansion:activated_ender_dragon_heart').addScore('health', 1.75).addScore('defense', 0.125).addScore('crystalsynthesis', 0.125).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.activated_ender_dragon_set.1" })]).build()).texture('stray_expansion:item/organs/activated_ender_dragon/activated_ender_dragon_heart').tag('kubejs:heart');

    registerOrgan(new Organ('stray_expansion:activated_ender_dragon_rib').addScore('defense', 1.875).addScore('crystalsynthesis', 0.125).addScore('impact_resistant', 1.0).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.activated_ender_dragon_set.1" })]).build()).texture('stray_expansion:item/organs/activated_ender_dragon/activated_ender_dragon_rib').tag('kubejs:rib');

    registerOrgan(new Organ('stray_expansion:activated_ender_dragon_spine').addScore('defense', 1.25).addScore('nerves', 1.75).addScore('crystalsynthesis', 0.125).addScore('impact_resistant', 1.0).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.activated_ender_dragon_set.1" })]).build()).texture('stray_expansion:item/organs/activated_ender_dragon/activated_ender_dragon_spine').tag('kubejs:spine');

    registerOrgan(new Organ('stray_expansion:activated_ender_dragon_spleen').addScore('metabolism', 1.75).addScore('defense', 0.125).addScore('crystalsynthesis', 0.125).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.activated_ender_dragon_set.1" })]).build()).texture('stray_expansion:item/organs/activated_ender_dragon/activated_ender_dragon_spleen').tag('kubejs:spleen');

    registerOrgan(new Organ('stray_expansion:activated_ender_dragon_kidney').addScore('filtration', 1.75).addScore('buff_purging', 1.0).addScore('defense', 0.125).addScore('crystalsynthesis', 0.125).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.activated_ender_dragon_set.1" })]).build()).texture('stray_expansion:item/organs/activated_ender_dragon/activated_ender_dragon_kidney').tag('kubejs:kidney');

    registerOrgan(new Organ('stray_expansion:activated_ender_dragon_liver').addScore('detoxification', 1.75).addScore('buff_purging', 1.0).addScore('defense', 0.125).addScore('crystalsynthesis', 0.125).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.activated_ender_dragon_set.1" })]).build()).texture('stray_expansion:item/organs/activated_ender_dragon/activated_ender_dragon_liver').tag('kubejs:liver');

    registerOrgan(new Organ('stray_expansion:activated_ender_dragon_appendix').addScore('luck', 1.75).addScore('dragon_bombs', 1.0).addScore('defense', 0.125).addScore('crystalsynthesis', 0.125).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.activated_ender_dragon_set.1" })]).build()).texture('stray_expansion:item/organs/activated_ender_dragon/activated_ender_dragon_appendix').tag('kubejs:appendix');
	
	registerOrgan(new Organ('stray_expansion:activated_mana_reactor').addScore('crystalsynthesis', 1.0).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.activated_ender_dragon_set.1" })]).addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.activated_ender_dragon_mana_reactor.1" }), Text.yellow({ "translate": "stray_expansion.tooltips.activated_ender_dragon_mana_reactor.2" }), Text.gray({ "translate": "stray_expansion.tooltips.activated_ender_dragon_mana_reactor.3" }), Text.yellow({ "translate": "stray_expansion.tooltips.activated_ender_dragon_mana_reactor.4" }), Text.gray({ "translate": "stray_expansion.tooltips.activated_ender_dragon_mana_reactor.5" })]).build()).texture('stray_expansion:item/organs/activated_ender_dragon/activated_ender_dragon_mana_reactor').tag('kubejs:magic').tag('kubejs:active');
	
	registerOrgan(new Organ('stray_expansion:burger_heart').addScore('health', 1.5).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.burger_heart.1" })]).addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.burger_heart.2" }), Text.yellow({ "translate": "stray_expansion.tooltips.burger_heart.3" }), Text.gold({ "translate": "stray_expansion.tooltips.burger_heart.4" }), Text.gray({ "translate": "stray_expansion.tooltips.burger_heart.5" })]).addTextLines('alt', [LEADING_SYMBOL,Text.yellow({ "translate": "stray_expansion.tooltips.burger_heart.6" })]).addTextLines('alt', [LEADING_SYMBOL,Text.yellow({ "translate": "stray_expansion.tooltips.burger_heart.7" })]).addTextLines('alt', [LEADING_SYMBOL,Text.gray({ "translate": "stray_expansion.tooltips.burger_heart.8" })]).build()).texture('stray_expansion:item/organs/misc/burger_heart').tag('kubejs:food').tag('kubejs:heart').tag('kubejs:eat_effect_only').tag('kubejs:damage_only').food(food => { food.hunger(8).saturation(0.8)});
	/*
	registerOrgan(new Organ('stray_expansion:zipper').addScore('defense', 1.0).addScore('ease_of_access', 1.0).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.zipper.1" })]).build()).texture('stray_expansion:item/organs/misc/zipper').tag('kubejs:machine');
	*/
	registerOrgan(new Organ('stray_expansion:kether').addScore('nerves', 2.0).addScore('health', 1.5).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.kether.1" })]).addTextLines('ctrl', [Text.gold({ "translate": "stray_expansion.tooltips.kether.2" })]).build()).texture('stray_expansion:item/organs/qabalah/kether').tag('kubejs:active_only').tag('kubejs:legends');
	
	registerOrgan(new Organ('stray_expansion:chokmah').addScore('nerves', 2.0).addScore('health', 1.5).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.chokmah.1" })]).addTextLines('alt', [Text.gold({ "translate": "stray_expansion.tooltips.chokmah.2" })]).addTextLines('alt', [Text.gold({ "translate": "stray_expansion.tooltips.chokmah.3" })]).build()).texture('stray_expansion:item/organs/qabalah/chokmah').tag('kubejs:rclick_only').tag('kubejs:legends');
	
	registerOrgan(new Organ('stray_expansion:binah').addScore('nerves', 2.0).addScore('health', 1.5).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.binah.1" })]).addTextLines('alt', [Text.gold({ "translate": "stray_expansion.tooltips.binah.2" })]).addTextLines('alt', [Text.gold({ "translate": "stray_expansion.tooltips.binah.3" })]).build()).texture('stray_expansion:item/organs/qabalah/binah').tag('kubejs:damage_only').tag('kubejs:legends');
	
	registerOrgan(new Organ('stray_expansion:chesed').addScore('nerves', 2.0).addScore('health', 1.5).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.chesed.1" })]).addTextLines('alt', [Text.gold({ "translate": "stray_expansion.tooltips.chesed.2" })]).addTextLines('alt', [Text.gold({ "translate": "stray_expansion.tooltips.chesed.3" })]).addTextLines('alt', [Text.gold({ "translate": "stray_expansion.tooltips.chesed.4" })]).addTextLines('alt', [Text.gold({ "translate": "stray_expansion.tooltips.chesed.5" })]).build()).texture('stray_expansion:item/organs/qabalah/chesed').tag('kubejs:player_tick_only').tag('kubejs:legends');
	
	registerOrgan(new Organ('stray_expansion:geburah').addScore('nerves', 2.0).addScore('health', 1.5).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.geburah.1" })]).addTextLines('alt', [Text.gold({ "translate": "stray_expansion.tooltips.geburah.2" })]).addTextLines('alt', [Text.gold({ "translate": "stray_expansion.tooltips.geburah.3" })]).build()).texture('stray_expansion:item/organs/qabalah/geburah').tag('kubejs:damage_only').tag('kubejs:legends');
	
	registerOrgan(new Organ('stray_expansion:tipareth').addScore('nerves', 2.0).addScore('health', 1.5).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.tipareth.1" })]).addTextLines('ctrl', [Text.gold({ "translate": "stray_expansion.tooltips.tipareth.2" })]).addTextLines('ctrl', [Text.gold({ "translate": "stray_expansion.tooltips.tipareth.3" })]).addTextLines('ctrl', [Text.gold({ "translate": "stray_expansion.tooltips.tipareth.4" })]).build()).texture('stray_expansion:item/organs/qabalah/tipareth').tag('kubejs:active_only').tag('kubejs:legends');
	
	registerOrgan(new Organ('stray_expansion:netzache').addScore('nerves', 2.0).addScore('health', 1.5).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.netzache.1" })]).addTextLines('alt', [Text.gold({ "translate": "stray_expansion.tooltips.netzache.2" })]).addTextLines('alt', [Text.gold({ "translate": "stray_expansion.tooltips.netzache.3" })]).addTextLines('alt', [Text.gold({ "translate": "stray_expansion.tooltips.netzache.4" })]).build()).texture('stray_expansion:item/organs/qabalah/netzache').tag('kubejs:bear_only').tag('kubejs:legends');
	
	registerOrgan(new Organ('stray_expansion:hod').addScore('nerves', 2.0).addScore('health', 1.5).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.hod.1" })]).addTextLines('alt', [Text.gold({ "translate": "stray_expansion.tooltips.hod.2" })]).addTextLines('alt', [Text.gold({ "translate": "stray_expansion.tooltips.hod.3" })]).build()).texture('stray_expansion:item/organs/qabalah/hod').tag('kubejs:player_tick_only').tag('kubejs:legends');
	
	registerOrgan(new Organ('stray_expansion:yesod').addScore('nerves', 2.0).addScore('health', 1.5).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.yesod.1" })]).addTextLines('ctrl', [Text.gold({ "translate": "stray_expansion.tooltips.yesod.2" })]).addTextLines('alt', [Text.gold({ "translate": "stray_expansion.tooltips.yesod.3" })]).addTextLines('alt', [Text.gold({ "translate": "stray_expansion.tooltips.yesod.4" })]).build()).texture('stray_expansion:item/organs/qabalah/yesod').tag('kubejs:player_tick_only').tag('kubejs:legends');
	
	registerOrgan(new Organ('stray_expansion:malkuth').addScore('nerves', 2.0).addScore('health', 1.5).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.malkuth.1" })]).addTextLines('alt', [Text.gold({ "translate": "stray_expansion.tooltips.malkuth.2" })]).build()).texture('stray_expansion:item/organs/qabalah/malkuth').tag('kubejs:bear_only').tag('kubejs:legends');
	
	
	registerOrgan(new Organ('stray_expansion:meltdown_atomizer').addScore('nerves', 0.5).addScore('speed', -0.5).addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.meltdown_atomizer.1" }), Text.yellow({ "translate": "stray_expansion.tooltips.meltdown_atomizer.2" }), Text.gray({ "translate": "stray_expansion.tooltips.meltdown_atomizer.3" }), Text.red({ "translate": "stray_expansion.tooltips.meltdown_atomizer.4" }), Text.gray({ "translate": "stray_expansion.tooltips.meltdown_atomizer.5" }), Text.yellow({ "translate": "stray_expansion.tooltips.meltdown_atomizer.6" }), Text.gray({ "translate": "stray_expansion.tooltips.meltdown_atomizer.7" })]).build()).texture('stray_expansion:item/organs/meltdown/meltdown_atomizer').tag('kubejs:meltdown').tag('kubejs:machine');
	
	registerOrgan(new Organ('stray_expansion:meltdown_valve').addScore('nerves', 0.5).addScore('speed', -0.5).addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.meltdown_valve.1" }), Text.yellow({ "translate": "stray_expansion.tooltips.meltdown_valve.2" }), Text.gray({ "translate": "stray_expansion.tooltips.meltdown_valve.3" }), Text.red({ "translate": "stray_expansion.tooltips.meltdown_valve.4" }), Text.gray({ "translate": "stray_expansion.tooltips.meltdown_valve.5" }), Text.yellow({ "translate": "stray_expansion.tooltips.meltdown_valve.6" }), Text.gray({ "translate": "stray_expansion.tooltips.meltdown_valve.7" })]).build()).texture('stray_expansion:item/organs/meltdown/meltdown_valve').tag('kubejs:meltdown').tag('kubejs:machine');
	
	registerOrgan(new Organ('stray_expansion:meltdown_heart').addScore('speed', -1).addScore('defense', 1).addScore('knockback_resistant', 3).addScore('health', 1).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.meltdown_heart.1" })]).addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.meltdown_heart.2" }), Text.yellow({ "translate": "stray_expansion.tooltips.meltdown_heart.3" }), Text.red({ "translate": "stray_expansion.tooltips.meltdown_heart.4" })]).addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.meltdown_heart.5" }), Text.yellow({ "translate": "stray_expansion.tooltips.meltdown_heart.6" }), Text.gray({ "translate": "stray_expansion.tooltips.meltdown_heart.7" })]).addTextLines('alt', [LEADING_SYMBOL, Text.red({ "translate": "stray_expansion.tooltips.meltdown_heart.8" })]).build()).texture('stray_expansion:item/organs/meltdown/meltdown_heart').tag('kubejs:meltdown').tag('kubejs:damage_only').tag('kubejs:player_tick_only').tag('kubejs:rclick_only').tag('kubejs:heart').tag('kubejs:machine');
	
	registerOrgan(new Organ('stray_expansion:meltdown_heart_molten').addScore('speed', -1).addScore('defense', 1).addScore('knockback_resistant', 3).addScore('health', 1).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.meltdown_heart_molten.1" })]).addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.meltdown_heart_molten.2" }), Text.yellow({ "translate": "stray_expansion.tooltips.meltdown_heart_molten.3" }), Text.red({ "translate": "stray_expansion.tooltips.meltdown_heart_molten.4" })]).addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.meltdown_heart_molten.5" }), Text.yellow({ "translate": "stray_expansion.tooltips.meltdown_heart_molten.6" })]).addTextLines('alt', [LEADING_SYMBOL, Text.red({ "translate": "stray_expansion.tooltips.meltdown_heart_molten.7" })]).addTextLines('alt', [LEADING_SYMBOL, Text.red({ "translate": "stray_expansion.tooltips.meltdown_heart_molten.8" })]).build()).texture('stray_expansion:item/organs/meltdown/meltdown_heart_molten').tag('kubejs:meltdown').tag('kubejs:damage_only').tag('kubejs:player_tick_only').tag('kubejs:rclick_only').tag('kubejs:heart').tag('kubejs:machine');
	
	registerOrgan(new Organ('stray_expansion:meltdown_pipe').addScore('nerves', 0.75).addScore('endurance', 1).addScore('strength', -1).addTextLines('default', [Text.gray({ "translate": "stray_expansion.tooltips.meltdown_pipe.1" })]).addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.meltdown_pipe.2" }), Text.yellow({ "translate": "stray_expansion.tooltips.meltdown_pipe.3" }), Text.gray({ "translate": "stray_expansion.tooltips.meltdown_pipe.4" }), Text.yellow({ "translate": "stray_expansion.tooltips.meltdown_pipe.5" }), Text.gray({ "translate": "stray_expansion.tooltips.meltdown_pipe.6" })]).build()).texture('stray_expansion:item/organs/meltdown/meltdown_pipe').tag('kubejs:machine').tag('kubejs:active');
	//是的，这玩意不属于内燃器官，不然管子人自己就能变成一个流派
	
	registerOrgan(new Organ('stray_expansion:meltdown_piston').addScore('defense', 0.5).addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.meltdown_piston.1" }), Text.yellow({ "translate": "stray_expansion.tooltips.meltdown_piston.2" }), Text.gray({ "translate": "stray_expansion.tooltips.meltdown_piston.3" }), Text.red({ "translate": "stray_expansion.tooltips.meltdown_piston.4" }), Text.gray({ "translate": "stray_expansion.tooltips.meltdown_piston.5" })]).addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "stray_expansion.tooltips.meltdown_piston.6" }), Text.yellow({ "translate": "stray_expansion.tooltips.meltdown_piston.7" }), Text.gray({ "translate": "stray_expansion.tooltips.meltdown_piston.8" }), Text.red({ "translate": "stray_expansion.tooltips.meltdown_piston.9" }), Text.gray({ "translate": "stray_expansion.tooltips.meltdown_piston.10" })]).build()).texture('stray_expansion:item/organs/meltdown/meltdown_piston').tag('kubejs:meltdown').tag('kubejs:machine');
	
	registerOrgan(new Organ('stray_expansion:meltdown_sensor').addScore('metabolism', 1.5).addScore('defense', 0.5).addTextLines('alt', [LEADING_SYMBOL, Text.red({ "translate": "stray_expansion.tooltips.meltdown_sensor.1" }), Text.yellow({ "translate": "stray_expansion.tooltips.meltdown_sensor.2" })]).build()).texture('stray_expansion:item/organs/meltdown/meltdown_sensor').tag('kubejs:meltdown').tag('kubejs:machine').tag('kubejs:player_tick_only');
	
	
	event.create('stray_expansion:chestopener_precise').texture('stray_expansion:item/tools/chestopener_precise').maxStackSize(1).group("kubejs.strayexpansion").modifyAttribute('forge:reach_distance', 'straychestopen', -5, 'addition')
	
	event.create('stray_expansion:chestopener_flesh').texture('stray_expansion:item/tools/chestopener_flesh').maxStackSize(1).group("kubejs.strayexpansion").modifyAttribute('forge:reach_distance', 'straychestopen', -5, 'addition')
	
	event.create('stray_expansion:chestopener_relic').texture('stray_expansion:item/tools/chestopener_relic').maxStackSize(1).group("kubejs.strayexpansion").modifyAttribute('forge:reach_distance', 'straychestopen', -5, 'addition')
	
	event.create('stray_expansion:chestopener_dsteelfire').texture('stray_expansion:item/tools/chestopener_dsteelfire').maxStackSize(1).tag('itemborders:gold').group("kubejs.strayexpansion").modifyAttribute('forge:reach_distance', 'straychestopen', -5, 'addition')
	
	event.create('stray_expansion:chestopener_dsteelice').texture('stray_expansion:item/tools/chestopener_dsteelice').maxStackSize(1).tag('itemborders:gold').group("kubejs.strayexpansion").modifyAttribute('forge:reach_distance', 'straychestopen', -5, 'addition')
	
	event.create('stray_expansion:chestopener_dsteellightning').texture('stray_expansion:item/tools/chestopener_dsteellightning').maxStackSize(1).tag('itemborders:gold').group("kubejs.strayexpansion").modifyAttribute('forge:reach_distance', 'straychestopen', -5, 'addition')
	
	event.create('stray_expansion:chestopener_ignitium').texture('stray_expansion:item/tools/chestopener_ignitium').maxStackSize(1).tag('itemborders:diamond').group("kubejs.strayexpansion").modifyAttribute('forge:reach_distance', 'straychestopen', -5, 'addition')
	
	event.create('stray_expansion:chestopener_reaper').texture('stray_expansion:item/tools/chestopener_reaper').maxStackSize(1).tag('itemborders:diamond').group("kubejs.strayexpansion").modifyAttribute('forge:reach_distance', 'straychestopen', -5, 'addition')
	
	event.create('stray_expansion:chestopener_god').texture('stray_expansion:item/tools/chestopener_god').maxStackSize(1).tag('itemborders:diamond').group("kubejs.strayexpansion").modifyAttribute('forge:reach_distance', 'straychestopen', -5, 'addition')
	
	event.create('stray_expansion:chestopener_command').texture('stray_expansion:item/tools/chestopener_command').maxStackSize(1).group("kubejs.strayexpansion").modifyAttribute('forge:reach_distance', 'straychestopen', -5, 'addition')
});