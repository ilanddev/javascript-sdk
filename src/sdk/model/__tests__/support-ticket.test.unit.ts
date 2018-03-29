import { Iland } from '../../iland';
import { IlandDirectGrantAuthProvider } from '../../auth/index';
import { SupportTicket } from '../support-ticket';
import {
  SupportTicketAttachmentMock,
  SupportTicketCommentMock,
  SupportTicketMock
} from '../../__mocks__/responses/support-ticket/support-ticket';
import { Company } from '../company';
import { MockCompanyJson } from '../../__mocks__/responses/company/company';

jest.mock('../../http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

function runAssertionAgainstMock(ticket: SupportTicket) {
  expect(ticket.id).toEqual(SupportTicketMock.id);
  expect(ticket.summary).toEqual(SupportTicketMock.summary);
  expect(ticket.status).toEqual(SupportTicketMock.status);
  expect(ticket.crm).toEqual(SupportTicketMock.crm);
  expect(ticket.creatorFullName).toEqual(SupportTicketMock.creator_full_name);
  expect(ticket.creatorUserName).toEqual(SupportTicketMock.creator_user_name);
  expect(ticket.creationDate.toTimeString()).toEqual((new Date(SupportTicketMock.creation_date)).toTimeString());
  expect(ticket.regardingId).toEqual(SupportTicketMock.regarding_id);
  expect(ticket.regardingName).toEqual(SupportTicketMock.regarding_name);
  expect(ticket.serviceId).toEqual(SupportTicketMock.service_id);
  expect(ticket.serviceName).toEqual(SupportTicketMock.service_name);
  expect(ticket.severity).toEqual(SupportTicketMock.severity);
  expect(ticket.categoryId).toEqual(SupportTicketMock.category_id);
  expect(ticket.categoryName).toEqual(SupportTicketMock.category_name);
  expect(ticket.ccEmailAddresses.length).toEqual(SupportTicketMock.cc_email_addresses.length);
  for (const emailIndex in ticket.ccEmailAddresses) {
    expect(ticket.ccEmailAddresses[emailIndex]).toEqual(SupportTicketMock.cc_email_addresses[emailIndex]);
  }
  expect(ticket.ccEmailsEnabled).toEqual(SupportTicketMock.cc_emails_enabled);
  expect(ticket.json).toEqual(Object.assign({}, SupportTicketMock));
  expect(ticket.toString()).toEqual(JSON.stringify(SupportTicketMock, undefined, 2));
}

test('Properly instanciate a support ticket instance', () => {
  const ticket = new SupportTicket(SupportTicketMock);
  runAssertionAgainstMock(ticket);
});

test('Properly get ticket attachments', async() => {
  const company = new Company(MockCompanyJson);
  return company.getSupportTicket(240501).then(async(ticket) => {
    return ticket.getAttachments().then(attachments => {
      expect(attachments.length).toEqual(1);
      expect(attachments[0]).toEqual(SupportTicketAttachmentMock);
    });
  });
});

test('Properly get ticket attachment by id', async() => {
  const company = new Company(MockCompanyJson);
  return company.getSupportTicket(240501).then(async(ticket) => {
    return ticket.getAttachment(336122).then(attachment => {
      expect(attachment).toEqual(SupportTicketAttachmentMock);
    });
  });
});

test('Properly check if an attachment is downloadable', async() => {
  const company = new Company(MockCompanyJson);
  return company.getSupportTicket(240501).then(async(ticket) => {
    return ticket.isAttachmentDownloadable(336122).then(isDownloadable => {
      expect(isDownloadable).toBeTruthy();
    });
  });
});

test('Properly get support ticket comments', async() => {
  const company = new Company(MockCompanyJson);
  return company.getSupportTicket(240501).then(async(ticket) => {
    return ticket.getComments().then(comments => {
      expect(comments.length).toEqual(1);
      expect(comments[0]).toEqual(SupportTicketCommentMock);
    });
  });
});
