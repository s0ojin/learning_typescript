/**
 * Visibility Keyword
 *
 * 1) public(기본값) - 어디서든 접근가능
 * 2) protected - 현재 클래스 및 하위 (자식) 클래스에서 접근 가능
 * 3) private - 현재 클래스 내부에서만 접근 가능
 */

class PropertyTestParent {
  public publicProperty = "public property";
  protected protectedProperty = "protected property";
  private privateProperty = "private property";
  #jsPrivateProperty = "js private property"; //js private property, 나머지는 ts에만 존재

  test() {
    this.publicProperty;
    this.protectedProperty;
    this.privateProperty;
    this.#jsPrivateProperty;
  }
}

class PropertyTestChild extends PropertyTestParent {
  test() {
    this.publicProperty;
    this.protectedProperty;
    // this.privateProperty;
    // this.#jsPrivateProperty;
  }
}

// public을 제외한 나머지는 instance에서 접근 불가
const instance = new PropertyTestChild();
instance.publicProperty;
// instance.protectedProperty;
// instance.privateProperty;
// instance.#jsPrivateProperty;
