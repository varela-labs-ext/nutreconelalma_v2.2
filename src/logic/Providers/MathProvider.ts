
class MathProvider {




    /* SINGLETON FOR THIS CLASS */
    private static _instance: MathProvider
    public static getInstance(): MathProvider {
        if (!MathProvider._instance) {
            MathProvider._instance = new MathProvider();
        }
        return MathProvider._instance;
    }
}

export default MathProvider;