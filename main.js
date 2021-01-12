const api = require('./gen/scheming/um/auth/v1/enforcer_api_grpc_web_pb');

const client = new api.EnforcerAPIPromiseClient('http://localhost:8000');

const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {});
enableDevTools([client]);

function enforce(enforcer_name, request) {
    const req = new api.EnforceRequest();
    req.setEnforcerName(enforcer_name);
    req.setRequestList(request);
    return client.enforce(req);
}

function on_submit() {
    const form = document.getElementById("request");
    const req = [
        form.elements['subject'].value,
        form.elements['object'].value,
        form.elements['action'].value
    ];

    return enforce('um/bundles', req).then(
        resp => append_result(req, (resp.getAllowed() ? 'allowed' : 'denied')),
        err => append_result(req, err.message)
    );
}

function append_result(request, result) {
    const results = document.getElementById("results");
    const row = results.insertRow(0);
    row.insertCell(0).innerHTML = request[0]
    row.insertCell(1).innerHTML = request[1]
    row.insertCell(2).innerHTML = request[2]
    row.insertCell(3).innerHTML = result;
}

module.exports = {on_submit};
