const fs = require("fs");
const path = require("path");

if (process.argv.length !== 4) {
  console.log("Usage: node generateFiles.js <path> <filename>");
  process.exit(1);
}

const userPath = process.argv[2];
const filename = process.argv[3];

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="${filename}.css">
</head>
<body>
    <script src="${filename}.js"></script>
</body>
</html>
`;

const cssContent = `
/* Add your CSS styles here */
`;

const jsContent = `
// Add your JavaScript code here
`;

const dir = path.join(userPath, filename);

fs.mkdir(dir, (err) => {
  if (err) {
    console.error("Error creating directory:", err);
    process.exit(1);
  }

  fs.writeFile(path.join(dir, `${filename}.html`), htmlContent, (err) => {
    if (err) {
      console.error("Error creating HTML file:", err);
      process.exit(1);
    }
    console.log("HTML file created.");

    fs.writeFile(path.join(dir, `${filename}.css`), cssContent, (err) => {
      if (err) {
        console.error("Error creating CSS file:", err);
        process.exit(1);
      }
      console.log("CSS file created.");

      fs.writeFile(path.join(dir, `${filename}.js`), jsContent, (err) => {
        if (err) {
          console.error("Error creating JavaScript file:", err);
          process.exit(1);
        }
        console.log("JavaScript file created.");
      });
    });
  });
});
