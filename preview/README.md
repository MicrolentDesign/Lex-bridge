# preview/ — generated, do not edit

Built output, committed so it can be served without changing the repository's Pages
setting. GitHub Pages is configured as `main` / `(root)`, and Pages serves any directory's
`index.html`, so this folder is reachable directly:

**https://microlentdesign.github.io/Lex-bridge/preview/**

Nothing here is source. Edit `src/` and regenerate:

```bash
VITE_BASE=/Lex-bridge/preview/ npm run build
rm -rf preview && mkdir preview && cp -R dist/. preview/
git add preview && git commit -m "Update client preview" && git push
```

## Why this exists

Committing build output is not good practice, and this is a deliberate, temporary
exception. The proper setup is the `gh-pages` branch (already pushed) plus the CI workflow
in `.github/workflows/deploy-pages.yml`, which needs:

1. Pages → Source switched to the `gh-pages` branch, **or** to "GitHub Actions" once the
   workflow lands, and
2. the `workflow` scope added to the push credential — GitHub currently rejects the
   workflow file without it.

Once either is in place, delete this folder and remove `preview/` from the repo.

## Known limitation

The nav links point at real paths (`/about`, `/services/…`) that do not exist yet, so they
404. That resolves with the router and static generation — see `BUILD-STATUS.md` §5.
