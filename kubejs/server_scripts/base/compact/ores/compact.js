ServerEvents.recipes(event => {
    // create_dd
    event.replaceInput({ input: 'create_dd:bronze_ingot' }, 'create_dd:bronze_ingot', '#forge:ingots/bronze');
    event.replaceInput({ input: 'create_dd:industrial_iron_sheet' }, 'create_dd:industrial_iron_sheet', '#forge:plates/iron')
})