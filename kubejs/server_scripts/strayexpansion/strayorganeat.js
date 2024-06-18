


const strayOrganFoodEatenOnlyStrategies = {
	'stray_expansion:burger_heart': function (event, organ, data) {
		let player=event.player
		//player.tell(event.item.id)
		//player.tell(event.item.id=='farmersdelight:hamburger')
		//player.tell(typeof event.item.id)
		//let burgers=new Set(['farmersdelight:hamburger','extradelight:mushroom_burger','extradelight:cheeseburger','extradelight:bacon_cheeseburger']);
		//if (burgers.has(event.item.id)) {
		//我草啊 这个id是个object 但是和string可以== 不愧是JavaScript
		//懒得写物品tag写个set完事 没想到这里还有一刀啊
		//算了就这样吧
		if (event.item.id=='farmersdelight:hamburger'||event.item.id=='extradelight:mushroom_burger'||event.item.id=='extradelight:cheeseburger'||event.item.id=='extradelight:bacon_cheeseburger'){
			//player.tell(event.item.id=='farmersdelight:hamburger')
            let uniburgers=new Set()
			let posMap = getPlayerChestCavityPosMap(player);
			let pos = organ.Slot
			let count = 0
			eightDirectionList.forEach(direction => {
				let currentPos = lookPos(direction, pos)
				if (posMap.has(currentPos)){
					let currentStuff = posMap.get(currentPos).id
					if ((currentStuff=='farmersdelight:hamburger'||currentStuff=='extradelight:mushroom_burger'||currentStuff=='extradelight:cheeseburger'||currentStuff=='extradelight:bacon_cheeseburger') && !uniburgers.has(currentStuff)) {
						count++
						uniburgers.add(currentStuff)
					}
				}
			})
			player.potionEffects.add('stray_expansion:burger_heart', 10 * 20, count, false, false)
        }
    },
}
var result1=Object.assign(organFoodEatenOnlyStrategies,strayOrganFoodEatenOnlyStrategies);