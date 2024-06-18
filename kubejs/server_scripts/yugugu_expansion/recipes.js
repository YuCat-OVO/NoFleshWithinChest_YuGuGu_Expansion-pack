ServerEvents.recipes(event => {
    function registerCustomRecipe(recipeModel) {
        event.custom(recipeModel)
    }

    // 龙虾切龙虾尾
    registerCustomRecipe(
        new CuttingRecipe([Item.of('crabbersdelight:clawster')], [{ 'count': 1, "item": "alexsmobs:lobster_tail" }])
    )

    // // 奶油谢谢喵
    // event.recipes.create.mixing(
    //     'extradelight:whipped_cream', [Fluid.of('minecraft:milk').withAmount(250), 'minecraft:bowl']
    // )

    // 黄油谢谢喵
    event.recipes.create.mixing('extradelight:butter', 'extradelight:whipped_cream')
})