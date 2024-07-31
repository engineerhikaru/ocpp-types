export interface DiagnosticsStatusNotificationRequest {
  status: 'Idle' | 'Uploaded' | 'UploadFailed' | 'Uploading';
}

export interface DiagnosticsStatusNotificationResponse {}
