// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Confirmation extends ethereum.Event {
  get params(): Confirmation__Params {
    return new Confirmation__Params(this);
  }
}

export class Confirmation__Params {
  _event: Confirmation;

  constructor(event: Confirmation) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get transactionId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Deposit extends ethereum.Event {
  get params(): Deposit__Params {
    return new Deposit__Params(this);
  }
}

export class Deposit__Params {
  _event: Deposit;

  constructor(event: Deposit) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Execution extends ethereum.Event {
  get params(): Execution__Params {
    return new Execution__Params(this);
  }
}

export class Execution__Params {
  _event: Execution;

  constructor(event: Execution) {
    this._event = event;
  }

  get transactionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class ExecutionFailure extends ethereum.Event {
  get params(): ExecutionFailure__Params {
    return new ExecutionFailure__Params(this);
  }
}

export class ExecutionFailure__Params {
  _event: ExecutionFailure;

  constructor(event: ExecutionFailure) {
    this._event = event;
  }

  get transactionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class OwnerAddition extends ethereum.Event {
  get params(): OwnerAddition__Params {
    return new OwnerAddition__Params(this);
  }
}

export class OwnerAddition__Params {
  _event: OwnerAddition;

  constructor(event: OwnerAddition) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class OwnerRemoval extends ethereum.Event {
  get params(): OwnerRemoval__Params {
    return new OwnerRemoval__Params(this);
  }
}

export class OwnerRemoval__Params {
  _event: OwnerRemoval;

