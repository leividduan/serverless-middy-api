import { z } from 'zod';

export default function formatZodIssues(issues: z.ZodIssue[]) {
  return issues.map((err) => ({
    property: err.path.join(' > '),
    message: err.message,
  }));
}
