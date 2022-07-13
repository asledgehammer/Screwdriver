import { Module } from '../module/Module';
import { BaseItem, ItemJson } from './BaseItem';

export class KeyItem extends BaseItem<KeyItem> {
    digitalPadlock: boolean;
    padlock: boolean;
    /** int */
    numberOfKey: number;

    constructor(module: Module, json: KeyJson) {
        super(module);
        this.load(json);
    }

    load(json: KeyJson): void {
        super.load(json);
        this.digitalPadlock = json.digitalPadlock;
        this.padlock = json.padlock;
        this.numberOfKey = json.numberOfKey;
    }

    save(): KeyJson {
        const json = super.save() as KeyJson;
        json.digitalPadlock = this.digitalPadlock;
        json.padlock = this.padlock;
        json.numberOfKey = this.numberOfKey;
        return json;
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
