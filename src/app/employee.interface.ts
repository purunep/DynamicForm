export interface Employee {
    name: string;
    addresses: Address[];
}

export interface Address {
    street: string;
    postcode: string;
}