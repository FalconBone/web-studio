import { useSelector } from "react-redux"

const CalculatorServiceElement = (props) => {

    let name
    let product = {}
    
    if (props.position) {
        for (let key in props.positions) {
            if (props.positions[key].id === props.position.id) {
                name = props.positions[key].name
                break
            }
        }
    } else if (props.product) {
        for (let key in props.products) {
            if (props.products[key].id === props.product.id) {
                name = props.products[key].name
                break
            }
        }
    } else {
        name = ''
    }

    return (
        <tr>
            <td>
                {name}
            </td>
            <td>
                {props.position?.end_period - props.position?.start_period || product.name }
            </td>
            <td>
                {props.position?.name || props.product?.amount }
            </td>
            <td>
                {'' || ''}
            </td>
            <td>
                {props.position?.total || props.product?.total }
            </td>
        </tr>
    )

}

export default CalculatorServiceElement