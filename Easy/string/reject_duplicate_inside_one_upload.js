// Reject Duplicate Leads in One Upload

// Given an array of { line, name, phone }, return { keep, rejected }.

// Rules:

// Normalize phone numbers using normalizePhone().

// Reject invalid phones ("") with reason "no usable phone number".

// Reject duplicate phones with reason "duplicate within this file".

// Keep the first occurrence and preserve the original order.

function dedupeUpload(rows){
    const seen = new Set();
    const keep = [];
    const rejected = [];

    for(const row of rows){
        const phone = normalizePhone(row.phone);

        if(phone == ""){
            rejected.push({
                line: row.line,
                reason: "no usable phone number"
            })
        }
        else if(seen.has(phone)){
            rejected.push({
                line:row.line,
                reason:"duplicate with in this file"
            })
        }
        else{
            seen.add(phone)
            keep.push(row)
        }
    }

    return { keep , rejected};
}

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

const rows = [
  { line: 2, name: "Aryan", phone: "9336741568" },
  { line: 3, name: "Shubham", phone: "8756811298" },
  { line: 4, name: "A. Raj", phone: "+91 93367 41568" },
  { line: 5, name: "Rahul", phone: "" },
  { line: 6, name: "Amit", phone: "9336741568" }
];

console.log(JSON.stringify(dedupeUpload(rows), null, 2));