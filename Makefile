
all: node-bench

node-bench:
	@! test -d build && mkdir build || true
	@gcc -DNODE_BENCH="\"$(PWD)/lib/cli-wrapper.js\"" -o build/node-bench src/node-bench.c
	@echo "built"

install: node-bench
	@cp build/node-bench /usr/local/bin/
	@echo "installed"

clean: uninstall
	@[ -d build ] && rm -rf build || true
	@echo "cleaned"

uninstall:
	@[ -f /usr/local/bin/node-bench ] && rm /usr/local/bin/node-bench || true
	@echo "uninstalled"

link: node-bench
	@ln -s build/node-bench /usr/local/bin/
	@echo "linked"
