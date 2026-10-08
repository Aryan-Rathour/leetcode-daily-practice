// Given a phone number in different formats, normalize it into a standard Indian E.164 format (without +).

// Examples:

// 9876543210        → 919876543210
// +91 98765-43210  → 919876543210
// 09876543210      → 919876543210
// 919876543210     → 919876543210
// 12345            → ""


function normalizePhone (raw , defaultCC = 91){
    if (raw == null) return "";

    let digits = String(raw).replace(/\D/g , "");

    if(digits.startsWith("00")){
        digits = digits.slice(2);
    }

    if(digits.length == 11 && digits.startsWith("0")){
        digits= digits.slice(1);
    }

    if(digits.length == 10){
        digits = defaultCC + digits
    }

    if(digits.startsWith(91)){
        if(digits.length !== 12 || !"6789".includes(digits[2])){
            return ""
        }

        return digits;
    }

    if(digits.length >8 && digits.length < 15){
        return digits
    }

    return "";
}

console.log(normalizePhone("9876543210"))
// "919876543210"

console.log(normalizePhone("+91 98765-43210"))
// "919876543210"

console.log(normalizePhone("09876543210"))
// "919876543210"

console.log(normalizePhone("00919876543210"))
// "919876543210"

console.log(normalizePhone("915876543210"))
// ""

console.log(normalizePhone("12345"))
// ""

console.log(normalizePhone(""))
// ""