import CatImage from "../assets/cat.jpg"
import PropTypes from "prop-types"
export default function Child({ size }) {
    // const catImage = "../assets/cat.jpg";
    const width = 1.33 * size;

    return (
        <img src={CatImage}
            alt="고양이"
            width={width}
            height={size}
        ></img >
    );
}

Child.propTypes = {
    size: PropTypes.number.isRequired,
};