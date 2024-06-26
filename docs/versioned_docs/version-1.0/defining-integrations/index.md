---
title: Define integration
---

---

To start defining integrations with Ampersand, create a new directory (we recommend calling it `amp`), which will hold your `amp.yaml` file. All your integrations should be defined in the same `amp.yaml` file.

```
amp/
  amp.yaml
```

The high-level keys of `amp.yaml` are the following:

- **specVersion**: the version of the amp.yaml spec used, the current version is `1.0.0`
  integrations: the list of integrations that your users can install.
- **integrations**: the list of integrations that your users can install

The high-level keys of an integration are:

- **name**: the name of the integration, only alphanumeric characters and dashes are allowed.
- **provider**: the API that this integration connects to
- each integration can include:

- [Read Actions](docs/read-actions)
- [Write Actions](docs/write-actions)
- [Subscribe Actions](docs/subscribe-actions)

Putting all of this together, the basic structure of an `amp.yaml` file looks like the following:

```yaml title="yaml"
specVersion: 1.0.0

integrations:
-name: readSalesforceAccounts
 provider: salesforce
 read:
   ...
 write:
   ...
 subscribe:
   ...
```
