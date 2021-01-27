#!/usr/bin/env node
// file: hello-world.js (make the file executable using `chmod +x hello.js`)

// Caporal provides you with a program instance
const { program } = require("@caporal/core")

// Simplest program ever: this program does only one thing
program.argument("numbers...", "Numbers description")
program.action(({ logger, args }) => {
    // console.log({ logger, args })
    const total = args.numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    console.log({ args })
    logger.info("daftar number+" + args.numbers)
    logger.info("----------------total----------")
    logger.info("total " + total)
})

program.run()
