# Lambda Typescript Template

![Lambda logo](https://www.vectorlogo.zone/logos/amazon_awslambda/amazon_awslambda-icon.svg)
![Cloud formation](https://www.vectorlogo.zone/logos/amazon_cloudformation/amazon_cloudformation-icon.svg)
<img height="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />

This is a template repo for creating lambda functions using typescript. We are using the serverless pattern [API Gateway HTTP API to Lambda](https://serverlessland.com/patterns/apigw-lambda)

It has the following features:

- Uses typescript
- We use eslint for best practices
- Uses ts-node for local development
- Its integrated with Visual Studio Code for debugging
- It uses Github Actions for CI/CD workflows
- It uses Mocha for unit testing
- Uses [AWS Serverless Application Model](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html)

After clonining this template do the following:

1.  Set the `AppName` in .toml file and package.json
2.  For CD deployment into aws you will need the `AWS_ACCESS_KEY_ID`, `AWS_REGION` and `AWS_SECRET_ACCESS_KEY`
3.  Is important to take into account dependencies as lambda functions have a size limit