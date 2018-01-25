import * as protobufDefs from "../generated/helloworld_pb";
import * as grpc from "grpc";
import invokePromise from "./utils/invokePromise";

import {
  sayHello,
  sayBye,
} from "./controllers/greetings";

const PROTO_PATH = __dirname + '/../protos/helloworld.proto';
const hello_proto = grpc.load(PROTO_PATH).helloworld;

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
  const server = new grpc.Server();
  server.addService(hello_proto.Greeter.service, {
    sayHello: invokePromise(sayHello),
    sayBye: invokePromise(sayBye),
  });
  server.bind('localhost:9090', grpc.ServerCredentials.createInsecure());
  server.start();
  console.log("Server running");
}

main();
