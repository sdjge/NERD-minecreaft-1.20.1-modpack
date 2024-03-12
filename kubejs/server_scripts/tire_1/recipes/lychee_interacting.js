ServerEvents.recipes(event => {
    const lz_fksy = [
    // 粉笔
        {
            con: {
                "type": "and",
                "contextual": [
                    {
                        "type": "chance",
                        "chance": 0.05,
                    }
                ]
            },
            item: {
                "type": "forge:nbt",
                "item": "occultism:chalk_white",
                "nbt": {
                    "tag": 'breakble',
                    "Unbreakable": true
                }
            },
            block: {
                "tag": 'forge:stone'
            },
            post: [
                { 
                    "type": "drop_item",
                    "item": "kubejs:not_chalk_white_dust",
                }
            ]
        },
        {
            con: {
                "type": "and",
                "contextual": [
                    {
                        "type": "chance",
                        "chance": 0.05
                    }
                ]
            },
            item: {
                "type": "forge:nbt",
                "item": "occultism:chalk_gold",
                "nbt": {
                    "Unbreakable": true,
                    "tag": 'breakble',
                    "Unbreakable": true
                }
            },
            block: {
                "tag": 'forge:stone'
            },
            post: [
                { 
                    "type": "drop_item",
                    "item": "kubejs:not_chalk_gold_dust",
                }
            ]
        },
        {
            con: {
                "type": "and",
                "contextual": [
                    {
                        "type": "chance",
                        "chance": 0.05
                    }
                ]
            },
            item: {
                "type": "forge:nbt",
                "item": "occultism:chalk_purple",
                "nbt": {
                    "tag": 'breakble',
                    "Unbreakable": true
                }
            },
            block: {
                "tag": 'forge:stone'
            },
            post: [
                { 
                    "type": "drop_item",
                    "item": "kubejs:not_chalk_purple_dust",
                }
            ]
        },
        {
            con: {
                "type": "and",
                "contextual": [
                    {
                        "type": "chance",
                        "chance": 0.05
                    }
                ]
            },
            item: {
                "type": "forge:nbt",
                "item": "occultism:chalk_red",
                "nbt": {
                    "tag": 'breakble',
                    "Unbreakable": true
                }
            },
            block: {
                "tag": 'forge:stone'
            },
            post: [
                { 
                    "type": "drop_item",
                    "item": "kubejs:not_chalk_red_dust",
                }
            ]
        },
    ]
    lz_fksy.forEach((lz_fksy) => {
        event.custom(
            {
                "type": "lychee:block_interacting",
                "contextual": [lz_fksy.con],
                "item_in": lz_fksy.item,
                "block_in":lz_fksy.block,
                "post": lz_fksy.post,
            },   
        )
    })
})
