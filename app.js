const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

// CLI
yargs(hideBin(process.argv))
  .command({
    command: "crear",
    describe: "Crea una nueva tarea",
    builder: {
      titulo: {
        describe: "El título de la tarea",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => {
      try {
        const tituloClean = argv.titulo.trim();

        // Validación extra  evita títulos vacíos
        if (!tituloClean) {
          throw new Error("El título no puede estar vacío.");
        }

        console.log(`Tarea "${tituloClean}" creada exitosamente.`);
      } catch (error) {
        console.error("Ha ocurrido un error inesperado.");
      }
    },
  })
  .help() // genera --help automáticamente
  .parse(); // procesa los argumentos