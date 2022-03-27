import { useState, useEffect } from "react";
import BookList from "../components/BookList";


export default function Book(props) {
    let [books, setBooks] = useState([]);

    useEffect(() => {
        // inisiasi data array book
        let arrayBooks = [
            {
                isbn: 1,
                title: `Marvel Comic`,
                creator: `Undertaker`,
                publisher: `Lancar Jaya`,
                inCome: 1000,
                rating: 3,
                progress: 40,
                cover: `https://shop.line-scdn.net/themeshop/v1/products/b7/0c/dc/b70cdcf3-cc84-40d9-ad2d-4ac8a7924266/98/WEBSTORE/icon_198x278.png`
            },
            {
                isbn: 2,
                title: `Doraemon`,
                creator: `Rhodey`,
                publisher: `Kencana`,
                inCome: 5000,
                rating: 4,
                progress: 75,
                cover: `https://cdn-japantimes.com/wp-content/uploads/2020/11/np_file_54029.jpeg`
            },
            {
                isbn: 3,
                title: `Spiderman`,
                creator: `Jose Mourinho`,
                publisher: `FF Publisher`,
                inCome: 7000,
                rating: 5,
                progress: 90,
                cover: `https://images.tokopedia.net/img/cache/700/VqbcmM/2021/4/29/1436bfa5-f1a8-49f7-81d7-d31b85569194.jpg`
            },
        ]
        setBooks(arrayBooks)
    }, [])

    return (
        <div className="container-fluid">
            {books.map(item => (
                <BookList
                    key={`key-${item.isbn}`}
                    isbn={item.isbn}
                    title={item.title}
                    creator={item.creator}
                    publisher={item.publisher}
                    rating={item.rating}
                    cover={item.cover}
                    progress={item.progress}
                ></BookList>
            ))}
        </div>
    )



}
