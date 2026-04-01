# Garden Content Restoration Guide

This archive contains all the garden notes and related components that were removed from your site. Use this guide to restore them if you decide to bring the garden back.

## What's Included in This Archive

- `pages-garden/` - All English garden pages and markdown files
- `pages-fr-garden/` - All French garden pages and markdown files
- `GardenBadge.astro` - The garden badge component
- `GardenTranslation.astro` - The garden translation component
- `GardenNote.astro` - The English garden note layout
- `GardenNoteFr.astro` - The French garden note layout
- `RESTORATION_GUIDE.md` - This file

## How to Restore the Garden

### Step 1: Restore the Files

Copy the files back to their original locations:

```bash
# From the .archive/garden-backup directory
cp -r pages-garden ../src/pages/garden
cp -r pages-fr-garden ../src/pages/fr/garden
cp GardenBadge.astro ../src/components/
cp GardenTranslation.astro ../src/components/
cp GardenNote.astro ../src/layouts/
cp GardenNoteFr.astro ../src/layouts/
```

### Step 2: Restore Component Imports

Update these files to import the garden components:

#### `src/layouts/Layout.astro`
Add back:
```astro
import GardenBadge from '../components/GardenBadge.astro';

// Add this in the frontmatter
const currentPath = Astro.url.pathname;
const isGardenPage = currentPath.includes("/garden/");
```

In the HTML template, add back:
```astro
{isGardenPage && <PagePeek />}
<GardenBadge />
```

#### `src/layouts/BlogPost.astro`
Add back the import:
```astro
import GardenBadge from '../components/GardenBadge.astro';
```
And in the template:
```astro
<GardenBadge />
```

#### `src/layouts/CaseStudy.astro`
Add back the import:
```astro
import GardenBadge from '../components/GardenBadge.astro';
```

### Step 3: Restore Navigation

#### `src/components/Header.astro`
Restore the garden link in the `links` array:
```astro
const links = [
    { path: '/garden/', label: 'Digital Garden' },
];
```

### Step 4: Restore i18n Configuration

#### `src/i18n/config.ts`
Add back the translation:
```typescript
export function useTranslations(lang: Language) {
  return {
    'nav.garden': lang === 'fr' ? 'Notes' : 'Garden',
    // ... other translations
  };
}
```

### Step 5: Restore Index Page

#### `src/pages/index.astro`
Restore the garden notes glob and uncomment the section:
```typescript
const gardenNotesGlob = import.meta.glob<WritingItem>('./garden/**/*.md', { eager: true });

const allWriting = [...Object.values(postsGlob), ...Object.values(gardenNotesGlob)];
```

And uncomment the "Garden Notes" section in the HTML.

### Step 6: Restore TranslationWrapper Component (Optional)

If you want to restore French translations for garden pages, you'll need to restore the `TranslationWrapper.astro` component as well. It's currently archived separately.

```bash
cp TranslationWrapper.astro ../src/components/
```

Then update `GardenNote.astro` to import it:
```astro
import TranslationWrapper from '../components/TranslationWrapper.astro';
```

And add it to the template where needed.

## Files Modified During Removal

The following files were modified to remove garden references:
- `src/layouts/Layout.astro` - Removed GardenBadge import and usage
- `src/layouts/BlogPost.astro` - Removed GardenBadge import and usage
- `src/layouts/CaseStudy.astro` - Removed GardenBadge import
- `src/components/Header.astro` - Removed garden navigation link
- `src/i18n/config.ts` - Removed garden translation
- `src/pages/index.astro` - Removed garden globbing and section
- `src/utils/i18n.ts` - Cleaned up garden-specific comments
- `src/components/TranslationWrapper.astro` - Deleted (archived here)

## Notes

- The `PagePeek.astro` component still contains garden-specific styling and logic, but it's now unused. You can leave it as is, or remove it if you prefer a cleaner codebase.
- No external dependencies or data were lost. All content is self-contained in this archive.
- The garden pages are now completely removed from the site and won't be served.

Good luck! 🌱
