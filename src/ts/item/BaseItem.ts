import { ItemType } from "./ItemType";

export abstract class BaseItem<Json extends ItemJson> {
    
    readonly type: ItemType;
    module: string;
    displayName: string;
    name: string;
    icon: string;

    constructor(type: ItemType, module: string, displayName: string, name: string, icon: string) {
        this.type = type;
        this.module = module;
        this.displayName = displayName;
        this.name = name;
        this.icon = icon;
    }

    abstract load(json: ItemJson): void;
    abstract save(): Json;
}

export type ItemJson = {
    type: ItemType;
    module: string;
    displayName: string;
    name: string;
    icon: string;
};
