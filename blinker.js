function getRandomColorCode() {
    return Math.floor(Math.random() * 0xFFFFFF).toString(16)
}

const app = new Vue({
    el: '#app',
    data: {
        hidden: false,
        currentIndex: 0,
        currentColor: 'white',
        items: [
            { duration: 100, color: `#${getRandomColorCode()}` },
            { duration: 100, color: `#${getRandomColorCode()}` },
        ],
    },
    methods: {
        getIndexTitle(index) {
            if ([11, 12, 13].includes(index)) return `${index}th!`;
            const last = index % 10;
            if (last == 1) return `${index}st!`;
            if (last == 2) return `${index}nd!`;
            if (last == 3) return `${index}rd!`;
            return `${index}th!`;
        },
        blink() {
            const currentItem = this.items[this.currentIndex];
            this.currentColor = currentItem.color;
            setTimeout(() => {
                this.currentIndex = (this.currentIndex + 1) % this.items.length;
                this.blink();
            }, currentItem.duration);
        },
        onClick(mouseEvent) {
            const clickedElement = mouseEvent.path[0];
            if (!clickedElement.classList.contains('not-toggle-hide')) {
                this.hidden = !this.hidden;
            }
        },
        onRemoveClick(index) {
            if (this.items.length <= 1) {
                return;
            }
            this.items.splice(index, 1);
        },
        onAddClick() {
            this.items.push({ duration: 100, color: `#${getRandomColorCode()}` });
        },
    },
    mounted() {
        this.blink();
    },
})
