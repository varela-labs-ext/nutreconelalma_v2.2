

abstract class BaseCalc<T> {
    public abstract compute(inItem: T): void;

    protected isValidObj(inItem: T): boolean {
        return inItem !== null && inItem !== undefined && typeof inItem === 'object';
    }
}

export default BaseCalc;