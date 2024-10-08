package chap11_13;

import java.util.*;

public class ResourcePool_Origin {
  public ResourcePool_Origin(int poolSize) {
    this.available = new LinkedList<>();
    for (int i = 1; i <= poolSize; i++) {
      this.available.add(new Resource(i));
    }
    this.allocated = new ArrayList<>();
  }

  private Deque<Resource> available;
  private List<Resource> allocated;
  public Resource get() {
    Resource result;
    try {
      result = available.pop();
      allocated.add(result);
    } catch (NoSuchElementException e) {
      result = Resource.create();
      allocated.add(result);
    }
    return result;
  }
}
