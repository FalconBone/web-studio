import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Cookie = (props) => {

    const [name, setName] = useState('')

    const onClickEnter = async () => {
        axios.post('http://localhost:5000/cookie', {name: name}, {withCredentials: true})
            .then(() => {
                alert('Куки сохранены')
            })
    }

    return (
        <div >
            <div className={props.name}>
                <input placeholder="Имя" value={props.name} onChange={(e) => { setName(e.target.value) }} />
            </div>
            <button onClick={onClickEnter}>
                Сохранить
            </button>
        </div>
    )
}

export default Cookie