  constructor(event: OwnerRemoval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class RequirementChange extends ethereum.Event {
  get params(): RequirementChange__Params {
    return new RequirementChange__Params(this);
  }
}

export class RequirementChange__Params {
  _event: RequirementChange;

  constructor(event: RequirementChange) {
    this._event = event;
  }

  get required(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Revocation extends ethereum.Event {
  get params(): Revocation__Params {
    return new Revocation__Params(this);
  }
}

export class Revocation__Params {
  _event: Revocation;

  constructor(event: Revocation) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get transactionId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Submission extends ethereum.Event {
  get params(): Submission__Params {
    return new Submission__Params(this);
  }
}

export class Submission__Params {
  _event: Submission;

  constructor(event: Submission) {
    this._event = event;
  }

  get transactionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class MultiSigWallet__transactionsResult {
  value0: Address;
  value1: BigInt;
  value2: Bytes;
  value3: boolean;

  constructor(value0: Address, value1: BigInt, value2: Bytes, value3: boolean) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromBytes(this.value2));
    map.set("value3", ethereum.Value.fromBoolean(this.value3));
    return map;
  }
}

export class MultiSigWallet extends ethereum.SmartContract {
  static bind(address: Address): MultiSigWallet {
    return new MultiSigWallet("MultiSigWallet", address);
  }

  MAX_OWNER_COUNT(): BigInt {
    let result = super.call(
      "MAX_OWNER_COUNT",
      "MAX_OWNER_COUNT():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_MAX_OWNER_COUNT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MAX_OWNER_COUNT",
      "MAX_OWNER_COUNT():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  confirmations(param0: BigInt, param1: Address): boolean {
    let result = super.call(
      "confirmations",
      "confirmations(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );

    return result[0].toBoolean();
  }

  try_confirmations(
    param0: BigInt,
    param1: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "confirmations",
      "confirmations(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isOwner(param0: Address): boolean {
    let result = super.call("isOwner", "isOwner(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_isOwner(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isOwner", "isOwner(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owners(param0: BigInt): Address {
    let result = super.call("owners", "owners(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_owners(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("owners", "owners(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  required(): BigInt {
    let result = super.call("required", "required():(uint256)", []);

    return result[0].toBigInt();
  }

  try_required(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("required", "required():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transactionCount(): BigInt {
    let result = super.call(
      "transactionCount",
      "transactionCount():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_transactionCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "transactionCount",
      "transactionCount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transactions(param0: BigInt): MultiSigWallet__transactionsResult {
    let result = super.call(
      "transactions",
      "transactions(uint256):(address,uint256,bytes,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new MultiSigWallet__transactionsResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBytes(),
      result[3].toBoolean()
    );
  }

  try_transactions(
    param0: BigInt
  ): ethereum.CallResult<MultiSigWallet__transactionsResult> {
    let result = super.tryCall(
      "transactions",
      "transactions(uint256):(address,uint256,bytes,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new MultiSigWallet__transactionsResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBytes(),
        value[3].toBoolean()
      )
    );
  }

  submitTransaction(destination: Address, value: BigInt, data: Bytes): BigInt {
    let result = super.call(
      "submitTransaction",
      "submitTransaction(address,uint256,bytes):(uint256)",
      [
        ethereum.Value.fromAddress(destination),
        ethereum.Value.fromUnsignedBigInt(value),
        ethereum.Value.fromBytes(data)
      ]
    );

    return result[0].toBigInt();
  }

  try_submitTransaction(
    destination: Address,
    value: BigInt,
    data: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "submitTransaction",
      "submitTransaction(address,uint256,bytes):(uint256)",
      [
        ethereum.Value.fromAddress(destination),
        ethereum.Value.fromUnsignedBigInt(value),
        ethereum.Value.fromBytes(data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isConfirmed(transactionId: BigInt): boolean {
    let result = super.call("isConfirmed", "isConfirmed(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(transactionId)
    ]);

    return result[0].toBoolean();
  }

  try_isConfirmed(transactionId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("isConfirmed", "isConfirmed(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(transactionId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getConfirmationCount(transactionId: BigInt): BigInt {
    let result = super.call(
      "getConfirmationCount",
      "getConfirmationCount(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(transactionId)]
    );

    return result[0].toBigInt();
  }

  try_getConfirmationCount(transactionId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getConfirmationCount",
      "getConfirmationCount(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(transactionId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTransactionCount(pending: boolean, executed: boolean): BigInt {
    let result = super.call(
      "getTransactionCount",
      "getTransactionCount(bool,bool):(uint256)",
      [
        ethereum.Value.fromBoolean(pending),
        ethereum.Value.fromBoolean(executed)
      ]
    );

    return result[0].toBigInt();
  }

  try_getTransactionCount(
    pending: boolean,
    executed: boolean
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTransactionCount",
      "getTransactionCount(bool,bool):(uint256)",
      [
        ethereum.Value.fromBoolean(pending),
        ethereum.Value.fromBoolean(executed)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getOwners(): Array<Address> {
    let result = super.call("getOwners", "getOwners():(address[])", []);

    return result[0].toAddressArray();
  }

  try_getOwners(): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall("getOwners", "getOwners():(address[])", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getConfirmations(transactionId: BigInt): Array<Address> {
    let result = super.call(
      "getConfirmations",
      "getConfirmations(uint256):(address[])",
      [ethereum.Value.fromUnsignedBigInt(transactionId)]
    );

    return result[0].toAddressArray();
  }

  try_getConfirmations(
    transactionId: BigInt
  ): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getConfirmations",
      "getConfirmations(uint256):(address[])",
      [ethereum.Value.fromUnsignedBigInt(transactionId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getTransactionIds(
    from: BigInt,
    to: BigInt,
    pending: boolean,
    executed: boolean
  ): Array<BigInt> {
    let result = super.call(
      "getTransactionIds",
      "getTransactionIds(uint256,uint256,bool,bool):(uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(from),
        ethereum.Value.fromUnsignedBigInt(to),
        ethereum.Value.fromBoolean(pending),
        ethereum.Value.fromBoolean(executed)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_getTransactionIds(
    from: BigInt,
    to: BigInt,
    pending: boolean,
    executed: boolean
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getTransactionIds",
      "getTransactionIds(uint256,uint256,bool,bool):(uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(from),
        ethereum.Value.fromUnsignedBigInt(to),
        ethereum.Value.fromBoolean(pending),
        ethereum.Value.fromBoolean(executed)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _owners(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _required(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class AddOwnerCall extends ethereum.Call {
  get inputs(): AddOwnerCall__Inputs {
    return new AddOwnerCall__Inputs(this);
  }

  get outputs(): AddOwnerCall__Outputs {
    return new AddOwnerCall__Outputs(this);
  }
}

export class AddOwnerCall__Inputs {
  _call: AddOwnerCall;

  constructor(call: AddOwnerCall) {
    this._call = call;
  }

  get owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddOwnerCall__Outputs {
  _call: AddOwnerCall;

  constructor(call: AddOwnerCall) {
    this._call = call;
  }
}

export class RemoveOwnerCall extends ethereum.Call {
  get inputs(): RemoveOwnerCall__Inputs {
    return new RemoveOwnerCall__Inputs(this);
  }

  get outputs(): RemoveOwnerCall__Outputs {
    return new RemoveOwnerCall__Outputs(this);
  }
}

export class RemoveOwnerCall__Inputs {
  _call: RemoveOwnerCall;

  constructor(call: RemoveOwnerCall) {
    this._call = call;
  }

  get owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveOwnerCall__Outputs {
  _call: RemoveOwnerCall;

  constructor(call: RemoveOwnerCall) {
    this._call = call;
  }
}

export class ReplaceOwnerCall extends ethereum.Call {
  get inputs(): ReplaceOwnerCall__Inputs {
    return new ReplaceOwnerCall__Inputs(this);
  }

  get outputs(): ReplaceOwnerCall__Outputs {
    return new ReplaceOwnerCall__Outputs(this);
  }
}

export class ReplaceOwnerCall__Inputs {
  _call: ReplaceOwnerCall;

  constructor(call: ReplaceOwnerCall) {
    this._call = call;
  }

  get owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ReplaceOwnerCall__Outputs {
  _call: ReplaceOwnerCall;

  constructor(call: ReplaceOwnerCall) {
    this._call = call;
  }
}

export class ChangeRequirementCall extends ethereum.Call {
  get inputs(): ChangeRequirementCall__Inputs {
    return new ChangeRequirementCall__Inputs(this);
  }

  get outputs(): ChangeRequirementCall__Outputs {
    return new ChangeRequirementCall__Outputs(this);
  }
}

export class ChangeRequirementCall__Inputs {
  _call: ChangeRequirementCall;

  constructor(call: ChangeRequirementCall) {
    this._call = call;
  }

  get _required(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeRequirementCall__Outputs {
  _call: ChangeRequirementCall;

  constructor(call: ChangeRequirementCall) {
    this._call = call;
  }
}

export class SubmitTransactionCall extends ethereum.Call {
  get inputs(): SubmitTransactionCall__Inputs {
    return new SubmitTransactionCall__Inputs(this);
  }

  get outputs(): SubmitTransactionCall__Outputs {
    return new SubmitTransactionCall__Outputs(this);
  }
}

export class SubmitTransactionCall__Inputs {
  _call: SubmitTransactionCall;

  constructor(call: SubmitTransactionCall) {
    this._call = call;
  }

  get destination(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class SubmitTransactionCall__Outputs {
  _call: SubmitTransactionCall;

  constructor(call: SubmitTransactionCall) {
    this._call = call;
  }

  get transactionId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ConfirmTransactionCall extends ethereum.Call {
  get inputs(): ConfirmTransactionCall__Inputs {
    return new ConfirmTransactionCall__Inputs(this);
  }

  get outputs(): ConfirmTransactionCall__Outputs {
    return new ConfirmTransactionCall__Outputs(this);
  }
}

export class ConfirmTransactionCall__Inputs {
  _call: ConfirmTransactionCall;

  constructor(call: ConfirmTransactionCall) {
    this._call = call;
  }

  get transactionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ConfirmTransactionCall__Outputs {
  _call: ConfirmTransactionCall;

  constructor(call: ConfirmTransactionCall) {
    this._call = call;
  }
}

export class RevokeConfirmationCall extends ethereum.Call {
  get inputs(): RevokeConfirmationCall__Inputs {
    return new RevokeConfirmationCall__Inputs(this);
  }

  get outputs(): RevokeConfirmationCall__Outputs {
    return new RevokeConfirmationCall__Outputs(this);
  }
}

export class RevokeConfirmationCall__Inputs {
  _call: RevokeConfirmationCall;

  constructor(call: RevokeConfirmationCall) {
    this._call = call;
  }

  get transactionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RevokeConfirmationCall__Outputs {
  _call: RevokeConfirmationCall;

  constructor(call: RevokeConfirmationCall) {
    this._call = call;
  }
}

export class ExecuteTransactionCall extends ethereum.Call {
  get inputs(): ExecuteTransactionCall__Inputs {
    return new ExecuteTransactionCall__Inputs(this);
  }

  get outputs(): ExecuteTransactionCall__Outputs {
    return new ExecuteTransactionCall__Outputs(this);
  }
}

export class ExecuteTransactionCall__Inputs {
  _call: ExecuteTransactionCall;

  constructor(call: ExecuteTransactionCall) {
    this._call = call;
  }

  get transactionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ExecuteTransactionCall__Outputs {
  _call: ExecuteTransactionCall;

  constructor(call: ExecuteTransactionCall) {
    this._call = call;
  }
}
