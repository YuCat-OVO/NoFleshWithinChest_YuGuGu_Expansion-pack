const strayOrganRightClickedOnlyStrategies = {
	'stray_expansion:meltdown_heart': function (event, organ) {
        if (event.item != 'stray_expansion:liquid_fuel_bottle') {
            return
        }
		if (event.player.hasEffect('stray_expansion:meltdown_heart_molten')){
			return
		}
        let itemMap = getPlayerChestCavityItemMap(event.player)
        let amplifier = 0
        let duration = 20 * 20
        if (itemMap.has('stray_expansion:meltdown_piston')) {
            amplifier = Math.min(itemMap.get('stray_expansion:meltdown_piston').length,9)
        }
        if (itemMap.has('stray_expansion:meltdown_valve')) {
            duration = duration + itemMap.get('stray_expansion:meltdown_valve').length * 100
        }
        if (itemMap.has('stray_expansion:meltdown_atomizer')) {
            duration = Math.max(duration - itemMap.get('stray_expansion:meltdown_atomizer').length * 100, 20 * 5)
			//货不对板！原版一个断路器只减2秒！
        }
        event.player.swing()
        event.player.potionEffects.add('stray_expansion:meltdown_heart', duration, amplifier, false, false);
        event.item.shrink(1);
    },
	'stray_expansion:meltdown_heart_molten': function (event, organ) {
        if (event.item != 'stray_expansion:liquid_fuel_bottle') {
            return
        }
		if (event.player.hasEffect('stray_expansion:meltdown_heart')){
			return
		}
		if (event.player.hasEffect('stray_expansion:meltdown_heart_molten')){
			return
		}
        let itemMap = getPlayerChestCavityItemMap(event.player)
        let amplifier = 0
        let duration = 180 * 20
        if (itemMap.has('stray_expansion:meltdown_piston')) {
            amplifier = Math.floor(itemMap.get('stray_expansion:meltdown_piston').length / 3)
        }
        if (itemMap.has('stray_expansion:meltdown_valve')) {
            duration = duration + itemMap.get('stray_expansion:meltdown_valve').length * 100
        }
        if (itemMap.has('stray_expansion:meltdown_atomizer')) {
            duration = Math.max(duration - itemMap.get('stray_expansion:meltdown_atomizer').length * 100, 20 * 5)
        }
        event.player.swing()
        event.player.potionEffects.add('stray_expansion:meltdown_heart_molten', duration, amplifier, false, false);
		event.player.potionEffects.add('stray_expansion:meltdown_heart_count', 30, 0, false, false);
        event.item.shrink(1);
    },
	'stray_expansion:chokmah': function (event, organ) {
		let player=event.player
		if (event.item != 'minecraft:paper') {
            return
        }
		let count = player.persistentData.getInt(warpCount) ?? 0
		if(count<50){
			return;
		}
		event.item.shrink(1);
        updateWarpCount(player, 0)
		
		if(Math.random()<0.25){
			player.give(Item.of('goety:forbidden_fragment').withCount(1))
		}
		else{
			player.give(Item.of('goety:forbidden_piece').withCount(1))
		}
	},
}
var result1=Object.assign(organRightClickedOnlyStrategies,strayOrganRightClickedOnlyStrategies);