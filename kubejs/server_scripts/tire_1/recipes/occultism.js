ServerEvents.recipes(event => {
    event.remove({
        output: [
            // 白
            'occultism:chalk_white_impure',
            // 碗
            'occultism:sacrificial_bowl',
            'occultism:golden_sacrificial_bowl',
        ]
    })
    // 工作台
    // 无序
    // 防火粉末
    event.shapeless(Item.of('kubejs:spiritfire_resistant_dusts', 2), [Item.of('occultism:burnt_otherstone', 2), 'alltheores:copper_dust','minecraft:clay_ball']) 
    // 有序
    // 未完成碗 
    event.shaped(Item.of('kubejs:unfinished_sacrificial_bowl', 1), [ 
        'L L',
        'LLL'
    ],
    {
        L: 'kubejs:spiritfire_resistant_clay'
})
    // 灵火
    // 献祭碗
    event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": {
            "item": "kubejs:unfinished_sacrificial_bowl" 
        },
        "result": {
            "item": "occultism:sacrificial_bowl"
        }
    })
    // 防灵火粘土
    event.recipes.create.mixing('kubejs:spiritfire_resistant_clay', [Item.of('kubejs:spiritfire_resistant_dusts', 2), Fluid.water(100)])
})