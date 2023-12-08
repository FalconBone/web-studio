import classes from './Deal.module.css'

const DealInfo = (props) => {

    return (
        <div className={classes.container_info}>
            ID {props.id}
        </div>
    )
}

export default DealInfo