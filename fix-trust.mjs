import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const p = path.join(__dirname, 'src/components/TrustSection.tsx');

const c = fs.readFileSync(p, "utf8");

// Replace the broken end section
const old = `            </motion.div>

        </div>
    </section>
  );
}
`;

const newContent = `            </motion.div>
          ))}
        </div>
    </section>
  );
}
`;

const result = c.replace(old, newContent);
fs.writeFileSync(p, result, "utf8");
console.log("Fixed!");
