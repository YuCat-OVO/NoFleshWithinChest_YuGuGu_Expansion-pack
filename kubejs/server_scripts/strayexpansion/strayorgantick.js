const strayOrganPlayerTickOnlyStrategies = {
    'stray_expansion:meltdown_sensor': function (event, organ) {
        let player = event.player
        if (player.hasEffect('stray_expansion:meltdown_heart')||player.hasEffect('stray_expansion:meltdown_heart_molten')) {
			Utils.server.runCommandSilent('playsound minecraft:block.note_block.bit player @a '+player.x+' '+player.y+' '+player.z)
        }
    },
	
	'stray_expansion:meltdown_heart': function (event, organ) {
        let player = event.player
        if (player.hasEffect('stray_expansion:meltdown_heart')) {
			let meltdownEffect = player.getEffect('stray_expansion:meltdown_heart')
			let meltdownDuration = meltdownEffect.getDuration();
			//player.tell(typeof meltdownDuration)
			if (meltdownDuration<=20){
				Utils.server.runCommandSilent('playsound minecraft:entity.generic.explode player @a '+player.x+' '+player.y+' '+player.z)
				event.level.spawnParticles('minecraft:explosion', true, player.x, player.y+1, player.z, 1, 1, 1, 10, 0.5)
				player.kill()
			}
		}
    },
	'stray_expansion:meltdown_heart_molten': function (event, organ) {
        let player = event.player
        if (player.hasEffect('stray_expansion:meltdown_heart_molten')) {
			player.addItemCooldown('stray_expansion:meltdown_heart_molten', 30)
			event.player.potionEffects.add('stray_expansion:meltdown_heart_count', 30, 0, false, false);
		}
		else{
			if (player.getCooldowns().isOnCooldown(Item.of(organ.id))){
				Utils.server.runCommandSilent('playsound minecraft:entity.generic.explode player @a '+player.x+' '+player.y+' '+player.z)
				event.level.spawnParticles('minecraft:explosion', true, player.x, player.y+1, player.z, 1, 1, 1, 10, 0.5)
				player.kill()
			}
		}
    },
	'stray_expansion:yesod': function (event, organ) {
		let player = event.player
        let count = player.persistentData.getInt(resourceCount) ?? 0;
		updateResourceCount(player, count+5)
	},
	'stray_expansion:hod': function (event, organ) {
		let player = event.player
		if (Math.random() < 0.1){
			let count = player.persistentData.getInt(warpCount) ?? 0;
			updateWarpCount(player, count-1)
		}
	},
    'stray_expansion:chesed': function (event, organ) {
		let player = event.player
		if (player.health < player.maxHealth * 0.75) {
            player.heal(2)
        }
		if (player.health < player.maxHealth * 0.5) {
            player.heal(1)
        }
		if (player.health < player.maxHealth * 0.25) {
            player.heal(1)
        }
	}, 
};
var result1=Object.assign(organPlayerTickOnlyStrategies,strayOrganPlayerTickOnlyStrategies);