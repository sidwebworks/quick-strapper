class ExampleService {
    async sayHello(name) {
        return `Hello there ${name}!`
    }
}

module.exports = new ExampleService()
