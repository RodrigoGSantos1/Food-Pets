import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useState,
  useRef,
} from "react";
import { FiAlertCircle } from "react-icons/fi";
import { IconBaseProps } from "react-icons/lib";
import { useField } from "@unform/core";
import { CustomTextField, Error } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  format?: string;
  label?: string;
  error?: string;
  onBlur?: () => void;
  containerStyle?: {};
  icon?: React.ComponentType<IconBaseProps>;
  type?: string;
  mask?:
  | "cep"
  | "currency"
  | "cpf"
  | "cnpj"
  | "phoneCelBr"
  | "tax"
  | "rg"
  | "phoneResidentialBr";
  prefix?: string;
}

interface InputStateMask {
  cep: string;
  cpf: string;
  price: number;
  cnpj: string;
  tel: string;
  tax: string;
  rg: string;
}

const InputCustom: React.FC<InputProps> = ({
  name,
  label,
  icon: Icon,
  onBlur,
  containerStyle = {},
  type,
  mask,
  ...rest
}) => {

  // console.log(name);


  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const [maskState, setMaskState] = useState<InputStateMask>(
    {} as InputStateMask
  );

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      path: "value",
    });
  }, []);

  useEffect(() => {
    console.log(error);
    
  },[error])

  useEffect(() => {
    if (inputRef.current?.value) {
      setIsFocused(true);
    } else {
      setIsFocused(false);
    }
  }, [defaultValue]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback((e: any) => {
    const data = e.target.value;
    if (!data) {
      setIsFocused(false);
    } else {
      setIsFocused(true);
    }
  }, []);

  return (
    <CustomTextField
      style={containerStyle}
      isErrored={!!error}
      isFocused={isFocused}
      isFilled={isFilled}
      data-testid="input-container"
    >
      {Icon && <Icon size={20} />}
      <label>{label}</label>
      <input
        onFocus={handleInputFocus}
        ref={inputRef}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        // onChange={handleChangeMask}
        {...rest}
        type={type}
      // onChangeCapture={handleChangeCapture}
      />
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </CustomTextField>
  );
};
export default InputCustom;
