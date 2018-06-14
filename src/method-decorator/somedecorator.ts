export function somedecorator(value: boolean) {
    console.log('value', value);
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('target', target);
        console.log('propertyKey', propertyKey);
        console.log('descriptor', descriptor);
        descriptor.enumerable = value;
    };
}