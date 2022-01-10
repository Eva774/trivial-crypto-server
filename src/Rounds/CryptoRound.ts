import { log } from '../Log';
import { Round } from './Round';
import { CryptoRoundState } from '../../../trivial-crypto-client/src/models/Rounds/CryptoRoundState';

export class CryptoRound extends Round {

    private state: CryptoRoundState;

    constructor(questions: any) {
        super();
        this.state = {
            questions
        };
    }

    public getState() {
        return this.state;
    }

    /*public previousQuestion(): void {
        if (this.state.currentQuestionIndex >= 0) {
            this.state.currentQuestionIndex--;
        }
        else {
            log.error("dat gaan we niet doen, foemp")
        }
    }*/
}
