'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { CalendarIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';
import 'react-datepicker/dist/react-datepicker.css';

type DateRangeButtonProps = {
  placeholder?: string; // 👈 Add a prop for custom text
};

const DateRangeButton = ({ placeholder = 'Select date range' }: DateRangeButtonProps) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [open, setOpen] = useState(false);

  const formatDate = (date: Date) =>
    date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

  const displayText =
    startDate && endDate
      ? `${formatDate(startDate)} - ${formatDate(endDate)}`
      : placeholder;

  return (
    <div className="relative w-fit">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between border border-gray-300 rounded bg-white px-4 py-2 shadow-md hover:shadow-lg transition w-full"
      >
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-5 h-5 text-gray-500" />
          <span className="text-gray-600 font-medium">{displayText}</span>
        </div>
        <ChevronUpDownIcon className="w-5 h-5 text-gray-500 ml-4" />
      </button>

      {/* DatePicker popup */}
      {open && (
        <div className="absolute top-full mt-2 z-50 bg-white shadow-lg p-4 rounded-lg">
          <DatePicker
            selected={startDate}
            onChange={(dates) => {
              const [start, end] = dates as [Date, Date];
              setStartDate(start);
              setEndDate(end);

              if (start && end) {
                setOpen(open);
              }
            }}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
          />
        </div>
      )}
    </div>
  );
};

export default DateRangeButton;
