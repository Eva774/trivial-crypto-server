import fs from 'fs';
import { EventEmitter } from 'events';
import { log } from './Log';
import { config } from './Config';
import { CryptoRound } from './Rounds/CryptoRound';
import { Round } from './Rounds/Round';
import { GameState } from '../../trivial-crypto-client/src/models/GameState';
import { GameEmitType } from './GameEmitType';

export class Game extends EventEmitter {

    private round = new CryptoRound([]);

    constructor() {
        super();
        this.round = new CryptoRound([]);
    }

    public async loadEpisode() {
        try {
            log.info(`Loading episode from ${config.staticAssets}/questions.json`)
            const questions = JSON.parse(fs.readFileSync(`${config.staticAssets}/questions.json`).toString());
            this.round = new CryptoRound(questions);
            log.info(this.round)
            log.info(`Questions loaded successfully`)
        } catch (error) {
            log.error(error)
            throw "Invalid episode selected.";
        }
    }

    public getState(): GameState {
        return {
            roundState: this.round.getState(),
        }
    }

    private emitGameStateUpdate() {
        const gameState = this.getState();
        log.debug(GameEmitType.GameStateUpdate);
        this.emit(GameEmitType.GameStateUpdate, gameState);
    }

    public sendGameStateUpdate() {
        log.debug('startGame');
        this.emitGameStateUpdate();
    }
 /*   public setInputRanking(inputRanking: string) {
        log.debug('setInputRanking', inputRanking);
        this.rounds.forEach( round => {
            if (round.getState().roundType === RoundType.RankingRound) {
                (round as RankingRound).setInputRanking(inputRanking);
            }
        })
        this.emitGameStateUpdate();
    }
*/
}
