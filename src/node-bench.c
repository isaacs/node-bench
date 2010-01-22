#define NODE_BENCH "/usr/local/lib/node-bench/cli-wrapper.js"
#include <unistd.h>
int main (int argc, char** argv) {
  return execl(
    NODE_BIN,
    "node",
    NODE_BENCH,
    argv[argc - 1],
    (char *)NULL
  );
}
