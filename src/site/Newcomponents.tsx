import React from 'react'

type NewComponentType = {
    students: StudentType[]
}
type StudentType = {
    id: number,
    name: string,
    age: number
}
export const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            {props.students.map((objectFromStArr: StudentType, index) => {
                debugger
                return (
                    <li key={objectFromStArr.id}>
                        <span>{objectFromStArr.name}</span>
                        <span> - age: {objectFromStArr.age}</span>
                    </li>
                )
            })}
                </ul>
                )
            }