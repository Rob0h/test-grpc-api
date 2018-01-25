import * as grpc from "grpc";
import { HelloRequest, HelloReply } from "../../../generated/helloworld_pb";

interface HelloRequestServerUnaryCall extends grpc.ServerUnaryCall {
    request: HelloRequest.AsObject;
}

/**
 * Implements the SayHello RPC method.
 */

const sayHello = async(call: HelloRequestServerUnaryCall): Promise<HelloReply.AsObject> => {
    return { message: `Hello ${call.request.name}` };
}

export default sayHello;
