#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const clear = require("clear");

clear();

const data = {
  name: chalk.bold.green("                    Arnav Katgeri"),
  handle: chalk.white("@arnavk09"),
  work: `${chalk.white("Web Developer and Computer Science Sophomore")} ${chalk
    .hex("#cca918")
    .bold("College : Manipal University Jaipur")}`,
  github: chalk.gray("https://github.com/") + chalk.green("arnavk09"),
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("KatgeriArnav"),
  linkedin:
    chalk.gray("https://linkedin.com/in/") +
    chalk.blue("arnav-katgeri-6159361b4/"),
  web: chalk.cyan("arnavk09.github.io/personalsite/"),
  npx: chalk.red("npx") + " " + chalk.white("arnavk09"),

  labelWork: chalk.white.bold("       College:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:"),
};

const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    ``,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelWeb}  ${data.web}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.bold("-  Hello There! I'm a Web Developer in the making and ")}`,
    `${chalk.bold("I'm from India and I'm usually seen doing 3 things:")}`,
    ``,
    `${chalk.bold("1. Polishing my Data Structures skills 🧠")}`,
    `${chalk.bold(
      "2. Learning about new technologies and implementing all I can 💻"
    )}`,
    `${chalk.bold("3. Pizza and a good book 👪")}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "blue",
  }
);

console.log(me);
