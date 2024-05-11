---
title: Overview
sidebar_label: Overview
slug: /
---

---

[Ampersand](https://www.withampersand.com) is a config-first platform for SaaS builders who are creatinguser-facing integrations. We allow you to:

- Read data from your customer's SaaS
- Write data to your customer's SaaS
- Coming soon: subscribe to events (creates, deletes, and field changes) in your customer's SaaS

Here's an overview of the Ampersand platform:

![Ampersand Overview](https://files.readme.io/6191436-e22b8d3-Group_4.png) <div align="center"><i>The Ampersand platform</i></div>

The key components include:

- **Manifest file**: an `amp.yaml` file, where you define all your integrations: API to connect to, type of data, configuration values available to your end users, and how you'd like to connect it to the rest of your stack (via direct connection to your data store, API calls, or webhooks).
- **Ampersand integration service**: we offer a managed service that keeps tracks each of your customer’s configurations, and makes the appropriate API calls to your customer's SaaS, while optimizing for cost, handling retries and error message parsing.

:::note[🗺️ On the roadmap]

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Self-hosted version of the Ampersand Integration Service

:::

- **Embeddable UIs**: Ampersand, you can embed set-up, configuration, and management UIs that allow your end users to customize and manage their integrations.

![Our React SDK offers embeddable UI components](https://files.readme.io/f5c6c9b-image.png) <div align="center"><i>Our React SDK offers embeddable UI components</i></div>

- **Management Console**: our dashboard allows you to monitor and troubleshoot your customers' integrations, and is a place for your customer-facing teams to set up and manage end-user configurations if you want to offer white-glove onboarding and support experiences.

![Ampersand Management Console](https://files.readme.io/ef05f17-image.png) <div align="center"><i>Ampersand Management Console</i></div>

<intro-end />
