StartupEvents.registry("item", event => {
    // 投影工具
    event.create('litematica_tool','basic')
    // 耐灵火的粘土球
    event.create('spiritfire_resistant_clay', "basic").tooltip(Text.translate("tooltip.kubejs.spiritfire_resistant"));
    event.create('spiritfire_resistant_dusts', "basic").tooltip(Text.translate("tooltip.kubejs.spiritfire_resistant"));
    // 粉笔粉末->未完成品
    event.create('not_chalk_white_dust', 'basic')
    event.create('not_chalk_gold_dust', 'basic')
    event.create('not_chalk_purple_dust', 'basic')
    event.create('not_chalk_red_dust', 'basic')
    // 粉笔粉末->不毁粉笔
    event.create('chalk_white_dust', 'basic').displayName(Text.translate("item.kubejs.not_chalk_white_dust")).glow(true);
    event.create('chalk_gold_dust', 'basic').glow(true);
    event.create('chalk_purple_dust', 'basic').glow(true);
    event.create('chalk_red_dust', 'basic').glow(true);
    // 安山合金坯料
    event.create('andesite_alloy_gravel', 'basic');
});