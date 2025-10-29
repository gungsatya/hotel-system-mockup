export type ApprovalStatus =
  | "waiting for approval"
  | "revise"
  | "rejected"
  | "approved";

export interface RoomType {
  id: string;
  name: string;
  description: string;
  facilities: string;
  status: ApprovalStatus;
}

export const sampleRoomTypes: RoomType[] = [
  {
    id: "rt-001",
    name: "Deluxe Pool View",
    description: "Spacious room with king bed and pool view.",
    facilities: "WiFi, AC, TV, Minibar, Pool Access",
    status: "approved",
  },
  {
    id: "rt-002",
    name: "Superior Garden",
    description: "Cozy room facing tropical garden.",
    facilities: "WiFi, AC, TV",
    status: "rejected",
  },
  {
    id: "rt-003",
    name: "Family Suite",
    description: "Two-bedroom suite suitable for families.",
    facilities: "WiFi, AC, TV, Kitchenette, Living Area",
    status: "revise",
  },
  {
    id: "rt-004",
    name: "Standard",
    description: "Entry-level room for budget travelers.",
    facilities: "WiFi, AC",
    status: "waiting for approval",
  },
];

export const statusBadge = (status: ApprovalStatus) => {
  switch (status) {
    case "approved":
      return "bg-green-100 text-green-700";
    case "rejected":
      return "bg-red-100 text-red-700";
    case "revise":
      return "bg-amber-100 text-amber-700";
    case "waiting for approval":
    default:
      return "bg-blue-100 text-blue-700";
  }
};

