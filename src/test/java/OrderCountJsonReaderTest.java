import org.junit.Test;

import java.io.IOException;

public class OrderCountJsonReaderTest {
    @Test public void testEmptyOrders() throws IOException {
      OrderCountJsonReader.main(new String[]{"./src/test/resources/emptyOrders.json"});
    }
    @Test public void testOrders() throws IOException {
      OrderCountJsonReader.main(new String[]{"./src/test/resources/orders.json"});
    }
    @Test public void testReadyOrders() throws IOException {
      OrderCountJsonReader.main(new String[]{"-r", "./src/test/resources/readyOrders.json"});
    }
}
