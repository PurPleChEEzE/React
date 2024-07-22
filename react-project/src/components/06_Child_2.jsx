import PropTypes from "prop-types";

function checkBbobbi(name) {
  if (name === "뽀삐") {
    return <p>강아지의 이름은 뽀삐 입니다.</p>;
  } else {
    return <p>뽀삐가 아닙니다</p>;
  }
}

export default function Child({ size, dog, name }) {
  let msg;
  if (name === "뽀삐") {
    msg = <p>강아지의 이름은 뽀삐 입니다.</p>;
  } else {
    msg = <p>뽀삐가 아닙니다</p>;
  }
  // 조건부 렌더링(if문)
  // JSP의 if, choose
  // if (name === "뽀삐" && size == 500) {
  return (
    <>
      {msg}
      {checkBbobbi(name)}
      {/* {name === "뽀삐" ? (
        <p>강아지의 이름은 뽀삐 입니다.</p>
      ) : (
        <p>뽀삐가 아닙니다</p>
      )} */}
      <img src={dog.imageURL} alt={dog.name} width={size} height={size}></img>
    </>
  );
  // }
}

Child.propTypes = {
  // size를 number 타입, 필수로 입력받겠다.
  size: PropTypes.number.isRequired,

  // shape : 자바스크립트 객체 타입 검사 할 때
  dog: PropTypes.shape({
    // imageURL은 string 타입, 필수로 입력 받겠다.
    imageURL: PropTypes.string.isRequired,
    // name은 string 타입, 필수로 입력 받겠다.
    name: PropTypes.string.isRequired,
  }),

  name: PropTypes.string.isRequired,
};

//import { ChildPropTypes } from "../propTypes/ChildPropTypes";

// const childComponent = ({ size, dog, name }) => {
//   // 조건부 렌더링(if문)
//   if (name === "뽀삐") {
//     return (
//       <>
//         <p>강아지의 이름은 뽀삐 입니다.</p>
//         <img src={dog.imageURL} alt={dog.name} width={size} height={size}></img>
//       </>
//     );
//   }
// };

// childComponent.PropTypes = ChildPropTypes;
// export default childComponent;
