import { AWSBatchJobQueue } from './job-queue.aws-batch';

describe("JobQueue", () => {

  const jobQueues = [
    {
      name: 'AWSBatch',
      queue: AWSBatchJobQueue()
    }
  ]

  test.each(jobQueues)('default', async ({ queue }) => {
    const err = await queue.push({
      name: 'my-job'
    })
    const jobs = await queue.filter({
      name: 'my-job'
    })


  });
});
