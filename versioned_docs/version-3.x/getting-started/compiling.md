---
title: Compile Your Contract
slug: /getting-started/building-your-contract
---

Run the following command in your `flipper` directory to compile your smart contract:

```bash
cargo +nightly contract build
```

This command will build the following for your contract: a Wasm binary, a metadata file (which contains the
contract's ABI) and a `.contract` file which bundles both. This `.contract` file can be used to
deploy your contract to a chain. If all goes well, you should see a `target` folder which
contains these files:

```
target
  └─ ink
    └─ flipper.contract
    └─ flipper.wasm
    └─ metadata.json
```

Let's take a look at the structure of the `metadata.json`:

```json
{
  "metadataVersion": "0.1.0",
  "source": {...},
  "contracts": {...},
  "spec": {
    "constructors": [...],
    "docs": [],
    "events": [],
    "messages": [...],
  },
  "storage": {...},
  "types": [...]
}
```

This file describes all the interfaces that can be used to interact with your contract:

* `types` provides the custom **data types** used throughout the rest of the JSON.
* `storage` defines all the **storage** items managed by your contract and how to ultimately access them.
* `spec` stores information about the callable functions like **constructors** and **messages** a
user can call to interact with the contract. It also has helpful information like the **events**
that are emitted by the contract or any **docs**.
  
If you look closely at the constructors and messages, you will also notice a `selector` which
contains a 4-byte hash of the function name and is used to route your contract calls to the correct
functions.

In the next section we will start a [Substrate Smart Contracts node](https://github.com/paritytech/substrate-contracts-node)
and configure the [Contracts UI](https://github.com/use-ink/contracts-ui) to interact with it.
