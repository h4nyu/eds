import { Lock, Store } from "@app/core";
import { User } from "@app/core/user";
import { Role } from "@app/core/constants";

export type Fn = (payload: {
  name: string;
}) => Promise<User | Error>;

export const CreateUser = (props: { store: Store; lock: Lock }): Fn => {
  return async (payload) => {
    return await props.lock.auto(async () => {
      const user = User({
        name: payload.name,
        role: Role.Guest,
      });
      const err = await props.store.user.create(user);
      if (err instanceof Error) return err; 
      return user;
    });
  };
};
