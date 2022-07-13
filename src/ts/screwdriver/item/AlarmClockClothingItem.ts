import { Module } from '../module/Module';
import { BaseItem, ItemJson } from './BaseItem';

export class AlarmClockClothingItem extends BaseItem<AlarmClockClothingItem> {
    constructor(module: Module, json?: AlarmClockClothingJson) {
        super(module);
        if (json != null) this.load(json);
    }

    load(json: AlarmClockClothingJson): void {
        super.load(json);
    }

    save(): AlarmClockClothingJson {
        const json = super.save() as AlarmClockClothingJson;
        return json;
    }

    override compile(prefix: string): string {
        return prefix;
    }
}

export type AlarmClockClothingJson = ItemJson & {};
