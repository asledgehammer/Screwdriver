import { Module } from "../module/Module";
import { BaseItem, ItemJson } from "./BaseItem";

export class WeaponPartItem extends BaseItem<WeaponPartItem> {

    constructor(module: Module, json?: WeaponPartJson) {
        super(module);
        if(json != null) this.load(json);
    }

    load(json: WeaponPartJson): void {
        super.load(json);
    }

    save(): WeaponPartJson {
        const json = super.save() as WeaponPartJson;
        return json;
    }

    override compile(prefix: string): string {
        return prefix;
    }
}

export type WeaponPartJson = ItemJson & {};
