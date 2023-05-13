
const main = async () => {
    require("./src/app");


    process.on("SIGINT", () => {
        process.exit(1);
    })
}

main();