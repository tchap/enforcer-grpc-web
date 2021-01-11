const api = require('./gen/scheming/um/auth/v1/enforcer_api_grpc_web_pb');

var client = new api.EnforcerAPIPromiseClient('http://localhost:8080');

function enforce(enforcer_name, request) {
    const req = new api.EnforceRequest({
        enforcer_name,
        request,
    });
    return client.enforce(req);
}

function on_submit() {
    const form = document.getElementById("request");
    const req = [
        form.elements['subject'].value,
        form.elements['object'].value,
        form.elements['action'].value
    ]
    return enforce('um/bundles', req).then(
        resp => console.log(resp),
        err => console.error(err)
    );
}

module.exports = {on_submit};
