import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable TypeScript any type errors
      "@typescript-eslint/no-explicit-any": "off",
      
      // Disable React unescaped entities (apostrophes)
      "react/no-unescaped-entities": "off",
      
      // Disable Next.js img element warnings
      "@next/next/no-img-element": "off",
      
      // Disable prefer-const and exhaustive-deps from your original issue
      "prefer-const": "off",
      "react-hooks/exhaustive-deps": "off",
    },
  },
];

export default eslintConfig;
