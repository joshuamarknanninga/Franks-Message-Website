import AudioMessage from '../models/AudioMessage.js';
import { buildSlug } from '../services/seo/slugService.js';
import ApiError from '../utils/ApiError.js';
import asyncHandler from '../utils/asyncHandler.js';

export const listAudio = asyncHandler(async (_req, res) => {
  const items = await AudioMessage.find().sort({ createdAt: -1 });
  res.json({ data: items });
});

export const getAudioById = asyncHandler(async (req, res) => {
  const item = await AudioMessage.findById(req.params.id);
  if (!item) throw new ApiError(404, 'Audio message not found');
  res.json({ data: item });
});

const normalizePayload = (body, source = 'frank-phone') => ({
  ...body,
  slug: body.slug || buildSlug(body.title),
  status: body.status || 'received',
  source,
  publishedAt: body.publishedAt || new Date(),
});

export const createAudio = asyncHandler(async (req, res) => {
  const created = await AudioMessage.create(normalizePayload(req.body, req.body.source || 'frank-phone'));
  res.status(201).json({ data: created });
});

export const quickPublishAudio = asyncHandler(async (req, res) => {
  const payload = normalizePayload(req.body, 'quick-publish');
  payload.isPublished = true;
  payload.status = 'published';

  const created = await AudioMessage.create(payload);
  res.status(201).json({ data: created });
});

export const updateAudio = asyncHandler(async (req, res) => {
  if (req.body.title && !req.body.slug) {
    req.body.slug = buildSlug(req.body.title);
  }

  const updated = await AudioMessage.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updated) throw new ApiError(404, 'Audio message not found');
  res.json({ data: updated });
});

export const deleteAudio = asyncHandler(async (req, res) => {
  const deleted = await AudioMessage.findByIdAndDelete(req.params.id);
  if (!deleted) throw new ApiError(404, 'Audio message not found');
  res.json({ message: 'Deleted successfully' });
});

export const podcastRss = asyncHandler(async (req, res) => {
  const siteUrl = `${req.protocol}://${req.get('host')}`;
  const episodes = await AudioMessage.find({ isPublished: true }).sort({ publishedAt: -1 }).limit(100);

  const itemsXml = episodes
    .map(
      (ep) => `
    <item>
      <title><![CDATA[${ep.title}]]></title>
      <description><![CDATA[${ep.description || ''}]]></description>
      <enclosure url="${ep.audioUrl}" type="audio/mpeg"/>
      <guid>${ep._id}</guid>
      <pubDate>${new Date(ep.publishedAt || ep.createdAt).toUTCString()}</pubDate>
    </item>`
    )
    .join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>The Berea Study Group Acts 17:11 Podcast</title>
    <link>${siteUrl}</link>
    <description>Biblical encouragement, teachings, and reflections.</description>
    ${itemsXml}
  </channel>
</rss>`;

  res.set('Content-Type', 'application/rss+xml; charset=utf-8');
  res.send(rss);
});
