ServerEvents.recipes(event => {
    const lz_fkn = [
        // 安山合金
        {
            item: { "item": 'kubejs:andesite_alloy_gravel', "lychee:tag": { "display": { "Name": "{\"text\":\"丢进燃烧中的燃烧室\"}" } } },
            block: {
                "blocks": ['create:blaze_burner'],
                "state": { "blaze": "kindled" }
            },
            go: { "type": "drop_item", "item": 'create:andesite_alloy' }
        },
        {
            item: { "item": 'kubejs:andesite_alloy_gravel', "lychee:tag": { "display": { "Name": "{\"text\":\"丢进燃烧中的燃烧室\"}" } } },
            block: {
                "blocks": ['create:blaze_burner'],
                "state": { "blaze": "seething" }
            },
            go: { "type": "drop_item", "item": 'create:andesite_alloy' }
        },
    ]
    lz_fkn.forEach((lz_fkn) => {
        event.custom({
            "type": "lychee:item_inside",
            "item_in": lz_fkn.item,
            "block_in": lz_fkn.block,
            "post": lz_fkn.go,
        })
    })
})
