
ServerEvents.recipes(event => {
	function registerCustomRecipe(recipeModel) {
        event.custom(recipeModel)
    }
	//解放末影龙系列
	registerCustomRecipe(new BioBrewingRecipe([Ingredient.of('minecraft:dragon_breath'), Ingredient.of('irons_spellbooks:dragonskin'), Ingredient.of('biomancy:rejuvenation_serum'), Ingredient.of('biomancy:cleansing_serum')], Item.of('chestcavity:dragon_heart'), Item.of('stray_expansion:activated_ender_dragon_heart')).setNutrientsCost(25).setProcessingTime(300))
	registerCustomRecipe(new BioBrewingRecipe([Ingredient.of('minecraft:dragon_breath'), Ingredient.of('irons_spellbooks:dragonskin'), Ingredient.of('biomancy:rejuvenation_serum'), Ingredient.of('biomancy:cleansing_serum')], Item.of('stray_expansion:dragon_rib_pile'), Item.of('stray_expansion:activated_ender_dragon_rib')).setNutrientsCost(25).setProcessingTime(300))
	registerCustomRecipe(new BioBrewingRecipe([Ingredient.of('minecraft:dragon_breath'), Ingredient.of('irons_spellbooks:dragonskin'), Ingredient.of('biomancy:rejuvenation_serum'), Ingredient.of('biomancy:cleansing_serum')], Item.of('stray_expansion:dragon_muscle_pile'), Item.of('stray_expansion:activated_ender_dragon_muscle')).setNutrientsCost(25).setProcessingTime(300))
	registerCustomRecipe(new BioBrewingRecipe([Ingredient.of('minecraft:dragon_breath'), Ingredient.of('irons_spellbooks:dragonskin'), Ingredient.of('biomancy:rejuvenation_serum'), Ingredient.of('biomancy:cleansing_serum')], Item.of('chestcavity:dragon_lung'), Item.of('stray_expansion:activated_ender_dragon_lung')).setNutrientsCost(25).setProcessingTime(300))
	registerCustomRecipe(new BioBrewingRecipe([Ingredient.of('minecraft:dragon_breath'), Ingredient.of('irons_spellbooks:dragonskin'), Ingredient.of('biomancy:rejuvenation_serum'), Ingredient.of('biomancy:cleansing_serum')], Item.of('chestcavity:dragon_spine'), Item.of('stray_expansion:activated_ender_dragon_spine')).setNutrientsCost(25).setProcessingTime(300))
	registerCustomRecipe(new BioBrewingRecipe([Ingredient.of('minecraft:dragon_breath'), Ingredient.of('irons_spellbooks:dragonskin'), Ingredient.of('biomancy:rejuvenation_serum'), Ingredient.of('biomancy:cleansing_serum')], Item.of('chestcavity:dragon_spleen'), Item.of('stray_expansion:activated_ender_dragon_spleen')).setNutrientsCost(25).setProcessingTime(300))
	registerCustomRecipe(new BioBrewingRecipe([Ingredient.of('minecraft:dragon_breath'), Ingredient.of('irons_spellbooks:dragonskin'), Ingredient.of('biomancy:rejuvenation_serum'), Ingredient.of('biomancy:cleansing_serum')], Item.of('chestcavity:dragon_kidney'), Item.of('stray_expansion:activated_ender_dragon_kidney')).setNutrientsCost(25).setProcessingTime(300))
	registerCustomRecipe(new BioBrewingRecipe([Ingredient.of('minecraft:dragon_breath'), Ingredient.of('irons_spellbooks:dragonskin'), Ingredient.of('biomancy:rejuvenation_serum'), Ingredient.of('biomancy:cleansing_serum')], Item.of('chestcavity:dragon_liver'), Item.of('stray_expansion:activated_ender_dragon_liver')).setNutrientsCost(25).setProcessingTime(300))
	registerCustomRecipe(new BioBrewingRecipe([Ingredient.of('minecraft:dragon_breath'), Ingredient.of('irons_spellbooks:dragonskin'), Ingredient.of('biomancy:rejuvenation_serum'), Ingredient.of('biomancy:cleansing_serum')], Item.of('chestcavity:dragon_appendix'), Item.of('stray_expansion:activated_ender_dragon_appendix')).setNutrientsCost(25).setProcessingTime(300))
	registerCustomRecipe(new BioBrewingRecipe([Ingredient.of('minecraft:dragon_breath'), Ingredient.of('irons_spellbooks:dragonskin'), Ingredient.of('biomancy:rejuvenation_serum'), Ingredient.of('biomancy:cleansing_serum')], Item.of('chestcavity:mana_reactor'), Item.of('stray_expansion:activated_mana_reactor')).setNutrientsCost(25).setProcessingTime(300))
	//涂蜡末影系列
	event.shapeless('stray_expansion:waxed_ender_lung', ['chestcavity:ender_lung', 'minecraft:honeycomb'])
	event.shapeless('stray_expansion:waxed_ender_muscle', ['stray_expansion:ender_muscle_pile', 'minecraft:honeycomb'])
	event.shapeless('stray_expansion:waxed_ender_rib', ['stray_expansion:ender_rib_pile', 'minecraft:honeycomb'])
	event.shapeless('stray_expansion:waxed_ender_heart', ['chestcavity:ender_heart', 'minecraft:honeycomb'])
	event.shapeless('stray_expansion:waxed_ender_intestine', ['chestcavity:ender_intestine', 'minecraft:honeycomb'])
	event.shapeless('stray_expansion:waxed_ender_appendix', ['chestcavity:ender_appendix', 'minecraft:honeycomb'])
	event.shapeless('stray_expansion:waxed_ender_spine', ['chestcavity:ender_spine', 'minecraft:honeycomb'])
	event.shapeless('stray_expansion:waxed_ender_spleen', ['chestcavity:ender_spleen', 'minecraft:honeycomb'])
	event.shapeless('stray_expansion:waxed_ender_stomach', ['chestcavity:ender_stomach', 'minecraft:honeycomb'])
	event.shapeless('stray_expansion:waxed_ender_kidney', ['chestcavity:ender_kidney', 'minecraft:honeycomb'])
	event.shapeless('stray_expansion:waxed_ender_liver', ['chestcavity:ender_liver', 'minecraft:honeycomb'])
	//乱七八糟的材料
	event.recipes.create.mixing('stray_expansion:muscle_pile', '16x chestcavity:muscle')
	
	event.recipes.create.mixing('stray_expansion:dragon_muscle_pile', '16x chestcavity:dragon_muscle')
	event.recipes.create.mixing('stray_expansion:ender_muscle_pile', '16x chestcavity:ender_muscle')
	event.recipes.create.mixing('stray_expansion:dragon_rib_pile', '4x chestcavity:dragon_rib')
	event.recipes.create.mixing('stray_expansion:ender_rib_pile', '4x chestcavity:ender_rib')
	
	event.recipes.create.mixing('stray_expansion:rotten_muscle_pile', '16x chestcavity:rotten_muscle')
	event.recipes.create.mixing('stray_expansion:rotten_rib_pile', '4x chestcavity:rotten_rib')
	event.recipes.create.mixing(Fluid.of('kubejs:molten_relic').withAmount(250), ['kubejs:relic_metal_plate']).superheated()
	event.recipes.create.mixing(Fluid.of('kubejs:liquid_fuel').withAmount(250), ['minecraft:fire_charge','minecraft:black_dye',Fluid.of('createaddition:seed_oil').withAmount(250)])
	
	event.recipes.create.filling('stray_expansion:liquid_fuel_bottle', [Fluid.of('kubejs:liquid_fuel').withAmount(250), 'minecraft:glass_bottle'])
	
	event.recipes.create.sequenced_assembly([
		Item.of('stray_expansion:burger_heart')
	], 'farmersdelight:hamburger', [
		event.recipes.create.filling('farmersdelight:hamburger', ['farmersdelight:hamburger', Fluid.of('create_central_kitchen:tomato_sauce').withAmount(250)]),
		event.recipes.createDeploying('farmersdelight:hamburger', ['farmersdelight:hamburger', 'farmersdelight:beef_patty']),
		event.recipes.createDeploying('farmersdelight:hamburger', ['farmersdelight:hamburger', 'biomancy:living_flesh']),
		event.recipes.createDeploying('farmersdelight:hamburger', ['farmersdelight:hamburger', 'biomancy:exotic_compound']),
	]).transitionalItem('stray_expansion:incomplete_relic_appendix').loops(3)
	
	//僵尸系列
	registerCustomRecipe(new GoetyRitualRecipe('necroturgy', [Ingredient.of('minecraft:redstone'),Ingredient.of('minecraft:paper'),Ingredient.of('goety:ectoplasm'),Ingredient.of('minecraft:lapis_lazuli'),], Item.of('chestcavity:rotten_appendix'), Item.of('stray_expansion:zombie_appendix')).setSoulCost(2))
	
	registerCustomRecipe(new GoetyRitualRecipe('necroturgy', [Ingredient.of('minecraft:redstone'),Ingredient.of('minecraft:paper'),Ingredient.of('goety:ectoplasm'),Ingredient.of('minecraft:lapis_lazuli'),], Item.of('chestcavity:rotten_heart'), Item.of('stray_expansion:zombie_heart')).setSoulCost(2))
	
	registerCustomRecipe(new GoetyRitualRecipe('necroturgy', [Ingredient.of('minecraft:redstone'),Ingredient.of('minecraft:string'),Ingredient.of('goety:ectoplasm'),Ingredient.of('minecraft:lapis_lazuli'),], Item.of('chestcavity:rotten_intestine'), Item.of('stray_expansion:zombie_intestine')).setSoulCost(2))
	
	registerCustomRecipe(new GoetyRitualRecipe('necroturgy', [Ingredient.of('minecraft:redstone'),Ingredient.of('minecraft:paper'),Ingredient.of('goety:ectoplasm'),Ingredient.of('minecraft:lapis_lazuli'),], Item.of('chestcavity:rotten_kidney'), Item.of('stray_expansion:zombie_kidney')).setSoulCost(2))
	
	registerCustomRecipe(new GoetyRitualRecipe('necroturgy', [Ingredient.of('minecraft:redstone'),Ingredient.of('minecraft:paper'),Ingredient.of('goety:ectoplasm'),Ingredient.of('minecraft:lapis_lazuli'),], Item.of('chestcavity:rotten_liver'), Item.of('stray_expansion:zombie_liver')).setSoulCost(2))
	
	registerCustomRecipe(new GoetyRitualRecipe('necroturgy', [Ingredient.of('minecraft:redstone'),Ingredient.of('minecraft:paper'),Ingredient.of('goety:ectoplasm'),Ingredient.of('minecraft:lapis_lazuli'),], Item.of('chestcavity:rotten_lung'), Item.of('stray_expansion:zombie_lung')).setSoulCost(2))
	
	registerCustomRecipe(new GoetyRitualRecipe('necroturgy', [Ingredient.of('minecraft:redstone'),Ingredient.of('minecraft:string'),Ingredient.of('goety:ectoplasm'),Ingredient.of('minecraft:lapis_lazuli'),], Item.of('stray_expansion:rotten_muscle_pile'), Item.of('stray_expansion:zombie_muscle')).setSoulCost(2))
	
	registerCustomRecipe(new GoetyRitualRecipe('necroturgy', [Ingredient.of('minecraft:redstone'),Ingredient.of('minecraft:string'),Ingredient.of('goety:ectoplasm'),Ingredient.of('minecraft:lapis_lazuli'),], Item.of('stray_expansion:rotten_rib_pile'), Item.of('stray_expansion:zombie_rib')).setSoulCost(2))
	
	registerCustomRecipe(new GoetyRitualRecipe('necroturgy', [Ingredient.of('minecraft:redstone'),Ingredient.of('minecraft:string'),Ingredient.of('goety:ectoplasm'),Ingredient.of('minecraft:lapis_lazuli'),], Item.of('chestcavity:rotten_spine'), Item.of('stray_expansion:zombie_spine')).setSoulCost(2))
	
	registerCustomRecipe(new GoetyRitualRecipe('necroturgy', [Ingredient.of('minecraft:redstone'),Ingredient.of('minecraft:paper'),Ingredient.of('goety:ectoplasm'),Ingredient.of('minecraft:lapis_lazuli'),], Item.of('chestcavity:rotten_spleen'), Item.of('stray_expansion:zombie_spleen')).setSoulCost(2))
	
	registerCustomRecipe(new GoetyRitualRecipe('necroturgy', [Ingredient.of('minecraft:redstone'),Ingredient.of('minecraft:paper'),Ingredient.of('goety:ectoplasm'),Ingredient.of('minecraft:lapis_lazuli'),], Item.of('chestcavity:rotten_stomach'), Item.of('stray_expansion:zombie_stomach')).setSoulCost(2))
	//龙肉大餐
	registerCustomRecipe(new CookingRecipe(Item.of('minecraft:bowl'), [Item.of('iceandfire:ice_dragon_flesh'), Item.of('iceandfire:ice_dragon_heart'), Item.of('kubejs:ice_dragon_liver'), Item.of('bookwyrms:scale_teal'), Item.of('minecraft:kelp'), Item.of('minecraft:glow_berries')], Item.of('stray_expansion:ice_dragon_feast').withCount(1)).setCookingtime(60 * 20))
	
	registerCustomRecipe(new CookingRecipe(Item.of('minecraft:bowl'), [Item.of('iceandfire:fire_dragon_flesh'), Item.of('iceandfire:fire_dragon_heart'), Item.of('kubejs:fire_dragon_liver'), Item.of('bookwyrms:scale_red'), Item.of('minecraft:honey_bottle'), Item.of('farmersdelight:cabbage')], Item.of('stray_expansion:fire_dragon_feast').withCount(1)).setCookingtime(60 * 20))
	
	registerCustomRecipe(new CookingRecipe(Item.of('minecraft:bowl'), [Item.of('iceandfire:lightning_dragon_flesh'), Item.of('iceandfire:lightning_dragon_heart'), Item.of('kubejs:lightning_dragon_liver'), Item.of('bookwyrms:scale_purple'), Item.of('farmersdelight:tomato'), Item.of('farmersdelight:onion')], Item.of('stray_expansion:lightning_dragon_feast').withCount(1)).setCookingtime(60 * 20))
	//遗物器官
	event.recipes.create.sequenced_assembly([
		Item.of('stray_expansion:relic_appendix')
	], 'kubejs:prehistory_appendix', [
		event.recipes.create.filling('stray_expansion:incomplete_relic_appendix', ['stray_expansion:incomplete_relic_appendix', Fluid.of('kubejs:molten_relic').withAmount(1000)]),
		event.recipes.createPressing('stray_expansion:incomplete_relic_appendix', 'stray_expansion:incomplete_relic_appendix'),
		event.recipes.createPressing('stray_expansion:incomplete_relic_appendix', 'stray_expansion:incomplete_relic_appendix'),
	]).transitionalItem('stray_expansion:incomplete_relic_appendix').loops(5)
	
	event.recipes.create.sequenced_assembly([
		Item.of('stray_expansion:relic_heart')
	], 'kubejs:prehistory_heart', [
		event.recipes.create.filling('stray_expansion:incomplete_relic_heart', ['stray_expansion:incomplete_relic_heart', Fluid.of('kubejs:molten_relic').withAmount(1000)]),
		event.recipes.createPressing('stray_expansion:incomplete_relic_heart', 'stray_expansion:incomplete_relic_heart'),
		event.recipes.createPressing('stray_expansion:incomplete_relic_heart', 'stray_expansion:incomplete_relic_heart'),
	]).transitionalItem('stray_expansion:incomplete_relic_heart').loops(5)
	
	event.recipes.create.sequenced_assembly([
		Item.of('stray_expansion:relic_intestine')
	], 'kubejs:prehistory_intestine', [
		event.recipes.create.filling('stray_expansion:incomplete_relic_intestine', ['stray_expansion:incomplete_relic_intestine', Fluid.of('kubejs:molten_relic').withAmount(1000)]),
		event.recipes.createPressing('stray_expansion:incomplete_relic_intestine', 'stray_expansion:incomplete_relic_intestine'),
		event.recipes.createPressing('stray_expansion:incomplete_relic_intestine', 'stray_expansion:incomplete_relic_intestine'),
	]).transitionalItem('stray_expansion:incomplete_relic_intestine').loops(5)
	
	event.recipes.create.sequenced_assembly([
		Item.of('stray_expansion:relic_kidney')
	], 'kubejs:prehistory_kidney', [
		event.recipes.create.filling('stray_expansion:incomplete_relic_kidney', ['stray_expansion:incomplete_relic_kidney', Fluid.of('kubejs:molten_relic').withAmount(1000)]),
		event.recipes.createPressing('stray_expansion:incomplete_relic_kidney', 'stray_expansion:incomplete_relic_kidney'),
		event.recipes.createPressing('stray_expansion:incomplete_relic_kidney', 'stray_expansion:incomplete_relic_kidney'),
	]).transitionalItem('stray_expansion:incomplete_relic_kidney').loops(5)
	
	event.recipes.create.sequenced_assembly([
		Item.of('stray_expansion:relic_liver')
	], 'kubejs:prehistory_liver', [
		event.recipes.create.filling('stray_expansion:incomplete_relic_liver', ['stray_expansion:incomplete_relic_liver', Fluid.of('kubejs:molten_relic').withAmount(1000)]),
		event.recipes.createPressing('stray_expansion:incomplete_relic_liver', 'stray_expansion:incomplete_relic_liver'),
		event.recipes.createPressing('stray_expansion:incomplete_relic_liver', 'stray_expansion:incomplete_relic_liver'),
	]).transitionalItem('stray_expansion:incomplete_relic_liver').loops(5)
	
	event.recipes.create.sequenced_assembly([
		Item.of('stray_expansion:relic_lung')
	], 'kubejs:prehistory_lung', [
		event.recipes.create.filling('stray_expansion:incomplete_relic_lung', ['stray_expansion:incomplete_relic_lung', Fluid.of('kubejs:molten_relic').withAmount(1000)]),
		event.recipes.createPressing('stray_expansion:incomplete_relic_lung', 'stray_expansion:incomplete_relic_lung'),
		event.recipes.createPressing('stray_expansion:incomplete_relic_lung', 'stray_expansion:incomplete_relic_lung'),
	]).transitionalItem('stray_expansion:incomplete_relic_lung').loops(5)
	
	event.recipes.create.sequenced_assembly([
		Item.of('stray_expansion:relic_muscle')
	], 'kubejs:prehistory_muscle', [
		event.recipes.create.filling('stray_expansion:incomplete_relic_muscle', ['stray_expansion:incomplete_relic_muscle', Fluid.of('kubejs:molten_relic').withAmount(1000)]),
		event.recipes.createPressing('stray_expansion:incomplete_relic_muscle', 'stray_expansion:incomplete_relic_muscle'),
		event.recipes.createPressing('stray_expansion:incomplete_relic_muscle', 'stray_expansion:incomplete_relic_muscle'),
	]).transitionalItem('stray_expansion:incomplete_relic_muscle').loops(5)
	
	event.recipes.create.sequenced_assembly([
		Item.of('stray_expansion:relic_rib')
	], 'kubejs:prehistory_rib', [
		event.recipes.create.filling('stray_expansion:incomplete_relic_rib', ['stray_expansion:incomplete_relic_rib', Fluid.of('kubejs:molten_relic').withAmount(1000)]),
		event.recipes.createPressing('stray_expansion:incomplete_relic_rib', 'stray_expansion:incomplete_relic_rib'),
		event.recipes.createPressing('stray_expansion:incomplete_relic_rib', 'stray_expansion:incomplete_relic_rib'),
	]).transitionalItem('stray_expansion:incomplete_relic_rib').loops(5)
	
	event.recipes.create.sequenced_assembly([
		Item.of('stray_expansion:relic_spine')
	], 'kubejs:prehistory_spine', [
		event.recipes.create.filling('stray_expansion:incomplete_relic_spine', ['stray_expansion:incomplete_relic_spine', Fluid.of('kubejs:molten_relic').withAmount(1000)]),
		event.recipes.createPressing('stray_expansion:incomplete_relic_spine', 'stray_expansion:incomplete_relic_spine'),
		event.recipes.createPressing('stray_expansion:incomplete_relic_spine', 'stray_expansion:incomplete_relic_spine'),
	]).transitionalItem('stray_expansion:incomplete_relic_spine').loops(5)
	
	event.recipes.create.sequenced_assembly([
		Item.of('stray_expansion:relic_spleen')
	], 'kubejs:prehistory_spleen', [
		event.recipes.create.filling('stray_expansion:incomplete_relic_spleen', ['stray_expansion:incomplete_relic_spleen', Fluid.of('kubejs:molten_relic').withAmount(1000)]),
		event.recipes.createPressing('stray_expansion:incomplete_relic_spleen', 'stray_expansion:incomplete_relic_spleen'),
		event.recipes.createPressing('stray_expansion:incomplete_relic_spleen', 'stray_expansion:incomplete_relic_spleen'),
	]).transitionalItem('stray_expansion:incomplete_relic_spleen').loops(5)
	
	event.recipes.create.sequenced_assembly([
		Item.of('stray_expansion:relic_stomach')
	], 'kubejs:prehistory_stomach', [
		event.recipes.create.filling('stray_expansion:incomplete_relic_stomach', ['stray_expansion:incomplete_relic_stomach', Fluid.of('kubejs:molten_relic').withAmount(1000)]),
		event.recipes.createPressing('stray_expansion:incomplete_relic_stomach', 'stray_expansion:incomplete_relic_stomach'),
		event.recipes.createPressing('stray_expansion:incomplete_relic_stomach', 'stray_expansion:incomplete_relic_stomach'),
	]).transitionalItem('stray_expansion:incomplete_relic_stomach').loops(5)
	//弗兰肯斯坦器官
	event.custom({
		type: 'createaddition:charging',
		input: {
		item: 'stray_expansion:frankenstein_heart',
		count: 1
		},
		result: {
		item: 'stray_expansion:frankenstein_heart_active',
		count: 1
		},
		energy: 16000
	})
	
	event.recipes.create.sequenced_assembly([
		Item.of('stray_expansion:frankenstein_heart')
	], 'kubejs:heart_diamond', [
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_heart', ['stray_expansion:incomplete_frankenstein_heart', 'chestcavity:heart']),
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_heart', ['stray_expansion:incomplete_frankenstein_heart', 'chestcavity:raw_human_organ_meat']),
		event.recipes.createCutting('stray_expansion:incomplete_frankenstein_heart', 'stray_expansion:incomplete_frankenstein_heart'),
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_heart', ['stray_expansion:incomplete_frankenstein_heart', 'createaddition:electrum_spool']),
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_heart', ['stray_expansion:incomplete_frankenstein_heart', 'biomancy:exotic_compound']),
	]).transitionalItem('stray_expansion:incomplete_frankenstein_heart').loops(5)
	
	
	event.recipes.create.sequenced_assembly([
		Item.of('stray_expansion:frankenstein_heart_dragon')
	], 'stray_expansion:frankenstein_heart_active', [
		event.recipes.createCutting('stray_expansion:frankenstein_heart_active', 'stray_expansion:frankenstein_heart_active'),
		event.recipes.createDeploying('stray_expansion:frankenstein_heart_active', ['stray_expansion:frankenstein_heart_active', 'iceandfire:dragonsteel_lightning_ingot']),
		event.recipes.createDeploying('stray_expansion:frankenstein_heart_active', ['stray_expansion:frankenstein_heart_active', 'kubejs:ice_dragon_heart']),
		event.recipes.createDeploying('stray_expansion:frankenstein_heart_active', ['stray_expansion:frankenstein_heart_active', 'kubejs:fire_dragon_heart']),
		event.recipes.createDeploying('stray_expansion:frankenstein_heart_active', ['stray_expansion:frankenstein_heart_active', 'kubejs:lightning_dragon_heart']),
		event.recipes.createDeploying('stray_expansion:frankenstein_heart_active', ['stray_expansion:frankenstein_heart_active', 'stray_expansion:activated_ender_dragon_heart']),
		event.recipes.createDeploying('stray_expansion:frankenstein_heart_active', ['stray_expansion:frankenstein_heart_active', 'iceandfire:dragonsteel_lightning_ingot']),
	]).transitionalItem('stray_expansion:frankenstein_heart_active').loops(1)
	
	
	event.recipes.create.sequenced_assembly([
		Item.of('stray_expansion:frankenstein_appendix')
	], 'kubejs:appendix_diamond', [
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_appendix', ['stray_expansion:incomplete_frankenstein_appendix', 'chestcavity:appendix']),
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_appendix', ['stray_expansion:incomplete_frankenstein_appendix', 'chestcavity:raw_human_organ_meat']),
		event.recipes.createCutting('stray_expansion:incomplete_frankenstein_appendix', 'stray_expansion:incomplete_frankenstein_appendix'),
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_appendix', ['stray_expansion:incomplete_frankenstein_appendix', 'createaddition:electrum_spool']),
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_appendix', ['stray_expansion:incomplete_frankenstein_appendix', 'biomancy:exotic_compound']),
	]).transitionalItem('stray_expansion:incomplete_frankenstein_appendix').loops(5)
	
	event.recipes.create.sequenced_assembly([
		Item.of('stray_expansion:frankenstein_intestine')
	], 'kubejs:intestine_diamond', [
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_intestine', ['stray_expansion:incomplete_frankenstein_intestine', 'chestcavity:intestine']),
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_intestine', ['stray_expansion:incomplete_frankenstein_intestine', 'chestcavity:raw_human_organ_meat']),
		event.recipes.createCutting('stray_expansion:incomplete_frankenstein_intestine', 'stray_expansion:incomplete_frankenstein_intestine'),
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_intestine', ['stray_expansion:incomplete_frankenstein_intestine', 'createaddition:electrum_spool']),
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_intestine', ['stray_expansion:incomplete_frankenstein_intestine', 'biomancy:exotic_compound']),
	]).transitionalItem('stray_expansion:incomplete_frankenstein_intestine').loops(5)
	
	event.recipes.create.sequenced_assembly([
		Item.of('stray_expansion:frankenstein_kidney')
	], 'kubejs:kidney_diamond', [
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_kidney', ['stray_expansion:incomplete_frankenstein_kidney', 'chestcavity:kidney']),
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_kidney', ['stray_expansion:incomplete_frankenstein_kidney', 'chestcavity:raw_human_organ_meat']),
		event.recipes.createCutting('stray_expansion:incomplete_frankenstein_kidney', 'stray_expansion:incomplete_frankenstein_kidney'),
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_kidney', ['stray_expansion:incomplete_frankenstein_kidney', 'createaddition:electrum_spool']),
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_kidney', ['stray_expansion:incomplete_frankenstein_kidney', 'biomancy:exotic_compound']),
	]).transitionalItem('stray_expansion:incomplete_frankenstein_kidney').loops(5)
	
	event.recipes.create.sequenced_assembly([
		Item.of('stray_expansion:frankenstein_liver')
	], 'kubejs:liver_diamond', [
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_liver', ['stray_expansion:incomplete_frankenstein_liver', 'chestcavity:liver']),
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_liver', ['stray_expansion:incomplete_frankenstein_liver', 'chestcavity:raw_human_organ_meat']),
		event.recipes.createCutting('stray_expansion:incomplete_frankenstein_liver', 'stray_expansion:incomplete_frankenstein_liver'),
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_liver', ['stray_expansion:incomplete_frankenstein_liver', 'createaddition:electrum_spool']),
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_liver', ['stray_expansion:incomplete_frankenstein_liver', 'biomancy:exotic_compound']),
	]).transitionalItem('stray_expansion:incomplete_frankenstein_liver').loops(5)
	
	event.recipes.create.sequenced_assembly([
		Item.of('stray_expansion:frankenstein_lung')
	], 'kubejs:lung_diamond', [
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_lung', ['stray_expansion:incomplete_frankenstein_lung', 'chestcavity:lung']),
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_lung', ['stray_expansion:incomplete_frankenstein_lung', 'chestcavity:raw_human_organ_meat']),
		event.recipes.createCutting('stray_expansion:incomplete_frankenstein_lung', 'stray_expansion:incomplete_frankenstein_lung'),
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_lung', ['stray_expansion:incomplete_frankenstein_lung', 'createaddition:electrum_spool']),
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_lung', ['stray_expansion:incomplete_frankenstein_lung', 'biomancy:exotic_compound']),
	]).transitionalItem('stray_expansion:incomplete_frankenstein_lung').loops(5)
	event.recipes.create.sequenced_assembly([
		Item.of('stray_expansion:frankenstein_muscle')
	], 'kubejs:muscle_diamond', [
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_muscle', ['stray_expansion:incomplete_frankenstein_muscle', 'stray_expansion:muscle_pile']),
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_muscle', ['stray_expansion:incomplete_frankenstein_muscle', 'chestcavity:raw_human_organ_meat']),
		event.recipes.createCutting('stray_expansion:incomplete_frankenstein_muscle', 'stray_expansion:incomplete_frankenstein_muscle'),
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_muscle', ['stray_expansion:incomplete_frankenstein_muscle', 'createaddition:electrum_spool']),
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_muscle', ['stray_expansion:incomplete_frankenstein_muscle', 'biomancy:exotic_compound']),
	]).transitionalItem('stray_expansion:incomplete_frankenstein_muscle').loops(5)
	
	event.recipes.create.sequenced_assembly([
		Item.of('stray_expansion:frankenstein_spleen')
	], 'kubejs:spleen_diamond', [
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_spleen', ['stray_expansion:incomplete_frankenstein_spleen', 'chestcavity:spleen']),
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_spleen', ['stray_expansion:incomplete_frankenstein_spleen', 'chestcavity:raw_human_organ_meat']),
		event.recipes.createCutting('stray_expansion:incomplete_frankenstein_spleen', 'stray_expansion:incomplete_frankenstein_spleen'),
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_spleen', ['stray_expansion:incomplete_frankenstein_spleen', 'createaddition:electrum_spool']),
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_spleen', ['stray_expansion:incomplete_frankenstein_spleen', 'biomancy:exotic_compound']),
	]).transitionalItem('stray_expansion:incomplete_frankenstein_spleen').loops(5)
	
	event.recipes.create.sequenced_assembly([
		Item.of('stray_expansion:frankenstein_stomach')
	], 'kubejs:stomach_diamond', [
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_stomach', ['stray_expansion:incomplete_frankenstein_stomach', 'chestcavity:stomach']),
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_stomach', ['stray_expansion:incomplete_frankenstein_stomach', 'chestcavity:raw_human_organ_meat']),
		event.recipes.createCutting('stray_expansion:incomplete_frankenstein_stomach', 'stray_expansion:incomplete_frankenstein_stomach'),
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_stomach', ['stray_expansion:incomplete_frankenstein_stomach', 'createaddition:electrum_spool']),
		event.recipes.createDeploying('stray_expansion:incomplete_frankenstein_stomach', ['stray_expansion:incomplete_frankenstein_stomach', 'biomancy:exotic_compound']),
	]).transitionalItem('stray_expansion:incomplete_frankenstein_stomach').loops(5)
	
	event.recipes.create.mechanical_crafting('stray_expansion:meltdown_pipe', [
		'CDCCCDC',
		'ABAAABA',
		'CDCCCDC'
	], {
		A: 'create:belt_connector',
		B: 'create:fluid_pipe',
		C: 'minecraft:black_dye',
		D: 'create:brass_sheet'
		
	})
	
	event.recipes.create.mechanical_crafting('stray_expansion:meltdown_valve', [
		'CDCFCDC',
		'ABAEABA',
		'CDCCCDC'
	], {
		A: 'create:belt_connector',
		B: 'create:fluid_pipe',
		C: 'minecraft:black_dye',
		D: 'create:brass_sheet',
		E: 'create:fluid_valve',
		F: 'create:flywheel'
		
	})
	
	event.recipes.create.mechanical_crafting('stray_expansion:meltdown_piston', [
		'EADAE',
		'A A A',
		'ABFBA',
		'ACACA',
		'EAAAE'
	], {
		A: 'create:iron_sheet',
		B: 'minecraft:piston',
		C: 'create:piston_extension_pole',
		D: 'create:smart_fluid_pipe',
		E: 'create:brass_sheet',
		F: 'create:flywheel'
		
	})
	
	event.recipes.create.mechanical_crafting('stray_expansion:meltdown_atomizer', [
		'EABAE',
		'A D A',
		'ACCCA',
		'EABAE'
	], {
		A: 'create:iron_sheet',
		B: 'create:encased_fan',
		C: 'create:item_drain',
		D: 'create:nozzle',
		E: 'create:brass_sheet'
		
	})
	
	event.recipes.create.mechanical_crafting('stray_expansion:meltdown_sensor', [
		'EAAAE',
		'ABCBA',
		'EAAAE'
	], {
		A: 'create:iron_sheet',
		B: 'minecraft:note_block',
		C: 'minecraft:compass',
		E: 'create:brass_sheet'
	})
	
	event.recipes.create.mechanical_crafting('stray_expansion:meltdown_heart', [
		'BAAAB',
		'FGIGF',
		'AHCHA',
		'AGDGA',
		'BAAAB'
	], {
		A: 'create:iron_sheet',
		B: 'create:brass_sheet',
		C: 'kubejs:furnace_core',
		D: 'kubejs:vulcan_furnace',
		I: 'kubejs:redstone_furnace',
		F: 'stray_expansion:meltdown_pipe',
		G: 'create:precision_mechanism',
		H: 'minecraft:piston'
	})
	
	event.recipes.create.mechanical_crafting('stray_expansion:meltdown_heart_molten', [
		'BAAAB',
		'FGIGF',
		'AHCHA',
		'AGDGA',
		'BAAAB'
	], {
		A: 'iceandfire:dragonsteel_fire_ingot',
		B: 'minecraft:netherite_ingot',
		C: 'kubejs:burning_heart',
		D: 'kubejs:vulcan_furnace',
		I: 'kubejs:redstone_furnace',
		F: 'stray_expansion:meltdown_pipe',
		G: 'create:precision_mechanism',
		H: 'minecraft:piston'
	})
	//开胸器
	event.recipes.create.sequenced_assembly([
		Item.of('stray_expansion:chestopener_precise','{HideFlags:2}')
	], 'chestcavity:chest_opener', [
		event.recipes.createDeploying('chestcavity:chest_opener', ['chestcavity:chest_opener', 'create:precision_mechanism']),
		event.recipes.createDeploying('chestcavity:chest_opener', ['chestcavity:chest_opener', 'create:andesite_alloy']),
		event.recipes.createCutting('chestcavity:chest_opener', 'chestcavity:chest_opener'),
	]).transitionalItem('chestcavity:chest_opener').loops(3)
	
	event.shaped(Item.of('stray_expansion:chestopener_relic','{HideFlags:2}'), [
        ' O ',
        'OXO',
        ' O '
    ],
    {
        X: 'chestcavity:chest_opener',
        O: 'kubejs:relic_metal_plate'
    })
	
	event.shaped(Item.of('stray_expansion:chestopener_dsteelfire','{HideFlags:2}'), [
        ' OO',
        'DXO',
        ' D '
    ],
    {
        X: 'iceandfire:fire_dragon_heart',
        O: 'iceandfire:dragonsteel_fire_ingot',
		D: 'iceandfire:witherbone'
    })
	
	event.shaped(Item.of('stray_expansion:chestopener_dsteelice','{HideFlags:2}'), [
        ' OO',
        'DXO',
        ' D '
    ],
    {
        X: 'iceandfire:ice_dragon_heart',
        O: 'iceandfire:dragonsteel_ice_ingot',
		D: 'iceandfire:witherbone'
    })
	
	event.shaped(Item.of('stray_expansion:chestopener_dsteellightning','{HideFlags:2}'), [
        ' OO',
        'DXO',
        ' D '
    ],
    {
        X: 'iceandfire:lightning_dragon_heart',
        O: 'iceandfire:dragonsteel_lightning_ingot',
		D: 'iceandfire:witherbone'
    })
	
	event.shaped(Item.of('stray_expansion:chestopener_ignitium','{HideFlags:2}'), [
        ' ON',
        'DXO',
        ' D '
    ],
    {
        X: 'cataclysm:witherite_ingot',
        O: 'cataclysm:ignitium_ingot',
		D: 'minecraft:netherite_ingot',
		N: 'kubejs:nether_star_shard'
    })
	
	event.shaped(Item.of('stray_expansion:chestopener_god','{HideFlags:2}'), [
        ' GO',
        'DXG',
        ' D '
    ],
    {
        X: 'kubejs:god_consciousness',
		G: 'kubejs:nether_star_shard',
        O: 'chestcavity:rib',
		D: 'createaddition:electrum_rod'
    })
	
	registerCustomRecipe(new GoetyRitualRecipe('necroturgy', [Ingredient.of('iceandfire:dragonbone'),Ingredient.of('minecraft:nether_star'),Ingredient.of('minecraft:diamond_hoe'),Ingredient.of('minecraft:lapis_block'), Ingredient.of('goety:unholy_blood'), Ingredient.of('goety:night_beacon'), Ingredient.of('goety:savage_tooth'), Ingredient.of('goety:dark_ingot'), ], Item.of('chestcavity:chest_opener'), Item.of('stray_expansion:chestopener_reaper','{HideFlags:2}')).setSoulCost(1000))
	
	event.shaped(Item.of('stray_expansion:chestopener_command','{HideFlags:2}'), [
        ' GX',
        'DOG',
        'KD '
    ],
    {
        X: 'witherstormmod:withered_nether_star',
		G: 'goety:philosophers_stone',
        O: 'witherstormmod:command_block_book',
		D: 'goety:indented_gold',
		K: 'kubejs:god_agreement'
    })
	
	event.recipes.summoningrituals
        .altar('kubejs:god_consciousness')
        .id('stray_expansion:ritual_kether')
        .input('16x create:experience_nugget')
        .input('nameless_trinkets:cracked_crown')
        .input('goety:philosophers_stone')
        .input('kubejs:prismarine_crown')
        .itemOutput('stray_expansion:kether')
        .dayTime('day')
        .recipeTime(500);
		
	event.recipes.summoningrituals
        .altar('kubejs:god_consciousness')
        .id('stray_expansion:ritual_chokmah')
        .input('16x create:experience_nugget')
        .input('nameless_trinkets:missing_page')
        .input('goety:philosophers_stone')
        .input('kubejs:ender_guard_eyeball')
        .itemOutput('stray_expansion:chokmah')
        .dayTime('day')
        .recipeTime(500);
		
	event.recipes.summoningrituals
        .altar('kubejs:god_consciousness')
        .id('stray_expansion:ritual_binah')
        .input('16x create:experience_nugget')
        .input('nameless_trinkets:moon_stone')
        .input('goety:philosophers_stone')
        .input('kubejs:warden_core')
        .itemOutput('stray_expansion:binah')
        .dayTime('day')
        .recipeTime(500);
		
	event.recipes.summoningrituals
        .altar('kubejs:god_consciousness')
        .id('stray_expansion:ritual_chesed')
        .input('16x create:experience_nugget')
        .input('nameless_trinkets:tear_of_the_sea')
        .input('goety:philosophers_stone')
        .input('kubejs:flower_heart')
        .itemOutput('stray_expansion:chesed')
        .dayTime('day')
        .recipeTime(500);
		
		
	event.recipes.summoningrituals
        .altar('kubejs:god_consciousness')
        .id('stray_expansion:ritual_geburah')
        .input('16x create:experience_nugget')
        .input('nameless_trinkets:rage_mind')
        .input('goety:philosophers_stone')
        .input('kubejs:d8')
        .itemOutput('stray_expansion:geburah')
        .dayTime('day')
        .recipeTime(500);
		
	event.recipes.summoningrituals
        .altar('kubejs:god_consciousness')
        .id('stray_expansion:ritual_tipareth')
        .input('16x create:experience_nugget')
        .input('nameless_trinkets:reforger')
        .input('goety:philosophers_stone')
        .input('kubejs:love_between_lava_and_ice')
        .itemOutput('stray_expansion:tipareth')
        .dayTime('day')
        .recipeTime(500);
		
	event.recipes.summoningrituals
        .altar('kubejs:god_consciousness')
        .id('stray_expansion:ritual_netzache')
        .input('16x create:experience_nugget')
        .input('nameless_trinkets:reverse_card')
        .input('goety:philosophers_stone')
        .input('kubejs:ring_for_home')
        .itemOutput('stray_expansion:netzache')
        .dayTime('day')
        .recipeTime(500);
		
	event.recipes.summoningrituals
        .altar('kubejs:god_consciousness')
        .id('stray_expansion:ritual_hod')
        .input('16x create:experience_nugget')
        .input('nameless_trinkets:blaze_nucleus')
        .input('goety:philosophers_stone')
        .input('kubejs:pandora_inactive')
        .itemOutput('stray_expansion:hod')
        .dayTime('day')
        .recipeTime(500);
		
	event.recipes.summoningrituals
        .altar('kubejs:god_consciousness')
        .id('stray_expansion:ritual_yesod')
        .input('16x create:experience_nugget')
        .input('nameless_trinkets:miners_soul')
        .input('goety:philosophers_stone')
        .input('kubejs:vulcan_furnace')
        .itemOutput('stray_expansion:yesod')
        .dayTime('day')
        .recipeTime(500);
		
	event.recipes.summoningrituals
        .altar('kubejs:god_consciousness')
        .id('stray_expansion:ritual_malkuth')
        .input('16x create:experience_nugget')
        .input('nameless_trinkets:gods_crown')
        .input('goety:philosophers_stone')
        .input('kubejs:origin_knight_core')
        .itemOutput('stray_expansion:malkuth')
        .dayTime('day')
        .recipeTime(500);
})

ServerEvents.highPriorityData(event => {
    function registerCustomRecipe(recipeModel) {
        let id = recipeModel.result.id.toString()
        let item = id.split(':')[1]
        event.addJson(`kubejs:recipes/bio_forging/${item}.json`, recipeModel)
    }

    registerCustomRecipe(new BioForgingRecipe([{ 'count': 1, 'item': 'chestcavity:chest_opener' }, { 'count': 4, 'item': 'biomancy:living_flesh' }, { 'count': 4, 'item': 'biomancy:healing_additive' }, { 'count': 2, 'item': 'biomancy:mob_fang' }], Item.of('stray_expansion:chestopener_flesh','{HideFlags:2}')).setNutrientsCost(32).setTab('biomancy:weapons'))
})