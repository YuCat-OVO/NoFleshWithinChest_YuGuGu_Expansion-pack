const strayOrganPlayerDamageOnlyStrategies = {
	'stray_expansion:burger_heart': function (event, organ, data) {
		let player = event.source.player
        if (player.hasEffect('stray_expansion:burger_heart')) {
        let burgerEffect = player.getEffect('stray_expansion:burger_heart')
        let burgerAmplifier = burgerEffect.getAmplifier();
			event.amount = event.amount * (burgerAmplifier * 0.5 + 1.0);
		}
    },
	
	'stray_expansion:meltdown_heart': function (event, organ, data) {
		let player = event.source.player
        if (player.hasEffect('stray_expansion:meltdown_heart')) {
			let meltdownEffect = player.getEffect('stray_expansion:meltdown_heart')
			let meltdownAmplifier = meltdownEffect.getAmplifier();
			let meltdownDuration = meltdownEffect.getDuration();
			event.amount = Math.max(event.amount + ((meltdownAmplifier+1)*(20-Math.floor(meltdownDuration/20))),1)
		}
    },
	'stray_expansion:meltdown_heart_molten': function (event, organ, data) {
		let player = event.source.player
        if (player.hasEffect('stray_expansion:meltdown_heart_molten')) {
			let meltdownEffect = player.getEffect('stray_expansion:meltdown_heart_molten')
			let meltdownAmplifier = meltdownEffect.getAmplifier();
			let meltdownDuration = meltdownEffect.getDuration();
			event.amount = Math.max(event.amount * ((meltdownAmplifier+1)*((180-Math.floor(meltdownDuration/20))/12)),1)
		}
    },
	
	'stray_expansion:binah': function (event, organ, data) {
		let player = event.source.player
		event.amount = event.amount + player.experienceLevel*2
		if (player.experienceLevel>0){
			player.giveExperienceLevels(-1)
		}
    },
	
	'stray_expansion:geburah': function (event, organ, data) {
		let player = event.source.player
		let random = Math.random()
        if (random < 0.25) {
            event.amount = event.amount*20
			Utils.server.runCommandSilent('playsound minecraft:block.anvil.land player @a '+player.x+' '+player.y+' '+player.z)
        }
        else{
			//player.tell(event.amount)
			Utils.server.runCommandSilent('playsound minecraft:entity.allay.hurt player @a '+player.x+' '+player.y+' '+player.z)
			player.setHealth(Math.floor(player.getHealth()/2))
			event.amount = 0
        }
    },
}
var result1=Object.assign(organPlayerDamageOnlyStrategies,strayOrganPlayerDamageOnlyStrategies);