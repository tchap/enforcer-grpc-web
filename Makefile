bundle.js: main.js gen/scheming/um/auth/v1/*
	browserify main.js gen/scheming/um/auth/v1/* -o bundle.js -s enforcer

.PHONY: pb

pb:
	protoc scheming/um/auth/v1/enforcer_api.proto \
		--js_out=import_style=commonjs:gen \
		--grpc-web_out=import_style=commonjs,mode=grpcwebtext:gen
