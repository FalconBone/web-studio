import classes from './Deal.module.css'

const DealHeader = (props) => {

    return (
        <header className={classes.header}>
            {props.name}
        </header>
    )
}

export default DealHeader