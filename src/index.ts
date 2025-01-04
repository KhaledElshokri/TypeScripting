// optional Chaining 

type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined{
    return id === 0? null: {birthday:new Date()};
}

let customer = getCustomer(1);
// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// if its an array
// customers?.[0] to check if that element in the array is null

// Optional call
// let log: any = null;
// log?.('a'); checks if the log binding is refrencing a non null function