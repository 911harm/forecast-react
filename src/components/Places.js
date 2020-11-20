import React from 'react'
// why ?
//I also know
//CS in JS vanilla or styled-components
const styles = {
    width: "400px",
    textAlign: "center"

}
const ImageStyle = {
    display: "block",
    margin: "auto",
    height: "180px",
    borderRadius: "20px",
    objectFit: "cover",
    width: "260px",
    boxShadow: "-2px 2px 5px 1px black"
}



export default function Places() {
    return (
        <section style={styles} className='section-dummy'>
            <h2>Place to <span style={{fontWeight:"400"}}>Visit</span></h2>
            <img style={ImageStyle} src="https://picsum.photos/200/300?grayscale" alt="places-dommy" />
        </section>
    )
}