---
title: "Deploy Integrations"
---

### Install the Ampersand CLI

#### Using Homebrew

```bash
brew tap amp-labs/cli
brew update
brew install amp-labs/cli/cli
```

#### Other systems

Visit [https://github.com/amp-labs/cli/releases](https://github.com/amp-labs/cli/releases) and download the binary for your machine’s architecture. Place the binary file somewhere on your PATH (e.g. inside /`usr/bin`).

### Deploy your integrations

After defining your integrations in `amp.yaml`, deploy your changes by running the commands below. After your changes are deployed to the Ampersand servers, the UI components you've embedded into your app will automatically update to reflect the latest version of your integrations.

```bash title="Text"
amp login
amp deploy <folder_with_amp.yaml> --project=<project-id>
```

If you are running the Ampersand CLI in a CI/CD system, you can use your API key instead of the `login` command.

```bash title="Text"
amp deploy <folder_with_amp.yaml> --project=<project-id> --key=<api-key>

# Or you can put the API key in the AMP_API_KEY environment variable:
export AMP_API_KEY=<api-key>
amp deploy <folder_with_amp.yaml> --project=<project-id>
```
