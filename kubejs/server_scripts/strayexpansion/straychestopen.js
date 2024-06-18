ItemEvents.rightClicked('stray_expansion:chestopener_precise', event => {
    let player = event.player
    let ray = player.rayTrace(5, true)
    if (ray.entity && ray.entity.isLiving() && ray.entity.type != 'minecraft:player') {
        let target = ray.entity
		if (target.type == 'iceandfire:fire_dragon'||target.type == 'iceandfire:ice_dragon'||target.type == 'iceandfire:lightning_dragon'){
            if(target.nbt.ModelDead){
				return
			}
        }
		if(target.type=="modulargolems:dog_golem"||target.type=="modulargolems:humanoid_golem"||target.type=="modulargolems:metal_golem"||target.type=="minecraft:iron_golem"||target.getHealth()<=20.0||target.getHealth()<=(target.getMaxHealth()/8)){
			target.attack(new DamageSource.playerAttack(player), 4)
			player.swing()
			if (target.isAlive()){
				let cc = target.getChestCavityInstance();
				cc.organScores.put(new ResourceLocation('chestcavity', 'ease_of_access'),new $Float(1.0))
				if ($CCItems.CHEST_OPENER.isPresent()) {
					$CCItems.CHEST_OPENER.get().openChestCavity(player, target, false)
				}
				cc.organScores.put(new ResourceLocation('chestcavity', 'ease_of_access'),new $Float(0.0))
			}
		}
    }
})

ItemEvents.rightClicked('stray_expansion:chestopener_flesh', event => {
    let player = event.player
    let ray = player.rayTrace(5, true)
    if (ray.entity && ray.entity.isLiving() && ray.entity.type != 'minecraft:player') {
        let target = ray.entity
		if (target.type == 'iceandfire:fire_dragon'||target.type == 'iceandfire:ice_dragon'||target.type == 'iceandfire:lightning_dragon'){
            if(target.nbt.ModelDead){
				return
			}
        }
		if(target.getHealth()<=20.0||target.getHealth()<=(target.getMaxHealth()/8)){
			//target.attack(new DamageSource.playerAttack(player), 4)
			player.swing()
			if (target.isAlive()){
				let cc = target.getChestCavityInstance();
				cc.organScores.put(new ResourceLocation('chestcavity', 'ease_of_access'),new $Float(1.0))
				if ($CCItems.CHEST_OPENER.isPresent()) {
					$CCItems.CHEST_OPENER.get().openChestCavity(player, target, false)
				}
				cc.organScores.put(new ResourceLocation('chestcavity', 'ease_of_access'),new $Float(0.0))
			}
		}
    }
})

ItemEvents.rightClicked('stray_expansion:chestopener_relic', event => {
    let player = event.player
    let ray = player.rayTrace(10, true)
    if (ray.entity && ray.entity.isLiving() && ray.entity.type != 'minecraft:player') {
        let target = ray.entity
		if (target.type == 'iceandfire:fire_dragon'||target.type == 'iceandfire:ice_dragon'||target.type == 'iceandfire:lightning_dragon'){
            if(target.nbt.ModelDead){
				return
			}
        }
		if(target.getHealth()<=20.0||target.getHealth()<=(target.getMaxHealth()/8)){
			target.attack(new DamageSource.playerAttack(player), 4)
			player.swing()
			if (target.isAlive()){
				let cc = target.getChestCavityInstance();
				cc.organScores.put(new ResourceLocation('chestcavity', 'ease_of_access'),new $Float(1.0))
				if ($CCItems.CHEST_OPENER.isPresent()) {
					$CCItems.CHEST_OPENER.get().openChestCavity(player, target, false)
				}
				cc.organScores.put(new ResourceLocation('chestcavity', 'ease_of_access'),new $Float(0.0))
			}
		}
    }
})

