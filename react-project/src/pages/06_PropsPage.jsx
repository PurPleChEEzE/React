import Child from "../components/06_Child";
import CatImage from "../assets/cat.jpg"
import BackButton from "../components/common/BackButton";

export default function PropsPage() {
    // const numbers = Array.from({ length: 1000000 }, (_, i) => i);
    // console.log(numbers);

    // console.time('A');
    // const A = numbers.map((number) => number * 2);
    // console.timeEnd('A');

    // console.time('B');
    // const B = numbers.filter((number) => number % 2 === 0);
    // console.timeEnd('B');
    // return (
    //     <Child size={500} />
    // );
    return (
        <>
            <Child size={500}
                cat={{ name: "고양이", imageURL: CatImage }}
                name="율무"
                count={0} />
            <BackButton />
        </>
    );

}