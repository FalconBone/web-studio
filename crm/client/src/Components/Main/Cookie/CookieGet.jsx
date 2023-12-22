import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const CookieGet = (props) => {

    const [name, setName] = useState('')

    useEffect(() => {
        axios.get('http://localhost:5000/cookie', {withCredentials: true})
            .then((res) => {
                setName(res.data.name)
            })
    }, [])
    
    return (
        <div>
            <div>
                {name}
            </div>
        </div>
    )
}

export default CookieGet