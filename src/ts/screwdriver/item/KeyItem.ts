import { Module } from '../module/Module';
import { int } from '../util/JavaTypes';
import { Value } from '../util/Value';
import { BaseItem, ItemJson } from './BaseItem';

export class KeyItem extends BaseItem<KeyItem> {
    digitalPadlock = new Value<boolean>(false);
    padlock = new Value<boolean>(false);
    /** int */
    numberOfKey = new Value<int>(2);

    constructor(module: Module, json?: KeyJson) {
        super(module);
        if(json != null) this.load(json);
    }

    load(json: KeyJson): void {
        super.load(json);

        this.digitalPadlock.value = json.digitalPadlock;
        this.padlock.value = json.padlock;
        this.numberOfKey.value = json.numberOfKey;
    }

    save(): KeyJson {
        const json = super.save() as KeyJson;
        json.digitalPadlock = this.digitalPadlock.value;
        json.padlock = this.padlock.value;
        json.numberOfKey = this.numberOfKey.value;
        return json;
    }

    override compile(prefix: string): string {
        return prefix;
    }

    getDigitalPadlock(): boolean | null {
        if (this.digitalPadlock == null) return this.hasParent() ? this.getParent().getDigitalPadlock() : null;
        else return this.digitalPadlock;
    }

    setDigitalPadlock(digitalPadlock: boolean) {
        this.digitalPadlock = digitalPadlock;
    }

    getPadlock(): boolean | null {
        if (this.padlock == null) return this.hasParent() ? this.getParent().getPadlock() : null;
        else return this.padlock;
    }

    setPadlock(padlock: boolean) {
        this.padlock = padlock;
    }

    getNumberOfKey(): number | null {
        if (this.numberOfKey == null) return this.hasParent() ? this.getParent().getNumberOfKey() : null;
        else return this.numberOfKey;
    }

    setNumberOfKey(numberOfKey: number) {
        this.numberOfKey = Math.round(numberOfKey);
    }
}

export type KeyJson = ItemJson & {
    digitalPadlock: boolean;
    padlock: boolean;
    numberOfKey: number;
};
