ServerEvents.recipes(event => {
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": 'minecraft:copper_ingot'
        },
        "block_in": 'minecraft:grindstone',
        "post": [{
            "type": "drop_item",
            "item": 'alltheores:copper_dust',
            "contextual": {
                "type": "chance",
                "chance": 0.45
            }
        }]
    })
})