import Rendering from "../components/06_Rendering";

export default function RenderPage() {
  // const animals = ["dog", "cat", "pig"];
  const animals = [
    { no: 0, name: "dog", age: "3" },
    { no: 1, name: "cat", age: "5" },
    { no: 2, name: "pig", age: "4" },
  ];

  return <Rendering animals={animals}></Rendering>;
}
