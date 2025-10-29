export interface SummaryCard {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "steady";
}

export interface UpcomingReservation {
  guest: string;
  room: string;
  checkIn: string;
  checkOut: string;
  status: "Confirmed" | "Awaiting Payment" | "Checked-in";
}

export const summaryCards: SummaryCard[] = [
  { title: "Occupancy", value: "82%", change: "+5.3% vs last week", trend: "up" },
  { title: "Revenue", value: "IDR 128M", change: "+12% vs last month", trend: "up" },
  { title: "Average Daily Rate", value: "IDR 1.45M", change: "-3% vs last week", trend: "down" },
  { title: "Restaurant Covers", value: "346", change: "+18% vs last week", trend: "up" }
];

export const reservationPipeline = [
  { stage: "New", value: 18 },
  { stage: "Pending Payment", value: 7 },
  { stage: "Confirmed", value: 29 },
  { stage: "Checked-in", value: 21 }
];

export const upcomingReservations: UpcomingReservation[] = [
  { guest: "I Nyoman Artawan", room: "Deluxe Garden", checkIn: "12 Oct 2024", checkOut: "14 Oct 2024", status: "Confirmed" },
  { guest: "Ayu Dewi", room: "Ocean Suite", checkIn: "13 Oct 2024", checkOut: "18 Oct 2024", status: "Awaiting Payment" },
  { guest: "Chris Santoso", room: "Superior Pool", checkIn: "14 Oct 2024", checkOut: "16 Oct 2024", status: "Confirmed" },
  { guest: "Julia Pratama", room: "Family Villa", checkIn: "15 Oct 2024", checkOut: "20 Oct 2024", status: "Checked-in" }
];

export const staffingOverview = {
  totalEmployees: 64,
  onLeaveToday: 3,
  pendingRequests: 5,
  recentHires: [
    { name: "Rai Lestari", position: "Front Office", startDate: "2 Oct 2024" },
    { name: "Gede Wardana", position: "Sous Chef", startDate: "28 Sep 2024" }
  ]
};
