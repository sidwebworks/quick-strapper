class ExampleService {
    async sayHello(name: string) {
        return `Hello there ${name}!`
    }
}

export default new ExampleService()
