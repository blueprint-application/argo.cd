import { AxiosRequestConfig } from 'axios';
import {
  NotificationServiceListModel as NotificationServiceList,
  NotificationTemplateListModel as NotificationTemplateList,
  NotificationTriggerListModel as NotificationTriggerList,
} from '../../models';
import { BaseApi } from '../base';
import {} from './types';

export class NotificationServiceApi extends BaseApi {
  async notificationServiceListServices(options?: Partial<AxiosRequestConfig>): Promise<NotificationServiceList> {
    const url = this.buildUrl('/api/v1/notifications/services');

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
    });
    return new NotificationServiceList(result);
  }

  async notificationServiceListTemplates(options?: Partial<AxiosRequestConfig>): Promise<NotificationTemplateList> {
    const url = this.buildUrl('/api/v1/notifications/templates');

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
    });
    return new NotificationTemplateList(result);
  }

  async notificationServiceListTriggers(options?: Partial<AxiosRequestConfig>): Promise<NotificationTriggerList> {
    const url = this.buildUrl('/api/v1/notifications/triggers');

    const result = await this.apiClient.request({
      ...(options || {}),
      method: this.HTTP_METHODS.GET,
      url,
    });
    return new NotificationTriggerList(result);
  }
}

export default NotificationServiceApi;
