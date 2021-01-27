#!/usr/bin/env node
// file: hello-world.js (make the file executable using `chmod +x hello.js`)

// Caporal provides you with a program instance
const { program } = require("@caporal/core")

program.command("order", "Cara pesan pizza")
    .argument("<type>", "type of pizza")
    .option("-e, --extra-ingredients <ingredients...>", "Extra ingredients")
    .action(({ logger, args, options }) => {
        //manipulasi data
    //   fs.clone(url).targer(folder/kita).
        console.log({ logger, args, options })
        logger.info("Order received: %s", args.type)
        if (options.extraIngredients) {
            logger.info("Extra: %s", options.extraIngredients)
        }
    })
    .command("cancel", "Cancel an order")
    .argument("<order-id>", "Order id")
    .action(({ logger, args }) => {
        logger.info("Order canceled: %s", args.orderId)
    })


// always run the program at the end
program.run()

/*
# Now, in your terminal:

$ ./hello-world.js
Hello, world!

*/