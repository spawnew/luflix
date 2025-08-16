import React from 'react'
import { useState } from 'react'
const FormPeli = ({ obtener }) => {

    const [form, setForm] = useState({ peli:"" })
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        obtener(form)
        setForm({ peli:"" })
    }
    return (
        <div className='bg-blue-300 m-2 p-2 rounded-lg shadow- text-black flex flex-col justify-center align-center '>

          
                 <h3 className='text-blue-950'><b>Ingresa el nombre de una peli</b> </h3>

            



            <form onSubmit={handleSubmit}>
                <input className='bg-amber-50 rounded-b-sm p-1 border-2 border-black' type="text"required onChange={handleChange} name="peli" value={form.peli} placeholder='ingrese una peli'>
                </input>
               

                <input className='bg-blue-700 p-2 m-2 rounded-xl text-amber-50 hover:bg-blue-400' type="submit" ></input>

            </form>


        </div>
    )
}

export default FormPeli;