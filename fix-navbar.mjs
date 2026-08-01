import { readFileSync, writeFileSync } from 'fs';

const filePath = "C:/Users/dhanukan/OneDrive - MILLENNIUM I.T.E.S.P (PRIVATE) LIMITED/Desktop/Nexio Global/nexio v2/nexiowebsite/src/components/Navbar.tsx";

let content = readFileSync(filePath, 'utf8');
console.log(`File length: ${content.length}`);

// Check what's around the logo area
let idx = content.indexOf('nexio');
console.log("Around logo area:");
console.log(content.substring(idx - 10, idx + 200));
console.log("---");

// Fix: Replace the logo span - missing </span> before </Link>
// The old: <span className="text-blue-400">.</span>\n        </Link>
// SHOULD BE: <span className="text-blue-400">.</span>\n          </span>\n        </Link>

const target = '<span className="text-blue-400">.</span>\n        </Link>';
const replacement = '<span className="text-blue-400">.</span>\n          </span>\n        </Link>';

if (content.includes(target)) {
    content = content.replace(target, replacement);
    console.log('Fix applied successfully!');
    writeFileSync(filePath, content, 'utf8');
    console.log(`File written. New length: ${content.length}`);
} else {
    console.log('Exact target not found. Trying with \\r\\n...');
    const targetCRLF = '<span className="text-blue-400">.</span>\r\n        </Link>';
    if (content.includes(targetCRLF)) {
        content = content.replace(targetCRLF, '<span className="text-blue-400">.</span>\r\n          </span>\r\n        </Link>');
        console.log('Fix applied (CRLF)');
        writeFileSync(filePath, content, 'utf8');
    } else {
        console.log('Still not found. Checking raw content around first nexio...');
        let nidx = content.indexOf('nexio');
        console.log(content.substring(nidx, nidx + 300));
    }
}
