
const strayOrganActiveStrategies = {
	//僵尸系列
	//我踏马完全不知道这是怎么跑起来的 我也不敢去动它
	'stray_expansion:zombie_appendix': function (player, organ, attributeMap) {
		let playerChestInstance = player.getChestCavityInstance()
		playerChestInstance.organScores.put(new ResourceLocation('chestcavity', 'luck'),new $Float(playerChestInstance.organScores.get(new ResourceLocation('chestcavity', 'luck'))-5.0))
    },
    'stray_expansion:zombie_heart': function (player, organ, attributeMap) {
		let playerChestInstance = player.getChestCavityInstance()
        playerChestInstance.organScores.put(new ResourceLocation('chestcavity', 'health'),new $Float(playerChestInstance.organScores.get(new ResourceLocation('chestcavity', 'health'))-5.0))
    },
	'stray_expansion:zombie_intestine': function (player, organ, attributeMap) {
		let playerChestInstance = player.getChestCavityInstance()
		playerChestInstance.organScores.put(new ResourceLocation('chestcavity', 'nutrition'),new $Float(playerChestInstance.organScores.get(new ResourceLocation('chestcavity', 'nutrition'))-5.0))
    },
	'stray_expansion:zombie_kidney': function (player, organ, attributeMap) {
		let playerChestInstance = player.getChestCavityInstance()
		playerChestInstance.organScores.put(new ResourceLocation('chestcavity', 'filtration'),new $Float(playerChestInstance.organScores.get(new ResourceLocation('chestcavity', 'filtration'))-5.0))
    },
	'stray_expansion:zombie_liver': function (player, organ, attributeMap) {
		let playerChestInstance = player.getChestCavityInstance()
		playerChestInstance.organScores.put(new ResourceLocation('chestcavity', 'detoxification'),new $Float(playerChestInstance.organScores.get(new ResourceLocation('chestcavity', 'detoxification'))-5.0))
    },
	'stray_expansion:zombie_lung': function (player, organ, attributeMap) {
		let playerChestInstance = player.getChestCavityInstance()
		playerChestInstance.organScores.put(new ResourceLocation('chestcavity', 'breath_recovery'),new $Float(playerChestInstance.organScores.get(new ResourceLocation('chestcavity', 'breath_recovery'))-5.0))
		playerChestInstance.organScores.put(new ResourceLocation('chestcavity', 'endurance'),new $Float(playerChestInstance.organScores.get(new ResourceLocation('chestcavity', 'endurance'))-5.0))
		playerChestInstance.organScores.put(new ResourceLocation('chestcavity', 'breath_capacity'),new $Float(playerChestInstance.organScores.get(new ResourceLocation('chestcavity', 'breath_capacity'))-5.0))
    },
	'stray_expansion:zombie_muscle': function (player, organ, attributeMap) {
		let playerChestInstance = player.getChestCavityInstance()
		playerChestInstance.organScores.put(new ResourceLocation('chestcavity', 'strength'),new $Float(playerChestInstance.organScores.get(new ResourceLocation('chestcavity', 'strength'))-5.0))
		playerChestInstance.organScores.put(new ResourceLocation('chestcavity', 'speed'),new $Float(playerChestInstance.organScores.get(new ResourceLocation('chestcavity', 'speed'))-5.0))
    },
	'stray_expansion:zombie_rib': function (player, organ, attributeMap) {
		let playerChestInstance = player.getChestCavityInstance()
		playerChestInstance.organScores.put(new ResourceLocation('chestcavity', 'defense'),new $Float(playerChestInstance.organScores.get(new ResourceLocation('chestcavity', 'defense'))-5.0))
    },
	'stray_expansion:zombie_spine': function (player, organ, attributeMap) {
		let playerChestInstance = player.getChestCavityInstance()
		playerChestInstance.organScores.put(new ResourceLocation('chestcavity', 'defense'),new $Float(playerChestInstance.organScores.get(new ResourceLocation('chestcavity', 'defense'))-2.5))
		playerChestInstance.organScores.put(new ResourceLocation('chestcavity', 'nerves'),new $Float(playerChestInstance.organScores.get(new ResourceLocation('chestcavity', 'nerves'))-5.0))
    },
	'stray_expansion:zombie_spleen': function (player, organ, attributeMap) {
		let playerChestInstance = player.getChestCavityInstance()
		playerChestInstance.organScores.put(new ResourceLocation('chestcavity', 'metabolism'),new $Float(playerChestInstance.organScores.get(new ResourceLocation('chestcavity', 'metabolism'))-5.0))
    },
	'stray_expansion:zombie_stomach': function (player, organ, attributeMap) {
		let playerChestInstance = player.getChestCavityInstance()
		playerChestInstance.organScores.put(new ResourceLocation('chestcavity', 'digestion'),new $Float(playerChestInstance.organScores.get(new ResourceLocation('chestcavity', 'digestion'))-5.0))
    },
	//科学怪人系列
	
	'stray_expansion:frankenstein_heart_active': function (player, organ, attributeMap) {
		let playerChestInstance = player.getChestCavityInstance();
		let posMap = getPlayerChestCavityPosMap(player);
		let frankattribute={luck:0,health:0,nutrition:0,filtration:0,detoxification:0,endurance:0,strength:0,speed:0,defense:0,nerves:0,metabolism:0,digestion:0};
		let frankcount=0;
        let pos = organ.Slot
		let currentPos=lookPos('up',pos)
		let currentdirect='up'
		let steps=0
		
		while (currentPos!=-1) {
			steps=steps+1
			if(posMap.has(currentPos) && Item.of(posMap.get(currentPos).id).hasTag('kubejs:frankenstein')){
				frankcount+=1;
				switch(posMap.get(currentPos).id){
					case "stray_expansion:frankenstein_lung":
						frankattribute["endurance"]+=0.125;
						currentdirect='right';
					break;
					case "stray_expansion:frankenstein_liver":
						frankattribute["detoxification"]+=0.125;
						currentdirect='down';
					break;
					case "stray_expansion:frankenstein_spleen":
						frankattribute["metabolism"]+=0.125;
						currentdirect='left';
					break;
					case "stray_expansion:frankenstein_heart":
						frankattribute["health"]+=0.125;
						currentdirect='up';
					break;
					case "stray_expansion:frankenstein_heart_active":
						frankattribute["health"]+=0.125;
						currentdirect='up';
					break;
					case "stray_expansion:frankenstein_heart_dragon":
						frankattribute["health"]+=0.125;
						currentdirect='up';
					break;
					case "stray_expansion:frankenstein_appendix":
						frankattribute["luck"]+=0.125;
					break;
					case "stray_expansion:frankenstein_muscle":
						frankattribute["strength"]+=0.125;
						frankattribute["speed"]+=0.125;
					break;
					case "stray_expansion:frankenstein_kidney":
						frankattribute["filtration"]+=0.125;
					break;
					case "stray_expansion:frankenstein_stomach":
						frankattribute["digestion"]+=0.125;
					break;
					case "stray_expansion:frankenstein_intestine":
						frankattribute["nutrition"]+=0.125;
					break;
				}
			}
			if(steps>=100){
				//防止出现一个不经过原点的死循环
				break;
			}
			if(currentPos==pos){
				let key=""
				for(key in frankattribute){
					playerChestInstance.organScores.put(new ResourceLocation('chestcavity', key),new $Float(playerChestInstance.organScores.get(new ResourceLocation('chestcavity', key))+frankattribute[key]*frankcount))
				}
				break;
			}
			currentPos=lookPos(currentdirect,currentPos)
		}
    },
	
	'stray_expansion:frankenstein_heart_dragon': function (player, organ, attributeMap) {
		let playerChestInstance = player.getChestCavityInstance();
		let posMap = getPlayerChestCavityPosMap(player);
		let frankattribute={luck:0,health:0,nutrition:0,filtration:0,detoxification:0,endurance:0,strength:0,speed:0,defense:0,nerves:0,metabolism:0,digestion:0};
		let frankcount=0;
        let pos = organ.Slot
		let currentPos=lookPos('up',pos)
		let currentdirect='up'
		let steps=0
		
		while (currentPos!=-1) {
			steps=steps+1
			if(posMap.has(currentPos) && Item.of(posMap.get(currentPos).id).hasTag('kubejs:frankenstein')){
				frankcount+=1;
				switch(posMap.get(currentPos).id){
					case "stray_expansion:frankenstein_lung":
						frankattribute["endurance"]+=0.1;
						currentdirect='right';
					break;
					case "stray_expansion:frankenstein_liver":
						frankattribute["detoxification"]+=0.1;
						currentdirect='down';
					break;
					case "stray_expansion:frankenstein_spleen":
						frankattribute["metabolism"]+=0.1;
						currentdirect='left';
					break;
					case "stray_expansion:frankenstein_heart":
						frankattribute["health"]+=0.1;
						currentdirect='up';
					break;
					case "stray_expansion:frankenstein_heart_active":
						frankattribute["health"]+=0.1;
						currentdirect='up';
					break;
					case "stray_expansion:frankenstein_heart_dragon":
						frankattribute["health"]+=0.1;
						currentdirect='up';
					break;
					case "stray_expansion:frankenstein_appendix":
						frankattribute["luck"]+=0.1;
					break;
					case "stray_expansion:frankenstein_muscle":
						frankattribute["strength"]+=0.1;
						frankattribute["speed"]+=0.1;
					break;
					case "stray_expansion:frankenstein_kidney":
						frankattribute["filtration"]+=0.1;
					break;
					case "stray_expansion:frankenstein_stomach":
						frankattribute["digestion"]+=0.1;
					break;
					case "stray_expansion:frankenstein_intestine":
						frankattribute["nutrition"]+=0.1;
					break;
				}
			}
			if(steps>=100){
				//防止出现一个不经过原点的死循环
				break;
			}
			if(currentPos==pos){
				let key=""
				for(key in frankattribute){
					playerChestInstance.organScores.put(new ResourceLocation('chestcavity', key),new $Float(playerChestInstance.organScores.get(new ResourceLocation('chestcavity', key))+frankattribute[key]*frankcount*3.0))
				}
				break;
			}
			currentPos=lookPos(currentdirect,currentPos)
		}
    },
	//涂蜡末影系列
	'stray_expansion:waxed_ender_lung': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.HEALTH_UP, -3)
    },
    'stray_expansion:waxed_ender_muscle': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.HEALTH_UP, -3)
    },
    'stray_expansion:waxed_ender_heart': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.HEALTH_UP, -3)
    },
    'stray_expansion:waxed_ender_intestine': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.HEALTH_UP, -3)
    },
    'stray_expansion:waxed_ender_rib': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.HEALTH_UP, -3)
    },
    'stray_expansion:waxed_ender_spine': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.HEALTH_UP, -3)
    },
    'stray_expansion:waxed_ender_spleen': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.HEALTH_UP, -3)
    },
    'stray_expansion:waxed_ender_stomach': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.HEALTH_UP, -3)
    },
    'stray_expansion:waxed_ender_kidney': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.HEALTH_UP, -3)
    },
    'stray_expansion:waxed_ender_liver': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.HEALTH_UP, -3)
    },
    'stray_expansion:waxed_ender_appendix': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.HEALTH_UP, -3)
    },
	//解放魔力反应器官
	'stray_expansion:activated_mana_reactor': function (player, organ, attributeMap) {
		let playerChestInstance = player.getChestCavityInstance();
        let value = playerChestInstance.organScores.get(new ResourceLocation('chestcavity', 'crystalsynthesis')) * 15;
        attributeMapValueAddition(attributeMap, global.MAX_MANA, value);
    },
	//
	'stray_expansion:meltdown_pipe': function (player, organ, attributeMap) {
        let typeMap = getPlayerChestCavityTypeMap(player);
		//player.tell(typeMap.has('kubejs:meltdown'))
        if (typeMap.has('kubejs:meltdown')) {
            let value = typeMap.get('kubejs:meltdown').length * 1
            attributeMapValueAddition(attributeMap, global.ATTACK_UP, value)
        }
    },
};

