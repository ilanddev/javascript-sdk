import { Iland } from '../../../../iland';
import { Edge } from '../../edge';
import { MockIlandDirectGrantAuthProvider } from '../../../../auth/__mocks__/iland-direct-grant-auth-privider';
import { Checkpoint } from '../checkpoint';
import { CheckpointJson } from '../__json__/checkpoint-json';
import { MockEdgeNatCheckpointsJson } from '../__mocks__/checkpoint';
import { MockEdgeJson } from '../../__mocks__/edge';

jest.mock('../../../../service/http/http');

beforeAll(() => {
  Iland.init(new MockIlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

function runAssertionsAgainstCheckpointMock(checkpoint: Checkpoint, checkpointMock: CheckpointJson) {
  expect(checkpoint.export).toEqual(checkpointMock.export);
  expect(checkpoint.time).toEqual(new Date(checkpointMock.time));
  expect(checkpoint.uuid).toEqual(checkpointMock.uuid);
  expect(checkpoint.edgeUuid).toEqual(checkpointMock.edge_uuid);
  expect(checkpoint.json).toEqual(Object.assign({}, checkpointMock));
  expect(checkpoint.toString()).toEqual(JSON.stringify(checkpointMock, undefined, 2));
}

test('Properly get NAT checkpoints', async() => {
  const edge = new Edge(MockEdgeJson);
  return edge.getNatCheckpoints().then(natCheckpoints => {
    expect(Iland.getHttp().get).lastCalledWith(`/edges/${MockEdgeJson.uuid}/nat-checkpoints`);
    expect(natCheckpoints.length).toEqual(MockEdgeNatCheckpointsJson.length);
    let checkpoint;
    let checkpointMock;
    for (const idx in natCheckpoints) {
      checkpoint = natCheckpoints[idx];
      checkpointMock = MockEdgeNatCheckpointsJson[idx];
      runAssertionsAgainstCheckpointMock(checkpoint, checkpointMock);
    }
  });
});

test('Properly get NAT checkpoint', async() => {
  const edge = new Edge(MockEdgeJson);
  const checkpointID = '0ea3ac90-d471-11e7-b86f-79bbfaab00e8';
  return edge.getNatCheckpoint(checkpointID).then(natCheckpoint => {
    expect(Iland.getHttp().get).lastCalledWith(`/edges/${MockEdgeJson.uuid}/nat-checkpoints/${checkpointID}`);
    runAssertionsAgainstCheckpointMock(natCheckpoint, MockEdgeNatCheckpointsJson[0]);
  });
});
