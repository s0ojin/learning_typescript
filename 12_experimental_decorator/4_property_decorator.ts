/**
 * 프로퍼티 데코레이터
 */

class UserModel {
  @PropertyLogger
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

function PropertyLogger(target: any, propertyKey: string) {
  console.log(`${propertyKey} property call logging...`);
}
