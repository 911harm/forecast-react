import React from 'react'

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
    width: "260px"
}



export default function Places() {
    return (
        <section style={styles} className='section-dummy'>
            <h2>Place to visit</h2>
            <img style={ImageStyle} src="https://picsum.photos/200/300?grayscale" alt="places-dommy" />
        </section>
    )
}