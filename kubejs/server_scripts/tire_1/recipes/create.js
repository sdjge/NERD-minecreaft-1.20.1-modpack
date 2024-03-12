ServerEvents.recipes(event => {
    // 动力锤
    event.remove({ output: 'create:mechanical_press' })
    event.shaped('create:mechanical_press', [
        'WEW', ' K ', ' I '
    ],
        {
            W: 'create:cogwheel', K: 'create:andesite_casing', I: 'minecraft:iron_block', E: 'embers:stamper'
        })
    // 安山合金
    event.replaceOutput({ type: "minecraft:crafting_shaped" }, 'create:andesite_alloy', 'kubejs:andesite_alloy_gravel')
})