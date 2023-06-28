const getKeys = <TObj extends {}>(obj: TObj) => {
    return Object.keys(obj)
}

const user = {
    name: 'Alex'
    , age: 31
    , occupation: 'Software Engineer'
}

console.log(getKeys(user))