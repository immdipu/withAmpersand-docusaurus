---
title: "Embed UI Components"
slug: /embeddable-ui-components
---

We offer a React library with embeddable UI components for integration set up and management.

### Project setup

#### Install the Ampersand React library

In your repo, use npm to install the package:

```bash
npm install @amp-labs/react
```

If you are using yarn, you'll have to explicitly install the peer dependencies.

```bash
yarn add @amp-labs/react @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

#### Credentials

This library requires your components to be wrapped in the `<AmpersandProvider/>` context. `<AmpersandProvider />` takes these props:

- `apiKey`: an API key to access Ampersand services. If you don't have one yet, create one in the Ampersand Console.

- `projectId`: your Ampersand project ID.

#### Example

Here's an example:

```jsx title="TypeScript"
import { AmpersandProvider } from "@amp-labs/react";

const options = {
  projectId: "PROJECT_ID", // Your Ampersand project ID.
  apiKey: "API_KEY", // Your Ampersand API key.
};

function App() {
  return (
    // Wrap all your components inside AmpersandProvider.
    // You can either do this at the App level, or further down in the component tree.
    <AmpersandProvider options={options}>
      // You can use any of the Ampersand components here. ...
    </AmpersandProvider>
  );
}
```

### Components

#### Install integration

The InstallIntegration component asks your customer for their SaaS credentials, and then guides them through the installation flow for an integration. If they've already installed this integration, then the component will display the current configuration of the integration and allow them to update it. (Please note: each [group](docs/glossary#group) is able to install the integration once, so if someone else in the with the same `groupRef` has already installed the integration, then the user will not be able to install the same integration again.)

The parameters of the component are:

- **integration**(string): the name of an integration that you've defined in `amp.yaml`. See [Defining integrations](docs/defining-integrations).
- **consumerRef**(string): the ID that your app uses to identify this end user.
- **consumerName**(string optional): the display name for this end user.
- **groupRef**(string): the ID that your app uses to identify a company, team, or workspace. See [group](docs/glossary#group).
- **groupName** (string, optional): the display name for this group.
- **onInstallSuccess** (function, optional): a callback function that gets invoked after a consumer successfully installs the integration.
- **onUpdateSuccess** (function, optional): a callback function that gets invoked after a consumer successfully updates an existing integration with the new configuration.

Both `onInstallSuccess` and `onUpdateSuccess` should be functions with the following signature: `(installationId: string, config: Config) => void`

```jsx title="TypeScript"
<InstallIntegration
  integration={myIntegrationName}
  consumerRef={userId}
  consumerName={userFullName}
  groupRef={teamId}
  groupName={teamName}
  onInstallSuccess={(installationId, configObject) =>
    console.log(
      `Successfully installed ${installationId} with configuration ${JSON.stringify(
        configObject,
        null,
        2
      )}`
    )
  }
  onUpdateSuccess={(installationId, configObject) =>
    console.log(
      `Successfully updated ${installationId} with configuration ${JSON.stringify(
        configObject,
        null,
        2
      )}`
    )
  }
/>
```

![Install integration component](https://files.readme.io/1f151f2-Example_for_docs_1.png)

#### Connect provider

The ConnectProvider component allows your customer to put in their SaaS credential, but does not lead them through the installation flow. After their SaaS credential is persisted by Ampersand, you can then make an API request to the [CreateInstallation](reference/createinstallation) endpoint.

The parameters of the component are:

- **provider** (string): the name SaaS provider, such as "salesforce".
  consumerRef (string): the ID that your app uses to identify this end user.
- **consumerName** (string, optional): the display name for this end user.
- **groupRef** (string): the ID that your app uses to identify a company, team, or workspace. See [group](/docs/glossary#group).
- **groupName** (string, optional): the display name for this group.
- **redirectUrl** (string, optional): if provided, we will redirect to this URL once a consumer successfully connects. This can either be an absolute or relative URL.
- **onSuccess** (function, optional): a callback function that gets invoked after a consumer successfully connects, it should have the signature `(connectionID: string) => void`.

```jsx title="TypeScript"
<ConnectProvider
  provider="salesforce"
  consumerRef={userId}
  consumerName={userFullName}
  groupRef={teamId}
  groupName={teamName}
  redirectUrl="/connection-success"
  onSuccess={(connectionId) =>
    console.log(`Successfully created connection ${connectionId}`)
  }
/>
```

![Connect provider component](https://files.readme.io/98fc359-ConnectProvider__for_docs_1.png)

### Hooks

#### Check if integration is installed

We provide a hook `useIsIntegrationInstalled` to check if an integration has been installed yet for this [group](docs/glossary#group). It takes in 2 parameters:

- **integration** (string): the name of the integration you've defined in `amp.yaml`. See [Defining integrations](docs/defining-integrations).
- **groupRef** (string): the ID that your app uses to identify a company, team, or workspace. See [group](docs/glossary#group).

It returns an object with fields `isLoaded` checking if API call is resolved and `isIntegrationInstalled` indicating whether the integration has already been installed by somebody in the group.

```jsx title="TypeScript"
const { isLoaded, isIntegrationInstalled } = useIsIntegrationInstalled(
  "read-salesforce",
  groupRef
);
```
