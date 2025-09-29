export default function Library ({books}) {
    return (
        <div>
            <h2>My national Central Library</h2>
            <p>Books collection: {books.length}</p>
            <p>address: </p>
            <ul>
                {
                    books.map(book => <li>book</li>)
                }
            </ul>
        </div>
    )
}