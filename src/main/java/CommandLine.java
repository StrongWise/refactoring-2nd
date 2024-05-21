import java.util.stream.Stream;

public class CommandLine {
  String[] args;

  public CommandLine(String[] args) {
    this.args = args;
  }

  String filename() {
      return args[args.length - 1];
  }

  boolean onlyCountReady() {
    return Stream.of(args).anyMatch(arg -> "-r".equals(arg));
  }
}
