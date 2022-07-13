import { Module } from "../Module";
import { ItemType } from "./ItemType";

export abstract class BaseItem<Json extends ItemJson> {
    
    readonly type: ItemType;
    module: Module;
    displayName: string;
    name: string;
    icon: string;

    constructor(module: Module, typeOrJson: ItemType | Json, name?: string, displayName?: string, icon?: string) {

        this.module = module;
        
        if(typeof typeOrJson === 'string') {
            this.type = typeOrJson;
            this.displayName = displayName;
            this.name = name;
            this.icon = icon;            
        } else {
            this.load(typeOrJson);
        }
    }

    abstract load(json: ItemJson): void;
    abstract save(): Json;
}

export type ItemJson = {
    type: ItemType;
    displayName: string;
    name: string;
    icon: string;
};
