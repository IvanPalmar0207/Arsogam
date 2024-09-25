//Styles
import './style/formTecnic.css'
//UseForm
import { useForm } from 'react-hook-form'
//MaterialIU
import Button from '@mui/material/Button';

function FormTecnicAssis(){

    const {register, handleSubmit} = useForm()

    const onSubmitForm = handleSubmit((data) => {
        const validData = {
            ...data
        }
    })

    return(
        <div className='containerForm'>
            <h2>
                Dejanos tus datos
                <br />
                y nosotros te contactaremos
            </h2>

            <form className='formTecnic' onSubmit={onSubmitForm}>
                <label htmlFor="fullName">Nombres y Apellidos:</label>
                <br />
                <input type="text" autoFocus
                    {...register("fullName",{required : true})}
                />

                <br />

                <label htmlFor="phoneUser">Celular:</label>
                <br />
                <input type="text" 
                {...register("phoneUser",{required : true})}
                />

                <br />

                <label htmlFor="emailUser">Correo:</label>
                <br />
                <input type="text" 
                {...register("emailUser", {required : true})}
                />

                <br />

                <label htmlFor="requestUser">Solicitud:</label>
                <br />
                <textarea rows={3}
                 {...register("requestUser", {required : true})}></textarea>

                <div className='containerButtonSubmit'>
                    <Button type='submit' variant="contained">Enviar</Button>
                </div>

            </form>
        </div>
    )
}

export default FormTecnicAssis