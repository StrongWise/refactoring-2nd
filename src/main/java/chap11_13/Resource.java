package chap11_13;

public class Resource {
  private int id = 0;

  public int getId() {
    return id;
  }

  public Resource(int id) {
    this.id = id;
  }

  static Resource create() {
    return new Resource(0);
  }
}
