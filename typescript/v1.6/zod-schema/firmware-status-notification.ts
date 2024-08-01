import { z } from 'zod';

export const firmwareStatusNotificationRequestScheme = z.object({
  status: z.enum([
    'Downloaded',
    'DownloadFailed',
    'Downloading',
    'Idle',
    'InstallationFailed',
    'Installing',
    'Installed',
  ]),
});

export const firmwareStatusNotificationResponseScheme = z.object({});
