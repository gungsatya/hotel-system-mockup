export type RoleCode =
  | "S-ADM"
  | "ADM"
  | "S"
  | "ACC"
  | "M";

export interface NavigationLeaf {
  name: string;
  role: RoleCode[];
  href: string;
}

export interface NavigationGroup {
  name: string;
  href?: string;
  children?: NavigationLeaf[];
  role: RoleCode[];
}

export const navigation: NavigationGroup[] = [
  {
    name: "Dashboard",
    href: "/",
    role: ["S-ADM", "ADM", "S", "ACC", "M"]
  },
  {
    name: "Reception",
    role: ["S-ADM", "S"],
    children: [
      { name: "Reservation", href: "/reception/reservation", role: ["S-ADM", "S"] },
      { name: "Check-in", href: "/reception/check-in", role: ["S-ADM", "S"] },
      { name: "In-house", href: "/reception/in-house", role: ["S-ADM", "S"] },
      { name: "Check-out", href: "/reception/check-out", role: ["S-ADM", "S"] }
    ]
  },
  {
    name: "Restaurant",
    role: ["S-ADM", "S"],
    children: [
      { name: "Transaction", href: "/restaurant/transaction", role: ["S-ADM", "S"] }
    ]
  },
  {
    name: "Operational",
    role: ["S-ADM", "ACC", "M"],
    children: [
      { name: "Daily Expend", href: "/operational/daily-expend", role: ["S-ADM", "ACC"] },
      { name: "Approval Daily Expend", href: "/operational/approval-daily-expend", role: ["S-ADM", "M"] },
      { name: "Tip", href: "/operational/tip", role: ["S-ADM", "S"] }
    ]
  },
  {
    name: "Staffing",
    role: ["S-ADM", "ACC", "M", "S", "ADM"],
    children: [
      { name: "Kasbon", href: "/staffing/kasbon", role: ["S-ADM", "ACC"] },
      { name: "Approval Kasbon", href: "/staffing/approval-kasbon", role: ["S-ADM", "M"] },
      { name: "Payroll", href: "/staffing/payroll", role: ["S-ADM", "ACC"] },
      { name: "Payroll Slip", href: "/staffing/payroll-slip", role: ["S-ADM", "M", "ACC"] },
      { name: "Employee Payroll Slip", href: "/staffing/employee-payroll-slip", role: ["S"] },
      { name: "Maintain Employee", href: "/staffing/maintain-employee", role: ["S-ADM", "ADM"] },
      { name: "Approval Employee", href: "/staffing/approval-employee", role: ["S-ADM", "M"] },
      { name: "Employee", href: "/staffing/employee", role: ["S-ADM", "M"] }
    ]
  },
  {
    name: "Master Data",
    role: ["S-ADM", "ADM", "M"],
    children: [
      { name: "Maintain Room Rate", href: "/master-data/maintain-room-rate", role: ["S-ADM", "ADM"] },
      { name: "Approval Room Rate", href: "/master-data/approval-room-rate", role: ["S-ADM", "M"] },
      { name: "Room Rate", href: "/master-data/room-rate", role: ["S-ADM", "M"] },
      { name: "Maintain Room Type", href: "/master-data/maintain-room-type", role: ["S-ADM", "ADM"] },
      { name: "Approval Room Type", href: "/master-data/approval-room-type", role: ["S-ADM", "M"] },
      { name: "Room Type", href: "/master-data/room-type", role: ["S-ADM", "M"] },
      { name: "Maintain Position", href: "/master-data/maintain-position", role: ["S-ADM", "ADM"] },
      { name: "Approval Position", href: "/master-data/approval-position", role: ["S-ADM", "M"] },
      { name: "Position", href: "/master-data/position", role: ["S-ADM", "M"] },
      { name: "Maintain Booking Agent", href: "/master-data/maintain-booking-agent", role: ["S-ADM", "ADM"] },
      { name: "Approval Booking Agent", href: "/master-data/approval-booking-agent", role: ["S-ADM", "M"] },
      { name: "Booking Agent", href: "/master-data/booking-agent", role: ["S-ADM", "M"] },
      { name: "Maintain System Configuration", href: "/master-data/maintain-system-configuration", role: ["S-ADM", "ADM"] },
      { name: "Approval System Configuration", href: "/master-data/approval-system-configuration", role: ["S-ADM", "M"] },
      { name: "System Configuration", href: "/master-data/system-configuration", role: ["S-ADM", "M"] }
    ]
  },
  {
    name: "Reporting",
    role: ["S-ADM", "ADM", "ACC", "M"],
    children: [
      { name: "Daily Report", href: "/reporting/daily", role: ["S-ADM", "ADM", "ACC", "M"] },
      { name: "Month to Date", href: "/reporting/month-to-date", role: ["S-ADM", "ADM", "ACC", "M"] },
      { name: "Year to Date", href: "/reporting/year-to-date", role: ["S-ADM", "ADM", "ACC", "M"] }
    ]
  },
  {
    name: "User Management",
    role: ["S-ADM"],
    children: [
      { name: "Users", href: "/user-management", role: ["S-ADM"] }
    ]
  }
];

export interface RoleOption {
  code: RoleCode;
  name: string;
}

export const roleOptions: RoleOption[] = [
  { code: "S-ADM", name: "Super Administrator" },
  { code: "ADM", name: "Administrator" },
  { code: "S", name: "Staff" },
  { code: "ACC", name: "Accountant" },
  { code: "M", name: "Manager" }
];

export const hotelInfo = {
  name: "Rama Shinta Hotel",
  location: "Candidasa, Bali"
};

export const activeUser = {
  name: "Made Wijaya",
  activeRole: "S-ADM" as RoleCode,
  availableRoles: roleOptions.map((role) => role.code)
};
