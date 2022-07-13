import { Module } from '../module/Module';
import { Compilable } from '../util/Compilable';
import { Inheritable } from '../util/Inheritable';

export abstract class BaseRecipe<RType extends BaseRecipe<RType>> implements Inheritable<RType>, Compilable {
    module: Module;
    id: string;
    private _parent: RType;
    private _parentID: string;

    protected constructor(module: Module, id: string) {
        this.module = module;
        this.id = id;
    }

    load(json: RecipeJson) {
        this.id = json.id;
        this._parentID = json.parentID;
    }

    save(): RecipeJson {
        return { id: this.id, parentID: this._parentID };
    }

    compile(prefix: string): string {
        return prefix;
    }

    getParent(): RType {
        return this._parent;
    }

    setParent(parent: RType) {
        this._parent = parent;
        this._parentID = parent != null ? parent.id : null;
    }

    getParentID(): string {
        return this._parentID;
    }

    hasParent(): boolean {
        return this._parent != null;
    }
}

export type RecipeJson = {
    id: string;
    parentID: string;
};
