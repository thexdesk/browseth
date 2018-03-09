import { JsonInterface } from '../../abi/types';

export const jsonInterface: JsonInterface = [
  {
    constant: true,
    inputs: [{ name: 'interfaceID', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'node', type: 'bytes32' },
      { name: 'key', type: 'string' },
      { name: 'value', type: 'string' },
    ],
    name: 'setText',
    outputs: [],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      { name: 'node', type: 'bytes32' },
      { name: 'contentTypes', type: 'uint256' },
    ],
    name: 'ABI',
    outputs: [
      { name: 'contentType', type: 'uint256' },
      { name: 'data', type: 'bytes' },
    ],
    payable: false,
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'node', type: 'bytes32' },
      { name: 'x', type: 'bytes32' },
      { name: 'y', type: 'bytes32' },
    ],
    name: 'setPubkey',
    outputs: [],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: 'node', type: 'bytes32' }],
    name: 'content',
    outputs: [{ name: 'ret', type: 'bytes32' }],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: 'node', type: 'bytes32' }],
    name: 'addr',
    outputs: [{ name: 'ret', type: 'address' }],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      { name: 'node', type: 'bytes32' },
      { name: 'key', type: 'string' },
    ],
    name: 'text',
    outputs: [{ name: 'ret', type: 'string' }],
    payable: false,
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'node', type: 'bytes32' },
      { name: 'contentType', type: 'uint256' },
      { name: 'data', type: 'bytes' },
    ],
    name: 'setABI',
    outputs: [],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: 'node', type: 'bytes32' }],
    name: 'name',
    outputs: [{ name: 'ret', type: 'string' }],
    payable: false,
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'node', type: 'bytes32' },
      { name: 'name', type: 'string' },
    ],
    name: 'setName',
    outputs: [],
    payable: false,
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'node', type: 'bytes32' },
      { name: 'hash', type: 'bytes32' },
    ],
    name: 'setContent',
    outputs: [],
    payable: false,
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: 'node', type: 'bytes32' }],
    name: 'pubkey',
    outputs: [{ name: 'x', type: 'bytes32' }, { name: 'y', type: 'bytes32' }],
    payable: false,
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'node', type: 'bytes32' },
      { name: 'addr', type: 'address' },
    ],
    name: 'setAddr',
    outputs: [],
    payable: false,
    type: 'function',
  },
  {
    inputs: [{ name: 'ensAddr', type: 'address' }],
    payable: false,
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'node', type: 'bytes32' },
      { indexed: false, name: 'a', type: 'address' },
    ],
    name: 'AddrChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'node', type: 'bytes32' },
      { indexed: false, name: 'hash', type: 'bytes32' },
    ],
    name: 'ContentChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'node', type: 'bytes32' },
      { indexed: false, name: 'name', type: 'string' },
    ],
    name: 'NameChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'node', type: 'bytes32' },
      { indexed: true, name: 'contentType', type: 'uint256' },
    ],
    name: 'ABIChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'node', type: 'bytes32' },
      { indexed: false, name: 'x', type: 'bytes32' },
      { indexed: false, name: 'y', type: 'bytes32' },
    ],
    name: 'PubkeyChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'node', type: 'bytes32' },
      { indexed: true, name: 'indexedKey', type: 'string' },
      { indexed: false, name: 'key', type: 'string' },
    ],
    name: 'TextChanged',
    type: 'event',
  },
];

// {
//   "addresses": {
//     "1": "0x5FfC014343cd971B7eb70732021E26C35B744cc4",
//     "3": "0x4c641fb9bad9b60ef180c31f56051ce826d21a9a",
//     "4": "0xb14fdee4391732ea9d2267054ead2084684c0ad8"
//   },
