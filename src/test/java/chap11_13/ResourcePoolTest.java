package chap11_13;

import junit.framework.TestCase;
import org.junit.Assert;

public class ResourcePoolTest extends TestCase {

  public void testGet() {
    ResourcePool resourcePool = new ResourcePool(3);

    Assert.assertEquals(resourcePool.get().getId(), 1);
    Assert.assertEquals(resourcePool.get().getId(), 2);
    Assert.assertEquals(resourcePool.get().getId(), 3);
    Assert.assertEquals(resourcePool.get().getId(), 0);
  }
}
