import Child from "../components/06_Child";
import CatImage from "../assets/cat.jpg"

export default function PropsPage() {
    // return (
    //     <Child size={500} />
    // );
    return (
        <Child size={500} cat={{ name: "고양이", imageURL: CatImage }} />
    );
}