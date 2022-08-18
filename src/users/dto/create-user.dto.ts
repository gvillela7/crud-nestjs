export class CreateUserDto {
  id: number;
  name: string;
  email: string;
  phones: {
    id: number;
    number: string;
  }[];
}
