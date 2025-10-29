import type { ApprovalStatus } from "@data/room-type";
import { sampleRoomTypes } from "@data/room-type";

export interface RoomRate {
  id: string;
  roomTypeId: string; // reference to RoomType.id
  name: string;
  amount: number;
  isDefault: boolean;
  startDate: string; // ISO string (YYYY-MM-DD)
  endDate: string; // ISO string (YYYY-MM-DD)
  status: ApprovalStatus;
}

export const sampleRoomRates: RoomRate[] = [
  {
    id: "rr-001",
    roomTypeId: "rt-001",
    name: "Deluxe Flex",
    amount: 850000,
    isDefault: true,
    startDate: "-",
    endDate: "-",
    status: "approved",
  },
  {
    id: "rr-002",
    roomTypeId: "rt-001",
    name: "Deluxe Promo Summer",
    amount: 650000,
    isDefault: false,
    startDate: "2025-06-01",
    endDate: "2025-08-31",
    status: "waiting for approval",
  },
  {
    id: "rr-003",
    roomTypeId: "rt-003",
    name: "Family Long Stay",
    amount: 1200000,
    isDefault: false,
    startDate: "2025-02-01",
    endDate: "2025-05-31",
    status: "revise",
  },
  {
    id: "rr-004",
    roomTypeId: "rt-002",
    name: "Superior Early Bird",
    amount: 500000,
    isDefault: false,
    startDate: "2025-03-01",
    endDate: "2025-04-30",
    status: "rejected",
  },
];

export const roomTypeNameMap = new Map(sampleRoomTypes.map((rt) => [rt.id, rt.name]));
