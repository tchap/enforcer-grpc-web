const api = require('./gen/scheming/um/auth/v1/enforcer_api_grpc_web_pb');

var client = new api.EnforcerAPIPromiseClient('http://localhost:8000');

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

    const results = document.getElementById("results");
    const row = results.insertRow(0);
    const s = row.insertCell(0);
    const o = row.insertCell(1);
    const a = row.insertCell(2);
    const r = row.insertCell(3);
    s.innerHTML = req[0];
    o.innerHTML = req[1];
    a.innerHTML = req[2];
    return enforce('um/bundles', req).then(
        resp => r.innerHTML = (resp.getAllowed() ? 'allowed' : 'denied'),
        err => r.innerHTML = err.message
    );
}

module.exports = {on_submit};
