ServerEvents.tags('block', event => {
    // 添加关于紫晶傀儡的tag
    // 会被加速
    event.add('ars_nouveau:golem/budding', [
        'ae2:damaged_budding_quartz',
        'ae2:chipped_budding_quartz',
        'ae2:flawed_budding_quartz',
        'ae2:flawless_budding_quartz',
        'biomemakeover:budding_illunite'
    ]);
    // 会被破坏
    event.add('ars_nouveau:golem/cluster', [
        'oregrowth:ore_growth',
        'ae2:quartz_cluster',
        'biomemakeover:illunite_cluster'
    ])
    
})
ServerEvents.tags('item', event => {
    event.add('ars_nouveau:golem/shard', [
        'biomemakeover:illunite_shard'
    ])
})