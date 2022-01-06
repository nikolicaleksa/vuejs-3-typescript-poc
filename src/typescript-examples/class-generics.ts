// When using generics we can extend some other types or even create an union of them
// In our example we are defining a data storage which can work with strings or numbers
class DataStorage <T extends string | number> {
    private data: T[] = []

    addItem (item: T) {
        this.data.push(item)
    }

    removeItem (item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems (): T[] {
        return [...this.data]
    }
}

const TextStorage = new DataStorage<string>()
TextStorage.addItem('Aleksa')
TextStorage.addItem('Nikolic')
TextStorage.removeItem('Aleksa')
console.log(TextStorage.getItems())

const NumberStorage = new DataStorage<number>()
NumberStorage.addItem(5)
NumberStorage.addItem(10)
console.log(NumberStorage.getItems())
