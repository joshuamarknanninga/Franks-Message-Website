import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import api from '../services/api.js';

const card = 'rounded-2xl bg-white p-5 shadow-soft space-y-3';

const RecordingStudioPage = () => {
  const [message, setMessage] = useState('');
  const [rssUrl, setRssUrl] = useState('');

  const masteredForm = useForm({
    defaultValues: { title: '', description: '', audioUrl: '', duration: 60, status: 'ready', source: 'team-mastered' },
  });

  const intakeForm = useForm({
    defaultValues: { senderName: '', senderEmail: '', recordingUrl: '', notes: '' },
  });

  const quickForm = useForm({
    defaultValues: { title: '', description: '', audioUrl: '', duration: 60, status: 'published', source: 'quick-publish' },
  });

  const transcriptForm = useForm({
    defaultValues: { audioId: '', transcript: '' },
  });

  const helpers = useMemo(
    () => ({
      setOk: (text) => setMessage(`✅ ${text}`),
      setErr: (error) => setMessage(`⚠️ ${error?.response?.data?.message || error.message}`),
    }),
    []
  );

  const submitMastered = masteredForm.handleSubmit(async (values) => {
    try {
      await api.post('/audio', values);
      helpers.setOk('Mastered audio uploaded to the website.');
      masteredForm.reset();
    } catch (error) {
      helpers.setErr(error);
    }
  });

  const submitIntake = intakeForm.handleSubmit(async (values) => {
    try {
      await api.post('/recording-intakes', values);
      helpers.setOk('Recording sent to your production intake queue.');
      intakeForm.reset();
    } catch (error) {
      helpers.setErr(error);
    }
  });

  const submitQuick = quickForm.handleSubmit(async (values) => {
    try {
      await api.post('/audio/quick-publish', values);
      helpers.setOk('Quick publish completed. Episode is live.');
      quickForm.reset();
    } catch (error) {
      helpers.setErr(error);
    }
  });

  const submitTranscript = transcriptForm.handleSubmit(async (values) => {
    try {
      await api.patch(`/audio/${values.audioId}`, { transcript: values.transcript });
      const apiOrigin = new URL(import.meta.env.VITE_API_URL || 'http://localhost:5000/api').origin;
      const absolute = `${apiOrigin}/api/audio/rss.xml`;
      setRssUrl(absolute);
      helpers.setOk('Transcript attached and podcast RSS is ready.');
      transcriptForm.reset();
    } catch (error) {
      helpers.setErr(error);
    }
  });

  return (
    <section className="space-y-8">
      <div>
        <h2 className="font-heading text-4xl">Recording Studio Workflow</h2>
        <p className="mt-2 text-midnight/70">Complete steps 1–4: mastered upload, intake contact, quick publish, and transcript + RSS.</p>
        {message && <p className="mt-3 rounded-xl bg-cream px-4 py-2 text-sm">{message}</p>}
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <form className={card} onSubmit={submitMastered}>
          <h3 className="font-heading text-2xl">1) Upload Mastered Audio (Team Path)</h3>
          <input className="w-full rounded-xl border p-3" placeholder="Episode title" {...masteredForm.register('title', { required: true })} />
          <textarea className="w-full rounded-xl border p-3" placeholder="Description" {...masteredForm.register('description')} />
          <input className="w-full rounded-xl border p-3" placeholder="Final MP3 URL" {...masteredForm.register('audioUrl', { required: true })} />
          <input className="w-full rounded-xl border p-3" type="number" placeholder="Duration (seconds)" {...masteredForm.register('duration', { valueAsNumber: true })} />
          <button className="rounded-full bg-midnight px-5 py-2 text-cream">Save Mastered Episode</button>
        </form>

        <form className={card} onSubmit={submitIntake}>
          <h3 className="font-heading text-2xl">2) Send Recording to Team (Direct Contact)</h3>
          <input className="w-full rounded-xl border p-3" placeholder="Sender name" {...intakeForm.register('senderName', { required: true })} />
          <input className="w-full rounded-xl border p-3" placeholder="Sender email" {...intakeForm.register('senderEmail', { required: true })} />
          <input className="w-full rounded-xl border p-3" placeholder="iPhone recording link (Drive/Dropbox)" {...intakeForm.register('recordingUrl', { required: true })} />
          <textarea className="w-full rounded-xl border p-3" placeholder="Notes for mastering" {...intakeForm.register('notes')} />
          <button className="rounded-full bg-midnight px-5 py-2 text-cream">Send to Production Intake</button>
        </form>

        <form className={card} onSubmit={submitQuick}>
          <h3 className="font-heading text-2xl">3) Quick Publish from Phone</h3>
          <input className="w-full rounded-xl border p-3" placeholder="Episode title" {...quickForm.register('title', { required: true })} />
          <textarea className="w-full rounded-xl border p-3" placeholder="Description" {...quickForm.register('description')} />
          <input className="w-full rounded-xl border p-3" placeholder="Recording URL" {...quickForm.register('audioUrl', { required: true })} />
          <input className="w-full rounded-xl border p-3" type="number" placeholder="Duration (seconds)" {...quickForm.register('duration', { valueAsNumber: true })} />
          <button className="rounded-full bg-gold px-5 py-2 text-midnight">Quick Publish Live</button>
        </form>

        <form className={card} onSubmit={submitTranscript}>
          <h3 className="font-heading text-2xl">4) Add Transcript + Generate Podcast Feed</h3>
          <input className="w-full rounded-xl border p-3" placeholder="Audio Message ID" {...transcriptForm.register('audioId', { required: true })} />
          <textarea className="min-h-40 w-full rounded-xl border p-3" placeholder="Transcript text" {...transcriptForm.register('transcript', { required: true })} />
          <button className="rounded-full bg-midnight px-5 py-2 text-cream">Attach Transcript</button>
          {rssUrl && (
            <p className="text-sm">
              RSS Feed: <a className="text-blue-700 underline" href={rssUrl} target="_blank" rel="noreferrer">{rssUrl}</a>
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default RecordingStudioPage;
