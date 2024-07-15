// import CatImage from "../assets/cat.jpg"
import PropTypes from "prop-types"

function checkCat(name) {
    if (name === "율무") {
        return <p>고양이의 이름은 율무입니다.</p>
    } else {
        return <p>율무가 아닙니다.</p>
    }
}

export default function Child({ size, cat, name, count }) {
    // const catImage = "../assets/cat.jpg";
    const numbers = [1, 2, 3, 4, 5];

    const doubledNumbers = numbers.map((number) => {
        return number * 2;
    });
    //기존 데이터 : numbers = [1,2,3,4,5]
    //1. numbers 배열의 첫번쨰 값을 꺼냄 -> number : 1
    //2. return number *7 2 에 의해 숫자 2 반환 
    //3. doubleNumbers가 배열 [2]를 반환 받음 -> doubledNumbers = [2]
    //4. numbers배열의 두번쨰 값을 꺼냄 -> number : 2
    //5. return number * 2 에의해 숫자 4 반환
    //6. doubleNumbers가 배열 [4]를 반환 받음 -> doubledNumbers = [2,4]
    //7. ...

    console.log(cat);
    console.log(name);
    console.log(doubledNumbers);

    //filter() 함수
    //배열을 순회하는데, 특정 조건에 따라 요소를 필터링, 새로운 배열 생성 후 반환
    const isNumberThree = numbers.filter((number) => {
        return number === 3;
    });

    console.log(isNumberThree);

    // const result = numbers.filter(number => number === 3).map(number => number * 2);

    const width = 1.33 * size;
    // return (
    //     <img src={CatImage}
    //         alt="고양이"
    //         width={width}
    //         height={size}
    //     ></img >
    // );

    // if (name === "율무") {
    return (
        <>
            {/* {name === "율무"
                ? (<p>고양이의 이름은 율무입니다.</p>)
                : (<p>율무가 아닙니다.</p>)} */}
            {checkCat(name)}
            {count === 0 && <p>율무가 한마리 있습니다.</p>}
            <img
                src={cat.imageURL}
                alt={cat.name}
                width={width}
                height={size}>
            </img>

            <ul>
                {doubledNumbers.map((number, index) => (
                    <li key={index}>
                        {number}
                    </li>
                ))}

                {/* 중괄호 사용시 자바스크립트 코드로 작성 가능 */}
                {doubledNumbers.map((number, index) => {
                    return <li key={index}>{number}</li>;
                })}


            </ul >
        </>
    )

}

Child.propTypes = {
    //size를 number타입, 필수로 입력을 받는다
    size: PropTypes.number.isRequired,

    //shape : 자바스크립트 객체 타입 검사를 할때
    cat: PropTypes.shape({
        imageURL: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }),

    // name: PropTypes.string.isRequired,
    // count: PropTypes.number.isRequired,
};