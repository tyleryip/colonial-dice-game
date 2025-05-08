export class ResourceType {
    static readonly ORE = new ResourceType(0, 'Ore');
    static readonly WHEAT = new ResourceType(1, 'Wheat');
    static readonly WOOL = new ResourceType(2, 'Wool');
    static readonly WOOD = new ResourceType(3, 'Wood');
    static readonly BRICK = new ResourceType(4, 'Brick');
    static readonly GOLD = new ResourceType(5, 'Gold');

    // private to disallow creating other instances of this type
    private constructor(public readonly id: number, public readonly name: string) { }

    toString() {
        return this.name;
    }
}

export const getResourceType = (resourceId: number): ResourceType => {
    switch (resourceId) {
        case 0: return ResourceType.ORE
        case 1: return ResourceType.WHEAT
        case 2: return ResourceType.WOOL
        case 3: return ResourceType.WOOD
        case 4: return ResourceType.BRICK
        case 5: return ResourceType.GOLD
        default: throw new Error("Unknown ResourceType")
    }
}