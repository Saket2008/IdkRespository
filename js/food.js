class Food
{
    constructor()
    {
        foodStock = database.ref('DogFood');
        foodStock.on("value", getStock);
    }

    preload()
    {
        milky = loadImage("images/Milk.png");
    }

    getStock(data)
    {
        foodS = data.val();
    }

    //update()
    //{
        
    //}

    deductFood(x)
    {
        if(x > 0)
        {
            x = x - 1;
        }

        database.ref('/').update({
            DogFood: x
        })
    }

    diplay()
    {

    }
}