import * as cdk from '@aws-cdk/core';
import {Repository} from '@aws-cdk/aws-codecommit';

interface codeCommitContext {
  "projectName": string
}

export class CdkCodeCommitStack extends cdk.Stack {

  private readonly context: codeCommitContext;
  private repository: Repository;

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.context = this.node.tryGetContext(this.stackName);
    this.repository = this.createRepository();
  }

  private createRepository() {
    return new Repository(this, this.stackName + '-Repository', {
      repositoryName: this.context.projectName,
    });
  }
}
