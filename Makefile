
all: node-bench

node-bench:
	@! test -d build && mkdir build || true
	@gcc -DNODE_BENCH="\"$(PWD)/lib/cli-wrapper.js\"" -o build/node-bench src/node-bench.c
	@echo "built"
