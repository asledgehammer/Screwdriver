import { Module } from '../module/Module';
import { BooleanProperty, BooleanPropertyJson, IntProperty, IntPropertyJson } from '../util/Property';
import { BaseItem, ItemJson } from './BaseItem';

export class KeyItem extends BaseItem<KeyItem> {
    readonly digitalPadlock = new BooleanProperty();
    readonly padlock = new BooleanProperty();
    readonly numberOfKey = new IntProperty();

    constructor(module: Module, json: KeyJson) {
        super(module);
        this.load(json);
    }

    load(json: KeyJson): void {
        super.load(json);
        this.digitalPadlock.load(json.digitalPadlock);
        this.padlock.load(json.padlock);
        this.numberOfKey.load(json.numberOfKey);
    }

    save(): KeyJson {
        const json = super.save() as KeyJson;
        json.digitalPadlock = this.digitalPadlock.save();
        json.padlock = this.padlock.save();
        json.numberOfKey = this.numberOfKey.save();
        return json;
    }

    getDigitalPadlock(): boolean | null {
        if (this.digitalPadlock.getState() === 'inherit' && this.hasParent()) {
            return this.getParent().getDigitalPadlock();
        } else {
            return this.digitalPadlock.get();
        }
    }

    setDigitalPadlock(digitalPadlock: boolean) {
        this.digitalPadlock.set(digitalPadlock);
    }

    getPadlock(): boolean | null {
        if (this.padlock.getState() === 'inherit' && this.hasParent()) {
            return this.getParent().getPadlock();
        } else {
            return this.padlock.get();
        }
    }

    setPadlock(padlock: boolean) {
        this.padlock.set(padlock);
    }

    getNumberOfKey(): number | null {
        if (this.numberOfKey.getState() === 'inherit' && this.hasParent()) {
            return this.getParent().getNumberOfKey();
        } else {
            return this.numberOfKey.get();
        }
    }

    setNumberOfKey(numberOfKey: number) {
        this.numberOfKey.set(numberOfKey);
    }
}

export type KeyJson = ItemJson & {
    digitalPadlock: BooleanPropertyJson;
    padlock: BooleanPropertyJson;
    numberOfKey: IntPropertyJson;
};