var result1=Object.assign(organActiveStrategies,strayOrganActiveStrategies);

const strayOrganActiveOnlyStrategies = {
	'stray_expansion:kether': function (player, organ, attributeMap) {
        let playerChestInstance = player.getChestCavityInstance()
        playerChestInstance.organScores.forEach((key, value) => {
            if (value < 0) {
                playerChestInstance.organScores.put(key, new $Float(-value))
            }
        })
    },
	
	'stray_expansion:tipareth': function (player, organ, attributeMap) {
        let playerChestInstance = player.getChestCavityInstance()
		let vmap={}
        playerChestInstance.organScores.forEach((key, value) => {
			if (vmap[value]==undefined){
				vmap[value]=new Array()
			}
			vmap[value].push(key)
        })
		let i=0
		let key=0
		for(key in vmap){
			for(i=0;i<vmap[key].length;i++){
				playerChestInstance.organScores.put(vmap[key][i],new $Float(key*vmap[key].length))
			}
		}
    },
	
	'stray_expansion:yesod': function (player, organ, attributeMap) {
        let maxCount = player.persistentData.getInt(resourceCountMax) ?? defaultResourceMax
        player.persistentData.putInt(resourceCountMax, maxCount + 100)
    },
}

var result2=Object.assign(organActiveOnlyStrategies,strayOrganActiveOnlyStrategies);