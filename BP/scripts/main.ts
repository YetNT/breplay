import { world, Vector3 } from "@minecraft/server"

let timeIntevalSeconds = 5;

world.beforeEvents.chatSend.subscribe((c) => {
    const p = c.sender;
    /*
    const message = c.message;
    if (!message.includes("!rec")) return;
    if (message.split(" ").length != 4) { p.sendMessage("Make sure you have all the parameters. (!rec 4 5 3)"); return; }
    // !rec 5 5 5
    let n: number[] = [];
    message.split(" ").forEach((v, i) => { if (v != "!rec") n[i] = parseInt(v); });

    const [x, y, z] = n;
    */
    setInterval(() => {
        let name = world.getDimension(p.dimension.id).getBlock(p.location).typeId
        p.sendMessage(name)
    }, timeIntevalSeconds * 1000);

})