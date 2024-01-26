import React from "react";

const SuggestionItem = ()=>{

    const imgURL = [
        "https://thehealthypandas.com/wp-content/uploads/2018/01/10-Most-Common-harmful-effects-of-junk-food-Everyone-should-know.jpg",
        "http://trustworthyfitness.com/wp-content/uploads/2015/07/Dollarphotoclub_85378166.jpg",
        "https://zululandobserver.co.za/wp-content/uploads/sites/56/2015/07/Junk-food.jpg",
        "https://themodemag.com/wp-content/uploads/2020/02/english-breakfast-fried-eggs-sausages-bacon.jpg",
        "https://stylesatlife.com/wp-content/uploads/2018/03/Best-Continental-Food-Recipes.jpg",
        "https://thehealthypandas.com/wp-content/uploads/2018/01/10-Most-Common-harmful-effects-of-junk-food-Everyone-should-know.jpg",
        "http://trustworthyfitness.com/wp-content/uploads/2015/07/Dollarphotoclub_85378166.jpg",
        "https://zululandobserver.co.za/wp-content/uploads/sites/56/2015/07/Junk-food.jpg",
        "https://themodemag.com/wp-content/uploads/2020/02/english-breakfast-fried-eggs-sausages-bacon.jpg",
        "https://stylesatlife.com/wp-content/uploads/2018/03/Best-Continental-Food-Recipes.jpg",
        "https://thehealthypandas.com/wp-content/uploads/2018/01/10-Most-Common-harmful-effects-of-junk-food-Everyone-should-know.jpg",
        "http://trustworthyfitness.com/wp-content/uploads/2015/07/Dollarphotoclub_85378166.jpg",
        "https://zululandobserver.co.za/wp-content/uploads/sites/56/2015/07/Junk-food.jpg",
        "https://themodemag.com/wp-content/uploads/2020/02/english-breakfast-fried-eggs-sausages-bacon.jpg",
        "https://stylesatlife.com/wp-content/uploads/2018/03/Best-Continental-Food-Recipes.jpg",
    ]
    
    return(
        <>
            {imgURL.map((image,index) =>
                <section key={image}>
                    <img className="sImg" src={imgURL[index]} alt="" />
                    <h4>Ramen</h4>
                </section>
            )}
        </>
    )
}

export default SuggestionItem;