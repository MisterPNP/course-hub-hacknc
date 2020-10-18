import React from "react"

const DayBox = (props) => {
    const day = props.day
    const classes = props.classes

    return(

        <div class="grid-container">
            <div style={{backgroundColor: "white", display: "inline-block"}}>
                <h2>{day}</h2>
                {classes.map(item => {
                    return(<p>{item}</p>)
                })}
            </div>
        </div>


    )
}
export default DayBox