import '../styles/components.scss';

export default function Button ({children, onClick}) {
    return(
        <button onClick={onClick} type="button" className="Button">
            {children}
        </button>
    )
}