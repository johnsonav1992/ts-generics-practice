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

// TEST //
// type FirstNameOnly = {
//     firstName: string;
// }



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

// TEST //
// person2.firstName = 'Bill'  ------ (Err: Cannot assign to firstName because it is a read-only property.)



////////////////////////////////////////////////////////////////////
/* 3. Implement a generic First<T> that takes an Array T and 
    returns its first element's type.
*///////////////////////////////////////////////////////////////////

type First<A extends any[]> = A extends [] ? never : A[0]

// Example usage

type Arr = [string, number, boolean]

type IndexZero = First<Arr>

// TEST //
// type IndexZero = string



////////////////////////////////////////////////////////////////////
/* 4. For given a tuple, create a generic Length to return the 
    length of the tuple
*///////////////////////////////////////////////////////////////////

type TupleLength<Tuple extends readonly any[]> = Tuple['length']

// Example usage 

type Names = ['Alex', 'Eliot']

type LengthOfNames = TupleLength<Names>

// TEST //
// type LengthOfNames = 2



////////////////////////////////////////////////////////////////////
/* 5. Implement the generic version of Array.push
*///////////////////////////////////////////////////////////////////

type Push<Array extends unknown[], Item> = [...Array, Item]

// Example usage

type TestArray = [1, 2]

type AddedOn = Push<TestArray, 'Hello'>

// TEST //
// type AddedOn = [1, 2, "Hello"]