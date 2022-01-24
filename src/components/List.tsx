import '../App.css';

type ListItems = string[]

type ListProps = {
    items: ListItems
}

function List(props: ListProps) {
  return (
    <ul className='list'>
        {props.items.map((item) => <li><p>{item}</p></li>)}
        <li>
            <p>Public mint still open at .04 ETH</p>
        </li>
        <li>
            <p>20% of proceeds and 3% of secondary sales go&nbsp;to #TeamSeas (benefiting Ocean Conservancy and The Ocean Cleanup)</p>
        </li>
    </ul>
  );
}

export default List;
