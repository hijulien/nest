/*
  create-cat.dto.ts
*/
export class CreateCatDto {
  name: string;
  age: number;
}

export class UpdateCatDto {
  limit: string;
}

export class ListAllEntities {
  id: string;
  age: number;
}