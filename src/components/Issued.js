import React, { useState, useEffect } from 'react'
import axios from "axios";

export default function Issued() {
    const [issue, setIssued] = useState(null);




    const loadData = () => {
        axios.get("/circulation/all").then((response) => {
            console.log(response);
            setIssued(response.data);
        }).catch((error) => {
            console.log(error)
        });
    }

    useEffect(() => {
        loadData();
    }, []);
    return (
        <div>
            <table class="table">
                <thead class="table-light">
                    <tr>
                        <th>Issuer Name</th>
                        <th>Issuer </th>
                        <th>Return Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        issue && issue.map((data, index) =>
                        (
                            <tr key={index}>
                                <td>{data.BookID.BookName}</td>
                                <td>{data.MemberID.MemberName}</td>
                                <td>{data.ReturnDate}</td>
                                <td><button className="btn btn-secondary" onClick={() => prompt(data._id)}>Return</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
