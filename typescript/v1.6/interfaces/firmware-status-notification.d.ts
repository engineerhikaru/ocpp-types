export interface FirmwareStatusNotificationRequest {
  status: 'Downloaded' | 'DownloadFailed' | 'Downloading' | 'Idle' | 'InstallationFailed' | 'Installing' | 'Installed';
}

export interface FirmwareStatusNotificationResponse {}
