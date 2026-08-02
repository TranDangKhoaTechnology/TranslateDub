const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const file = path.join(root, "content-scripts", "content.css");
const scopeStart = "@scope (.youtube-dubbing-swal-container){";
const startMarker = ".swal2-popup .swal2-actions button";

const source = fs.readFileSync(file, "utf8");
if (source.includes(scopeStart)) process.exit(0);

const start = source.indexOf(startMarker);
const toastifyMarker = /\/\*!\s*\r?\n\s*\* Toastify\b/.exec(source.slice(start));
if (start < 0 || !toastifyMarker) {
  throw new Error("Could not locate the extracted SweetAlert stylesheet block");
}

const end = start + toastifyMarker.index;
const scoped = `${source.slice(0, start)}${scopeStart}${source.slice(start, end)}}${source.slice(end)}`;
fs.writeFileSync(file, scoped);
