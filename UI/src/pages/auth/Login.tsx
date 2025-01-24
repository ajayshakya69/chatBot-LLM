
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Link } from 'react-router-dom';

type FormData = {
    email: string,
    password: string,

}
export default function SignUp() {

    const [formData, setformData] = useState<FormData>({
        email: '',
        password: '',
    })





    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {

        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })


    }
    return (
        <>
            <div className="container mx-auto px-4 flex justify-center items-center h-screen">
                <form action="" className='flex flex-col gap-5 w-1/4 border p-5'>
                    <h3 className='mx-auto font-bold text-2xl'>Login</h3>
                    <TextField
                        id="outlined-basic"
                        label="email"
                        variant="outlined"
                        name='email'
                        onChange={handleChange}
                        value={formData.email}
                        required />
                    <TextField id="outlined-basic" label="password" variant="outlined"
                        name='password'
                        onChange={handleChange}
                        value={formData.password}
                        required
                        type='password'
                         />
                    <p>Don't have an account. <Link to="/auth/signup" className='text-blue-500'>SignUp</Link></p>
                    <Button variant="contained">Login</Button>
                </form>
            </div>
        </>
    )
}
