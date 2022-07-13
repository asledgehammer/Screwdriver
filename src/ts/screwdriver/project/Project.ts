import { BaseItem } from "../item/BaseItem";
import { Module, ModuleJson } from "../module/Module";
import { BaseRecipe } from "../recipe/BaseRecipe";
import { Compilable } from "../util/Compilable";

export class Project implements Compilable {
    
    modules: {[id: string]: Module} = {};
    id: string;

    constructor(id: string) {
        this.id = id;
    }

    compile(prefix: string): string {
        return prefix;
    }

    load(json: ProjectJson) {
        this.id = json.id;

        // Load all modules.
        for (const moduleJson of Object.values(json.modules)) {
            const module = new Module(this, moduleJson.id);
            module.load(moduleJson);
            this.modules[module.id] = module;
        }

        // Make sure that all modules load prior to resolving their contents.
        this.resolveModules();
    }

    resolveModules() {
        for(const module of Object.values(this.modules)) {
            module.resolveContents();
        }
    }

    getItem(id: string): BaseItem<any> | null {
        for(const module of Object.values(this.modules)) {
            const item = module.getItem(id);
            if(item != null) return item;
        }
        return null;
    }

    getRecipe(id: string): BaseRecipe<any> | null {
        for(const module of Object.values(this.modules)) {
            const item = module.getRecipe(id);
            if(item != null) return item;
        }
        return null;
    }

    save(): ProjectJson {

        const modules: {[id: string]: ModuleJson} = {};

        for(const module of Object.values(this.modules)) {
            modules[module.id] = module.save();
        }

        return {id: this.id, modules};
    }
}

export type ProjectJson = {
    id: string;
    modules: {[id: string]: ModuleJson};
};
