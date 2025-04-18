declare class Debug {
    private isEnabled;
    prefix?: string;
    log: (...unknown: any[]) => void;
    constructor(isEnabled: boolean);
    enable(enabled?: boolean): void;
    get enabled(): boolean;
}
export declare const debug: Debug;
export {};
