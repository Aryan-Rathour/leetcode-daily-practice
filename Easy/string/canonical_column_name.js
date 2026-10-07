// Question — Canonical Column Names

// Write two functions:

// canon(header) — convert a header to lowercase and remove all non-alphanumeric characters.
// groupByCanon(headers) — group original headers by their canonical name using a Map.

function canon(header) {
  if (header == null) return "";

  return String(header)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

function groupByCanon(headers){
    const map = new Map();

    for (const header of headers){
        const key = canon(header)

        
    if(!map.has(key)){
        map.set(key , []);
    }

    map.get(key).push(header)

    }

    return map;
}

console.log(canon("Full Name"));
console.log(canon("Mobile No."));
console.log(canon(" E-Mail ID "));
console.log(canon(null));

const result = groupByCanon([
  "Phone",
  "phone",
  "Customer Name",
  "customer_name"
]);

console.log(result);
console.log([...result]);