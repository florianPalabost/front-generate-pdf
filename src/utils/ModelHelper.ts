export class ModelHelper {
    private constructor() {
        // This constructor is intentionally left empty for singleton implementation.
    }

    /**
     * Converts an object from an interface to a model instance.
     *
     * @param {Interface} fromObject - The object to convert.
     * @param {new (...args: any[]) => TModel} Model - The model class.
     * @param {...ConstructorParameters<typeof Model>} constructorParams - The parameters for constructing the model instance.
     * @return {TModel} The converted model instance.
     */
    static fromInterfaceToModel<Interface, TModel extends object & Interface>(
        fromObject: Interface,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Model: new (...args: any[]) => TModel,
        ...constructorParams: ConstructorParameters<typeof Model>
    ): TModel {
        const instance = new Model(...constructorParams);
        Object.assign(instance, fromObject);

        return instance;
    }

    /**
     * Converts a model object to an interface object.
     *
     * @param {TModel} model - The model object to convert.
     * @return {Interface} - The interface object.
     */
    static toInterfaceFromModel<Interface, TModel extends Interface>(model: TModel): Interface {
        return { ...model };
    }

    // TODO : fromZod & toZod : use the previous functions
}
