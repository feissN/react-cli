#! /usr/bin/env node

import { program } from "commander";
import createComponent from "./commands/create.js";

program.command("create <path>").alias("c").description("Creates a new React component").action(createComponent);

program.parse();
