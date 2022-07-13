import { Module } from '../module/Module';
import { Compilable } from '../util/Compilable';
import { Inheritable } from '../util/Inheritable';
import { float, int } from '../util/JavaTypes';
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

    ActualWeight: float = 1.0;
    BoredomChange: float = 0.0;
    FatigueChange: float = 0.0;
    LightStrength: float = 0.0;
    LightDistance: float = 0.0;
    ReduceInfectionPower: float = 0.0;
    StressChange: float = 0.0;
    UnhappyChange: float = 0.0;
    Weight: float = 1.0;
    alcoholPower: float = 0.0;
    bandagePower: float = 0.0;
    brakeForce: float = 0.0;
    conditionLowerNormal: float = 0.0;
    conditionLowerOffroad: float = 0.0;
    engineLoudness: float = 0.0;
    metalValue: float = 0.0;
    suspensionCompression: float = 0.0;
    suspensionDamping: float = 0.0;
    wetCooldown: float = 0.0;
    wheelFriction: float = 0.0;

    Condition: int = 10;
    ConditionMax: int = 10;
    Count: int = 1;
    chanceToSpawnDamaged: int = 0;
    colorRed: int = 255;
    colorGreen: int = 255;
    colorBlue: int = 255;
    itemCapacity: int = -1;
    maxAmmo: int = 0;
    maxCapacity: int = -1;
    remoteRange: int = 0;

    ActivatedItem: boolean = false;
    Alcoholic: boolean = false;
    CanStack: boolean = true;
    CanStoreWater: boolean = false;
    IsWaterSource: boolean = false;
    TorchCone: boolean = false;
    RequiresEquippedBothHands: boolean = false;
    canBeRemote: boolean = false;
    isWet: boolean = false;
    keepOnDeplete: boolean = false;
    remoteController: boolean = false;

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
