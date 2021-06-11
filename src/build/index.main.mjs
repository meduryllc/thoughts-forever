// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s) {
  const stdlib = s.reachStdlib;
  return {
    infos: {
      },
    views: {
      }
    };
  };

export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };

export async function Alice(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 30));
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 140));
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc4, ctc1, ctc4]);
  const ctc7 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Null;
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4]);
  
  
  const v19 = await ctc.creationTime();
  const v21 = ctc.selfAddress('Alice', false, stdlib.checkedBigNumberify('./index.rsh:29:13:application', stdlib.UInt_max, 20));
  const v23 = stdlib.protect(ctc0, await interact.createStream(), {
    at: './index.rsh:30:60:application',
    fs: ['at ./index.rsh:29:13:application call to [unknown function] (defined at: ./index.rsh:29:17:function exp)'],
    msg: 'createStream',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv(1, 2, stdlib.checkedBigNumberify('./index.rsh:34:9:dot', stdlib.UInt_max, 0), [ctc4, ctc0, ctc1], [v19, v23, v21], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0, ctc1], true, true, false, (async (txn1) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:34:9:dot', stdlib.UInt_max, 0), v19]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:34:9:dot', stdlib.UInt_max, 0)]);
    const [v25, v26] = txn1.data;
    const v28 = txn1.time;
    const v24 = txn1.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:35:15:after expr stmt semicolon', stdlib.UInt_max, 1), v24, v28]);
    sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:35:15:after expr stmt semicolon', stdlib.UInt_max, 1), v24]);
    sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:35:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v25, v26] = txn1.data;
  const v28 = txn1.time;
  const v24 = txn1.from;
  ;
  const txn2 = await (ctc.recv(2, 1, [ctc2], false, false));
  const [v34] = txn2.data;
  const v36 = txn2.time;
  const v33 = txn2.from;
  ;
  let v37 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
  let v74 = v36;
  
  while ((() => {
    const v43 = stdlib.eq(v37, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
    
    return v43;})()) {
    const v48 = stdlib.protect(ctc3, await interact.post(), {
      at: './index.rsh:49:51:application',
      fs: ['at ./index.rsh:48:15:application call to [unknown function] (defined at: ./index.rsh:48:19:function exp)'],
      msg: 'post',
      who: 'Alice'
      });
    
    const txn3 = await (ctc.sendrecv(4, 1, stdlib.checkedBigNumberify('./index.rsh:51:11:dot', stdlib.UInt_max, 1), [ctc1, ctc4, ctc3], [v24, v74, v48], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc3], true, true, false, (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:51:11:dot', stdlib.UInt_max, 3), v24, v74]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:51:11:dot', stdlib.UInt_max, 3), v24]);
      const [v50] = txn3.data;
      const v53 = txn3.time;
      const v49 = txn3.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v52 = stdlib.addressEq(v24, v49);
      stdlib.assert(v52, {
        at: './index.rsh:51:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:53:17:after expr stmt semicolon', stdlib.UInt_max, 4), v24, v53]);
      sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:53:17:after expr stmt semicolon', stdlib.UInt_max, 4), v24]);
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:53:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      
      return sim_r;
      })));
    const [v50] = txn3.data;
    const v53 = txn3.time;
    const v49 = txn3.from;
    ;
    const v52 = stdlib.addressEq(v24, v49);
    stdlib.assert(v52, {
      at: './index.rsh:51:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v60 = stdlib.protect(ctc4, await interact.continueStream(), {
      at: './index.rsh:60:61:application',
      fs: ['at ./index.rsh:59:15:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
      msg: 'continueStream',
      who: 'Alice'
      });
    
    const txn4 = await (ctc.sendrecv(5, 1, stdlib.checkedBigNumberify('./index.rsh:62:11:dot', stdlib.UInt_max, 1), [ctc1, ctc4, ctc4], [v24, v53, v60], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc4], true, true, false, (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:62:11:dot', stdlib.UInt_max, 4), v24, v53]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:62:11:dot', stdlib.UInt_max, 4), v24]);
      const [v62] = txn4.data;
      const v65 = txn4.time;
      const v61 = txn4.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v64 = stdlib.addressEq(v24, v61);
      stdlib.assert(v64, {
        at: './index.rsh:62:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const cv37 = v62;
      const cv74 = v65;
      
      (() => {
        const v37 = cv37;
        const v74 = cv74;
        
        if ((() => {
          const v43 = stdlib.eq(v37, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
          
          return v43;})()) {
          sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:46:17:after expr stmt semicolon', stdlib.UInt_max, 3), v24, v74]);
          sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:46:17:after expr stmt semicolon', stdlib.UInt_max, 3), v24]);
          sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:46:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.nextSt = stdlib.digest(ctc8, []);
          sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
          sim_r.view = [ctc8, []];
          sim_r.isHalt = true;
          }})();
      return sim_r;
      })));
    const [v62] = txn4.data;
    const v65 = txn4.time;
    const v61 = txn4.from;
    ;
    const v64 = stdlib.addressEq(v24, v61);
    stdlib.assert(v64, {
      at: './index.rsh:62:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const cv37 = v62;
    const cv74 = v65;
    
    v37 = cv37;
    v74 = cv74;
    
    continue;
    
    }
  stdlib.protect(ctc9, await interact.endStream(), {
    at: './index.rsh:71:45:application',
    fs: ['at ./index.rsh:71:11:application call to [unknown function] (defined at: ./index.rsh:71:23:function exp)'],
    msg: 'endStream',
    who: 'Alice'
    });
  
  return;
  
  
  };
