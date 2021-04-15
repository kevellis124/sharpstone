import SportButton from "./SportButton";

function SportsHeader() {

    return (
        <div>
            <h1>SharpStone</h1>
            <SportButton text="NBA" />
            <SportButton text="NFL" />
            <SportButton text="MLB" />
            <SportButton text="NHL" />
        </div>
    );
}

export default SportsHeader;