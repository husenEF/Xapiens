#!/usr/bin/env node
// file: hello-world.js (make the file executable using `chmod +x hello.js`)

// Caporal provides you with a program instance
const { program } = require("@caporal/core")

// Simplest program ever: this program does only one thing
program.argument("nama", "Nama Anda")
program.option('-t, --type [name]', 'Deskripsikan type Anda', { required: true })
// program.option("-u,--upercase", 'kapital text')

program.action(({ logger, options, args }) => {
    let { nama } = args
    const { t, type } = options
    console.log({ type, t })
    if (type === 'upercase')
        nama = nama.toUpperCase()

    logger.info(`Hello, ${nama}!`)
})

// always run the program at the end
program.run()

/*
# Now, in your terminal:

$ ./hello-world.js
Hello, world!

*/