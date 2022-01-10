import { RoundState } from '../../../trivial-crypto-client/src/models/Rounds/RoundState';

export abstract class Round {
    public abstract getState(): RoundState;
}
