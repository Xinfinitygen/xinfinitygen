const fs = require("fs");

const profile = JSON.parse(
  fs.readFileSync("./data/profile.json", "utf8")
);

let readme = fs.readFileSync("./README.md", "utf8");

const developerOS = `
## Developer OS

\`\`\`console
> booting developer.profile...

Name          : ${profile.name}
Role          : ${profile.role}
Status        : ${profile.status}
Mission       : ${profile.mission}

Current Build : ${profile.currentBuild}
Learning      : ${profile.learning.join(" • ")}
Next Target   : ${profile.nextTarget}

Version       : ${profile.version}
\`\`\`
`;

readme = readme.replace(
  /## Developer OS[\s\S]*?## Tech Stack/,
  developerOS + "\n\n## Tech Stack"
);

fs.writeFileSync("./README.md", readme);

console.log("README updated.");