import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarBookingSectionProps {
  checkIn: string;
  checkOut: string;
  nights: number;
  onDateChange: (checkIn: string, checkOut: string) => void;
  onClearDates: () => void;
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const CalendarBookingSection: React.FC<CalendarBookingSectionProps> = ({
  checkIn,
  checkOut,
  nights,
  onDateChange,
  onClearDates
}) => {
  // Start near default booking window
  const [baseMonth, setBaseMonth] = useState({ year: 2025, month: 8 }); // Sep 2025

  const generateMonthDays = (year: number, monthIndex: number) => {
    const firstDay = new Date(year, monthIndex, 1).getDay();
    const totalDays = new Date(year, monthIndex + 1, 0).getDate();
    return { firstDay, totalDays };
  };

  const shiftMonth = (delta: number) => {
    setBaseMonth((prev) => {
      const d = new Date(prev.year, prev.month + delta, 1);
      return { year: d.getFullYear(), month: d.getMonth() };
    });
  };

  const nextMonthDate = new Date(baseMonth.year, baseMonth.month + 1, 1);
  const months = [
    { year: baseMonth.year, month: baseMonth.month },
    { year: nextMonthDate.getFullYear(), month: nextMonthDate.getMonth() }
  ];

  const formatDisplayDate = (iso: string) => {
    if (!iso) return '';
    const d = new Date(iso + 'T12:00:00');
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const renderDaysGrid = (year: number, monthIndex: number) => {
    const info = generateMonthDays(year, monthIndex);
    const days = [];

    for (let i = 0; i < info.firstDay; i++) {
      days.push(<div key={`pad-${year}-${monthIndex}-${i}`} className="h-9 w-9" />);
    }

    for (let day = 1; day <= info.totalDays; day++) {
      const dateStr = `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const isCheckIn = dateStr === checkIn;
      const isCheckOut = dateStr === checkOut;
      const isRange = Boolean(checkIn && checkOut && dateStr > checkIn && dateStr < checkOut);

      let cellStyle = 'hover:border hover:border-black rounded-full text-gray-800 font-medium';
      if (isCheckIn || isCheckOut) {
        cellStyle = 'bg-black text-white rounded-full font-bold shadow-sm';
      } else if (isRange) {
        cellStyle = 'bg-gray-100 text-black font-semibold rounded-none';
      }

      days.push(
        <button
          key={dateStr}
          type="button"
          onClick={() => {
            if (!checkIn || (checkIn && checkOut)) {
              onDateChange(dateStr, '');
            } else if (dateStr < checkIn) {
              onDateChange(dateStr, '');
            } else {
              onDateChange(checkIn, dateStr);
            }
          }}
          className={`h-9 w-9 flex items-center justify-center text-xs transition cursor-pointer ${cellStyle}`}
        >
          {day}
        </button>
      );
    }
    return days;
  };

  return (
    <div id="calendar" className="pb-8 border-b border-gray-200 space-y-4 scroll-mt-28">
      <div>
        <h3 className="font-bold text-xl text-[#222222]">
          {checkIn && checkOut && nights > 0
            ? `${nights} nights in Candolim`
            : 'Select check-in date'}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          {checkIn && checkOut
            ? `${formatDisplayDate(checkIn)} – ${formatDisplayDate(checkOut)}`
            : 'Add your travel dates for exact pricing'}
        </p>
      </div>

      <div className="pt-2">
        <div className="flex items-center justify-between max-w-2xl mb-4 px-2">
          <button
            type="button"
            onClick={() => shiftMonth(-1)}
            className="p-2 hover:bg-gray-100 rounded-full transition cursor-pointer"
            aria-label="Previous month"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => shiftMonth(1)}
            className="p-2 hover:bg-gray-100 rounded-full transition cursor-pointer"
            aria-label="Next month"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
          {months.map((m, idx) => (
            <div
              key={`${m.year}-${m.month}`}
              className={`space-y-3 ${idx === 1 ? 'hidden md:block' : ''}`}
            >
              <h4 className="text-center font-bold text-sm text-[#222222]">
                {MONTH_NAMES[m.month]} {m.year}
              </h4>
              <div className="grid grid-cols-7 text-center text-[11px] font-bold text-gray-500 mb-1">
                <span>Su</span><span>Mo</span><span>Tu</span><span>We</span>
                <span>Th</span><span>Fr</span><span>Sa</span>
              </div>
              <div className="grid grid-cols-7 gap-y-1 justify-items-center">
                {renderDaysGrid(m.year, m.month)}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end max-w-2xl pt-4">
          <button
            type="button"
            onClick={onClearDates}
            className="text-xs font-semibold underline text-gray-800 hover:text-black cursor-pointer"
          >
            Clear dates
          </button>
        </div>
      </div>
    </div>
  );
};
