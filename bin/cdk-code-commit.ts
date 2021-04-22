#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkCodeCommitStack } from '../lib/cdk-code-commit-stack';

const app = new cdk.App();
new CdkCodeCommitStack(app, 'CdkCodeCommitStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  }
});
