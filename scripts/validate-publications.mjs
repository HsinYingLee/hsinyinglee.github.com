import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

const repoRoot = process.cwd();
const dataPath = path.join(repoRoot, 'data/publications.json');
const allowedCategories = new Set(['image', 'video', '3d', 'other']);
const issues = [];

const addIssue = (index, message) => {
  issues.push(`Publication ${index + 1}: ${message}`);
};

const isExternalUrl = value => /^https?:\/\//.test(value);

const publications = JSON.parse(readFileSync(dataPath, 'utf8'));

if (!Array.isArray(publications)) {
  throw new Error('data/publications.json must contain an array.');
}

const titles = new Set();

publications.forEach((pub, index) => {
  ['title', 'authors', 'category'].forEach(field => {
    if (!pub[field] || typeof pub[field] !== 'string') {
      addIssue(index, `missing required string field "${field}"`);
    }
  });

  if (pub.venue !== undefined && typeof pub.venue !== 'string') {
    addIssue(index, 'venue must be a string when provided');
  }

  if (pub.category && !allowedCategories.has(pub.category)) {
    addIssue(index, `unknown category "${pub.category}"`);
  }

  if (pub.title) {
    if (titles.has(pub.title)) {
      addIssue(index, `duplicate title "${pub.title}"`);
    }
    titles.add(pub.title);
  }

  if (!pub.imageUrl && !pub.videoUrl) {
    addIssue(index, 'missing imageUrl or videoUrl');
  }

  ['imageUrl', 'videoUrl'].forEach(field => {
    const value = pub[field];

    if (!value || isExternalUrl(value)) {
      return;
    }

    const assetPath = path.join(repoRoot, value);
    if (!existsSync(assetPath)) {
      addIssue(index, `missing local asset ${value}`);
    }
  });

  if (!Array.isArray(pub.links) || !pub.links.length) {
    addIssue(index, 'links must be a non-empty array');
  } else {
    pub.links.forEach((link, linkIndex) => {
      if (!link.url || !link.text) {
        addIssue(index, `link ${linkIndex + 1} must include url and text`);
      }
    });
  }
});

if (issues.length) {
  console.error(issues.join('\n'));
  process.exit(1);
}

console.log(`Validated ${publications.length} publications.`);
