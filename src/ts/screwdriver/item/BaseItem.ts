import { Module } from '../module/Module';
import { Compilable } from '../util/Compilable';
import { Inheritable } from '../util/Inheritable';
import { Boolean, Float, float, int, Integer } from '../util/JavaTypes';
import { ItemType } from './ItemType';

export abstract class BaseItem<IType extends BaseItem<IType>> implements Inheritable<IType>, Compilable {
    module: Module;
    id: string;
    readonly type: string;
    private _parent: IType;
    private _parentID: string;

    // Item Properties
    RequireInHandOrInventory: string[] = null;
    attachmentsProvided: string[] = null;
    IconsForTexture: string[] = null;

    AmmoType: string = null;
    CustomContextMenu: string = null;
    CloseKillMove: string = null;
    DisplayCategory: string = null;
    GunType: string = null;
    ReplaceOnUse: string = null;
    ReplaceOnUseOn: string = null;
    Tooltip: string = null;
    attachmentReplacement: string = null;
    attachmentType: string = null;
    breakSound: string = null;
    countDownSound: string = null;
    displayName: string;
    evolvedRecipeName: string = null;
    explosionSound: string = null;
    icon: string;
    itemWhenDry: string = null;

    ActualWeight: Float = 1.0;
    BoredomChange: Float = 0.0;
    FatigueChange: Float = 0.0;
    LightStrength: Float = 0.0;
    LightDistance: Float = 0.0;
    ReduceInfectionPower: Float = 0.0;
    StressChange: Float = 0.0;
    UnhappyChange: Float = 0.0;
    Weight: Float = 1.0;
    alcoholPower: Float = 0.0;
    bandagePower: Float = 0.0;
    brakeForce: Float = 0.0;
    conditionLowerNormal: Float = 0.0;
    conditionLowerOffroad: Float = 0.0;
    engineLoudness: Float = 0.0;
    metalValue: Float = 0.0;
    suspensionCompression: Float = 0.0;
    suspensionDamping: Float = 0.0;
    wetCooldown: Float = 0.0;
    wheelFriction: Float = 0.0;

    Condition: Integer = 10;
    ConditionMax: Integer = 10;
    Count: Integer = 1;
    chanceToSpawnDamaged: Integer = 0;
    colorRed: Integer = 255;
    colorGreen: Integer = 255;
    colorBlue: Integer = 255;
    itemCapacity: Integer = -1;
    maxAmmo: Integer = 0;
    maxCapacity: Integer = -1;
    remoteRange: Integer = 0;

    ActivatedItem: Boolean = false;
    Alcoholic: Boolean = false;
    CanStack: Boolean = true;
    CanStoreWater: Boolean = false;
    IsWaterSource: Boolean = false;
    TorchCone: Boolean = false;
    RequiresEquippedBothHands: Boolean = false;
    canBeRemote: Boolean = false;
    isWet: Boolean = false;
    keepOnDeplete: Boolean = false;
    remoteController: Boolean = false;

    protected constructor(module: Module) {
        this.module = module;
    }

    load(json: ItemJson): void {
        this.id = json.id;
        this.displayName = json.displayName;
        this.icon = json.icon;
    }

    save(): ItemJson {
        return {
            id: this.id,
            parentID: this._parentID,
            type: 'Key',
            displayName: this.displayName,
            icon: this.icon,
        };
    }

    compile(prefix: string): string {
        return prefix;
    }

    getDisplayName(): string | null {
        if (this.displayName == null) return this.hasParent() ? this.getParent().getDisplayName() : null;
        else return this.displayName;
    }

    setDisplayName(displayName: string) {
        this.displayName = displayName;
    }

    getIcon(): string | null {
        if (this.icon == null) return this.hasParent() ? this.getParent().getIcon() : null;
        else return this.icon;
    }

    setIcon(icon: string) {
        this.icon = icon;
    }

    getParent(): IType {
        return this._parent;
    }

    setParent(parent: IType) {
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

export type ItemJson = {
    id: string;
    parentID: string;
    type: ItemType;
    displayName: string;
    icon: string;
};
