Diagnosis

The build fails because Turbopack/Next.js cannot resolve the aliased import "@/components/ui/button" — see the module-not-found error at line 64-68 and the note that the import alias maps to ./components/ui/button at line 72. The same unresolved import is propagated to several components in the import trace at line 122-127.
Root cause: the file or path "@/components/ui/button" does not exist (or its filename casing does not match the import) or the path alias is misconfigured. On Netlify’s Linux builder the filesystem is case-sensitive, so an import of "@/components/ui/button" will fail if the actual file is named Button.tsx (capital B) or was not committed.
Solution

Verify the file exists and was committed
Confirm the file is present in your repo and committed: https://github.com/EviewNicks/blog_portofolio/tree/main/components/ui
Locally you can run:
git ls-files | grep components/ui/button
or ls -la components/ui
If the file is missing: add it and commit.

If the file exists but the name/casing differs (e.g. Button.tsx vs button.tsx)

Option A — change the import to match the real file name (preferred if file is intended to be PascalCase):
// components/layout/Navbar.tsx
import { Button } from "@/components/ui/Button";
Option B — rename the file to match the import (lowercase):
git mv components/ui/Button.tsx components/ui/button.tsx
git commit -m "Fix filename casing for components/ui/button"
git push
Note: Use git mv so Git records the rename (important for case-only changes on macOS).

If the file exists with correct casing but alias still fails, verify your path alias configuration
Ensure tsconfig.json (or jsconfig.json) defines the alias "@/*" correctly. Example tsconfig.json snippet:
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
If your sources live in src/, use:
"paths": { "@/*": ["src/*"] }
Commit any changes to tsconfig.json/jsconfig.json.
Commit and redeploy
After fixing file name/import or tsconfig, commit and push. Netlify will rebuild automatically.
Why this fixes the problem

The logs show Turbopack maps "@/components/ui/button" to ./components/ui/button but cannot find a matching file on the case-sensitive builder (see line 64-68 and line 72). Ensuring the file exists with exactly the same path and casing (or adjusting the import or tsconfig paths) resolves the module-not-found error.
If you still see errors after these steps, paste the updated log lines that reference module-not-found and I’ll help diagnose further.