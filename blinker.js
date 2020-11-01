const app = new Vue({
    el: '#app',
    data: {
        currentIndex: 0,
        currentColor: 'white',
        items: [
            { duration: 3000, color: '#000000' },
            { duration: 200, color: '#FFFFFF' },
        ],
    },
    methods: {
        getIndexTitle(index) {
            if ([11, 12, 13].includes(index)) return `${index}th!`;
            const last = index % 10;
            if (last == 1) return `${index}st!`;
            if (last == 2) return `${index}nd!`;
            if (last == 3) return `${index}rd!`;
            return `${index}th!`
        },
        blink() {
            const currentItem = this.items[this.currentIndex];
            this.currentColor = currentItem.color;
            setTimeout(() => {
                this.currentIndex = (this.currentIndex + 1) % this.items.length;
                this.blink();
            }, currentItem.duration);
        },
    },
    mounted() {
        this.blink();
    },
})
