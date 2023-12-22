import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const DealListElement = (props) => {

    const navigate = useNavigate()

    const client = useSelector(state => state.clients.clients.find(client => client.id === props.deal.clientId))
    const user = useSelector(state => state.users.users.find(user => user.id === props.deal.userId))

    const onClickDeal = () => {
        navigate(`/deal/${props.deal.id}`)
    }

    return (
        <tr onClick={onClickDeal}>
            <td>
                {props.deal.id}
            </td>
            <td>
                {props.deal.name}
            </td>
            <td>
                22
            </td>
            <td>
                {client?.name}
            </td>
            <td>
                {props.deal.budget}
            </td>
            <td>
                {user?.full_name}
            </td>
            <td>
                {props.deal.creatingDate.slice(0,10)}
            </td>
        </tr>
    )

}

export default DealListElement