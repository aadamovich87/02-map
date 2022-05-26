import React from "react";

type CarType = {
    Avtocars: topCarsType []
}

type topCarsType = {
    manufacturer: string,
    model: string
}

export const BestCars = (props: CarType) => {
    return (
        <table>
            {props.Avtocars.map((objectFromtopCarsTypeArray: topCarsType, index: number) => {
                debugger
                return (
                    <>
                        <tr>
                            <th>{index+1}  {objectFromtopCarsTypeArray.manufacturer}</th>
                            <th> - model: {objectFromtopCarsTypeArray.model}</th>
                        </tr>
                    </>
                )
            })}
        </table>

    )
}