import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

/**
 * Flat config, consumed by the ESLint CLI directly.
 *
 * Next 16 removed `next lint`, and eslint-config-next now ships native flat
 * configs — wrapping them in FlatCompat throws on a circular structure, so the
 * shim (and its @eslint/eslintrc dependency) is gone.
 */
const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypeScript,
  {
    ignores: [".next/**", "out/**", "node_modules/**", "next-env.d.ts"],
  },
];

export default eslintConfig;
