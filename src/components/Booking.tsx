// src/components/Booking.tsx
import { cn } from '../lib/utils';
import { useState } from 'react';
import { sendBookingEmails } from '../services/emailService';
import PictureIcon from './ui/PictureIcon';

type BookingType = 'call' | 'meeting' | 'mentorship';

// Timezone list with UTC offsets
const TIMEZONES = [
  { value: 'Africa/Johannesburg', label: 'South Africa (GMT +2)', offset: '+02:00' },
  { value: 'America/New_York', label: 'USA Eastern Time (GMT 4)', offset: '-04:00' },
  { value: 'America/Los_Angeles', label: 'USA Pacific Time (GMT 7)', offset: '-07:00' },
  { value: 'Europe/London', label: 'United Kingdom (GMT +1)', offset: '+01:00' },
  { value: 'Europe/Paris', label: 'Central Europe (GMT +2)', offset: '+02:00' },
  { value: 'Asia/Dubai', label: 'UAE / Dubai (GMT +4)', offset: '+04:00' },
  { value: 'Asia/Shanghai', label: 'China (GMT +8)', offset: '+08:00' },
  { value: 'Asia/Tokyo', label: 'Japan (GMT +9)', offset: '+09:00' },
  { value: 'Asia/Singapore', label: 'Singapore (GMT +8)', offset: '+08:00' },
  { value: 'Australia/Sydney', label: 'Australia (GMT +10)', offset: '+10:00' },
  { value: 'Pacific/Auckland', label: 'New Zealand (GMT +12)', offset: '+12:00' },
  { value: 'Asia/Kolkata', label: 'India (GMT +5:30)', offset: '+05:30' },
];

