import slugify from 'slugify';

export const buildSlug = (value) =>
  slugify(value || '', {
    lower: true,
    strict: true,
    trim: true,
  });
