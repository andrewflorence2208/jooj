const char = document.getElementById("char");
const enemy = document.getElementById("enemy");

function enemys_life(dmg){
    var enemys_life_value = parseInt(document.getElementById("enemys_life").getAttribute("value"));

    if(((enemys_life_value)-dmg) <= 0){
        document.getElementById("enemys_life").setAttribute("value", enemys_life_value);
        
        window.alert("die");
        
        dying();
    }else{
        
        enemys_life_value -= parseInt(dmg);

        document.getElementById("enemys_life").setAttribute("value", enemys_life_value);

    }

    document.getElementById("enemys_life").innerHTML = enemys_life_value;
};

function atk(){

    //ANIMETION BY CSS CLASS:
        char.classList.add("atk");

        setTimeout( () => {
            char.classList.remove("atk")
        }, 50);

        console.log("atk")

    enemys_life(10)
};

function dying(){

    //ANIMETION BY CSS CLASS:
        enemy.classList.add("dying");

        console.log("dying")
};

// Project ENEMY's I.A.:


