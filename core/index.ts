export { ErrorKind } from "@kkpm/core/error";
import { User } from "@kkpm/core/user"

export type Lock = {
  auto: <T>(fn: () => Promise<T>) => Promise<T>;
}

export type UserStore = {
  create: (req: User) => Promise<void | Error>;
  find: (payload: { id?: string }) => Promise<User | undefined | Error>;
  filter: (payload: {}) => Promise<User[] | Error>;
  delete: (payload: { id: string }) => Promise<void | Error>;
  clear: () => Promise<void | Error>;
};

export type Store = {
  user: UserStore;
};
