// src/components/Booking.tsx
import { Clock, Video, BookOpen } from './icons';
import { cn } from '../lib/utils';
import { useState } from 'react';
import { sendBookingEmails } from '../services/emailService';

type BookingType = 'call' | 'meeting' | 'mentorship';

// Timezone list with UTC offsets
const TIMEZONES = [
  { value: 'Africa/Johannesburg', label: 'South Africa (GMT+2)', offset: '+02:00' },
  { value: 'America/New_York', label: 'USA - Eastern Time (GMT-4)', offset: '-04:00' },
  { value: 'America/Los_Angeles', label: 'USA - Pacific Time (GMT-7)', offset: '-07:00' },
  { value: 'Europe/London', label: 'United Kingdom (GMT+1)', offset: '+01:00' },
  { value: 'Europe/Paris', label: 'Central Europe (GMT+2)', offset: '+02:00' },
  { value: 'Asia/Dubai', label: 'UAE / Dubai (GMT+4)', offset: '+04:00' },
  { value: 'Asia/Shanghai', label: 'China (GMT+8)', offset: '+08:00' },
  { value: 'Asia/Tokyo', label: 'Japan (GMT+9)', offset: '+09:00' },
  { value: 'Asia/Singapore', label: 'Singapore (GMT+8)', offset: '+08:00' },
  { value: 'Australia/Sydney', label: 'Australia (GMT+10)', offset: '+10:00' },
  { value: 'Pacific/Auckland', label: 'New Zealand (GMT+12)', offset: '+12:00' },
  { value: 'Asia/Kolkata', label: 'India (GMT+5:30)', offset: '+05:30' },
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
      icon: Clock,
      description: '15-30 min',
      durations: ['15', '30'],
    },
    {
      id: 'meeting' as const,
      title: 'Meeting',
      icon: Video,
      description: '30-60 min',
      durations: ['30', '60'],
    },
    {
      id: 'mentorship' as const,
      title: 'Mentorship',
      icon: BookOpen,
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
  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
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
        timezone: timezone?.label || 'South Africa (GMT+2)',
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
    <section id="booking-section" className="py-8 overflow-x-hidden">
      <div className="mx-auto w-full min-w-0 max-w-md px-4">
        
        {/* Meeting Type - Small pills */}
        <div className="flex gap-1.5 mb-3 justify-center">
          {bookingOptions.map((option) => {
            const Icon = option.icon;
            const isSelected = selectedType === option.id;
            return (
              <button
                key={option.id}
                onClick={() => setSelectedType(option.id)}
                className={cn(
                  'flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs transition-all',
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                )}
              >
                <Icon className="h-3 w-3" />
                <span>{option.title}</span>
                <span className="text-[10px] opacity-70">{option.description}</span>
              </button>
            );
          })}
        </div>

        {/* Duration and Platform - Small row */}
        <div className="flex justify-center gap-2 mb-4">
          <div className="flex gap-1 rounded-full bg-zinc-100 dark:bg-zinc-800 p-0.5">
            {bookingOptions.find(o => o.id === selectedType)?.durations.map((dur) => (
              <button
                key={dur}
                onClick={() => setSelectedDuration(dur)}
                className={cn(
                  'px-3 py-1 text-xs rounded-full transition-all',
                  selectedDuration === dur
                    ? 'bg-indigo-600 text-white'
                    : 'text-zinc-600 dark:text-zinc-400'
                )}
              >
                {dur}min
              </button>
            ))}
          </div>
          
          <div className="flex gap-1 rounded-full bg-zinc-100 dark:bg-zinc-800 p-0.5">
            <button
              onClick={() => setSelectedPlatform('google')}
              className={cn(
                'px-3 py-1 text-xs rounded-full transition-all',
                selectedPlatform === 'google'
                  ? 'bg-indigo-600 text-white'
                  : 'text-zinc-600 dark:text-zinc-400'
              )}
            >
              Meet
            </button>
            <button
              onClick={() => setSelectedPlatform('teams')}
              className={cn(
                'px-3 py-1 text-xs rounded-full transition-all',
                selectedPlatform === 'teams'
                  ? 'bg-indigo-600 text-white'
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
            className="w-full rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-1.5 text-xs text-zinc-700 dark:text-zinc-300 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            {TIMEZONES.map((tz) => (
              <option key={tz.value} value={tz.value}>
                {tz.label}
              </option>
            ))}
          </select>
          <p className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-1 text-center">
            Your current timezone — meeting times will be converted to South Africa time (GMT+2)
          </p>
        </div>

        {/* Calendar - Compact like reference */}
        <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 overflow-hidden shadow-sm">
          
          {/* Month header */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-100 dark:border-zinc-800">
            <button 
              onClick={prevMonth} 
              className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded text-sm"
            >
              ←
            </button>
            <span className="text-sm font-medium text-zinc-900 dark:text-white">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </span>
            <button 
              onClick={nextMonth} 
              className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded text-sm"
            >
              →
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
                    day && isSelectable && 'hover:bg-indigo-50 dark:hover:bg-indigo-900/30 cursor-pointer',
                    isSelected
                      ? 'bg-indigo-600 text-white'
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
                  <span className="ml-1 text-indigo-600 dark:text-indigo-400">(Today)</span>
                )}
              </p>
              <div className="flex flex-wrap gap-1">
                {availableTimeSlots.length > 0 ? (
                  availableTimeSlots.map(time => (
                    <button
                      key={time}
                      onClick={() => handleTimeSelect(time)}
                      className="px-2 py-0.5 rounded-md border border-zinc-200 dark:border-zinc-700 text-[10px] hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all"
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
                      ? 'bg-indigo-400 cursor-not-allowed'
                      : 'bg-indigo-600 hover:bg-indigo-700'
                  )}
                >
                  {isSubmitting ? 'Sending...' : 'Confirm Booking'}
                </button>
              </form>
            </div>
          )}
        </div>

        <div className="mt-3 text-center">
          <p className="text-[10px] text-zinc-500 dark:text-zinc-400">
            <a href="mailto:pnkotolane@gmail.com" className="text-indigo-600 hover:underline">pnkotolane@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Booking;