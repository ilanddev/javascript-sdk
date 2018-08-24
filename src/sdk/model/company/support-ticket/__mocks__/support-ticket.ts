import { AxiosResponse } from 'axios';
import {
  SupportTicketJson
} from '../__json__/support-ticket-json';
import { SupportTicketAttachmentJson } from '../__json__/support-ticket-attachment-json';
import { SupportTicketCommentJson } from '../__json__/support-ticket-comment-json';

export const SupportTicketMock: SupportTicketJson = {
  id: 240501,
  summary: 'summary',
  status: 'NEW',
  crm: '000002',
  creator_full_name: 'Test (iland support)',
  creator_user_name: 'testman',
  creation_date: 1521820018000,
  cc_email_addresses: [
    'fake@iland.com'
  ],
  cc_emails_enabled: true,
  regarding_id: 356,
  service_id: 588,
  category_id: null,
  severity: 'GENERAL_GUIDANCE',
  regarding_name: 'Account and Billing Support',
  service_name: 'Billing',
  category_name: ''
};

export const SupportTicketMockResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: SupportTicketMock,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const SupportTicketAttachmentMock: SupportTicketAttachmentJson = {
  id: 336122,
  title: 'ECS_Tests.txt',
  filename: 'ECS_Tests.txt',
  server_filename: '0c5f49cc-9554-40e2-81b2-5b29012425d9.txt',
  creation_date: 1521819084000,
  creator_user_name: 'testman',
  creator_full_name: 'Test Man'
};

export const SupportTicketAttachmentDownloadableMock = {
  is_downloadable: true
};

export const SupportTicketCommentMock: SupportTicketCommentJson = {
  id: 313050,
  ticket_id: 240495,
  text: 'Test ticket description from ECS console tests.',
  creator_username: 'testman',
  creator_full_name: 'Test Man',
  comment_type: 'DISCUSSION',
  creation_date: 1521819067000
};

export const SupportTicketAttachmentsMockResponse: Promise<AxiosResponse> =
  new Promise<AxiosResponse>(function(resolve) {
    resolve({
      data: [SupportTicketAttachmentMock],
      status: 200,
      statusText: '',
      headers: {},
      config: {}
    });
  });

export const SupportTicketAttachmentMockResponse: Promise<AxiosResponse> =
  new Promise<AxiosResponse>(function(resolve) {
    resolve({
      data: SupportTicketAttachmentMock,
      status: 200,
      statusText: '',
      headers: {},
      config: {}
    });
  });

export const SupportTicketAttachmentDownloadableMockResponse: Promise<AxiosResponse> =
  new Promise<AxiosResponse>(function(resolve) {
    resolve({
      data: SupportTicketAttachmentDownloadableMock,
      status: 200,
      statusText: '',
      headers: {},
      config: {}
    });
  });

export const SupportTicketCommentsMockResponse: Promise<AxiosResponse> =
  new Promise<AxiosResponse>(function(resolve) {
    resolve({
      data: {
        data: [SupportTicketCommentMock]
      },
      status: 200,
      statusText: '',
      headers: {},
      config: {}
    });
  });
