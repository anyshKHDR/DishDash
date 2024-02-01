import React, {useEffect} from "react";

const DishesAndCategory = ()=>{

    const fruits = [
        "https://wallpapercave.com/wp/a3qBPph.jpg",
        "https://vistapointe.net/images/fruit-10.jpg",
        "http://www.hdwallpaper.nu/wp-content/uploads/2016/12/fruit-7.jpg",
        "https://wallpapercave.com/wp/1OXITrf.jpg",
        "https://wallpapercave.com/wp/wp3145276.jpg",
        "https://www.hdwallpaper.nu/wp-content/uploads/2016/12/fruit-14.jpg"
    ]

    const veggies = [
        "https://www.wallpaperflare.com/static/965/895/782/vegetables-herbs-lots-of-wallpaper.jpg",
        "https://images6.alphacoders.com/367/367271.jpg",
        "http://content.kens5.com/photo/2017/10/22/vegetables_1508727313637_11456014_ver1.0.jpg",
        "https://wallpapercave.com/wp/wp1881540.jpg",
        "https://images.pexels.com/photos/142520/pexels-photo-142520.jpeg?cs=srgb&dl=food-healthy-vegetables-142520.jpg&fm=jpg",
        "https://wallpapercave.com/wp/wp3104916.jpg",
        "https://images6.alphacoders.com/744/thumb-1920-744645.jpg",
        "https://images.alphacoders.com/293/293831.jpg"
    ]

    return(
            // nav
    <div className="theContainer">
    <div className='diseshAndCat'>
      <div className="navigation" id='navId'>
        <a href="#veggies">Veggies</a>
        <a href="#fruits">Fruits</a>
    </div>

      {/* *****CONTENT****** */}
      <div className="dishes" data-bs-spy="scroll" data-bs-target="#navId" data-bs-offset="200" >
        <div id="veggies">
                                            {veggies.map(item =>
                        <img src={item} alt="" />
                    )}

        </div>
        <div id="fruits">
                      {fruits.map(item =>
                <img src={item} alt="" />
            )}
        </div>
      </div>
    </div>
  </div>
    )
}

export default DishesAndCategory;