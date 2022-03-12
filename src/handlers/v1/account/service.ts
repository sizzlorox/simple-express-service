export class AccountService {
  create(data: any) {
    return "create" + data;
  }
  get() {
    return "get";
  }
  getById(id: string) {
    return "getById" + id;
  }
  updateById(id: string) {
    return "updateById" + id;
  }
  deleteById(id: string) {
    return "deleteById" + id;
  }
}
export default AccountService;
