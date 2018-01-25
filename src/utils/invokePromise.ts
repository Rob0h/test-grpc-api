import * as promise from "bluebird";

const invokePromise = (asyncFunc) => {
    const promiseFunc = promise.method(asyncFunc);
    return (call, callback) => {
        promiseFunc(call).asCallback(callback);
    }
}

export default invokePromise;
