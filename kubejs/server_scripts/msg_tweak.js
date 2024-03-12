PlayerEvents.chat(event => {
    if (event.message.trim().equalsIgnoreCase('hd')) {
        event.player.runCommandSilent('kjs hand')
        event.player.tell("BAKA watching!!!")
        event.cancel()
    }
    if (event.message.trim().equalsIgnoreCase('cl')) {
        event.server.runCommand('kill @e[type=item]')
        event.server.runCommand('kill @e[type=minecraft:experience_orb]')
        event.player.tell("clean!!!");
        event.cancel()
    }
    // 为什么要写这个崩端的检测呢🤔
    if (event.message.trim().equalsIgnoreCase('break')) {
        event.server.runCommandSilent("reload")
        event.player.tell("okay,I will break it.")
        event.cancel()
    }
})