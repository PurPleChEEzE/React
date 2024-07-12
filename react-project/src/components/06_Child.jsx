// import CatImage from "../assets/cat.jpg"
import PropTypes from "prop-types"

export default function Child({ size, cat }) {
    // const catImage = "../assets/cat.jpg";
    console.log(cat);
    const width = 1.33 * size;

    // return (
    //     <img src={CatImage}
    //         alt="고양이"
    //         width={width}
    //         height={size}
    //     ></img >
    // );

    return (
        <img src={cat.imageURL} alt={cat.name} width={width} height={size}></img>
    )
}

Child.propTypes = {
    //size를 number타입, 필수로 입력을 받는다
    size: PropTypes.number.isRequired,

    //shape : 자바스크립트 객체 타입 검사를 할때
    cat: PropTypes.shape({
        imageURL: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })
};