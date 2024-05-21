import org.junit.Test;

import java.io.IOException;

import static org.junit.Assert.assertEquals;

public class AppTest {
    @Test public void testEmptyOrders() throws IOException {
      assertEquals(App.run(new String[]{"./src/test/resources/emptyOrders.json"}), 0);
    }
    @Test public void testOrders() throws IOException {
      assertEquals(App.run(new String[]{"./src/test/resources/orders.json"}), 3);
    }
    @Test public void testReadyOrders() throws IOException {
      assertEquals(App.run(new String[]{"-r", "./src/test/resources/readyOrders.json"}), 2);
    }
}
