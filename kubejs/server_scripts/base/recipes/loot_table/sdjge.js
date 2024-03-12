ServerEvents.genericLootTables(event => {
    event.addGeneric("sdjge:sdjge/sdjge", loot => {
        loot.addPool(pool => {
            pool.addItem(Item.of('minecraft:player_head', '{SkullOwner:{Id:[I;951242339,167266622,-1080601356,-188694104],Name:"sdjge",Properties:{textures:[{Value:"ewogICJ0aW1lc3RhbXAiIDogMTcwNDU2Mzc4ODg4MywKICAicHJvZmlsZUlkIiA6ICIzOGIyY2U2MzA5Zjg0OTNlYmY5NzU0ZjRmNGMwYzFhOCIsCiAgInByb2ZpbGVOYW1lIiA6ICJzZGpnZSIsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS9kNGU0MWUyNTk5NjZjNjlhNzRiMTc1YzRkOTQwZGI4NzJmZTAwMTc1YTA4ZTE2MDc2ZjA0NDViOTYyNTg0NDZjIiwKICAgICAgIm1ldGFkYXRhIiA6IHsKICAgICAgICAibW9kZWwiIDogInNsaW0iCiAgICAgIH0KICAgIH0KICB9Cn0="}]}}}'))
            pool.randomChance(0.01)
            pool.setBinomialRolls(2, 0.01)
        });
        loot.addPool(pool => {
            pool.addItem('minecraft:skeleton_skull');
            pool.randomChance(0.03);
            pool.setBinomialRolls(1, 0.5);
        })
    })
})