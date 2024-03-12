StartupEvents.registry("block", event => {
    // 未完成的献祭碗
    event.create("unfinished_sacrificial_bowl", "basic")
        .material("stone")
        .defaultCutout()
        .box(4, 0, 4, 12, 2.5, 12)
        .displayName(Text.translate("block.kubejs.unfinished_sacrificial_bowl"))
})