import React from "react";
import Card from "./Card";
import Img from "../../img/Img.500x325.png"

// Uso Img para que quede igual al ejercicio, pero podría usar por props cualquier imagen importada, como los números siguientes
import numero1 from "../../img/numero1.jpg"
import numero2 from "../../img/numero2.jpg"
import numero3 from "../../img/numero3.jpg"
import numero4 from "../../img/numero4.jpg"

const CardGroup = () => {
    return (
        <div className="container-fluid">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                <Card
                    image={Img}
                    title='Card title 1'
                    text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus.'
                />
                <Card
                    image={Img}
                    title='Card title 2'
                    text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.'
                />
                <Card
                    image={Img}
                    title='Card title 3'
                    text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus.'
                />
                <Card
                    image={Img}
                    title='Card title 4'
                    text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.'
                />
            </div>
        </div>
    );
}
export default CardGroup