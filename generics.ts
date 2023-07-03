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


////////////////////////////////////////////////////////////////////
/* 6. Implement the util type If<C, T, F> which accepts condition C, 
    a truthy value T, and a falsy value F. C is expected to be either 
    true or false while T and F can be any type.
*///////////////////////////////////////////////////////////////////

type If<C extends boolean, T, F> = C extends true ? T : F

// Example usage

type True = If<true, 1, ''>
type False = If<false, 1, ''>

const someVariable = 42
type CheckIfVariableIsTruthy = If<true, typeof someVariable, false>

// TEST //
// type True = 1
// type False = ""
// type Check = 42

////////////////////////////////////////////////////////////////////
/* 7. Sometimes, you may want to look up a type in a union by its attributes.
    In this challenge, we would like to get the corresponding type by searching for the common type 
    field in the union Cat | Dog. In other words, we will expect to get Dog for LookUp<Dog | Cat, 'dog'> 
    and Cat for LookUp<Dog | Cat, 'cat'> in the following example.
*///////////////////////////////////////////////////////////////////

interface Individual {
    type: 'person'
    name: string
    age: number
    height: number
}

interface Animal {
    type: 'animal'
    name: string
    age: number
    species: string 
}

type Lookup<TUnion, Val extends string> = TUnion extends {type: Val} ? TUnion : never

type DiscoveredType = Lookup<Individual | Animal, 'person'>