ItemEvents.rightClicked('stray_expansion:chestopener_dsteelfire', event => {
    let player = event.player
    let ray = player.rayTrace(5, true)
    if (ray.entity && ray.entity.isLiving() && ray.entity.type != 'minecraft:player') {
        let target = ray.entity
		if (target.type == 'iceandfire:fire_dragon'||target.type == 'iceandfire:ice_dragon'||target.type == 'iceandfire:lightning_dragon'){
            if(target.nbt.ModelDead){
				return
			}
        }
		if(target.type=="iceandfire:fire_dragon"||target.getHealth()<=40.0||target.getHealth()<=(target.getMaxHealth()/4)){
			target.attack(new DamageSource.playerAttack(player), 4)
			player.swing()
			if (target.isAlive()){
				let cc = target.getChestCavityInstance();
				cc.organScores.put(new ResourceLocation('chestcavity', 'ease_of_access'),new $Float(1.0))
				if ($CCItems.CHEST_OPENER.isPresent()) {
					$CCItems.CHEST_OPENER.get().openChestCavity(player, target, false)
				}
				cc.organScores.put(new ResourceLocation('chestcavity', 'ease_of_access'),new $Float(0.0))
			}
		}
    }
})

ItemEvents.rightClicked('stray_expansion:chestopener_dsteelice', event => {
    let player = event.player
    let ray = player.rayTrace(5, true)
    if (ray.entity && ray.entity.isLiving() && ray.entity.type != 'minecraft:player') {
        let target = ray.entity
		if (target.type == 'iceandfire:fire_dragon'||target.type == 'iceandfire:ice_dragon'||target.type == 'iceandfire:lightning_dragon'){
            if(target.nbt.ModelDead){
				return
			}
        }
		if(target.type=="iceandfire:ice_dragon"||target.getHealth()<=40.0||target.getHealth()<=(target.getMaxHealth()/4)){
			target.attack(new DamageSource.playerAttack(player), 4)
			player.swing()
			if (target.isAlive()){
				let cc = target.getChestCavityInstance();
				cc.organScores.put(new ResourceLocation('chestcavity', 'ease_of_access'),new $Float(1.0))
				if ($CCItems.CHEST_OPENER.isPresent()) {
					$CCItems.CHEST_OPENER.get().openChestCavity(player, target, false)
				}
				cc.organScores.put(new ResourceLocation('chestcavity', 'ease_of_access'),new $Float(0.0))
			}
		}
    }
})

ItemEvents.rightClicked('stray_expansion:chestopener_dsteellightning', event => {
    let player = event.player
    let ray = player.rayTrace(5, true)
    if (ray.entity && ray.entity.isLiving() && ray.entity.type != 'minecraft:player') {
        let target = ray.entity
		if (target.type == 'iceandfire:fire_dragon'||target.type == 'iceandfire:ice_dragon'||target.type == 'iceandfire:lightning_dragon'){
            if(target.nbt.ModelDead){
				return
			}
        }
		//player.tell(target.getEntityData().getAll())
		if(target.type=="iceandfire:lightning_dragon"||target.getHealth()<=40.0||target.getHealth()<=(target.getMaxHealth()/4)){
			target.attack(new DamageSource.playerAttack(player), 4)
			player.swing()
			if (target.isAlive()){
				let cc = target.getChestCavityInstance();
				cc.organScores.put(new ResourceLocation('chestcavity', 'ease_of_access'),new $Float(1.0))
				if ($CCItems.CHEST_OPENER.isPresent()) {
					$CCItems.CHEST_OPENER.get().openChestCavity(player, target, false)
				}
				cc.organScores.put(new ResourceLocation('chestcavity', 'ease_of_access'),new $Float(0.0))
			}
		}
    }
})

