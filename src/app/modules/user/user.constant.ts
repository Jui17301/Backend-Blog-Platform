export const USER_ROLE = {
  user: 'user',
  admin: 'admin',
} as const; //as const for readonly

export type TUserRole = keyof typeof USER_ROLE;
