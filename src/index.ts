import { program } from "commander"
program.name("wave").description("Wave").version("1.0.0")

import help from "../src/commands/help"
help(program)

import path from "../src/commands/path"
path(program)

import youtube from "../src/commands/youtube"
youtube(program)

program.parse(process.argv)
