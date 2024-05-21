public class CommandLine {
  String[] args;

  public CommandLine(String[] args) {
    this.args = args;
  }

  String filename() {
      return args[args.length - 1];
  }
}
