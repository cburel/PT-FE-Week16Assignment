let items = [
    { id: 1, class: "bg-pink", name: 'item1' },
    { id: 2, class: "bg-white", name: 'item2' },
    { id: 3, class: "bg-lightblue", name: 'item3' }
];

export default function List() {
    const listItems = items.map(item =>
        <li key={item.id} className={item.class}>{item.name}</li>
    );
    return <ul>{listItems}</ul>;
}