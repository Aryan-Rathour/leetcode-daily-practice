// Given an array of leads with a stage field, return the count of leads for every stage in STAGES, including stages with zero leads.

// Unknown stages should be counted under "unknown".

// Solve it in two ways:

// Naive: STAGES.map(s => leads.filter(l => l.stage === s).length)

// Optimized: Count all leads in a single pass using a hash map.

const STAGES = [
  "new",
  "assigned",
  "contacted",
  "qualified",
  "site_visit",
  "negotiation",
  "won",
  "lost",
  "nurture",
];

function stageCounts(leads) {
  const counts = {};

  for (const stage of STAGES) {
    counts[stage] = 0;
  }

  counts.unknown = 0;

  for (const lead of leads) {
    if (Object.hasOwn(counts, lead.stage) && lead.stage !== "unknown") {
        counts[lead.stage]++;
    }
    else{
        counts.unknown++
    }
  }
  return counts
}


console.log(stageCounts([
  { stage: "new" },
  { stage: "new" },
  { stage: "won" },
  { stage: "invalid" }
]))