export async function Bob(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 30));
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 140));
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Tuple([ctc5]);
  const ctc7 = stdlib.T_Tuple([ctc5, ctc1, ctc5]);
  const ctc8 = stdlib.T_Tuple([ctc5, ctc1]);
  const ctc9 = stdlib.T_Tuple([]);
  
  
  const v19 = await ctc.creationTime();
  const txn1 = await (ctc.recv(1, 2, [ctc0, ctc1], false, false));
  const [v25, v26] = txn1.data;
  const v28 = txn1.time;
  const v24 = txn1.from;
  ;
  const v32 = stdlib.protect(ctc2, await interact.seeStream(v25), {
    at: './index.rsh:38:56:application',
    fs: ['at ./index.rsh:37:13:application call to [unknown function] (defined at: ./index.rsh:37:17:function exp)'],
    msg: 'seeStream',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv(2, 1, stdlib.checkedBigNumberify('./index.rsh:40:9:dot', stdlib.UInt_max, 1), [ctc1, ctc5, ctc2], [v24, v28, v32], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc2], true, false, false, (async (txn2) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:40:9:dot', stdlib.UInt_max, 1), v24, v28]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:40:9:dot', stdlib.UInt_max, 1), v24]);
    const [v34] = txn2.data;
    const v36 = txn2.time;
    const v33 = txn2.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v37 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
    const v74 = v36;
    
    if ((() => {
      const v43 = stdlib.eq(v37, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
      
      return v43;})()) {
      sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:46:17:after expr stmt semicolon', stdlib.UInt_max, 3), v24, v74]);
      sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:46:17:after expr stmt semicolon', stdlib.UInt_max, 3), v24]);
      sim_r.view = [ctc6, [stdlib.checkedBigNumberify('./index.rsh:46:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    else {
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc9, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
      sim_r.view = [ctc9, []];
      sim_r.isHalt = true;
      }
    return sim_r;
    })));
  const [v34] = txn2.data;
  const v36 = txn2.time;
  const v33 = txn2.from;
  ;
  let v37 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
  let v74 = v36;
  
  while ((() => {
    const v43 = stdlib.eq(v37, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
    
    return v43;})()) {
    const txn3 = await (ctc.recv(4, 1, [ctc3], false, false));
    const [v50] = txn3.data;
    const v53 = txn3.time;
    const v49 = txn3.from;
    ;
    const v52 = stdlib.addressEq(v24, v49);
    stdlib.assert(v52, {
      at: './index.rsh:51:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    stdlib.protect(ctc4, await interact.seeMessage(v50, v25, v26), {
      at: './index.rsh:57:30:application',
      fs: ['at ./index.rsh:55:15:application call to [unknown function] (defined at: ./index.rsh:55:19:function exp)'],
      msg: 'seeMessage',
      who: 'Bob'
      });
    
    const txn4 = await (ctc.recv(5, 1, [ctc5], false, false));
    const [v62] = txn4.data;
    const v65 = txn4.time;
    const v61 = txn4.from;
    ;
    const v64 = stdlib.addressEq(v24, v61);
    stdlib.assert(v64, {
      at: './index.rsh:62:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const cv37 = v62;
    const cv74 = v65;
    
    v37 = cv37;
    v74 = cv74;
    
    continue;
    
    }
  stdlib.protect(ctc4, await interact.endStream(), {
    at: './index.rsh:71:45:application',
    fs: ['at ./index.rsh:71:11:application call to [unknown function] (defined at: ./index.rsh:71:23:function exp)'],
    msg: 'endStream',
    who: 'Bob'
    });
  
  return;
  
  
  };

const _ALGO = {
  appApproval: `#pragma version 3
txn RekeyTo
global ZeroAddress
==
assert
txn OnCompletion
int OptIn
==
bz normal
global GroupSize
int 1
==
assert
b done
normal:
gtxna 0 ApplicationArgs 8
store 5
// Check that everyone's here
global GroupSize
int 3
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
gtxn 2 Sender
byte "{{m2}}"
==
||
gtxn 2 Sender
byte "{{m4}}"
==
||
gtxn 2 Sender
byte "{{m5}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 0 ApplicationArgs 0
==
assert
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 5
btoi
==
assert
byte base64(bA==)
global Round
app_global_put
int 0
txn NumAccounts
==
assert
byte base64(aA==)
gtxna 0 ApplicationArgs 3
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 2
==
assert
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Amount
int 100000
==
assert
// We don't check the receiver, because we don't know it yet, because the escrow account embeds our id
// We don't check the sender, because we don't care... anyone is allowed to fund it. We'll give it back to the deployer, though.
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set 0
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 3
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 3
// Check size
global GroupSize
int 3
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
int axfer
dup2
==
||
assert
txn RekeyTo
global ZeroAddress
==
assert
txn GroupIndex
int 3
>=
assert
done:
int 1
return
`,
  mapArgSize: 165,
  mapDataKeys: 0,
  mapDataSize: 0,
  mapRecordSize: 33,
  stepargs: [null, {
    count: 9,
    size: 308
    }, {
    count: 9,
    size: 279
    }, null, {
    count: 9,
    size: 418
    }, {
    count: 9,
    size: 286
    }],
  steps: [null, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 7
dup
substring 0 30
store 255
dup
substring 30 62
store 254
pop
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:34:9:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
byte base64()
load 1
==
assert
// compute state in HM_Set 1
int 1
itob
gtxn 0 Sender
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 1
btoi
store 254
pop
// Handler 2
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 1
int 1
itob
load 255
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:40:9:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
int 0
int 0
==
bz l0
byte base64()
load 1
==
assert
// compute state in HM_Set 3
int 3
itob
load 255
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
b checkAccts
l0:
byte base64()
load 1
==
assert
gtxn 4 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 4 Amount
int 0
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 4 CloseRemainderTo
byte "{{Deployer}}"
==
assert
load 2
btoi
int 1
==
assert
// Check GroupSize
global GroupSize
int 5
==
assert
load 3
btoi
gtxn 4 Fee
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, null, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 140
store 254
pop
// Handler 4
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 3
int 3
itob
load 255
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:51:11:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:51:11:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
byte base64()
load 1
==
assert
// compute state in HM_Set 4
int 4
itob
load 255
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 8
btoi
store 254
pop
// Handler 5
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 4
int 4
itob
load 255
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:62:11:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:62:11:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
load 254
int 0
==
bz l0
byte base64()
load 1
==
assert
// compute state in HM_Set 3
int 3
itob
load 255
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
b checkAccts
l0:
byte base64()
load 1
==
assert
gtxn 4 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 4 Amount
int 0
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 4 CloseRemainderTo
byte "{{Deployer}}"
==
assert
load 2
btoi
int 1
==
assert
// Check GroupSize
global GroupSize
int 5
==
assert
load 3
btoi
gtxn 4 Fee
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`],
  unsupported: [],
  version: 1,
  viewKeys: 0,
  viewSize: 0
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v19",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint8[30]",
                "name": "v25",
                "type": "uint8[30]"
              },
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v34",
                "type": "bool"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v74",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint8[140]",
                "name": "v50",
                "type": "uint8[140]"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v53",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e5",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v19",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint8[30]",
                "name": "v25",
                "type": "uint8[30]"
              },
              {
                "internalType": "address payable",
                "name": "v26",
                "type": "address"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v34",
                "type": "bool"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v74",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint8[140]",
                "name": "v50",
                "type": "uint8[140]"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v53",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a160408051602080820183524382528251808201845260008082529251815283518083018490529051818501528351808203850181526060909101909352825192019190912090556106d4806100826000396000f3fe6080604052600436106100425760003560e01c8062ea24341461004e5780636b9c553c146100635780639cf1919f14610076578063cdcaf8461461008957610049565b3661004957005b600080fd5b61006161005c36600461050a565b61009c565b005b6100616100713660046104f8565b61015d565b61006161008436600461050a565b610265565b610061610097366004610525565b610346565b6040516100b0906001908390602001610663565b6040516020818303038152906040528051906020012060001c600054146100d657600080fd5b6000805534156100e557600080fd5b7f1d5bdada34edd608fc6ecb4f01422fab034b5bcd1abfeb45a959fd93ebcba451816040516101149190610633565b60405180910390a1610124610468565b61013160208301836104d7565b81516001600160a01b03909116905260208082018051600090525143910152610159816103f2565b5050565b604051610171906003908390602001610663565b6040516020818303038152906040528051906020012060001c6000541461019757600080fd5b6000805534156101a657600080fd5b336101b460208301836104d7565b6001600160a01b0316146101c757600080fd5b7fa46cb34f86980bc821fab47711c0a051fa3c3bd668376533bfb03657e462d96c816040516101f69190610556565b60405180910390a1604080518082019091526000808252602082015261021f60208301836104d7565b6001600160a01b031681524360208083019190915260405161024691600491849101610677565b60408051601f1981840301815291905280516020909101206000555050565b604051610279906004908390602001610663565b6040516020818303038152906040528051906020012060001c6000541461029f57600080fd5b6000805534156102ae57600080fd5b336102bc60208301836104d7565b6001600160a01b0316146102cf57600080fd5b7f46c802de9036ae8c161622f0659387a8543aa8e9300ca2ec73f683968df85985816040516102fe91906105ab565b60405180910390a161030e610468565b61031b60208301836104d7565b81516001600160a01b03909116905260208082018051604085013590525143910152610159816103f2565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c6000541461038357600080fd5b60008055341561039257600080fd5b7f1070359a6ac4393af35b598c864fc95346f3632bf5e15e54de2c3778a1676b95816040516103c191906105c7565b60405180910390a1604080518082018252338152436020808301919091529151909161024691600191849101610677565b60208101515161045e5760408051808201909152600080825260208201528151516001600160a01b031681526020808301518101518183015260405161043d91600391849101610677565b60408051601f19818403018152919052805160209091012060005550610465565b6000805533ff5b50565b604080516060810182526000918101918252908190815260200161049f604051806040016040528060008152602001600081525090565b905290565b80356001600160a01b03811681146104bb57600080fd5b919050565b6000606082840312156104d1578081fd5b50919050565b6000602082840312156104e8578081fd5b6104f1826104a4565b9392505050565b60006111c082840312156104d1578081fd5b60006060828403121561051b578081fd5b6104f183836104c0565b600061040082840312156104d1578081fd5b6001600160a01b03610548826104a4565b168252602090810135910152565b6111c081016105658284610537565b60408201604084016000805b608c8110156105a157823560ff811680821461058b578384fd5b8552506020938401939290920191600101610571565b5050505092915050565b606081016105b98284610537565b604092830135919092015290565b81358152610400810160208083018185016000805b601e81101561060957823560ff81168082146105f6578384fd5b85525092840192918401916001016105dc565b506103e093506001600160a01b0392506106279150508583016104a4565b16818401525092915050565b606081016106418284610537565b604083013580151580821461065557600080fd5b806040850152505092915050565b828152606081016104f16020830184610537565b828152606081016104f1602083018480516001600160a01b0316825260209081015191015256fea2646970667358221220fbba938a6f0d62bd576054caa41f0a922dee63e9f72738ca51d647b73e8f6c7064736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

