"use client";

import { useState, useEffect } from "react";
import { Search, Bell } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Header() {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  // Update waktu setiap detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update setiap 1 detik

    // Cleanup interval saat component unmount
    return () => clearInterval(timer);
  }, []);

  // Format tanggal: "Senin, 23 Okt"
  const currentDate = currentTime.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "short",
  });

  // Format waktu: "09:45:30 WIB"
  const formattedTime = currentTime.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }) + " WIB";

  return (
    <header className="border-b border-gray-200 bg-white px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Search Bar */}
        <div className="flex-1 max-w-xl">

        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Date & Time */}
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">{currentDate}</p>
            <p className="text-xs text-gray-500">Waktu Lokal: {formattedTime}</p>
          </div>

          {/* Notification Bell */}
          <button className="relative rounded-lg p-2 hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          {/* User Avatar */}
          <Avatar>
            <AvatarFallback className="bg-orange-400 text-white">RW</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}