import { useForm } from "react-hook-form";

const Formulario = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return <div>

        <form onSubmit={handleSubmit(onSubmit)}>
        <h1>FORMULARIO </h1>

            <input type="text" 
            {...register('Name', {
                required: true
            })} 
            id="name" class="Name" placeholder="Nombre" />{errors.Name?.type === 'required' && <p>Escriba un nombre.</p>}

            <input type="text" 
            {...register('Lnd', {
                required: true
            })} 
            id="Lnd" class="Lnd" placeholder="Apellido Paterno" /> {errors.Lnd?.type === 'required' && <p>Escriba el apellido paterno.</p>}

            <input type="text" {...register('Lnm')} id="Lnm" class="Lnm" placeholder="Apellido Materno" />

            <h4>Género</h4>
            <div class="containerRG">
            <input type="radio" {...register('Gender',{
                required: true
            })} id="Male" class="Male" value="Hombre" />
            <label for="Masculino"> Hombre </label>
            
            <br />
            <input type="radio" {...register('Gender',{
                required: true
            })} id="Female" class="Female" value="Mujer" />
            <label for="Femenino"> Mujer </label>
            
            </div>

            <input type="tel" 
            {...register('Phone', {
                required: true
            })} 
            id="Phone" class="Phone" placeholder="Teléfono" maxLength={10}/>{errors.Phone?.type === 'required' && <p>Digite un número telefónico.</p>}
            

            <input type="email" 
            {...register('Email', {
                required: true,
                pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                },
            })}
           id="Email" class="Email" placeholder="Correo Eelectrónico" />{errors.Email?.type === 'required' && <p>Escriba un correo electrónico.</p>}{errors.Email?.type === 'pattern' && <p>Correo no válido.</p>}

            <input type="submit" class="btnSubmit" value="ENVIAR" />
        </form>
    </div>
}

export default Formulario;