// {
//     "nome": "Teste para front",
//     "email": "batata2@batata2.com",
//     "senha": "123",
//     "ativo": true

import { useState } from "react"
import { createUser } from "../../api/users";
import { useNavigate } from "react-router-dom";
import './styles.css'

export default function CreateUser() {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        nome: '',
        email: '',
        senha: '',
        ativo: true
    })

    const handleChange = (e) => {
        const { id, value } = e.target;
        setUser({
            ...user,
            [id]: value
        })
    }

    const handleSave = async (e) => {
        e.preventDefault()
        // seria idela validar os valores do objeto antes de enviar
        const response = await createUser(user)

        if (response.status === 201) {
            navigate('/users')
        } else {
            console.log(response)
        }
    }

    return (
        <div className="form">
            <form>
                <div>
                    <label>Nome: </label>
                    <input type="text" name="nome" id='nome' value={user.nome} onChange={handleChange} />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" name="email" id='email' value={user.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Senha: </label>
                    <input type="password" name="senha" id='senha' value={user.senha} onChange={handleChange} />
                </div>
                <div className="actions">
                    <button type="reset">Limpar</button>
                    <button
                        type="submit"
                        onClick={handleSave}
                    >Enviar</button>
                </div>
            </form>
        </div>
    )
}