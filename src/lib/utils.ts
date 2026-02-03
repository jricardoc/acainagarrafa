import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function redirectToCheckout(url: string) {
  const currentParams = window.location.search;
  if (!currentParams) {
    window.location.href = url;
    return;
  }

  // Remove o '?' inicial dos parâmetros atuais
  const paramsString = currentParams.substring(1);

  // Verifica se a URL já tem parâmetros
  if (url.includes("?")) {
    window.location.href = `${url}&${paramsString}`;
  } else {
    window.location.href = `${url}?${paramsString}`;
  }
}
