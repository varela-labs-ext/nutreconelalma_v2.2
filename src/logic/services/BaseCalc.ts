

abstract class BaseCalc<T> {
    public abstract calcular(inItem: T): void;

    protected isValidObj(inItem: T): boolean {
        return inItem !== null && typeof inItem === 'object';
    }
}

export default BaseCalc;