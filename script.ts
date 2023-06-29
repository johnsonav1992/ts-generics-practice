///// TYPESCRIPT CODING CHALLENGES /////

/* 1. Implement the built-in Pick<T, K> generic without using it.
    Constructs a type by picking the set of properties K from T 
*/

type MyPick<T, K extends keyof T> = { [SelectedKeys in K]: T[SelectedKeys] }

interface Person { 
    firstName: string
    , lastName: string 
}

const person: Person = {
    firstName: 'Alex'
    , lastName: 'Johnson'
}

type FirstNameOnly = MyPick<Person, 'firstName'>