bundle.js: main.js gen/scheming/um/auth/v1/*
	browserify main.js gen/scheming/um/auth/v1/* -o bundle.js -s enforcer
