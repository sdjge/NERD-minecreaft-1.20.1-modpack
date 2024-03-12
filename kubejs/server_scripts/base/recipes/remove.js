ServerEvents.recipes(event => {
    // 移除
    event.remove({
        output: [
            /* AE2 */
            // 无限单元*2
            'expatternprovider:infinity_cell',
            // 控制器
            'ae2:controller',
            // 压印器
            'ae2:inscriber',
            // 充能器
            'ae2:charger',
            // 无限扩展
            'aeinfinitybooster:infinity_card',
            /* enderIO */
            'enderio:empty_soul_vial',
            'enderio:silicon',
            /* forbidden_arcanus */
            // 量子捕捉器
            'forbidden_arcanus:quantum_catcher',
            /* immersive_engineering */
            // 移除沉浸工程与电线有关的物品
            '#immersiveengineering:toolbox/wiring',
            /* industrialforegoing */
            // 齿轮
            'industrialforegoing:iron_gear',
            'industrialforegoing:gold_gear',
            'industrialforegoing:diamond_gear',
            // 所有框架
            'industrialforegoing:machine_frame_pity',
            'industrialforegoing:machine_frame_simple',
            'industrialforegoing:machine_frame_advanced',
            'industrialforegoing:machine_frame_supreme',
            // 移除无限工具
            'industrialforegoing:infinity_drill',
            'industrialforegoing:infinity_saw',
            'industrialforegoing:infinity_hammer',
            'industrialforegoing:infinity_trident',
            'industrialforegoing:infinity_backpack',
            'industrialforegoing:infinity_launcher',
            'industrialforegoing:infinity_nuke',
            // 移除大师球    
            'industrialforegoing:mob_imprisonment_tool',
            /* mek */
            // 能量立方
            'mekanism:basic_energy_cube',
            'mekanism:advanced_energy_cube',
            'mekanism:elite_energy_cube',
            'mekanism:ultimate_energy_cube',
            /* occultism */
            // 背包
            'occultism:satchel',
            // 粉笔一套
            'occultism:chalk_red_impure',
            'occultism:chalk_gold_impure',
            'occultism:chalk_purple_impure',
            'occultism:brush',
            // 探测
            'occultism:divination_rod',
            // 屠刀
            'occultism:butcher_knife',
            // 镐子
            'occultism:spirit_attuned_pickaxe_head',
            'occultism:iesnium_pickaxe',
            /* powah */
            'powah:uraninite',
            'powah:steel_energized',
            'powah:dielectric_casing',
            'powah:charged_snowball',
            // 能量单元
            'powah:energy_cell_starter',
            'powah:energy_cell_starter',
            'powah:energy_cell_hardened',
            'powah:energy_cell_blazing',
            'powah:energy_cell_niotic',
            'powah:energy_cell_spirited',
            'powah:energy_cell_nitro',
            /* thermal */
            // 发电机
            '#thermal:dynamos',
            // 机器
            '#thermal:machines',
            /* 综合 */
            // 按mod
            '@chunkbychunk',// chunkbychunk|非常坏硬编码配方让我删不掉😡
            '@torchmaster',// 火把大师
            '@capabilityproxy',// 代理方块
            '@easy_villagers',// 简单村民
            '@mob_grinding_utils',// 实用刷怪塔设备
            '@fluxnetworks',// 通量网络|非常好配置让我删掉了😋
            '@dimpaintings',// 维度绘画

            // -------------------------------------
            // 按物品
            // 单背包
            'sophisticatedbackpacks:backpack',
            'sophisticatedbackpacks:iron_backpack',
            'sophisticatedbackpacks:gold_backpack',
            'sophisticatedbackpacks:diamond_backpack',
            'sophisticatedbackpacks:netherite_backpack',
            // 物品路由器
            'modularrouters:modular_router',
            'modularrouters:augment_core',
            'modularrouters:blank_module',
            'modularrouters:blank_upgrade',
            // -------------------------------------
            // 按tag
            '#botania:runes' // 植物魔法的符文
        ]
    })
    event.remove({
        recipe: [
            /* extendedcrafting */
            // 一堆材料
            'extendedcrafting:black_iron_ingot',
            'extendedcrafting:redstone_ingot',
            'extendedcrafting:enhanced_redstone_ingot',
            'extendedcrafting:ender_ingot',
            'extendedcrafting:enhanced_ender_ingot',
            'extendedcrafting:crystaltine_ingot',
            'extendedcrafting:ender_star',
            'extendedcrafting:flux_star',
            'extendedcrafting:luminessence'
        ]
    })
    event.remove({
        type: 'oregrowth:ore_growth'
    })
})