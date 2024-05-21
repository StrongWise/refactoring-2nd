import java.util.stream.Stream;

public class CommandLine {
  String[] args;

  public CommandLine(String[] args) {
    this.args = args;
    if (args.length == 0) throw new RuntimeException("파일명을 입력하세요.");
  }

  String filename() {
      return args[args.length - 1];
  }

  boolean onlyCountReady() {
    return Stream.of(args).anyMatch(arg -> "-r".equals(arg));
  }
}
