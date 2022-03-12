import { BaseRepository } from "base/BaseRepository";

export class AccountRepository extends BaseRepository {
  create(data: any) {
    return this.database.insert(data).into("accounts");
  }
}
