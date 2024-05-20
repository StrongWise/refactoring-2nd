import org.junit.Test;

import java.io.IOException;

public class OrderCountJsonReaderTest {
    @Test public void testEmptyOrders() throws IOException {
      OrderCountJsonReader.main(new String[]{"./src/test/resources/emptyOrders.json"});
    }
}
