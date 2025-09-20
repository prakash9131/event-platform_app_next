"use client";

import React, { useState, useEffect } from 'react';
import { seedEventlyEvents } from '@/lib/actions/seed.actions';

const OneTimeSeeder = () => {
  const [isSeeding, setIsSeeding] = useState(false);
  const [message, setMessage] = useState('');
  const [hasSeeded, setHasSeeded] = useState(false);

  // Check if already seeded
  const checkSeeded = () => {
    if (typeof window !== 'undefined') {
      const seeded = localStorage.getItem('eventsSeeded');
      if (seeded === 'true') {
        setHasSeeded(true);
      }
    }
  };

  // Run check on mount
  useEffect(() => {
    checkSeeded();
  }, []);

  const addAllEvents = async () => {
    setIsSeeding(true);
    setMessage('Adding events for all categories...');
    
    try {
      const result = await seedEventlyEvents();

      if (result.success) {
        setMessage('Success! All events added. Refreshing page...');
        localStorage.setItem('eventsSeeded', 'true');
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        setMessage('Error: Failed to add events');
        setIsSeeding(false);
      }
    } catch (error) {
      setMessage('Error: Could not add events');
      setIsSeeding(false);
    }
  };

  // Don't show if already seeded
  if (hasSeeded) return null;

  if (isSeeding) {
    return (
      <div className="fixed top-4 right-4 bg-blue-100 text-blue-800 px-4 py-3 rounded-lg shadow-lg z-50">
        <p className="font-semibold">Adding Events</p>
        <p className="text-sm">{message}</p>
      </div>
    );
  }

  return (
    <div className="fixed top-4 right-4 bg-green-100 text-green-800 px-4 py-3 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold">Add Events</h3>
        <button 
          onClick={() => setHasSeeded(true)}
          className="text-green-600 hover:text-green-800 ml-2"
        >
          ×
        </button>
      </div>
      
      <div className="text-sm space-y-2">
        <p>Click to add events for all categories (ensures every category has at least one event).</p>
        
        <button 
          onClick={addAllEvents}
          className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors w-full"
        >
          Add Events for All Categories
        </button>
        
        <p className="text-xs text-green-600">
          ✅ Covers all 16+ categories ✅ Shows all events in "All" mode ✅ 7 different images ✅ No more persistent popup
        </p>
      </div>
    </div>
  );
};

export default OneTimeSeeder;
