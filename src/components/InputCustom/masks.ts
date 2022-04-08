import { useCallback } from "react";

export function cep(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 9;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{5})(\d)/, "$1-$2");
  e.currentTarget.value = value;
  return e;
}

export function currency(e: React.FormEvent<HTMLInputElement>) {
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{2})$/, "$1,$2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
  e.currentTarget.value = value;
  return e;
}

export function staticCurrency(e: any) {
  let value = e.toString();
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{2})$/, "$1,$2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
  e = value;
  return e;
}

export function tax(e: React.FormEvent<HTMLInputElement>) {
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{1})$/, "$1,$2");
  e.currentTarget.value = value;
  return e;
}

export function staticTax(e: string) {
  let value = e.toString();
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{1})$/, "$1,$2");
  e = value;
  return e;
}

export function cpf(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 14;
  let value = e.currentTarget.value;
  if (!value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{2})$/, "$1-$2");
    e.currentTarget.value = value;
  }
  return e;
}

export function cepTable(e: string) {
  let value = e;
  if (!value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{5})(\d)/, "$1-$2");
    e = value;
  }
  return e;
}

export function cnpj(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 18;
  let value = e.currentTarget.value;
  if (!value.match(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/)) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1/$2");
    value = value.replace(/(\d{4})(\d{2})$/, "$1-$2");
    e.currentTarget.value = value;
  }
  return e;
}

export function rg(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 12;
  let value = e.currentTarget.value;
  if (!value.match(/^(\d{2}).(\d{3}).(\d{3})-(\d{1})$/)) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1})$/, "$1-$2");
    e.currentTarget.value = value;
  }
  return e;
}

export function phoneCelBr(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 10;
  let value = e.currentTarget.value;
  if (!value.match(/^\d{5}\-\d{4}$/)) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{5})(\d)/g, "$1-$2");
    e.currentTarget.value = value;
  }
  return e;
}

export function phoneResidentialBr(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 9;
  let value = e.currentTarget.value;
  if (!value.match(/^\d{4}\-\d{4}$/)) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{4})(\d)/g, "$1-$2");
    e.currentTarget.value = value;
  }
  return e;
}

export function phoneTypesBr(typePhone: number, value: string) {
  if (typePhone === 2) {
    return phoneCelValue(value);
  } else {
    return phoneOtherValue(value);
  }
}

export function phoneCelValue(e: string) {
  let value = e;
  if (!value.match(/^\d{5}\-\d{4}$/)) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{5})(\d)/g, "$1-$2");
    e = value;
  }
  return e.substring(0, 10);
}

export function phoneOtherValue(e: string) {
  let value = e;
  if (!value.match(/^\d{4}\-\d{4}$/)) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{4})(\d)/g, "$1-$2");
    e = value;
  }
  return e.substring(0, 9);
}

export function telCelBrTable(e: string) {
  let value = e;
  if (!value.match(/^\d{2}\d{5}\-\d{4}$/)) {
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/, "($1)$2");
    value = value.replace(/(\d{5})(\d)/g, "$1-$2");
    e = value;
  }
  return e;
}

export function cpfTable(e: string) {
  let value = e;
  if (!value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{2})$/, "$1-$2");
    e = value;
  }
  return e;
}

export function cnpjTable(e: string) {
  let value = e;
  if (!value.match(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/)) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1/$2");
    value = value.replace(/(\d{4})(\d{2})$/, "$1-$2");
    e = value;
  }
  return e;
}

export function rgTable(e: string) {
  let value = e;
  if (!value.match(/^(\d{2}).(\d{3}).(\d{3})-(\d{1})$/)) {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1})$/, "$1-$2");
    e = value;
  }
  return e;
}

export function MasksUtilsTypeDocs(typeDoc: any, value: string) {
  switch (typeDoc) {
    case 1:
      return cpfTable(value);
    case 2:
      return cnpjTable(value);
    case 3:
      return rgTable(value);
    case 4:
      return value;
    case 5:
      return value;
    case 6:
      return value;
  }
}
