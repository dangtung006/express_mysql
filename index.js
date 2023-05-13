
const main = async () => {
    try {
        require("./src/app");
        process.on("SIGINT", () => {
            process.exit(1);
        })
    } catch (err) {
        process.exit(1);
    }
}

main();