import './SportButton.css'

function SportButton(props) {
    return (
        <button className={['toggle-button', 'button--large'].join(' ')}>
            {props.text}
        </button>
    );
}

export default SportButton;