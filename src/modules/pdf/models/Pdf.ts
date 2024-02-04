export interface IPdf {
    // TODO fill the different properties

    id: string;
    name: string;
    description: string;
    createdAt: Date;
}

export class Pdf implements IPdf {
    // TODO fill the different properties

    id: string;
    name: string;
    description: string;
    createdAt: Date;

    constructor(id: string, name: string, description: string, createdAt: Date) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.createdAt = createdAt;
    }
}

export class PdfForm implements IPdf {
    id: string;
    name: string;
    description: string;
    createdAt: Date;

    constructor(id = '', name = '', description = '', createdAt: Date = new Date()) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.createdAt = createdAt;
    }
}
