const strayOrganPlayerBearOnlyStrategies = {
    'stray_expansion:netzache': function (event, organ, data) {
        let player = event.entity
        if (event.amount < player.getHealth()) {
            return
        }
		if (player.getCooldowns().isOnCooldown(Item.of(organ.id))){
			return
		}
		event.amount=0;
		player.setHealth(player.getMaxHealth())
		player.addItemCooldown('stray_expansion:netzache', 20*60)
    },
    'stray_expansion:malkuth': function (event, organ, data) {
        event.amount=Math.min(event.amount,Math.floor(event.entity.getMaxHealth()/2));
    },
};

var result1=Object.assign(organPlayerBearOnlyStrategies,strayOrganPlayerBearOnlyStrategies);