const Character = {
    name: 'Snortleblat',
    class: 'Swamp Beast Diploma',
    level: 8,
    health: 100,

    attacked: function() {
        if (this.health <= 0) { return; }
        this.health -= 20;
        healthEl.textContent = 'Health: ' + this.health;
        if (this.health <= 0) {
            alert('Character Died');
        } else if (this.health <= 20) {
            alert('Character is almost dead');
        }
    },

    levelUp: function() {
        if (this.health <= 0) { return; }
        this.level += 1;
        levelEl.textContent = 'Level: ' + this.level;
    }
};

attackedEl.addEventListener("click", () => {
    Character.attacked();
});

levelUpEl.addEventListener("click", () => {
    Character.levelUp();
});