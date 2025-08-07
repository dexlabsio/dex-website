# Database Setup for Demo Form

The current implementation uses in-memory storage for demo requests. For production, you should replace this with a proper database.

## Option 1: PostgreSQL with Prisma

1. Install Prisma:
```bash
npm install prisma @prisma/client
npx prisma init
```

2. Update `prisma/schema.prisma`:
```prisma
model DemoRequest {
  id          String   @id @default(cuid())
  name        String
  email       String
  company     String
  jobRole     String
  cloud       String
  message     String?
  submittedAt DateTime @default(now())
  
  @@map("demo_requests")
}
```

3. Generate and run migrations:
```bash
npx prisma generate
npx prisma db push
```

4. Update the API route to use Prisma:
```typescript
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// Replace the in-memory storage with:
const demoRequest = await prisma.demoRequest.create({
  data: {
    name,
    email,
    company,
    jobRole,
    cloud,
    message: message || '',
  }
});
```

## Option 2: MongoDB with Mongoose

1. Install Mongoose:
```bash
npm install mongoose
```

2. Create a model file `lib/models/DemoRequest.ts`:
```typescript
import mongoose from 'mongoose';

const DemoRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String, required: true },
  jobRole: { type: String, required: true },
  cloud: { type: String, required: true },
  message: { type: String },
  submittedAt: { type: Date, default: Date.now }
});

export default mongoose.models.DemoRequest || mongoose.model('DemoRequest', DemoRequestSchema);
```

3. Update the API route to use MongoDB:
```typescript
import DemoRequest from '@/lib/models/DemoRequest';

const demoRequest = new DemoRequest({
  name,
  email,
  company,
  jobRole,
  cloud,
  message: message || '',
});

await demoRequest.save();
```

## Option 3: Supabase

1. Install Supabase client:
```bash
npm install @supabase/supabase-js
```

2. Create table in Supabase dashboard or SQL editor:
```sql
CREATE TABLE demo_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  job_role TEXT NOT NULL,
  cloud TEXT NOT NULL,
  message TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

3. Update the API route:
```typescript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const { data, error } = await supabase
  .from('demo_requests')
  .insert([{
    name,
    email,
    company,
    job_role: jobRole,
    cloud,
    message: message || ''
  }]);
```