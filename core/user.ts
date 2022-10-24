import { Role } from '@app/core/constants';
import { nanoid } from 'nanoid'

export type User = {
  id: string;
  name: string;
  role: Role
  createdAt: Date;
}
export const User = (props: Partial<User>) => {;
  const id = props.id ?? nanoid()
  const name = props.name ?? 'Anonymous'
  const role = props.role ?? Role.Guest
  const createdAt = props.createdAt ?? new Date()
  return { id, name, role, createdAt }
}



