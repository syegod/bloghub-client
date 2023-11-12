import React, { useCallback, useState } from 'react'
import CustomBtn from '../inputs/CustomBtn'
import { BsGoogle, BsGithub, BsTwitter } from 'react-icons/bs'
import AuthSocialButton from '../inputs/AuthSocialButton';
import CustomInput from '../inputs/CustomInput';
import axios from '../../axios'
import { redirect, useNavigate } from 'react-router-dom';

type Variant = "LOGIN" | "REGISTER";

const Auth = () => {
    const [form, setForm] = useState({
        email: '', username: '', password: '', login: ''
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [variant, setVariant] = useState<Variant>("LOGIN");

    async function handleSubmit(e: any) {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(`/auth/${variant === 'LOGIN' ? 'login' : 'register'}`, form);
            if(response.status === 200 || response.status === 201){
                localStorage.setItem('token', response.data.token);
                window.location.assign('/');
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }
    async function handleChange(e: any) {
        setForm({ ...form, [e.target.id]: e.target.value });
    }
    const changeVariant = useCallback(() => {
        const form: any = document.getElementById('auth_form');
        form.reset();
        setForm({ email: '', username: '', password: '', login: '' });
        if (variant === "LOGIN") {
            setVariant("REGISTER");
        }
        if (variant === "REGISTER") {
            setVariant("LOGIN");
        }
    }, [variant]);

    return (
        <form id='auth_form' className='flex flex-col gap-y-6 font-medium text-gray-700' onSubmit={e => handleSubmit(e)} onChange={e => handleChange(e)}>
            <span className='font-semibold text-2xl text-center'>
                {variant === 'LOGIN' ? 'Login' : 'Register'}
            </span>
            <CustomInput type='text' id={variant === 'LOGIN' ? 'login' : 'username'} label='Username or email: ' placeholder='Enter username or email...' disabled={loading} />
            {variant === 'REGISTER' &&
                <CustomInput type='email' id='email' label='Email: ' placeholder='Enter email...' disabled={loading} />
            }
            <CustomInput type='password' id='password' label='Password: ' placeholder='Enter password...' disabled={loading} />
            <div className='flex flex-col gap-3'>
                <CustomBtn text={variant === 'LOGIN' ? 'Sign in' : 'Sign up'} type='submit' fullWidth disabled={loading} />
                <CustomBtn text={variant === 'LOGIN' ? 'Create new account' : 'Log in existing account'} type='button' fullWidth secondary disabled={loading} onClick={changeVariant} />
            </div>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500">
                        or continue with
                    </span>
                </div>
            </div>
            <div className='flex flex-row gap-2 justify-between'>
                <AuthSocialButton icon={BsGithub} onClick={() => { }} />
                <AuthSocialButton icon={BsGoogle} onClick={() => { }} />
                <AuthSocialButton icon={BsTwitter} onClick={() => { }} />
            </div>
        </form>
    )
}

export default Auth