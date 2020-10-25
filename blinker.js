class Blinker {
    constructor() {
        this.durations = [100, 100];
        this.colors = ['black', 'white'];
        this.bodyElement = document.querySelector("body");
    }

    runBlink() {
        if (!Number(this.durations.length) || Number(this.durations.length) <= 0) {
            console.error('Invalid durations');
            return;
        }
        this.blinkTimeoutLoop(0);
    }

    setBgColor(index) {
        const curColor = this.colors[index % this.colors.length];
        this.bodyElement.style.background = curColor;
    }

    blinkTimeoutLoop(index) {
        this.setBgColor(index);
        const duration = this.durations[index];
        setTimeout(() => {
            const nextIndex = (index + 1) % this.durations.length;
            this.blinkTimeoutLoop(nextIndex);
        }, duration);
    }
}

const blinker = new Blinker();

function updateDuration() {
    const durations = [
        Number(document.querySelector("#duration-input-01").value) || 0,
        Number(document.querySelector("#duration-input-02").value) || 0,
    ];
    blinker.durations = durations;
}

updateDuration()
blinker.runBlink();
