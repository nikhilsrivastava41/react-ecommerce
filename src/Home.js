import React from 'react'
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://cdn.shopify.com/s/files/1/0070/7032/files/diy-product-photography.jpg?v=1599161908"/>
            </div>
            <div className="home__row">
                <Product id="1000000" title="UCL Football" image="data:image/jpeg;base64,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"
                price={2000} rating={4}/>
                <Product id="1000001" title="Macook Air 2020" image="data:image/jpeg;base64,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"
                price={122000} rating={5}/>
            </div>
            <div className="home__row">
                <Product id="1000002" title="OnePlus 7T" image="data:image/jpeg;base64,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"
                price={34999} rating={5}/>
                <Product id="1000003" title="OnePlus 8" image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWk76whQaVIsVaHz74-hQmIxGzN6dY-I_7NioTvfwHB4WkZ1BQnDUFQpuRKnbhKnux6uKMBU6_&usqp=CAc"
                price={44999} rating={4}/>
                <Product id="1000004" title="kitchen Weighing Scale" image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXGrBghExFPB8JkKfo1__cWKyr4Poj1QINQOdm_K5-UruBZiTONaW5UDxS-HkT0L-5gSAt7LMX&usqp=CAc"
                price={749} rating={5}/>
            </div>
            <div className="home__row">
                <Product id="1000005" title="IFB Washing Machine" image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHoq01y4lW4RDWVntWdSLmYcL6E63cTCul6OTmM1w4vrVuMrOfPQVdslBBJdYmfkuZ5aG6bVY&usqp=CAc"
                price={19999} rating={4}/>
            </div>
        </div>
    )
}

export default Home
