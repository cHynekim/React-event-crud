export default function Nav(props){
    const contents = ['HTML', 'CSS', 'Javascript']
    return(
        <nav>
            <ul>
                <li key={0} onClick={(e) => {
                    e.preventDefault();
                    props.onChangePage(e.target.innerHTML);
                }}>
                    <a href="/">{contents[0]}</a>
                </li>
                <li key={1} onClick={(e) => {
                    e.preventDefault();
                    props.onChangePage(e.target.innerHTML);
                }}>
                    <a href="/">{contents[1]}</a>
                </li>
                <li key={2} onClick={(e) => {
                    e.preventDefault();
                    props.onChangePage(e.target.innerHTML);
                }}>
                    <a href="/">{contents[2]}</a>
                </li>
            </ul>
        </nav>
    )
}