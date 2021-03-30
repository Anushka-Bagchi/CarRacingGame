class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("CarRacingGame");
        title.position(120,10);
        var input = createInput('Name');
        var button = createButton('play');
        var greeting = createElement('h3');
        input.position(120,150);
        button.position(220,250);
    
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount = playerCount+1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello"+name);
            greeting.position(120,150);
        })

    }
}