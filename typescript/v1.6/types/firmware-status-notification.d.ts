export type FirmwareStatusNotificationRequest = {
  status: 'Downloaded' | 'DownloadFailed' | 'Downloading' | 'Idle' | 'InstallationFailed' | 'Installing' | 'Installed';
};

export type FirmwareStatusNotificationResponse = {};
