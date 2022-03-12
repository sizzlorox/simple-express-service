import { Database } from "providers/Database";

export class BaseRepository {
  public database = Database.getInstance();
}
