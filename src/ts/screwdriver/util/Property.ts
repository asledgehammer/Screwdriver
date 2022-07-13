export abstract class DynamicProperty<ValueType, Json> {
    private state: PropertyState = 'inherit';
    private value: ValueType;

    constructor(json: Json | null) {
        if (json != null) this.load(json);
    }

    abstract load(json: Json): void;
    abstract save(): Json;

    getState(): PropertyState {
        return this.state;
    }

    get(): ValueType {
        return this.value;
    }

    set(value: ValueType) {
        this.value = this.onSet(value);
        this.state = this.value != null ? 'set' : 'inherit';
    }

    protected onSet(value: ValueType): ValueType {
        return value;
    }
}

export class StringArrayProperty extends DynamicProperty<string[], StringArrayPropertyJson> {
    constructor(json?: PropertyJson) {
        super(json);
    }

    override load(json: StringArrayPropertyJson) {
        this.set(json.value);
    }

    override save(): StringArrayPropertyJson {
        return { value: this.get() };
    }
}

export class FloatArrayProperty extends DynamicProperty<number[], FloatArrayPropertyJson> {
    constructor(json?: PropertyJson) {
        super(json);
    }

    override load(json: FloatArrayPropertyJson) {
        this.set(json.value);
    }

    override save(): FloatArrayPropertyJson {
        return { value: this.get() };
    }
}

export class IntArrayProperty extends DynamicProperty<number[], IntArrayPropertyJson> {
    constructor(json?: PropertyJson) {
        super(json);
    }

    override load(json: IntArrayPropertyJson) {
        this.set(json.value);
    }

    override save(): IntArrayPropertyJson {
        return { value: this.get() };
    }

    // Round to Integer value.
    override onSet(value: number[]): number[] {
        return value.map((value: number) => {
            return Math.round(value);
        });
    }
}

export class BooleanArrayProperty extends DynamicProperty<boolean[], BooleanArrayPropertyJson> {
    constructor(json?: PropertyJson) {
        super(json);
    }

    override load(json: BooleanArrayPropertyJson) {
        this.set(json.value);
    }

    override save(): BooleanArrayPropertyJson {
        return { value: this.get() };
    }
}

export class StringProperty extends DynamicProperty<string, StringPropertyJson> {
    constructor(json?: PropertyJson) {
        super(json);
    }

    override load(json: StringPropertyJson) {
        this.set(json.value);
    }

    override save(): StringPropertyJson {
        return { value: this.get() };
    }
}

export class FloatProperty extends DynamicProperty<number, FloatPropertyJson> {
    constructor(json?: PropertyJson) {
        super(json);
    }

    override load(json: FloatPropertyJson) {
        this.set(json.value);
    }

    override save(): FloatPropertyJson {
        return { value: this.get() };
    }
}

export class IntProperty extends DynamicProperty<number, IntPropertyJson> {
    constructor(json?: PropertyJson) {
        super(json);
    }

    override load(json: IntPropertyJson) {
        this.set(json.value);
    }

    override save(): IntPropertyJson {
        return { value: this.get() };
    }

    // Round to integer value.
    override onSet(value: number): number {
        return Math.round(value);
    }
}

export class BooleanProperty extends DynamicProperty<boolean, BooleanPropertyJson> {
    constructor(json?: PropertyJson) {
        super(json);
    }

    override load(json: BooleanPropertyJson) {
        this.set(json.value);
    }

    override save(): BooleanPropertyJson {
        return { value: this.get() };
    }
}

export type StringArrayPropertyJson = { value: string[] };
export type FloatArrayPropertyJson = { value: number[] };
export type IntArrayPropertyJson = { value: number[] };
export type BooleanArrayPropertyJson = { value: boolean[] };
export type StringPropertyJson = { value: string };
export type FloatPropertyJson = { value: number };
export type IntPropertyJson = { value: number };
export type BooleanPropertyJson = { value: boolean };
export type PropertyState = 'set' | 'inherit';
export type PropertyValue = string[] | number[] | boolean[] | string | number | boolean;
export type PropertyJson = { value: any };
