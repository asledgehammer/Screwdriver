import { Module } from '../module/Module';
import { BaseItem, ItemJson } from './BaseItem';

export class WeaponItem extends BaseItem<WeaponItem> {
    constructor(module: Module, json?: WeaponJson) {
        super(module);
        if (json != null) this.load(json);
    }

    load(json: WeaponJson): void {
        super.load(json);
    }

    save(): WeaponJson {
        const json = super.save() as WeaponJson;
        return json;
    }

    override compile(prefix: string): string {
        return prefix;
    }
}

export type WeaponJson = ItemJson & {};
