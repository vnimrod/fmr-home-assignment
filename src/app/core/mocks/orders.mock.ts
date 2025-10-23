import type { UserOrder } from '../../features/user-orders/feature-state/user-orders.models';

export const ORDERS_MOCK: UserOrder[] = [
  {
    id: '101',
    userId: '1',
    totalPrice: 899,
    createdAt: '2025-09-28T10:15:00Z',
    description: '42-inch Smart LED TV',
  },
  {
    id: '102',
    userId: '1',
    totalPrice: 249,
    createdAt: '2025-10-03T12:40:00Z',
    description: 'Wireless Bluetooth Soundbar',
  },
  {
    id: '103',
    userId: '2',
    totalPrice: 119,
    createdAt: '2025-10-05T08:25:00Z',
    description: 'Electric Kettle with Temperature Control',
  },
  {
    id: '104',
    userId: '3',
    totalPrice: 499,
    createdAt: '2025-10-07T09:50:00Z',
    description: 'Robot Vacuum Cleaner',
  },
  {
    id: '105',
    userId: '4',
    totalPrice: 329,
    createdAt: '2025-10-09T14:10:00Z',
    description: 'Microwave Oven with Grill Function',
  },
  {
    id: '106',
    userId: '4',
    totalPrice: 89,
    createdAt: '2025-10-11T16:45:00Z',
    description: 'Electric Toaster 4-Slice',
  },
  {
    id: '107',
    userId: '2',
    totalPrice: 649,
    createdAt: '2025-10-13T11:20:00Z',
    description: 'Front Load Washing Machine 7kg',
  },
  {
    id: '108',
    userId: '3',
    totalPrice: 1299,
    createdAt: '2025-10-15T15:05:00Z',
    description: 'Inverter Refrigerator 400L',
  },
];
