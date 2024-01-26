import React, { useEffect, useState } from "react";

const Items = ()=>{

    const imageURL = [
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tasteofhome.com%2Fwp-content%2Fuploads%2F2021%2F01%2Ftasty-butter-chicken-curry-dish-from-indian-cuisine-1277362334.jpg&f=1&nofb=1&ipt=7a185bf3918e5f78b94cd0232d2c86f4543de6a1f4c3d001d49886c5b0d2affc&ipo=images",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp3495556.jpg&f=1&nofb=1&ipt=630df7cf6bd9083b9e013c5d370a5911c8e5b0ab616f936dcf38fcd0a7204c62&ipo=images",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.archanaskitchen.com%2Fimages%2Farchanaskitchen%2F0-Affiliate-Articles%2FRESTAURANT_STYLE_SOUTH_INDIAN_THALI_original.jpg&f=1&nofb=1&ipt=92a9cf31ad775fa8d6ad9e5bd521ee22f7f632b173270e100b6f93da048cee2a&ipo=images",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.travelkhana.com%2Ffood%2Fwp-content%2Fuploads%2Fsites%2F5%2F2017%2F04%2Fsouth-indian.jpg&f=1&nofb=1&ipt=a832e0f94edab90eae58ef9a3cf03d748fc1d134f40f52f5c4d2f3d034131608&ipo=images",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.untravel.com%2Fwp-content%2Fuploads%2F2017%2F11%2FKarimeen-Pollichathu.jpg&f=1&nofb=1&ipt=614399eb9209b05d4a8b6670a172a9ba655c7161bf2f748f6137e362dee39def&ipo=images"
    ]
    
    const [currentImg, setCurrentImg] = useState(0);
    
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentImg( cImg => (cImg+1) % imageURL.length)
        },3000);

        return () =>{
            clearInterval(interval);
        };
        
    },[imageURL.length])

    return(
        <div className="item">
            <div className="slider">
                {imageURL.map( (cImg,index)=> 
                    <div className="imgDiv" key={cImg} style={{ transform: `translateX(-${currentImg * 100}%)` }}>
                        <img src={imageURL[index]} alt="" />
                    </div>
                )}
            </div>
            <div className="details">
                <div className="nameAndRating">
                    <div className="name">
                        <h3>Dude's cafe</h3>
                    </div>
                    <div className="rating">
                        <h3>2.5</h3>
                    </div>
                </div>
                <div className="locationAndDTime">
                    <div className="location">
                        <h5>Chennai</h5>
                    </div>
                    <div className="DTime">
                        <h6>30min</h6>
                    </div>
                </div>
                <div className="type">
                    <h6>desserts, Indian, Italian, Chinese</h6>
                </div>
                <div className="activeTime">
                    <h6>10AM - 12PM</h6>
                </div>
            </div>
        </div> 
    )
}

export default Items;