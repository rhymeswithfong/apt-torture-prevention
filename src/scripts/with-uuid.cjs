const fs = require("fs");

// Read JSON file
const data = fs.readFileSync("./src/scripts/swarmplot-old.json", "utf-8");
const items = JSON.parse(data);

// Update each object's id with a random uuid
const updatedItems = items.map((item) => ({
  ...item,
  id: `${item.id} (${item.group})`,
}));

// Write updated data back to the file
fs.writeFileSync(
  "./src/scripts/swarmplot.json",
  JSON.stringify(updatedItems, null, 2),
);

console.log("IDs updated successfully!");
