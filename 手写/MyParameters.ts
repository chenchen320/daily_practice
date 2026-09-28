type MyParameters<T> = T extends (...args: infer R) => any ? R : never

function foo(name: string, id: number, age: number) {}

type Fooparams = MyParameters<typeof foo>
