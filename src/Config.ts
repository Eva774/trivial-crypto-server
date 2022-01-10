import fs from 'fs';
import { log } from './Log';

type ConfigFile = {
    port: number,
    staticAssets: string,
    staticClient: string,
}

function eqSet(a: Set<any>, b: Set<any>) {
    if (a.size !== b.size)
        return false;
    let aa = Array.from(a);
    let bb = Array.from(b);
    return aa.filter(function (i) { return bb.indexOf(i) < 0 }).length == 0;
}

class Config {

    public config: ConfigFile

    constructor() {
        this.config = JSON.parse(fs.readFileSync('./config.json').toString()) as ConfigFile;
        const keys = new Set(['port', 'staticAssets', 'staticClient']);
        if (!eqSet(keys, new Set(Object.keys(this.config)))) {
            throw new Error('Settings file incomplete, the following settings must be set in config.json: ' + Array.from(keys).join(', '))
        }
        log.info("Starting with config", this.config);
    }
}

export const config = (new Config()).config;
