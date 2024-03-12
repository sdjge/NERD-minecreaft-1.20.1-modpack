ServerEvents.recipes(event => {
  // 好几把恐怖的合成表
  event.custom({
    "type": "enderio:fire_crafting",
    "base_blocks": [
      {
        "block": "minecraft:calcite"
      }
    ],
    "dimensions": [
      "minecraft:overworld"
    ],
    "loot_table": "sdjge:sdjge/sdjge",
    "max_item_drops": 1
  })
})