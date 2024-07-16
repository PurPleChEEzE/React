export default function Rendering({ animals }) {
    // const animalsList = animals.map((animal, index) => <li key={index}>{animal}</li>);

    // return (
    //     <ul>
    //         {animalsList}
    //     </ul>
    // );

    const animalsFilter = animals.filter(animal => animal.age % 2 === 1);

    const animalOddList = animalsFilter.map((animal, index) =>
        <li key={index}>
            <p>
                name : {animal.name}, age : {animal.age}
            </p>
        </li>
    )


    return (
        <ul>
            {animalOddList}
        </ul>
    )
}
