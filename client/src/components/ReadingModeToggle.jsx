import { BookOpenCheck } from 'lucide-react';
import { useReadingMode } from '../context/ReadingModeContext.jsx';

const ReadingModeToggle = () => {
  const { readingMode, toggleReadingMode } = useReadingMode();

  return (
    <button
      type="button"
      onClick={toggleReadingMode}
      className="inline-flex items-center gap-2 rounded-full border border-midnight/10 bg-white px-4 py-2 text-sm font-medium shadow-soft hover:-translate-y-0.5"
    >
      <BookOpenCheck className="h-4 w-4" />
      {readingMode ? 'Exit reading mode' : 'Enable reading mode'}
    </button>
  );
};

export default ReadingModeToggle;
