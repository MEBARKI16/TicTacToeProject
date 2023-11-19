const Log = ({ clickInfo }) => {
    return (
        <ol id="log">
            {clickInfo.map(info => <li key={`${info.position.row}${info.position.col}`}>{info.player} selected {info.position.row},{info.position.col}</li>)}
        </ol>
    );
}
export default Log;