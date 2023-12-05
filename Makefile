run-go-services:
	cd demos/go && go run ./cmd/all/main.go

run-router:
	wgc router download-binary; cd ./router && ./router

run-go:
	$(MAKE) -j2 run-router run-go-services

run-ts-services:
	npm run services

run-ts:
	$(MAKE) -j2 run-router run-ts-services