const Booking = () => {
  const [selectedType, setSelectedType] = useState<BookingType>('meeting');
  const [selectedDuration, setSelectedDuration] = useState('30');
  const [selectedPlatform, setSelectedPlatform] = useState('google');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [selectedTimezone, setSelectedTimezone] = useState(TIMEZONES[0].value); // Default to South Africa

  const bookingOptions = [
    {
      id: 'call' as const,
      title: 'Quick Call',
      image: '/icon-logo/clock_logo.png',
      description: '15 to 30 min',
      durations: ['15', '30'],
    },
    {
      id: 'meeting' as const,
      title: 'Meeting',
      image: '/icon-logo/meeting_logo.png',
      description: '30 to 60 min',
      durations: ['30', '60'],
    },
    {
      id: 'mentorship' as const,
      title: 'Mentorship',
      image: '/icon-logo/book_logo.png',
      description: '60 min',
      durations: ['60'],
    }
  ];

  // Helper: Check if a date is today
  const isToday = (date: Date): boolean => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  };

  // Helper: Check if a date is in the past
  const isPastDate = (year: number, month: number, day: number): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const checkDate = new Date(year, month, day);
    checkDate.setHours(0, 0, 0, 0);
    return checkDate < today;
  };

  // Get available time slots (only future times for today)
  const getAvailableTimeSlots = (date: Date | null): string[] => {
    const allTimeSlots = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'];
    
    if (!date) return allTimeSlots;
    
    const now = new Date();
    const isSelectedDateToday = isToday(date);
    
    if (!isSelectedDateToday) return allTimeSlots;
    
    // Filter out past times for today
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    
    return allTimeSlots.filter(timeSlot => {
      const [hour, minute] = timeSlot.split(':').map(Number);
      if (hour > currentHour) return true;
      if (hour === currentHour && minute > currentMinute) return true;
      return false;
    });
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days: (number | null)[] = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const days = getDaysInMonth(currentMonth);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const availableTimeSlots = getAvailableTimeSlots(selectedDate);

  // Check if a day is selectable (not in the past)
  const isDaySelectable = (day: number): boolean => {
    return !isPastDate(currentMonth.getFullYear(), currentMonth.getMonth(), day);
  };

  const handleDateSelect = (day: number) => {
    if (!isDaySelectable(day)) return;
    
    setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day));
    setSelectedTime(null);
    setShowForm(false);
    setSubmitStatus(null);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setShowForm(true);
    setSubmitStatus(null);
  };

  const handleBookingSubmit = async () => {
    if (selectedDate && selectedTime) {
      const nameInput = document.getElementById('bookingName') as HTMLInputElement;
      const emailInput = document.getElementById('bookingEmail') as HTMLInputElement;
      const messageInput = document.getElementById('bookingMessage') as HTMLTextAreaElement;
      
      const name = nameInput?.value;
      const email = emailInput?.value;
      const message = messageInput?.value || '';
      
      if (!name || !email) {
        setSubmitStatus({ type: 'error', message: 'Please enter your name and email' });
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setSubmitStatus({ type: 'error', message: 'Please enter a valid email address' });
        return;
      }
      
      setIsSubmitting(true);
      setSubmitStatus(null);
      
      // Get timezone label
      const timezone = TIMEZONES.find(tz => tz.value === selectedTimezone);
      
      const bookingData = {
        name: name,
        email: email,
        message: message,
        type: selectedType === 'call' ? 'Quick Call' : selectedType === 'meeting' ? 'Virtual Meeting' : 'Mentorship Session',
        duration: selectedDuration,
        platform: selectedPlatform,
        date: selectedDate,
        time: selectedTime,
        timezone: timezone?.label || 'South Africa (GMT +2)',
      };
      
      try {
        // Send emails using EmailJS
        const success = await sendBookingEmails(bookingData);
        
        if (success) {
          setSubmitStatus({ type: 'success', message: 'Booking confirmed! Check your email for details.' });
          
          // Reset form after 3 seconds
          setTimeout(() => {
            setSelectedDate(null);
            setSelectedTime(null);
            setShowForm(false);
            if (nameInput) nameInput.value = '';
            if (emailInput) emailInput.value = '';
            if (messageInput) messageInput.value = '';
            setSubmitStatus(null);
          }, 3000);
        } else {
          setSubmitStatus({ type: 'error', message: 'Failed to send booking. Please try again.' });
        }
      } catch (error) {
        console.error('Booking error:', error);
        setSubmitStatus({ 
          type: 'error', 
          message: 'Unable to process booking. Please email pnkotolane@gmail.com directly.' 
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    setSelectedDate(null);
    setSelectedTime(null);
    setShowForm(false);
    setSubmitStatus(null);
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    setSelectedDate(null);
    setSelectedTime(null);
    setShowForm(false);
    setSubmitStatus(null);
  };

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <section id="booking-section" className="section-padding border-t border-[#e4e7eb] bg-[#f6f7f8] dark:border-[#252d39] dark:bg-[#0e141e]">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mx-auto mb-7 max-w-2xl text-center">
          <p className="section-kicker">Schedule a conversation</p>
          <h2 className="section-title mx-auto mt-2">Book a call directly from my portfolio.</h2>
          <p className="section-copy mx-auto mt-3">Choose a meeting type, date and time. Recruiters and collaborators can use this page to speak with me directly.</p>
        </div>
        <div className="mx-auto w-full max-w-lg rounded-xl border border-[#e0e3e7] bg-white p-5 shadow-[0_8px_26px_rgba(15,23,42,0.05)] dark:border-[#2b3441] dark:bg-[#111722] sm:p-6">
        
        {/* Meeting type cards with clear picture icons */}
        <div className="mb-4 grid grid-cols-3 gap-2">
          {bookingOptions.map((option) => {
            const isSelected = selectedType === option.id;
            return (
              <button
                key={option.id}
                onClick={() => setSelectedType(option.id)}
                className={cn(
                  'flex min-w-0 items-center gap-2 rounded-lg border px-2.5 py-2 text-left transition-colors',
                  isSelected
                    ? 'border-[#172033] bg-[#172033] text-white dark:border-[#3b82f6] dark:bg-[#3b82f6] dark:text-white'
                    : 'border-[#e0e3e7] bg-[#f7f8fa] text-[#56606e] hover:bg-[#eef0f2] dark:border-[#303846] dark:bg-[#1a2230] dark:text-zinc-300 dark:hover:bg-[#202a39]'
                )}
              >
                <PictureIcon surface="transparent" src={option.image} size="md" className="shrink-0" />
                <span className="min-w-0">
                  <span className="block truncate text-xs font-semibold">{option.title}</span>
                  <span className="mt-0.5 block text-[10px] leading-3 opacity-75">{option.description}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Duration and Platform - Small row */}
        <div className="flex justify-center gap-2 mb-4">
          <div className="flex gap-1 rounded-md bg-[#eef0f2] dark:bg-[#1a2230] p-0.5">
            {bookingOptions.find(o => o.id === selectedType)?.durations.map((dur) => (
              <button
                key={dur}
                onClick={() => setSelectedDuration(dur)}
                className={cn(
                  'px-3 py-1 text-xs rounded-md transition-colors',
                  selectedDuration === dur
                    ? 'bg-[#172033] text-white dark:bg-[#3b82f6] dark:text-white'
                    : 'text-zinc-600 dark:text-zinc-400'
                )}
              >
                {dur}min
              </button>
            ))}
          </div>
          
          <div className="flex gap-1 rounded-md bg-[#eef0f2] dark:bg-[#1a2230] p-0.5">
            <button
              onClick={() => setSelectedPlatform('google')}
              className={cn(
                'px-3 py-1 text-xs rounded-md transition-colors',
                selectedPlatform === 'google'
                  ? 'bg-[#172033] text-white dark:bg-[#3b82f6] dark:text-white'
                  : 'text-zinc-600 dark:text-zinc-400'
              )}
            >
              Meet
            </button>
            <button
              onClick={() => setSelectedPlatform('teams')}
              className={cn(
                'px-3 py-1 text-xs rounded-md transition-colors',
                selectedPlatform === 'teams'
                  ? 'bg-[#172033] text-white dark:bg-[#3b82f6] dark:text-white'
                  : 'text-zinc-600 dark:text-zinc-400'
              )}
            >
              Teams
            </button>
          </div>
        </div>

        {/* Timezone Selector */}
        <div className="mb-3">
          <select
            value={selectedTimezone}
            onChange={(e) => setSelectedTimezone(e.target.value)}
            className="w-full rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-1.5 text-xs text-zinc-700 dark:text-zinc-300 focus:border-[#2563eb] focus:outline-none focus:ring-1 focus:ring-[#2563eb]"
          >
            {TIMEZONES.map((tz) => (
              <option key={tz.value} value={tz.value}>
                {tz.label}
              </option>
            ))}
          </select>
          <p className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-1 text-center">
            Your current timezone. Meeting times will be converted to South Africa time (GMT +2)
          </p>
        </div>

        {/* Calendar - Compact like reference */}
        <div className="bg-white dark:bg-[#111722] rounded-lg border border-[#e0e3e7] dark:border-[#303846] overflow-hidden shadow-sm">
          
          {/* Month header */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-100 dark:border-zinc-800">
            <button 
              onClick={prevMonth} 
              className="rounded-md border border-zinc-200 px-2.5 py-1 text-xs font-medium text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              Prev
            </button>
            <span className="text-sm font-medium text-zinc-900 dark:text-white">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </span>
            <button 
              onClick={nextMonth} 
              className="rounded-md border border-zinc-200 px-2.5 py-1 text-xs font-medium text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              Next
            </button>
          </div>

          {/* Week days */}
          <div className="grid grid-cols-7 gap-0.5 px-2 pt-2">
            {weekDays.map(day => (
              <div key={day} className="text-center text-[9px] font-medium text-zinc-500 dark:text-zinc-400 py-1">
                {day}
              </div>
            ))}
          </div>

          {/* Days */}
          <div className="grid grid-cols-7 gap-0.5 px-2 pb-2">
            {days.map((day, index) => {
              const isSelectable = day !== null && isDaySelectable(day);
              const isSelected = selectedDate?.getDate() === day && 
                selectedDate?.getMonth() === currentMonth.getMonth() &&
                selectedDate?.getFullYear() === currentMonth.getFullYear();
              
              return (
                <button
                  key={index}
                  onClick={() => day !== null && isSelectable && handleDateSelect(day)}
                  disabled={!day || !isSelectable}
                  className={cn(
                    'h-8 w-full text-xs font-medium rounded-md transition-all',
                    day && isSelectable && 'hover:bg-[#eff6ff] dark:hover:bg-[#0f1b2d] cursor-pointer',
                    isSelected
                      ? 'bg-[#172033] text-white dark:bg-[#3b82f6] dark:text-white'
                      : day && isSelectable
                      ? 'text-zinc-900 dark:text-white'
                      : day && !isSelectable
                      ? 'text-zinc-300 dark:text-zinc-700 line-through cursor-not-allowed'
                      : 'text-zinc-300 dark:text-zinc-700 cursor-default'
                  )}
                >
                  {day || ''}
                </button>
              );
            })}
          </div>

          {/* Status Message */}
          {submitStatus && (
            <div className={cn(
              'mx-3 mb-2 p-2 rounded-md text-xs text-center',
              submitStatus.type === 'success' 
                ? 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                : 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400'
            )}>
              {submitStatus.message}
            </div>
          )}

          {/* Time slots - Small */}
          {selectedDate && !showForm && !submitStatus && (
            <div className="border-t border-zinc-100 dark:border-zinc-800 px-3 py-2">
              <p className="text-[10px] text-zinc-500 dark:text-zinc-400 mb-1.5">
                {selectedDate.toLocaleDateString('default', { month: 'short', day: 'numeric' })}
                {isToday(selectedDate) && (
                  <span className="ml-1 text-[#2563eb] dark:text-[#3b82f6]">(Today)</span>
                )}
              </p>
              <div className="flex flex-wrap gap-1">
                {availableTimeSlots.length > 0 ? (
                  availableTimeSlots.map(time => (
                    <button
                      key={time}
                      onClick={() => handleTimeSelect(time)}
                      className="px-2 py-0.5 rounded-md border border-zinc-200 dark:border-zinc-700 text-[10px] hover:border-[#2563eb] hover:bg-[#eff6ff] dark:hover:bg-[#0f1b2d] transition-colors"
                    >
                      {time}
                    </button>
                  ))
                ) : (
                  <p className="text-[10px] text-zinc-400 py-1">
                    No available times for today. Please select another date.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Booking form - Minimal */}
          {showForm && selectedDate && selectedTime && !submitStatus && (
            <div className="border-t border-zinc-100 dark:border-zinc-800 p-3">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="text-xs font-medium text-zinc-900 dark:text-white">
                    {selectedDate.toLocaleDateString('default', { month: 'short', day: 'numeric' })} at {selectedTime}
                  </p>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400">
                    {TIMEZONES.find(tz => tz.value === selectedTimezone)?.label}
                  </p>
                </div>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-[10px] text-zinc-500 hover:text-zinc-700"
                >
                  Back
                </button>
              </div>
              
              <form id="bookingForm" className="space-y-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  id="bookingName"
                  type="text"
                  placeholder="Full name *"
                  className="w-full rounded-lg border border-zinc-200 dark:border-zinc-700 px-2 py-1.5 text-xs bg-white dark:bg-zinc-900"
                  required
                />
                <input
                  id="bookingEmail"
                  type="email"
                  placeholder="Email address *"
                  className="w-full rounded-lg border border-zinc-200 dark:border-zinc-700 px-2 py-1.5 text-xs bg-white dark:bg-zinc-900"
                  required
                />
                <textarea
                  id="bookingMessage"
                  placeholder="What would you like to discuss? (optional)"
                  rows={2}
                  className="w-full rounded-lg border border-zinc-200 dark:border-zinc-700 px-2 py-1.5 text-xs bg-white dark:bg-zinc-900"
                />
                <button
                  type="button"
                  onClick={handleBookingSubmit}
                  disabled={isSubmitting}
                  className={cn(
                    'w-full rounded-lg py-1.5 text-xs text-white font-medium transition-all',
                    isSubmitting
                      ? 'bg-[#a7adb7] cursor-not-allowed'
                      : 'bg-[#172033] hover:bg-[#0f172a] dark:bg-[#3b82f6] dark:text-white dark:hover:bg-[#2563eb]'
                  )}
                >
                  {isSubmitting ? 'Sending...' : 'Confirm Booking'}
                </button>
              </form>
            </div>
          )}
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Questions before booking? <a href="mailto:pnkotolane@gmail.com" className="font-medium text-[#2563eb] hover:underline dark:text-[#3b82f6]">pnkotolane@gmail.com</a>
          </p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;