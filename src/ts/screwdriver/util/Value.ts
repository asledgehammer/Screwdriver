export class Value<T> {

    private _defaultValue: T;
    value: T;

    constructor(value: T) {
        this.value = value;
        this._defaultValue = value;
    }

    isSet(): boolean {
        return this.value !== this.defaultValue;
    }

    reset() {
        this.value = this.defaultValue;
    }

    get defaultValue(): T {
        return this._defaultValue;
    }
}
