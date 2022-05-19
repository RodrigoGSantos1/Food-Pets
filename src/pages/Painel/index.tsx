import { FormHandles } from "@unform/core";
import { useRef, useState } from "react";
import Header from "../../components/Header";
import InputCustom from "../../components/InputCustom";
import RegisterProducts from "../../Validators/RegisterProducts";
import { FormPainel, PainelStyle, TitleForm, TitlePainel } from "./styles";


export default function Painel() {

    const formRef = useRef<FormHandles>(null);
    const [datas, setDatas] = useState<any>();

    const handleSubmit = async () => {
        localStorage.removeItem('@userData');
        const dadosLogin = {
            names: datas.names,
        };

        console.log(dadosLogin);


        const errors = await RegisterProducts.validator(dadosLogin);

        if (Object.keys(errors).length === 0) {
            const response = {
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

            // formRef.current?.setErrors({});
        } else {
            formRef.current?.setErrors(errors);
            console.log(errors);

        }
    };

    return (
        <>
            <Header />
            <PainelStyle>
                <TitlePainel>Painel ADM</TitlePainel>
                <FormPainel>
                    <TitleForm>
                        Cadastro de Produto
                    </TitleForm>
                    <InputCustom
                            label="Nome"
                            name="names"
                            onChange={(e) => {
                                const a: any = {
                                    ...datas,
                                    names: e.target.value,
                                };
                                setDatas(a);
                            }}
                        />
                </FormPainel>
            </PainelStyle>
        </>
    );
}