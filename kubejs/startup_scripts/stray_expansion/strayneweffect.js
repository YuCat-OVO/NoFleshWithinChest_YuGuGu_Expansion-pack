StartupEvents.registry('mob_effect', event => {
    event.create('stray_expansion:burger_heart')
        .beneficial()
        .color(Color.GOLD)
		
	event.create('stray_expansion:meltdown_heart')
        .beneficial()
        .color(Color.GOLD)
		
	event.create('stray_expansion:meltdown_heart_molten')
        .beneficial()
		.effectTick((entity, lvl) => {
            if (!entity || entity.level.isClientSide() || !entity.isPlayer()) return
            if (entity.age % 20 == 0) {
				if (!entity.hasEffect('stray_expansion:meltdown_heart_count')) {
					Utils.server.runCommandSilent('playsound minecraft:entity.generic.explode player @a '+entity.x+' '+entity.y+' '+entity.z)
					//event.level.spawnParticles('minecraft:explosion', true, entity.x, entity.y+1, entity.z, 1, 1, 1, 10, 0.5)
					entity.kill()
					entity.removeEffect('stray_expansion:meltdown_heart_molten')
				}
            }
        })
        .color(Color.GOLD)
		
	event.create('stray_expansion:meltdown_heart_count')
        .beneficial()
        .color(Color.GOLD)
		
})