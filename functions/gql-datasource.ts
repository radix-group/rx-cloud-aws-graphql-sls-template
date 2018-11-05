import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';

export const call: Handler = (event: APIGatewayEvent, context: Context, cb: Callback): void => {

    const response = {
        message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!'
    };

    cb(null, response);
    
};
