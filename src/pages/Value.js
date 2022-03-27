import { useState, useEffect } from "react";
import ValueList from "../components/ValueList";

export default function Value(props) {
    let [values, setValues] = useState([]);

    useEffect(() => {
        let arrayValues = [
            {
                id: 1,
                name: `Ardhian Calwa Nugraha`,
                math: 65,
                english: 45,
                chemistry: 15,
            },
            {
                id: 2,
                name: `Muhammad Rashford`,
                math: 98,
                english: 85,
                chemistry: 100,
            },
            {
                id: 3,
                name: `Ridwan Lewandowski`,
                math: 42,
                english: 76,
                chemistry: 35,
            },
            {
                id: 4,
                name: `Haji Maguire`,
                math: 100,
                english: 96,
                chemistry: 100,
            },
            {
                id: 5,
                name: `Jamal Musiala`,
                math: 65,
                english: 78,
                chemistry: 98,
            },
        ]
        setValues(arrayValues);
    }, [])

    return (
        <div className="container mt-3 p-2">
            <div className="table-responsive">
                <div className="card-header bg-dark mb-3">
                    <h3 className="text-center text-light">Value Student</h3>
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Math</th>
                            <th scope="col">English</th>
                            <th scope="col">Chemistry</th>
                            <th scope="col">Averege</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {values.map(item => (
                            <ValueList
                                key={`key-${item.id}`}
                                id={item.id}
                                name={item.name}
                                math={item.math}
                                english={item.english}
                                chemistry={item.chemistry}
                            ></ValueList>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}