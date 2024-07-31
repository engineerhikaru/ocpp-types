# OCPP types

Type declarations for the OCPP based on json schema documents published by the Open Charge Alliance.

## Getting started

### Adding to your project

To get started, first download the latest version from git.

Then, copy the files into your own project.

![Adding to your project](https://github.com/user-attachments/assets/0074f600-e4b8-46e0-a51d-f88ba21c280f)

### Installing dependencies

> Only when using zod

```bash
npm install zod
```

### Usage

```typescript: example for typescript
import { BootNotificationRequest } from './types/boot-notification';

// ...
client.handle(
  'BootNotification',
  ({ params }: { params: BootNotificationRequest }) => bootNotificationHandler({ identity: client.identity, params: params })
);
// ...

```

## Features

This project makes it easy to:

- Declare types for OCPP messages
- Deepen your understanding of OCPP

## Contributing

As I use this for my own projects, I know this might not be the perfect approach for all the projects out there. If you have any ideas, just open an issue and tell me what you think.

## Tech used

![](https://img.shields.io/badge/TypeScript-gray?logo=typescript)

## Licensing
