#!/usr/bin/env node
// file: hello-world.js (make the file executable using `chmod +x hello.js`)

// Caporal provides you with a program instance
const { program } = require("@caporal/core")

// Simplest program ever: this program does only one thing
program.argument("<name>", "Name to greet")
    .argument("<umur>", "Umur anda", { default: 15 }).argument("[alamat]", 'alamat anda')
// .argument("number...", "Number array")

program.action(({ logger, args }) => {
    console.log({ args })
    logger.info("Hello, %s!!", args.name)
    logger.info("Umur Anda:" + args.umur)

    if (args.alamat)
        logger.info("alamat anda" + args.alamat)

})

// always run the program at the end
program.run()

/*
# Now, in your terminal:

$ ./hello-world.js
Hello, world!

*/