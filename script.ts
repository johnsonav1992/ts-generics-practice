///// TYPESCRIPT CODING CHALLENGES /////

////////////////////////////////////////////////////////////////////
/* 1. Implement the built-in Pick<T, K> generic without using it.
    Constructs a type by picking the set of properties K from T 
*///////////////////////////////////////////////////////////////////

type MyPick<T, K extends keyof T> = { [SelectedKeys in K]: T[SelectedKeys] }

// Example usage
interface Person { 
    firstName: string
    , lastName: string 
}

const person: Person = {
    firstName: 'Alex'
    , lastName: 'Johnson'
}

type FirstNameOnly = MyPick<Person, 'firstName'>


////////////////////////////////////////////////////////////////////
/* 2. Implement the built-in Readonly<T> generic without using it.
    Constructs a type with all properties of T set to readonly, meaning 
    the properties of the constructed type cannot be reassigned.
*///////////////////////////////////////////////////////////////////

type MyReadonly<Obj> = { readonly [Property in keyof Obj]: Obj[Property] }

// Example usage

const person2: MyReadonly<Person> = {
    firstName: 'Eliot'
    , lastName: 'Johnson'
}

// person2.firstName = 'John'  ------ (Err: Cannot assign to firstName because it is a read-only property.)



////////////////////////////////////////////////////////////////////
/* 3. Implement a generic First<T> that takes an Array T and 
    returns its first element's type.
*///////////////////////////////////////////////////////////////////

type First<A extends any[]> = A extends [] ? never : A[0]

type Arr = [string, number, boolean]

type IndexZero = First<Arr>     //type IndexZero = string