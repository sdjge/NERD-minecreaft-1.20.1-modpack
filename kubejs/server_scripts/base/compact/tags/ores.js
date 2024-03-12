ServerEvents.tags('item', (event) => {
  /**匹配所有create_dd的矿物 */
  /**
   * 锭*/
  event.add('forge:ingots/iron', ['create_dd:industrial_iron_ingot']);
  event.add('forge:ingots/bronze', ['create_dd:bronze_ingot']);
  /**
   * 板*/
  event.add('forge:plates/iron', ['create_dd:industrial_iron_sheet']);
  event.add('forge:plates/bronze', ['create_dd:bronze_sheet']);
  /**
   * 粒*/
  event.add('forge:nuggets/iron', ['create_dd:industrial_iron_nugget']);
  event.add('forge:nuggets/bronze', ['create_dd:bronze_nugget']);
});


