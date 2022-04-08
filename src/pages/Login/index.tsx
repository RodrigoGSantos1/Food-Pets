import React, { useRef, useState } from "react";
import Header from "../../components/Header";
import { AreaForm, AreaIcon, ButtonCadastro, Style } from "./style";
import Fundo from '../../assets/fundo-register.jpg'
import Logo from '../../assets/Logo.svg'
import { Form } from "@unform/web";
import InputCustom from "../../components/InputCustom";
import { ILogin } from "../../types/ILogin";
import { postLogin } from "../../services/api";
import { FormHandles } from "@unform/core";
import LoginValidators from "../../Validators/LoginValidators";

export default function Login() {

    const formRef = useRef<FormHandles>(null);
    const [datas, setData] = useState<ILogin>({});

    const handleSubmit = async () => {
        const dadosLogin = {
            email: datas.email,
            password: datas.password,
        };

        console.log(dadosLogin);
        

        const errors = await LoginValidators.validator(dadosLogin);

        if (Object.keys(errors).length === 0) {
            const response = {
                email: datas.email,
                password: datas.password,
            }
            console.log("passei");
            // @ts-ignore
            const { status, data } = await postLogin(response);
            setTimeout(() => {
                if (status === 200) {
                    window.location.href = '/login';
                }
            }, 1000);
            console.log(status);
            localStorage.setItem('@userData', JSON.stringify(data));
            // formRef.current?.setErrors({});
        } else {
            formRef.current?.setErrors(errors);
            console.log(errors);
            
        }
    };
    return (
        <>
            <Style>
                <Header />
                <AreaIcon>
                    <img className="img-fundo" src={Fundo} alt="fundo" />
                    <img className="img-logo" src={Logo} alt="Logo" />
                </AreaIcon>
                <AreaForm>
                    <Form
                        onSubmit={() => {

                        }}>
                        <h1>Entrar</h1>
                        <InputCustom
                            className="input-custom"
                            label="Email"
                            name="email"
                            onChange={(e) => {
                                const a: any = {
                                    ...datas,
                                    email: e.target.value,
                                };
                                setData(a);
                            }}
                        />
                        <InputCustom
                            className="input-custom"
                            label="Senha"
                            name="password"
                            type="password"
                            onChange={(e) => {
                                const a: any = {
                                    ...datas,
                                    password: e.target.value,
                                };
                                setData(a);
                            }}
                        />
                        <ButtonCadastro
                            onClick={() => {handleSubmit()}}
                        >
                            Entrar 
                        </ButtonCadastro>
                    </Form>
                </AreaForm>
            </Style>
        </>
    );
}