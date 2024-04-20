import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function LibraryHome() {

    const [books, setBooks] = useState(null);
    const prompt = (id) => {
        console.log(id);
        let memberId = window.prompt("Enter your member ID:");
        if (!memberId) {
            window.alert("Enter the ID");
            return;
        }
        IssueBook(memberId, id);

    }

    const IssueBook = (memberId, bookId) => {
        axios.post("circulation/issue", {
            "memberID": memberId,
            "bookId": bookId
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }

    const loadData = () => {
        axios.get("/book/all").then((response) => {
            console.log(response);
            setBooks(response.data);
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
                        <th>Book ID</th>
                        <th>Book Name</th>
                        <th>Books Count</th>
                        <th>Issue Book</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        books && books.map((data, index) =>
                        (
                            <tr key={index}>
                                <td>{data.BookID}</td>
                                <td>{data.BookName}</td>
                                <td>{data.NumberOfCopies}</td>
                                <td><button className="btn btn-primary" onClick={() => prompt(data._id)}>Checkout</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
