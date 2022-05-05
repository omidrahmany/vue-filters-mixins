export const fruitMixin = {
    data: () => {
        return {
            fruits: ["Apple", "Banana", "Mango", "Melon"],
            filteredText: ""
        }
    },
    computed: {
        filteredArray() {
            return this.fruits
                .filter(fruit => fruit.match(this.filteredText));
        }
    }
}
