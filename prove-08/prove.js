

const Character = {
name : 'Snortleblat',
class : 'Swamp Beast Diploma',
level: 8,
health: 100,
};


const levelEL = document.querySelector('#characterLevel')
const healthEl = document.querySelector('#characterHealth')
const levelUpEL = document.querySelector('#characterLevelUp')
const attackedEl = document.querySelector('#characterAttacked')


attackedEl.addEventListener("click", () => {
    if (Character.health <= 0) { return;  }
    Character.health -= 20;
    healthEl.textContent = 'Health: ' + Character.health;
    if (Character.health <= 0) {
    alert('Character Died');
} else if (Character.health <= 20) {
    alert('Character is almost dead');
}
   
});


levelUpEL.addEventListener("click",()=>{
    if (Character.health <= 0) { return;  }
Character.level += 1
levelEL.textContent = 'Level: ' + Character.level;


});

