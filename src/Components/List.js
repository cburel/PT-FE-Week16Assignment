let items = [
    { id: 1, name: 'item1' },
    { id: 2, name: 'item2' },
    { id: 3, name: 'item3' }
];

export default function List({ description }) {
    const listItems = items.map(item =>
        <li key={item.id}>{item.name}</li>
    );
    return (
        <>
            <p>{description}</p>
            <ul>{listItems}</ul>
        </>
    )
}