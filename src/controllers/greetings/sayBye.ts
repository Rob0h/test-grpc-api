import * as grpc from "grpc";
import { ByeRequest, ByeReply } from "../../../generated/helloworld_pb";

interface ByeRequestServerUnaryCall extends grpc.ServerUnaryCall {
    request: ByeRequest.AsObject;
}

/**
 * Implements the SayBye RPC method.
 */

const sayBye = async(call: ByeRequestServerUnaryCall): Promise<ByeReply.AsObject> => {
    return { message: `Bye ${call.request.name}` };
}

export default sayBye;
