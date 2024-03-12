ServerEvents.recipes(event => {
    const fluid_burning = [
        {
            in: { "fluid": "starbunclemania:source_fluid", "amount": 1000 },
            time: 75,
            super: true
        },
        {
            in: { "fluid": "kubejs:flammable_source", "amount": 1000 },
            time: 1200,
            super: true
        }
    ]
    fluid_burning.forEach((fluid_burning) => {
        event.custom({
            "type": "createaddition:liquid_burning",
            "input": fluid_burning.in,
            "burnTime": fluid_burning.time,
            "superheated": fluid_burning.super
        })
    })
})