ItemEvents.rightClicked('stray_expansion:chestopener_ignitium', event => {
    let player = event.player
    let ray = player.rayTrace(5, true)
    if (ray.entity && ray.entity.isLiving() && ray.entity.type != 'minecraft:player') {
        let target = ray.entity
		if (target.type == 'iceandfire:fire_dragon'||target.type == 'iceandfire:ice_dragon'||target.type == 'iceandfire:lightning_dragon'){
            if(target.nbt.ModelDead){
				return
			}
        }
		if(target.getHealth()<=80.0||target.getHealth()<=(target.getMaxHealth()/2)){
			//target.attack(new DamageSource.playerAttack(player), 4)
			player.swing()
			if (target.isAlive()){
				let cc = target.getChestCavityInstance();
				cc.organScores.put(new ResourceLocation('chestcavity', 'ease_of_access'),new $Float(1.0))
				if ($CCItems.CHEST_OPENER.isPresent()) {
					$CCItems.CHEST_OPENER.get().openChestCavity(player, target, false)
				}
				cc.organScores.put(new ResourceLocation('chestcavity', 'ease_of_access'),new $Float(0.0))
			}
		}
    }
})

ItemEvents.rightClicked('stray_expansion:chestopener_reaper', event => {
    let player = event.player
    let ray = player.rayTrace(5, true)
    if (ray.entity && ray.entity.isLiving() && ray.entity.type != 'minecraft:player') {
        let target = ray.entity
		if (target.type == 'iceandfire:fire_dragon'||target.type == 'iceandfire:ice_dragon'||target.type == 'iceandfire:lightning_dragon'){
            if(target.nbt.ModelDead){
				return
			}
        }
		if(target.getHealth()<=80.0||target.getHealth()<=(target.getMaxHealth()/2)){
			//target.attack(new DamageSource.playerAttack(player), 4)
			player.swing()
			if (target.isAlive()){
				let cc = target.getChestCavityInstance();
				cc.organScores.put(new ResourceLocation('chestcavity', 'ease_of_access'),new $Float(1.0))
				if ($CCItems.CHEST_OPENER.isPresent()) {
					$CCItems.CHEST_OPENER.get().openChestCavity(player, target, false)
				}
				cc.organScores.put(new ResourceLocation('chestcavity', 'ease_of_access'),new $Float(0.0))
			}
		}
    }
})

ItemEvents.rightClicked('stray_expansion:chestopener_god', event => {
    let player = event.player
    let ray = player.rayTrace(5, true)
    if (ray.entity && ray.entity.isLiving() && ray.entity.type != 'minecraft:player') {
        let target = ray.entity
		if (target.type == 'iceandfire:fire_dragon'||target.type == 'iceandfire:ice_dragon'||target.type == 'iceandfire:lightning_dragon'){
            if(target.nbt.ModelDead){
				return
			}
        }
		if(target.getHealth()<=80.0||target.getHealth()<=(target.getMaxHealth()/2)){
			//target.attack(new DamageSource.playerAttack(player), 4)
			player.swing()
			if (target.isAlive()){
				let cc = target.getChestCavityInstance();
				cc.organScores.put(new ResourceLocation('chestcavity', 'ease_of_access'),new $Float(1.0))
				if ($CCItems.CHEST_OPENER.isPresent()) {
					$CCItems.CHEST_OPENER.get().openChestCavity(player, target, false)
				}
				cc.organScores.put(new ResourceLocation('chestcavity', 'ease_of_access'),new $Float(0.0))
			}
		}
    }
})

ItemEvents.rightClicked('stray_expansion:chestopener_command', event => {
    let player = event.player
    let ray = player.rayTrace(5, true)
    if (ray.entity && ray.entity.isLiving() && ray.entity.type != 'minecraft:player') {
        let target = ray.entity
		if (target.type == 'iceandfire:fire_dragon'||target.type == 'iceandfire:ice_dragon'||target.type == 'iceandfire:lightning_dragon'){
            if(target.nbt.ModelDead){
				return
			}
        }
		player.swing()
		let cc = target.getChestCavityInstance();
		cc.organScores.put(new ResourceLocation('chestcavity', 'ease_of_access'),new $Float(1.0))
		if ($CCItems.CHEST_OPENER.isPresent()) {
			$CCItems.CHEST_OPENER.get().openChestCavity(player, target, false)
		}
		cc.organScores.put(new ResourceLocation('chestcavity', 'ease_of_access'),new $Float(0.0))
    }
})