#!/usr/bin/env node
const argv = require('yargs').argv;
const dotenv = require('dotenv');
const logger = require('./logger');

const main = async () => {
    // eslint-disable-next-line no-undef
    const { parsed: cfg } = dotenv.config({ path: `${__dirname}/.env` });
    logger.info(`Verbose: ${argv.verbose}`);
    logger.info(`Using config ${JSON.stringify(cfg)}`);
};

main();
