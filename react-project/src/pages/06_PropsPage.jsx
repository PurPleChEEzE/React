import Child from "../components/06_Child";

export default function PropsPage() {
  // const numbers = Array.from({ length: 10000000 }, (_, i) => i);

  // console.time("A : ");
  // const A = numbers.map((number) => number * 2);
  // console.timeEnd("A : ");

  // console.time("B : ");
  // const B = numbers.filter((number) => number % 2 === 0);
  // console.timeEnd("B : ");

  // int size = 500;
  // 객체명.child(size);
  return (
    <Child
      size={500}
      dog={{ name: "강아지", imageURL: "/src/assets/강아지.jpg" }}
      name="뽀삐"
      count={0}
    />
  );
}
