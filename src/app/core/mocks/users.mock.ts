import type * as UserModels from '../../features/users/feature-state/users.models';

export const USERS_MOCK: UserModels.User[] = [
  {
    id: '1',
    name: 'Nimrod',
    email: 'nimrod@example.com',
    createdAt: '2025-01-15T09:30:00Z',
  },
  {
    id: '2',
    name: 'Dafna',
    email: 'dafna@example.com',
    createdAt: '2025-02-02T14:45:00Z',
  },
  {
    id: '3',
    name: 'Ohad',
    email: 'ohad@example.com',
    createdAt: '2025-03-20T11:10:00Z',
  },
  {
    id: '4',
    name: 'Jonathan',
    email: 'jonathan@example.com',
    createdAt: '2025-04-01T16:25:00Z',
  },
];
