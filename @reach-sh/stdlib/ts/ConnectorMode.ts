import { process } from './shim';
import { envDefault } from './shared_impl';
export type Connector = 'ETH' | 'ALGO' | 'CFX';

export type ConnectorMode =
  'ETH-test-dockerized-geth' |
  'ETH-live' |
  'ETH-browser' |
  'ALGO-test-dockerized-algod' |
  'ALGO-live' |
  'ALGO-browser' |
  'CFX-devnet' |
  'CFX-live';

// Order is significant, earlier = default for shared prefix
// e.g. ETH defaults to ETH-test-dockerized-geth
const knownConnectorModes: Array<ConnectorMode> = [
  'ETH-test-dockerized-geth',
  'ETH-live',
  'ETH-browser',
  'ALGO-test-dockerized-algod',
  'ALGO-live',
  'ALGO-browser',
  'CFX-devnet',
  'CFX-live',
];

function isKnownConnector(s: string): s is Connector {
  return (s === 'ETH' || s === 'ALGO' || s === 'CFX');
}

const connectorModeDefaults: {[key: string]: ConnectorMode} = {};

// Populate connectorModeDefaults
for (const knownConnectorMode of knownConnectorModes) {
  let prefix: string | null = null;
  for (const piece of knownConnectorMode.split('-')) {
    prefix = prefix ? `${prefix}-${piece}` : piece;
    if (!connectorModeDefaults[prefix]) {
      connectorModeDefaults[prefix] = knownConnectorMode;
    }
  }
}

export function canonicalizeConnectorMode(connectorMode: string): ConnectorMode {
  const canonicalized = connectorModeDefaults[connectorMode];
  if (canonicalized) {
    return canonicalized;
  } else {
    throw Error(`Unrecognized REACH_CONNECTOR_MODE='${connectorMode}'`);
  }
}

export function getConnectorMode(): ConnectorMode {
  const connectorMode = envDefault(process.env.REACH_CONNECTOR_MODE, 'ETH');
  return canonicalizeConnectorMode(connectorMode);
}

// The connectorMode arg is optional;
// It will use REACH_CONNECTOR_MODE if 0 args.
export function getConnector(connectorMode?: string): Connector {
  connectorMode = connectorMode || getConnectorMode();
  const connector = connectorMode.split('-')[0];
  if (isKnownConnector(connector)) {
    return connector;
  } else {
    throw Error(`impossible: unknown connector: ${connector}`);
  }
}
