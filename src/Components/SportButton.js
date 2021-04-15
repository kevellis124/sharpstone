import './SportButton.css'

function SportButton(props) {
    var isSelected = props.isSelected;
    var buttonClasses = `toggle-button button--large ${isSelected ? 'selected' : ''}`;
    console.log(props);
    return (
        <button className={buttonClasses} onClick={() => props.onClick(props.text)}>
            {props.text}
        </button>
    );
}

export default SportButton;