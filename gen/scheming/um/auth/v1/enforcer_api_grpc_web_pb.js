/**
 * @fileoverview gRPC-Web generated client stub for um.auth.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.um = {};
proto.um.auth = {};
proto.um.auth.v1 = require('./enforcer_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.um.auth.v1.EnforcerAPIClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.um.auth.v1.EnforcerAPIPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.um.auth.v1.EnforceRequest,
 *   !proto.um.auth.v1.EnforceResponse>}
 */
const methodDescriptor_EnforcerAPI_Enforce = new grpc.web.MethodDescriptor(
  '/um.auth.v1.EnforcerAPI/Enforce',
  grpc.web.MethodType.UNARY,
  proto.um.auth.v1.EnforceRequest,
  proto.um.auth.v1.EnforceResponse,
  /**
   * @param {!proto.um.auth.v1.EnforceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.um.auth.v1.EnforceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.um.auth.v1.EnforceRequest,
 *   !proto.um.auth.v1.EnforceResponse>}
 */
const methodInfo_EnforcerAPI_Enforce = new grpc.web.AbstractClientBase.MethodInfo(
  proto.um.auth.v1.EnforceResponse,
  /**
   * @param {!proto.um.auth.v1.EnforceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.um.auth.v1.EnforceResponse.deserializeBinary
);


/**
 * @param {!proto.um.auth.v1.EnforceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.um.auth.v1.EnforceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.um.auth.v1.EnforceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.um.auth.v1.EnforcerAPIClient.prototype.enforce =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/um.auth.v1.EnforcerAPI/Enforce',
      request,
      metadata || {},
      methodDescriptor_EnforcerAPI_Enforce,
      callback);
};


/**
 * @param {!proto.um.auth.v1.EnforceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.um.auth.v1.EnforceResponse>}
 *     Promise that resolves to the response
 */
proto.um.auth.v1.EnforcerAPIPromiseClient.prototype.enforce =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/um.auth.v1.EnforcerAPI/Enforce',
      request,
      metadata || {},
      methodDescriptor_EnforcerAPI_Enforce);
};


module.exports = proto.um.auth.v1;

