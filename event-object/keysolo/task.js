class Game {
    constructor(container, symbols) {
        this.container = container;
        this.wordElement = container.querySelector('.word');
        this.winsElement = container.querySelector('.status__wins');
        this.lossElement = container.querySelector('.status__loss');

        this.wins = 0;
        this.loss = 0;
        this.isPlaying = true;

        this.registerEvents();
        this.setNewWord();
        this.updateStatus();
    }

    registerEvents() {
        document.addEventListener('keyup', (event) => {
            if (!this.isPlaying || !this.currentSymbol) {
                return;
            }

            if (event.key.length > 1 || event.ctrlKey || event.altKey || event.metaKey) {
                return;
            }

            const expectedSymbol = this.currentSymbol.textContent.toLowerCase();
            const enteredSymbol = event.key.toLowerCase();

            if (expectedSymbol === enteredSymbol) {
                this.success();
            } else {
                this.fail();
            }
        });
    }

    success() {
        this.currentSymbol.classList.remove("symbol_current");
        this.currentSymbol.classList.add('symbol_correct');
        this.currentSymbol = this.currentSymbol.nextElementSibling;

        if (this.currentSymbol !== null) {
            this.currentSymbol.classList.add('symbol_current');
            return;
        }

        if (++this.wins === 10) {
            alert('Победа!');
            this.isPlaying = false;
            this.reset();
            return;
        }
        this.setNewWord();
    }

    fail() {
        if (++this.loss === 3) {
            alert('Вы проиграли!');
            this.isPlaying = false;
            this.reset();
            return;
        }
        this.setNewWord();
    }

    reset() {
        this.wins = 0;
        this.loss = 0;
        this.isPlaying = true;
        this.updateStatus();
        this.setNewWord();
    }

    updateStatus() {
        this.winsElement.textContent = this.wins;
        this.lossElement.textContent = this.loss;
    }

    setNewWord() {
        const word = this.getWord();
        this.renderWord(word);
    }

    getWord() {
        const words = [
            'bob', 'awesome', 'netology', 'hello', 'kitty',
            'rock', 'youtube', 'popcorn', 'cinema', 'love', 'javascript'
        ];
        return words[Math.floor(Math.random() * words.length)];
    }

    renderWord(word) {
        const html = [...word]
            .map((s, i) => `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`)
            .join('');
        this.wordElement.innerHTML = html;
        this.currentSymbol = this.wordElement.querySelector('.symbol_current');
    }
}

new Game(document.getElementById('game'));
