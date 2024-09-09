/**
 * Метод для дешифровки строки, зашифрованной с помощью ROT13
 * @param str - зашифрована строка, только заглавные буквы латинского алфавита
 * @returns {*} - расшифрован строка
 */
export function decodeROT13(str) {
    return str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13 : -13)));
      
}

