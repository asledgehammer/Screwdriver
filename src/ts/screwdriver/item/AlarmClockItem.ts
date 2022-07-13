import { Module } from '../module/Module';
import { BaseItem, ItemJson } from './BaseItem';

export class AlarmClockItem extends BaseItem<AlarmClockItem> {
    constructor(module: Module, json?: AlarmClockJson) {
        super(module);
        if (json != null) this.load(json);
    }

    load(json: AlarmClockJson): void {
        super.load(json);
    }

    save(): AlarmClockJson {
        const json = super.save() as AlarmClockJson;
        return json;
    }

    override compile(prefix: string): string {
        return prefix;
    }
}

export type AlarmClockJson = ItemJson & {};
