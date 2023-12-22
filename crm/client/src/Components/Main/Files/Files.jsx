import axios from "axios";
import { useState } from "react";

const Files = () => {

    const [file, setFile] = useState(null)

    const onClickSendFile = async () => {
        if (file !== null) {
            console.log(file);
            const formData = new FormData()
            formData.set('file', file)

            await axios.post('http://localhost:5000/file', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            }).then(res => res.data)
                .then(message => {
                    if (message === 'Неверный тип файла') {
                        alert('Неверный тип файла')
                    } else if (message === 'Неверный размер файла') {
                        alert('Неверный размер файла')
                    } else {
                        alert('Файл успешно загружен')
                    }
                })
        }
    }

    return (
        <div>
            <input type="file" onChange={(e) => { setFile(e.target.files[0]) }} />
            <button onClick={onClickSendFile}>Отправить</button>
        </div>
    )
}

export default Files