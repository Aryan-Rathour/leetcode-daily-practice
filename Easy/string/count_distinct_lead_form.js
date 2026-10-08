// Count Distinct Lead Forms

// Given an array of leads, count unique form_name values. Treat null, undefined, and "" as "Unknown Form".

// Then return each form with its frequency, sorted from highest to lowest count.

// Example:

// [
//   { form_name: "Trinity 3BHK" },
//   { form_name: "Trinity 3BHK" },
//   { form_name: "" },
//   { form_name: null },
//   { form_name: "Skywalk 2BHK" }
// ]

// [
//   { form: "Trinity 3BHK", count: 2 },
//   { form: "Unknown Form", count: 2 },
//   { form: "Skywalk 2BHK", count: 1 }
// ]





function countDistinctForms(leads){
    const countMap = new Map();

    for(let lead of leads){
        const form = lead.form_name || "Unknown form";

        countMap.set(form , (countMap.get(form) || 0) + 1);
    }

    return [...countMap.entries()].map(([form , count]) => ({ form, count})).sort((a,b)=> b.count - a.count)
}

const leads = [
  { form_name: "Trinity 3BHK" },
  { form_name: "Trinity 3BHK" },
  { form_name: "" },
  { form_name: null },
  { form_name: "Skywalk 2BHK" }
];

console.log(countDistinctForms(leads));