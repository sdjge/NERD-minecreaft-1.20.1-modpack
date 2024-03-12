/**
 * 真是随随又机机啊
 * 我们种子是在太厉害了
 * 你们有这么厉害的种子嘛？
 */
// getSeedEvent
ServerEvents.loaded(event => {
    const { server } = event
    const seed = `${NBT.l(server.worldData.worldGenOptions().seed())}`.replace("L", "")
    const r_Seed = seed.charAt(5)
    global.recipeSeed = r_Seed
    console.info(["- Seed: [", Text.of(seed), "]"])
    console.info(["- recipeSeed:[", Text.of(r_Seed), "]"])
    console.info(["- globalRecipeSeed:[", Text.of(global.recipeSeed), "]"])
})
// forTest
ItemEvents.rightClicked("feather", (event) => {
    const { server } = event
    const seed = `${NBT.l(server.worldData.worldGenOptions().seed())}`.replace("L", "")
    const r_Seed = seed.charAt(5)
    event.server.tell(["- Seed: [", Text.gold(seed), "]"])
    event.server.tell(["- recipeSeed:[", Text.gold(r_Seed), "]"])
    event.server.tell(["- globalRecipeSeed:[", Text.gold(global.recipeSeed), "]"])
})
// recipes
ServerEvents.recipes(event => {
    /**
     * 请选择你的英（数）雄（字）
     * char(5) 0~9
     */
    switch (global.recipeSeed) {
        case (1):

            break
        case (2):

            break
        case (3):

            break
        case (4):

            break
        case (5):

            break
        case (6):

            break
        case (7):

            break
        case (8):

            break
        case (9):

            break
        case (0):

            break
    }
})
ServerEvents.loaded(event => {
    // forceReload
    event.server.runCommandSilent('reload')
    // JustEggs :)
    console.info('群友怪话：\nA:你去看看源码呗\nA:实在不行干反射\nB:射！反射！干反射！\nA:?只注意到射了是吧\nA:我说城门楼子真大气\nA:你和我说胯骨轴子真好看\nC:你的胯骨轴子真秀气\nA:写进彩蛋\nME:okay:)')
})
ServerEvents.unloaded(event => {
    // EggsAgain :)
    console.info('上段对话续：\n草了\n还有升级版\n退存档输出一次\nME:okay:)')
})
