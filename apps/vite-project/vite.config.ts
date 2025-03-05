import { vitePWAConfigBase } from "@amodeo/config/vite/pwa";
import path from "path";
import { fileURLToPath } from "url";

const _filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(_filename);

export default vitePWAConfigBase(_filename, dirname);
