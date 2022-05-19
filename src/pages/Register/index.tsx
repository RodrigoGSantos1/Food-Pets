import React, { useRef, useState } from "react";
import Header from "../../components/Header";
import { AreaForm, AreaIcon, ButtonCadastro, Style } from "./style";
import Fundo from '../../assets/fundo-register.jpg'
import Logo from '../../assets/Logo2.png'
import InputCustom from "../../components/InputCustom";
import { FormHandles } from "@unform/core";
import RegisterValidators from "../../Validators/RegisterValidators";
import { Form } from "@unform/web";
import { postCadastroCliente } from "../../services/api";
import { IRegister } from "../../types/IRegister";

export default function Register() {

    const formRef = useRef<FormHandles>(null);
    const [data, setData] = useState<IRegister>({});

    const handleSubmit = async () => {
        const dadosCadastro = {
            name: data.name,
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword,
        };

        console.log(dadosCadastro);


        const errors = await RegisterValidators.validator(dadosCadastro);

        if (Object.keys(errors).length === 0) {
            const response = {
                name: data?.name,
                surname: data?.surname,                
                email: data?.email,
                password: data?.password,
            }
            console.log("passei");
            // @ts-ignore
            const { status } = await postCadastroCliente(response);
            setTimeout(() => {
                if (status === 200) {
                    window.location.href = '/login';
                }
            }, 1000);
            console.log(status);
            formRef.current?.setErrors({});
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
                        <h1>Cadastre-se</h1>
                        <InputCustom
                            className="input-custom"
                            label="Nome"
                            name="name"
                            onChange={(e) => {
                                const a: any = {
                                    ...data,
                                    name: e.target.value,
                                };
                                setData(a);
                            }}
                        />
                        <InputCustom
                            className="input-custom"
                            label="Surname"
                            name="surname"
                            onChange={(e) => {
                                const a: any = {
                                    ...data,
                                    surname: e.target.value,
                                };
                                setData(a);
                            }}
                        />
                        <InputCustom
                            className="input-custom"
                            label="Email"
                            name="email"
                            onChange={(e) => {
                                const a: any = {
                                    ...data,
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
                                    ...data,
                                    password: e.target.value,
                                };
                                setData(a);
                            }}
                        />
                        <InputCustom
                            className="input-custom"
                            label="Confirme a senha"
                            name="confirmPassword"
                            type="password"
                            onChange={(e) => {
                                const a: any = {
                                    ...data,
                                    confirmPassword: e.target.value,
                                };
                                setData(a);
                            }}
                        />
                        <ButtonCadastro
                            onClick={() => { handleSubmit() }}
                        >
                            Cadastrar
                        </ButtonCadastro>
                    </Form>
                </AreaForm>
            </Style>
        </>
    )
}