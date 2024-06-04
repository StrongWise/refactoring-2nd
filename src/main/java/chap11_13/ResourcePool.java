package chap11_13;

import java.util.*;

public class ResourcePool {
  public ResourcePool(int poolSize) {
    this.available = new LinkedList<>();
    for (int i = 1; i <= poolSize; i++) {
      this.available.add(new Resource(i));
    }
    this.allocated = new ArrayList<>();
  }

  private Deque<Resource> available;
  private List<Resource> allocated;

  public Resource get() {
    Resource result = available.isEmpty() ? Resource.create() : available.pop();
    allocated.add(result);
    return result;
  }
}
