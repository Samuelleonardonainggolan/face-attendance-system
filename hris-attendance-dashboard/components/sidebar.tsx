"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Fingerprint,
  MapPin,
  ClipboardCheck,
  Clock,
  Shield,
  FileText,
  Bell,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const iconMap: { [key: string]: React.ElementType } = {
  LayoutDashboard,
  Users,
  Fingerprint,
  MapPin,
  ClipboardCheck,
  Clock,
  Shield,
  FileText,
  Bell,
};

interface NavItem {
  name: string;
  href: string;
  icon: string;
}

const navigationItems: NavItem[] = [
  { name: "Dashboard", href: "/dashboard", icon: "LayoutDashboard" },
  { name: "Pegawai", href: "/dashboard/pegawai", icon: "Users" },
  { name: "Biometrik", href: "/dashboard/biometrik", icon: "Fingerprint" },
  { name: "Geofencing", href: "/dashboard/geofencing", icon: "MapPin" },
  { name: "Presensi", href: "/dashboard/presensi", icon: "ClipboardCheck" },
  { name: "Jam Kerja", href: "/dashboard/jam-kerja", icon: "Clock" },
  { name: "Keamanan", href: "/dashboard/keamanan", icon: "Shield" },
  { name: "Audit Log", href: "/dashboard/audit-log", icon: "FileText" },
  { name: "Notifikasi", href: "/dashboard/notifikasi", icon: "Bell" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-64 flex-col border-r border-gray-200 bg-white">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-gray-200 px-6 py-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
          G
        </div>
        <div>
          <h2 className="text-sm font-semibold text-gray-900">Dashboard HR</h2>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigationItems.map((item) => {
          const Icon = iconMap[item.icon];
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback className="bg-blue-600 text-white">RW</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              Robert Wilson
            </p>
            <p className="text-xs text-gray-500 truncate">Admin HR</p>
          </div>
        </div>
      </div>
    </div>
  );
}