import SportButton from "./SportButton";

function Header() {

    return (
        <div>
            <h1>SharpStone</h1>
            <SportButton text="NBA" />
            <SportButton text="NFL" />
            <SportButton text="MLB" />
        </div>
    );
}

export default Header;